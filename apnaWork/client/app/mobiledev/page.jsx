import JobCard from '@/components/JobCard'
import Navbar from '@/components/Navbar'
import React from 'react'

const MobileDev = () => {
  return (
    <>
    <Navbar/>
    <div className='flex flex-wrap gap-7 justify-center items-center h-[100vh] mx-auto max-w-[1200px] mt-7'>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>


    </div>
    </>
  )
}

export default MobileDev