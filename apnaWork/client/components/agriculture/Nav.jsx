import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (

    <div className='h-[90px] w-full py-4 px-10'>
    <div className='flex justify-between items-center'>
       <Link href="/"> <div><Image src="/icons/logo.png" alt=''  width={100} height={100} className='rounded-3xl border px-2 py-1' /></div></Link>
        <div className='flex gap-4'>
 <Image src="/aglogo/1.jpg" width={100} height={100} alt=''/>
 <Image src="/aglogo/2.png" width={100} height={100} alt=''/>
 <Image src="/aglogo/4.png" width={100} height={100} alt=''/>

  
    </div>
    </div>
    </div>
  )
}

export default Nav