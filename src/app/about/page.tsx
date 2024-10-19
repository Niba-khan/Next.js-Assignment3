"use client";

import React from 'react'
import Image from 'next/image'


export default function About(){
  return (
    
  
   <div>
   <section className='text-white'>
     {/* Images Section */}
    <div className='grid md:grid-cols-2 gap-3 items-center py-9 px-6 sm:py-16'>
    <Image
          src="/images/about picture.jpg"
          alt="Menu Picture"
          width={350}
          height={350}
          className="object-cover rounded-full border-4 border-sky-500 hover:border-pink-500 animate-spin-slow"
        />
        
        <div className="bg-cyan-400/65 p-6 border-8 border-pink-500 transition-colors duration-300 hover:border-blue-500">
     <h2 className='text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-sky-400 to-red-900 mb-4'>About Me</h2>
     <p className='  hover:text-pink-500 text-base lg:text-lg'>Hello Everyone! Welcome to my Protfolio.This is me Niba Khan. and AI Engineering student with a strong foundation in TypeScript, HTML, CSS, Next.js and (CIT) Certified Information Technology
             professional, I am dedicated to advancing the field of artificial intelligence with my coding expertise.
            I am always ready to tackle cutting-edge challenges and contribute to innovative projects</p>
            <div className='lg:ml-auto mb-4'>
            <h2 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-sky-400 to-red-900 mb-4'>My Skills</h2>
                <div className='grid grid-cols-2 sm:grid-cols-3 items-center gap-[1rem]'>
                    <div className='p-0 text-center border-4 border-sky-500 bg-pink-600  hover:bg-blue-400'>
                        <p className='text-[35px] text-black font-bold'>90%</p>
                        <p className='text-[15px] text-black font-600'>Typescript
                        </p>
                    </div>

                    {/* Skills section */}
                    <div className='p-0 text-center border-4 border-sky-500 bg-pink-600 hover:bg-blue-400'>
                        <p className='text-[35px] text-black font-bold'>70%</p>
                        <p className='text-[20px] text-black font-600'>HTML
                        </p>

                    </div>
                    <div className='p-0 text-center border-4 border-sky-500 bg-pink-600  hover:bg-blue-400'>
                        <p className='text-[35px] text-black font-bold'>60%</p>
                        <p className='text-[20px] text-black font-600'>CSS
                        </p>

                    </div>
                    <div className='p-0 text-center border-4 border-sky-500 bg-pink-600  hover:bg-blue-400'>
                        <p className='text-[35px] text-black font-bold'>50%</p>
                        <p className='text-[20px] text-black font-600'>Next.js
                        </p>
                    </div>
                    <div className='p-0 text-center border-4 border-sky-500 bg-pink-600 hover:bg-blue-400'>
                        <p className='text-[35px] text-black font-bold'>70%</p>
                        <p className='text-[15px] text-black font-600'>Javascript
                        </p>

                    </div>
                    <div className='p-0 text-center border-4 border-sky-500 bg-pink-600  hover:bg-blue-400'>
                        <p className='text-[35px] text-black font-bold'>90%</p>
                        <p className='text-[20px] text-black font-600'>CIT
                        </p>

                    </div>

                </div>

            </div>
    </div>
    </div>
    </section>
    </div>
  
   
  )
}