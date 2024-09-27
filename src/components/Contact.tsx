import React from 'react'
import { SiDiscord, SiGithub, SiMaildotru, SiInstagram, SiFacebook  } from 'react-icons/si'

const Contact = () => {
	return (
		<section className='flex flex-col items-center py-10' id='contact'>
			<h2 className='flex flex-col mb-10 text-6xl font-bold uppercase text-slate-200 max-sm:text-5xl '>
				get in <span className='text-sky-600'>touch.</span>
			</h2>
			<div className='flex gap-5 pb-4 text-3xl sm:gap-16 sm:text-6xl max-sm:flex-col text-slate-200'>
				<a href='mailto:adamwasylak1@gmail.com' target='_blank' className='relative flex gap-3 duration-300 hover:scale-105'>
                <p className='text-xl border-b sm:hidden border-sky-600'>Email: </p>
                    <SiMaildotru />
				</a>
				<a href='https://discord.com/users/719983323853750283' target='_blank' className='relative flex gap-3 duration-300 hover:scale-105'>
                <p className='text-xl border-b sm:hidden border-sky-600'>Discord: </p>
                    <SiDiscord />
				</a>
				<a href='https://www.instagram.com/adam9966_/' target='_blank' className='relative flex gap-3 duration-300 hover:scale-105'>
                <p className='text-xl border-b sm:hidden border-sky-600'>Instagram: </p>
                    <SiInstagram />
				</a>
				<a href='https://www.facebook.com/Prezesoooooo/' target='_blank' className='relative flex gap-3 duration-300 hover:scale-105'>
                    <p className='text-xl border-b sm:hidden border-sky-600'>Facebook: </p>
					<SiFacebook />
				</a>
				<a href='https://github.com/adamTop1' target='_blank' className='relative flex gap-3 duration-300 hover:scale-105'>
                    <p className='text-xl border-b sm:hidden border-sky-600'>Github: </p>
					<SiGithub />
				</a>
			</div>
		</section>
	)
}

export default Contact
