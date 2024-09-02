"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const SignUp = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess('User registered successfully!');
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('An unexpected error occurred');
    }
  };

  return (
    <div className='flex w-full '>
   <div className='max-h-[100vh] flex justify-items-start'>
    <video src="/lgbg.mp4" className='h-full' autoPlay muted loop/>
   </div>
<div className='flex w-full justify-center'>
   <div className='flex flex-col mt-12 items-center gap-5 w-[600px] '>
    <h1 className='text-5xl font-semibold mb-4'>Create an account</h1>
    <button className='px-6 py-1 border border-gray-200 text-xl font-medium rounded-lg flex gap-2 items-center hover:bg-gray-100'>Sign in with Google <Image src="/icons/google.png" alt=''width={26} height={26}/></button>
    
    <span>or create an account</span> 

    <div className='flex flex-col gap-6 max-w-[400px] w-full'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5' >

        <div className='flex flex-col gap-1'>
                <label htmlFor="">Name</label>
                <input className='border border-gray-200 px-4 rounded-md py-2' type="text" name='name' id='name' />
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor="">Skills</label>
                <input className='border border-gray-200 px-4 rounded-md py-2' type="text" name='skills' id='skills' />
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor="" className='text-lg'>Email</label>
                <input className='border border-gray-200 px-4 rounded-md py-2' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required name='email' id="email"  placeholder='example@gmail.com'/>
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor="">Password</label>
                <input className='border border-gray-200 px-4 rounded-md py-2' type="password" name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor="">Location</label>
                <input className='border border-gray-200 px-4 rounded-md py-2' type="text" name='location' id='location' />
            </div>


            <button type='submit' className='bg-blue-500 text-white font-semibold text-lg py-1 rounded-md hover:bg-blue-600'>Login</button>
        </form>
     
        <div className='text-center'> <span className='text-gray-500'>Already have an account ?</span> <Link href="/login"> <span className='text-blue-600'>Login</span></Link></div>
    </div>
   </div>
   </div>
    </div>  )
}

export default SignUp