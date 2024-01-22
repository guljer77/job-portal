import React from 'react';
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaRocket } from "react-icons/fa6";

function NewsLetter() {
  return (
    <div className='py-3'>
      <div className='mb-5'>
        <h4 className='flex items-center gap-2 text-[16px] font-medium text-primary'><HiOutlineMailOpen />Email me for Jobs</h4>
        <p className='text-[15px] font-light text-black py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, saepe!</p>
        <form action="">
          <input type="text" placeholder='home@gmail.com' className='w-full px-3 py-[5px] outline-0 border border-gray-600' />
          <input type="submit" value="Subscribe" className='w-full py-[5px] bg-blue text-white cursor-pointer block mt-2' />
        </form>
      </div>
      <div>
        <h4 className='flex items-center gap-2 text-[16px] font-medium text-primary'><FaRocket />Get notice faster</h4>
        <p className='text-[15px] font-light text-black py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, saepe!</p>
        <form action="">
          <input type="submit" value="Upload your resume" className='w-full py-[5px] bg-blue text-white cursor-pointer block mt-2' />
        </form>
      </div>
    </div>
  )
}

export default NewsLetter