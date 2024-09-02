"use client"

import JobCard from '@/components/JobCard'
import Navbar from '@/components/Navbar'

import React, { useState, useEffect } from 'react';

const WebDev = () => {
  const [message, setMessage] = useState([]);

  const send = () => {
    fetch('http://localhost:8080/api/3/gigs')
      .then((response) => {
        console.log('Response received:', response);
        return response.json();  // Correctly returning the parsed JSON
      })
      .then((data) => {
        console.log('Data parsed:', data);
        setMessage(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    send();  // Fetch data when the component mounts
  }, []);

  return (
    <>
    <Navbar/>
    <div className='flex max-w-[1600px] mx-auto flex-wrap gap-6'>
        {message && message.length > 0 ? (
          message.map((job) => (
          

<div key={job.id} className='flex flex-col max-w-[400px] border rounded-lg py-6 px-7 mt-6'>
     <div className='w-[300px] h-[200px] border-1 rounded-lg'></div>
     <div className='mt-2'>
      <div className='flex items-center gap-3'>
        <span>{job.title}</span>
      </div>
      <p className='text-sm text-gray-500 pr-2 max-w-[300px]'>{job.description}</p>
     <div className='mt-2 flex justify-between'>
      <span>{job.pay}/hr</span>
     </div>
     </div>
     <button className='bg-blue-500 text-white rounded-md px-4 py-1 mt-4 hover:bg-blue-600'>
      Profile
     </button>
    </div>
          
          ))
        ) : (
          <p>No jobs found</p>
        )}
    </div>
    </>
  );
};

export default WebDev