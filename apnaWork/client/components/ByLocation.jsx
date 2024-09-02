import Image from 'next/image'
import React from 'react'

const ByLocation = () => {
  return (
    <div>
    <h1 className='text-center text-4xl font-bold'>By Location</h1>
    <div className='byskill w-[70%] h-[450px] flex justify-center gap-[10px] max-w-[1500px] mx-auto mt-6'>
<Image className='w-[14%] h-[100%] object-cover border rounded-md transition-all ease-in-out duration-500 hover:w-[35%]' src="/img/location/1.jpg" alt='' width={300} height={300}/>
<Image className='w-[14%] h-[100%] object-cover border rounded-md transition-all ease-in-out duration-500 hover:w-[35%]' src="/img/location/2.jpg" alt='' width={300} height={300}/>
<Image className='w-[14%] h-[100%] object-cover border rounded-md transition-all ease-in-out duration-500 hover:w-[35%]' src="/img/location/3.jpg" alt='' width={300} height={300}/>
<Image className='w-[14%] h-[100%] object-cover border rounded-md transition-all ease-in-out duration-500 hover:w-[35%]' src="/img/location/4.jpg" alt='' width={300} height={300}/>

    </div>
</div>
  )
}

export default ByLocation