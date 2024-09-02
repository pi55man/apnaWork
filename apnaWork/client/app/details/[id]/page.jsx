import Navbar from '@/components/Navbar'
import React from 'react'

const Details = () => {
  return (
    <>
<Navbar/>
<div className='max-w-[1500px]'>
 <div className='w-[600px] h-[600px] border rounded-lg mx-auto mt-10 py-6'>
  <div className='flex justify-around items-center'>
    <h2 className='text-4xl font-semibold'>Title</h2>
    <h2 className='text-2xl font-semibold'>34$</h2>
  </div>
  <div className='max-w-[400px] mx-auto mt-11'><p className='text-lg text-center'>desc</p></div>

  <div className='flex justify-center mt-36'>
    <textarea name="" id="" placeholder='Enter the comment' className='border px-4 py-2 border-gray-300 w-[400px] min-h-[170px] rounded-lg'/>
  </div>
  <button className='flex justify-center mx-auto mt-7 px-4 py-1 bg-blue-500 text-white hover:bg-blue-600 text-lg rounded-lg'>Submit</button>
 </div>
</div>
    </>
  )
}

export default Details