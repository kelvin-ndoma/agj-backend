import mongoose from 'mongoose';
import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';

const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log("DB Connected");
    });

    await mongoose.connect(`${process.env.MONGODB_URI}/agj`);

    // ✅ Seed super admin if not exists
    const existingSuperAdmin = await userModel.findOne({ email: process.env.SUPER_ADMIN_EMAIL });

    if (!existingSuperAdmin) {
        const hashedPassword = await bcrypt.hash(process.env.SUPER_ADMIN_PASSWORD, 10);
        const superAdmin = new userModel({
            name: 'Super Admin',
            email: process.env.SUPER_ADMIN_EMAIL,
            password: hashedPassword,
            role: 'superadmin'
        });

        await superAdmin.save();
        console.log('✅ Super Admin seeded');
    } else {
        console.log('🟢 Super Admin already exists');
    }
};

export default connectDB;
