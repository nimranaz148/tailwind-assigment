import Link from 'next/link'
import React from 'react'

const footer = () => {
  return (
    <div>
      <footer className='text-center p-10'>
    <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
    <ul className='flex justify-center p-2 text-orange-600 font-bold ' >
      <li><Link href="#">Privacy Policy</Link></li>
      <li><Link href="#" className='ml-4'>Terms of Service</Link></li>
      
    </ul>
  </footer>
    </div>
  )
}

export default footer
