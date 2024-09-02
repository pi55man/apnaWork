"use client"

import { useState, useEffect } from 'react';

function HomePage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:8080/api/get', {method:"POST",headers:{"Content-Type":"application/json"}, body: JSON.stringify({preferences: "hello"})});
      const data = await response.json();
      setMessage(data.message);
    };
 
    fetchData();
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default HomePage;