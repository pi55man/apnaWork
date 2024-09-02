import Link from 'next/link'
import React from 'react'
import NavMenu from './NavigationMenu'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
    <div className='h-[25px] bg-[#fada5e] text-center'>
      <span>Starting your freelance career? Join us.</span>
    </div>
    <div className='bg-[#6f4685] h-[85px] pt-4'>
    <div className='flex justify-between max-w-[1400px] items-center mx-auto md:max-w-[1200px] text-white  '>
       <div className='flex items-center gap-14'> 
        <Link href="/">
       <div><Image src="/icons/logo.png" alt=''  width={100} height={100} className='rounded-3xl'/>
       </div></Link>
       <div><Link href="/freelancerform" className='text-xl font-semibold hover:text-black'>Hire Freelancer</Link></div>
        </div>
        <div className='flex items-center gap-11'>
         <Link href="/agriculture"> <button className='text-lg hover:bg-black hover:border-white hover:text-white px-4 bg-white border text-black border-black rounded-lg py-1'>Agriculture</button></Link>
          
            <Link href="/login"><button className='bg-black hover:bg-white hover:border-black hover:text-black text-white px-4 py-1 border rounded-lg text-lg'>Login</button></Link>
        </div>
    </div>
    </div>
    </>
  )
}

export default Navbar