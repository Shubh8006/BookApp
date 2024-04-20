import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'



function Contact() {
  return (
   <>
  
   <Navbar/>
   <div className='dark:bg-slate-900'>
   <div className='min-h-screen '>
  <form >
  <div className='text-center'>
    <h1 className='mt-56 text-center font-bold text-2xl'>Contact Us</h1>
   <br />
    <span className='mr-20 '>Name</span>
    <input type="text" className='mr-1 border dark:text-zinc-600' placeholder='Enter your name' />
    <br />  <br />  <br />
   
    <div>
      <span className='mr-20'>Email</span>
   <input type="email" className='border dark:text-zinc-600' placeholder='Enter your email' />
    </div>
    <br />  <br />  
    <div>
    <span className='mr-20'>Message</span>
    <textarea className='rounded border mr-50 dark:text-zinc-600' placeholder='Type your message' id="" cols="26" rows="3"></textarea>
    </div>
    <br /> <br /> <br />
    <button className='text-white bg-sky-500 border rounded-md p-2 m-3 text-center font-bold text-xl dark:text-zinc-600' type="submit">Submit</button>
   </div>

  </form>

   
   </div>
   </div>
   <Footer/>
   </>
  )
}

export default Contact;
