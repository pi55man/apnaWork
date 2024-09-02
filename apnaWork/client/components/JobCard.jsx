import Image from 'next/image'
import React from 'react'

const JobCard = () => {
  return (
    <>
    
    <div className='flex flex-col max-w-[400px] border rounded-lg py-6 px-7 mt-6'>
     <div className='w-[300px] h-[200px] border-1 rounded-lg'><Image src="/sample.jpg" alt='' width={300} height={300} className='object-cover w-full h-full border border-gray-200 rounded-lg'/></div>
     <div className='mt-2'>
      <div className='flex items-center gap-3'>
        <Image src="/logo.jpg" alt='' width={30} height={30} className='rounded-full border border-black'/>
        <span>Name</span>
      </div>
      <p className='text-sm text-gray-500 pr-2 max-w-[300px]'>'m exploring ways to integrate our SaaS business analytics platform with our customers' CRMs, primarily Sales</p>
     <div className='mt-2 flex justify-between'>
      <Image src="/icons/star.png" width={23} height={23} alt=''/>
      <span>14$/hr</span>
     </div>
     </div>
     <button className='bg-blue-500 text-white rounded-md px-4 py-1 mt-4 hover:bg-blue-600'>
      Profile
     </button>
    </div></>
  )
}

export default JobCard