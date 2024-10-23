import Link from 'next/link'
import React from 'react'

const header = () => {
  return (
    <div>
        <nav className=' flex justify-between items-center px-24 h-16'>
            <div><h1 className='text-3xl font-bold  '><span className='text-orange-600 font-bold'>Nimra Naz</span> Portfolio </h1></div>

            
            <ul className='flex justify-around text-lg items-center hover:text-orange-600 pl-28'>
            <li ><Link href="/" className='px-8 hover:underline'>Home</Link></li>
        <li><Link href="/about" className='px-8 hover:underline'>About</Link></li>
        <li><Link href="/services" className='px-8 hover:underline '>Services</Link></li>
        <li><Link href="/contact" className='px-8 hover:underline'>Contact</Link></li>
        </ul>
        <button  className='px-4 bg-orange-600 py-2  text-white hover:bg-orange-700 rounded-lg'>Login</button>

        
            
        </nav>


      
    </div>
  )
}

export default header
