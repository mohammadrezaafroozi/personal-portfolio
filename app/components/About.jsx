"use client"
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import aboutImage from '../../public/about.png'
import { TAB_DATA } from '../data'
import { motion } from 'framer-motion'
const variants ={
    default:{ width: 0},
    active: { width: "calc(100% - 0.75rem"}
}

export default function About() {
   const [tab, setTab] = useState('skills')
   const [isPending, startTransition] = useTransition()
   const handleTabChange = (id) => {
    startTransition(() =>{
              setTab(id)
    })
   }

  return (
    <section id='about' className='container mt-10 mx-auto px-12 py-4'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
         <motion.div initial={{ opacity:0, scale: 0.5 }}
         whileInView={{ opacity:1, scale: 1 }}
         transition={{ duration: 0.5}}>

               <Image src={aboutImage} width={500} height={400} alt='aboutphoto'/>
         </motion.div>

            <motion.div className='mt-4 md:mt-0 text-left flex flex-col h-full' initial={{ opacity:0, scale: 0.5 }}
         whileInView={{ opacity:1, scale: 1 }}
         transition={{ duration: 0.5}}>
                <h2 className='text-4xl font-bold text-white mb-4'>About me</h2>
                <p>
                 I'm MohammadReza Afroozi, a Frontend Developer focused on building modern
                  web interfaces using React.js and Next.js. <br />
                  I enjoy creating responsive, user-friendly designs with Tailwind CSS and Bootstrap, <br />
                  and I'm passionate about delivering smooth, intuitive digital experiences.
                </p>
                <div className='flex flex-row justify-start mt-8'>
                  {TAB_DATA.map(({id, title})=>(
                    <button key={id} onClick={() => handleTabChange(id)} >
                         <p className={`mr-3 font-semibold cursor-pointer hover:text-white
                           ${ tab===id ? 'text-[#255272]': 'text-[#adb7be]'}`}>
                             {title}
                         </p>
                         <motion.div animate={ tab=== id ? "active" : "default"} variants={variants} className=' h-1 bg-[#255272] mt-2 mr-3' />
                    </button>
                  ))}
                </div>
                <div className='mt-8'>
                   <ul>
                    {TAB_DATA.find((t) =>t.id===tab )?.content.map((item, index) =>(
                        <li key= {index}> {item} </li>
                    )) }
                   </ul>
                </div>

            </motion.div>
        </div>
    </section>
  )
}
