import Container from '@/components/Shared/Container';
  import React from 'react';
  import Link from 'next/link';
  
  const ContactPage = () => {
    
    return (
      <div className="w-full bg-white border rounded-xl">
        <Container className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 uppercase">
            LOGIN
          </h1>
          <p className="mt-5 text-slate-600 p-5">
          Founded in 1948 by the esteemed alumni of Jaffna Hindu College, Jolly Stars Sports Club has proudly served as a symbol of sporting excellence and camaraderie for over seven decades. 
          As we approach our remarkable 75th anniversary, we reflect upon our rich history and celebrate the countless achievements that have shaped our club
          </p>
          <div className="w-full h-full p-5 rounded">
            <div className="flex flex-col justify-between h-full">
              <div className="mt-5 space-y-2">
                <input
                  type="text"
                  placeholder="Email"
                  className="bg-[#ebedeb]  w-full text-sm py-3 px-3 rounded"
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="bg-[#ebedeb] w-full text-sm py-3 px-3 rounded"
                />
                
                <div className="relative flex items-center ">
                  <div className="flex items-center h-6">
                    <input
                      id="comments"
                      aria-describedby="comments-description"
                      name="comments"
                      type="checkbox"
                      className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <p id="comments-description" className="text-[#7E7A7C]">
                      I agree the terms of service and Privacy policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

      
          <a className="px-4 py-2 mt-10 text-white bg-blue-900 rounded-md " href="/info">
            Sign In
          </a>
          <div className='py-3 text-sm' >
          <a id="comments-description" className="text-[#7E7A7C]" href="/memberpackage">
                    Register for membership?
          </a>
          </div>
          
        </Container>
        
      </div>

      
    );
  };
  
  export default ContactPage;
  