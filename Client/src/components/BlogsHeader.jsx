import React from 'react'
import { assets} from "../bloggy/assets"
const BlogsHeader = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className="flex justify-between items-center">
            <img src={assets.logo} alt="" className="w-[130px] sm:w-auto" />
            <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#640433]">Get started <img src={assets.arrow} alt="get started" /></button>
        </div>
        <div className="text-center my-8">
            <h1 className='text -3xl sm:text-5xl fomt-medium'>Latest Blogs</h1>
            <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">The Association of Grassroot Journalists Kenya (AGJK) strives to promote the flow of information and seeks to inspire successive generations of talented individuals to become dedicated</p>
        <form  className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#640433] ">
            <input type="text" placeholder='Enter Email' className="pl-4 outline-none" />
            <button type='submit' className="border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white">Subscribe</button>
        </form>
        </div>
    </div>
  )
}

export default BlogsHeader