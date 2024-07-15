import React from 'react'
import { SiDiscord, SiGithub, SiMaildotru } from 'react-icons/si'

const Contact = () => {
	return (
		<section className='flex flex-col items-center py-10' id='contact'>
			<h2 className='flex flex-col mb-10 text-6xl font-bold uppercase text-slate-200 '>
				get in <span className='text-sky-600'>touch.</span>
			</h2>
			<div className='flex gap-16 pb-4 text-6xl text-slate-200'>
				<a href='mailto:adamwasylak1@gmail.com' target='_blank' className='duration-300 hover:scale-105 '>
					<SiMaildotru />
				</a>
				<a href='https://discord.com/users/719983323853750283' target='_blank' className='duration-300 hover:scale-105'>
					<SiDiscord />
				</a>
				<a href='https://github.com/adamTop1' target='_blank' className='duration-300 hover:scale-105'>
					<SiGithub />
				</a>
			</div>
		</section>
	)
}

export default Contact
