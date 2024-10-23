import React from 'react'
import Image from 'next/image'

const hero = () => {
  return (
    <div>
      <section className='flex justify-between items-center'>
       <div className='pl-20 w-2/5 animate__animated animate__jackInTheBox'>
        <h1 className='text-4xl'>Welcome to <span className='text-orange-600 font-bold'>Next J.S</span>  website</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         Molestiae, fugit doloremque sit modi aspernatur quo quid
         accusamus cumque eveniet ipsa fugiat veritatis vero 
         explicabo! Voluptatum tempore consequuntur blanditiis!</p>

         <button className='bg-orange-600 text-white px-3 py-2 hover:bg-orange-700 rounded-lg'>Subscribe</button>
         <button className='bg-gray-300 px-3 py-2 hover:bg-gray-400 rounded-lg mt-6 ml-4'>Contact us</button>

       </div>

       <div className='w-2/5  animate__animated animate__fadeIn animate__delay-1s'>
       <Image src = {"https://img.freepik.com/premium-psd/woman-with-smile-that-says-shes-good-smile_1233986-1380.jpg"} 
       alt = "pic"
       width={300}
       height={300}/>
       </div>
      </section>
    </div>
  )
}

export default hero
