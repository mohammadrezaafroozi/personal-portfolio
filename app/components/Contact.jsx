import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import linkedin from '../../public/linkedinIcon.png'
import github from '../../public/githubIcon.png'
import email from "../../public/email.png"

export default function Contact() {
  return (
    <section id='contact'
    className='container mx-auto px-6 md:px-12 lg:px-24 py-24'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
                <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>Let's Connect</h2>
                <p className='text-[#adb7be] text-lg mb-6 leading-relaxed'>
                    I'm always exicted to connect and share ideas around
                     web development</p>
                     <div className='flex gap-4'>
                        <Link href="https://www.linkedin.com/in/afroozidev/">
                        <Image
                        src={linkedin}
                        alt='linkedinicon'
                        width={40}
                        height={40}
                        className='hover:scale-110 transition-transform duration-300 cursor-pointer'

                        />
                        </Link>

                        <Link href="https://github.com/mohammadrezaafroozi">
                        <Image
                        src={github}
                        alt='githubicon'
                        width={40}
                        height={40}
                        className='hover:scale-110 transition-transform duration-300 cursor-pointer'

                        />
                        </Link>

                        <Link href="  email:mrafroozi2001@gmail.com">
                        <Image
                        src={email}
                        alt='linkedinicon'
                        width={40}
                        height={40}
                        className='hover:scale-110 transition-transform duration-300 cursor-pointer'

                        />
                        </Link>
                        
                     </div>
            </div>

        </div>

    </section>
  )
}
