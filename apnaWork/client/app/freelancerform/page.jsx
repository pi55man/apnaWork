import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FreelancerForm = () => {
  return (
    <div className='flex justify-between'>
        <div className='h-[600px] w-[650px] rounded-md mt-20 ml-9 py-4 px-8 items-center'>
        <form action="">
            
            <div className='flex gap-6 mb-10'>
                <label htmlFor="" className='text-3xl font-semibold'>Company Name</label>
                <input type="text" className='border rounded-md px-3 border-gray-500 w-[280px]' placeholder='specify N/A if no company '/>
            </div>

            <div className='flex flex-col gap-8 items-center'>
                <label htmlFor="" className='text-6xl font-bold tracking-wide'>Let us know what you <span className='text-[#fada5e]'>require.</span></label>
<textarea name="" id="" className='w-[600px] border outline-none rounded-md min-h-[150px]'></textarea></div>

         <button type='submit' className='border rounded-lg px-16 py-2 bg-blue-500 text-white font-semibold mt-8 flex items-center'>Submit</button>
        </form>

        </div>
        <div className='flex justify-end h-[100vh]  '>
            <Image src="/formbg.jpg " className='h-full w-full' alt='' width={500} height={500}/>
        </div>

    </div>
  )
}

export default FreelancerForm