import Image from 'next/image'
import React from 'react'
import { FadeCard } from './FadeCard'

const BySkill = () => {
  return (
    <div>
        <h1 className='text-center text-5xl font-bold text-white'>By <span className='text-[#fada5e]'>Skill Set</span></h1>

        <FadeCard/>
    </div>
  )
}

export default BySkill