import React, { useState } from 'react'
import axios from 'axios'
import {backendUrl} from '../App'
import { toast } from 'react-toastify'

const Login = ({setToken}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e) =>{
        try {
            e.preventDefault();
            const response =await axios.post(backendUrl + '/api/user/login',{email,password} )
            if (response.data.success) {
                setToken(response.data.token)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className='bg-white shadow-xl rounded-lg px-8 py-8 w-full max-w-md'>
            <div className='text-center mb-8'>
                <h1 className='text-3xl font-bold text-gray-800'>Admin Panel</h1>
                <p className='text-gray-500 mt-2'>Sign in to your account</p>
            </div>
            <form onSubmit={
                onSubmitHandler} className='space-y-6'>
                <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>Email Address</label>
                    <input onChange={(e)=>setEmail(e.target.value)}  value={email}
                        className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition duration-200' 
                        type='email' 
                        placeholder='your@email.com' 
                        required
                    />
                </div>
                <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)} value={password}
                        className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition duration-200' 
                        type='password' 
                        placeholder='Enter your password' 
                        required
                    />
                </div>
                <button 
                    className='w-full py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50' 
                    type='submit'
                >
                    Login
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login