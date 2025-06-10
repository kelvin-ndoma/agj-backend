import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import validator from 'validator';

const createToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            email: user.email,
            role: user.role
        },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );
};

// ✅ Login for Admins & Superadmin
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        if (user.role !== 'admin' && user.role !== 'superadmin') {
            return res.status(403).json({ success: false, message: "Access denied" });
        }

        const token = createToken(user);
        res.json({
            success: true,
            message: `Logged in as ${user.role}`,
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// ✅ Register new admin (only by superadmin)
const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ success: false, message: 'Unauthorized: No token provided' });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const requestingUser = await userModel.findById(decoded.id);
        if (!requestingUser || requestingUser.role !== 'superadmin') {
            return res.status(403).json({ success: false, message: 'Only superadmin can create admins' });
        }

        const exists = await userModel.findOne({ email });
        if (exists) return res.json({ success: false, message: "User already exists" });

        if (!validator.isEmail(email)) return res.json({ success: false, message: "Invalid email" });
        if (password.length < 8) return res.json({ success: false, message: "Password too short" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
            role: role || 'admin'
        });

        await newUser.save();
        res.json({ success: true, message: "Admin user created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// ✅ Logout (handled client-side by deleting token)
const logoutUser = async (req, res) => {
    // This just informs the frontend to remove token
    res.json({ success: true, message: "Logged out successfully" });
};

export {
    loginUser,
    registerUser,
    logoutUser
};
