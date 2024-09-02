import Nav from '@/components/agriculture/Nav'
import Footer from '@/components/Footer'
import JobCard from '@/components/JobCard'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

const Agriculture = () => {
  return (
    <div>
    <Nav/>
    <Image src="/aglogo/main.jpg" alt='' className='object-contain' width={1600} height={600}/>
    <div className='mx-8 mt-11'>
      <h1 className='text-3xl font-bold tracking-wide'>AVAILABLE AGRICULTURAL JOBS</h1>
    </div>
    <div className='flex flex-wrap justify-around mx-9 mb-7'>
    <JobCard/>
    <JobCard/>
    <JobCard/>
    <JobCard/>
    <JobCard/>
    <JobCard/>

    </div>
    <Footer/>
    </div>
  )
}

export default Agriculture