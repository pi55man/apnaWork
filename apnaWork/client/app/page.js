import Banner from '@/components/Banner'
import BySkill from '@/components/BySkill'
import Footer from '@/components/Footer'
import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
import React from 'react'

const Home = () => {
  return (
    <div className='bg-black'>
    <Navbar/>
    <Banner/>
      <BySkill/>
      <hr className='my-9 mx-28'/>
 <Main/>
 <   Footer/>  
    </div>
  )
}

export default Home