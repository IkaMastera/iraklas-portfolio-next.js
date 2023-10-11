"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section className='mb-2 max-w-[50rem] text-center sm:mb-0'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
            <motion.div
            initial={{ opacity:0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{
                type: "tween",
                duration: 0.2,
            }}
            >
                <Image 
                src="/profile-img/photo.jpeg" alt="Irakli Portrait"
                width={192}
                height={192}
                quality="95"
                priority={true}
                className='h-24 w-24 rounded-full object-cover
                border-[0.35rem] border-white shadow-xl'
                />
            </motion.div>
            <motion.span
            className='absolute text-3xl bottom-0 right-0'
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
            }}
            >
                👋🏻
            </motion.span>
        </div>
      </div>

      <motion.p className='mb-10 mt-4 px-4 text-2xl
       font-medium !leading-[1.5] sm:text-4xl'
       initial = {{ opacity: 0, y: 100}}
       animate = {{ opacity: 1, y: 0}}
       
       >
        <span className='font-bold'>
          Hi, I'm Irakli Oboladze
        </span>
        , a {"  "}
        <span className='font-bold'>
         Front-End Developer with 3+ years of
         experience
         </span>
         {" "}
         <span className='italic'>I enjoy Building Websites and software Using</span>
         {" "}
         <span className='font-bold underline'>Angular, React(Next.js)</span>
      </motion.p>
    </section>
  )
}
