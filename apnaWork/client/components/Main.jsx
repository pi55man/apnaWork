import Image from 'next/image'
import React from 'react'

const Main = () => {
  return (
<div className='flex flex-col text-center max-w-[1400px] mx-auto mb-8 text-white'>
<div className=''>
  <h1 className='text-5xl font-bold tracking-wide text-white'>Access a World of <span className='text-[#fada5e]'>Expertise</span></h1>
  <div className='flex flex-col gap-5 mt-12 justify-between items-center'>

    <div className='flex gap-5'>
 <div className='max-w-[350px]'>
    <h2 className='text-3xl font-extrabold'>Post your Job</h2>
    <span className='text-lg'>It's free and easy! Get lots of competitive bids that suit your budget in minutes. Start making your dreams reality.
    </span>
   </div> 

 <div className='max-w-[350px]'>
    <h2 className='text-3xl font-extrabold'>Choose freelancers</h2>
    <span className='text-lg'>No job is too big or complex. We've got freelancers for jobs of any size or budget, across 2700+ skills. Let our talent bring your ideas to life.
    </span>
   </div>
    </div>


   
<div className='flex gap-5'>
    <div className='max-w-[350px]'>
    <h2 className='text-3xl font-extrabold'>Pay safely    </h2>
    <span className='text-lg'>IOnly pay for work when you are 100% satisfied with the outcome. Our milestone payment system protects you every step of the way.
    </span>
   </div>

 <div className='max-w-[350px]'>
    <h2 className='text-3xl font-extrabold'>We're here to help </h2>
    <span className='text-lg'>Your time is precious. Let our team of expert recruiters and co-pilots save you time finding talent, even managing your job if needed.
    </span>
   </div> 

</div>

   
  </div>
</div>

<hr className='my-9 mx-28'/>
<div className='flex flex-col max-w-[1400px]'>
<h1 className='text-5xl font-bold tracking-wider text-[#fada5e]'>Testimonials</h1>

<div className='flex flex-col gap-7 mt-8'>

<div className='flex justify-centre gap-20 mx-auto'>
  <div className='text-center w-[300px]'>
    <Image src="/freelancer1.jpg" className='object-cover rounded-lg mb-3' alt=''width={300} height={300}/>
  <span className='text-lg'>Seamless process from start to finish. I highly recommend this site for hassle-free projects.</span>
  </div>

  <div className='text-center w-[300px]'><Image src="/freelancer2.jpg" className='object-contain rounded-lg mb-3' alt=''width={300} height={300}/>
  <span className='text-lg'>Efficient and straightforward platform. I've had great experiences and recommend it to all my peers.</span>
  </div>

  <div className='text-center w-[300px]'><Image src="/freelancer3.jpg" className='object-contain rounded-lg mb-3' alt=''width={300} height={300}/>
  <span className='text-lg'>The site is user-friendly and streamlined. I consistently refer it to fellow freelancers.</span>
  </div>
  </div>

  <div className='flex justify-centre gap-20 mx-auto'>
  <div className='text-center w-[300px]'>
    <Image src="/freelancer6.jpeg" className='object-contain rounded-lg mb-3' alt=''width={300} height={300}/>
  <span className='text-lg'>Smooth and reliable operations. I definitely recommend this site for any hiring needs.</span>
  </div>

  <div className='text-center w-[300px]'><Image src="/freelancer4.jpg" className='object-contain rounded-lg mb-3' alt=''width={300} height={300}/>
  <span className='text-lg'>A breeze to navigate and manage projects. I’d recommend this platform to any freelancer.</span>
  </div>

  <div className='text-center w-[300px]'><Image src="/freelancer5.png" className='object-contain rounded-lg mb-3' alt=''width={300} height={300}/>
  <span className='text-lg'>Excellent experience with minimal fuss. This site is my top recommendation for hiring.</span>
  </div>
  </div>
 

</div>
</div>
</div>
  )
}

export default Main