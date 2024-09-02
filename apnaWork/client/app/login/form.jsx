"use client"
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { signIn } from 'next-auth/react';


const form = () => {

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    console.log({ response });
    if (!response?.error) {
      router.push('/');
      router.refresh();
    }
  };

  return (
    <div className='flex w-full '>
   <div className='max-h-[100vh] flex justify-items-start'>
    <video src="/lgbg.mp4" className='h-full' autoPlay muted loop/>
   </div>

   <div className='flex flex-col mt-12 items-center gap-5 justify-center max-w-[900px] w-full '>
    <h1 className='text-5xl font-semibold mb-4'>Login</h1>
    <button className='px-6 py-1 border border-gray-200 text-xl font-medium rounded-lg flex gap-2 items-center hover:bg-gray-100'>Sign in with Google <Image src="/icons/google.png" alt=''width={26} height={26}/></button>
    
    <span>or login with</span> 

    <div className='flex flex-col gap-6'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5' >
            <div className='flex flex-col gap-1'>
                <label htmlFor="" className='text-lg'>Email</label>
                <input className='border border-gray-200 px-4 rounded-md py-2' type="email" name='email' id="email"  placeholder='example@gmail.com'/>
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="">Password</label>
                <input className='border border-gray-200 px-4 rounded-md py-2' type="password" name='password' id='password' />
            </div>

            <button type='submit' className='bg-blue-500 text-white font-semibold text-lg py-1 rounded-md hover:bg-blue-600'>Login</button>
        </form>
       
        <div> <span className='text-gray-500'>Not registered yet ? </span><Link href="/signup"><span className='text-blue-600'>Create an account</span></Link></div>
    </div>
   </div>
    </div>
  )
}

export default form