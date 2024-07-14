import React from 'react'
import { FlipWords } from './ui/flip-words'

const Header = () => {
	return (
		<div className='flex w-full h-screen py-[200px] px-[200px] '>
			<div className='flex flex-col items-start font-bold text-white text-8xl '>
				<h1>Hello</h1>
				<div>
					I&apos;m <FlipWords words={[`Adam  W`, 'a programmer ']} className='text-sky-600' />
				</div>
                <p className='pt-10 text-sm max-w-[500px]'>I‘m a 18-year-old programmer specializing in backend development, aspiring to become a full-stack developer. I‘m passionate about programming, teamwork, and creating innovative solutions with attractive user interfaces, eager to tackle new challenges and collaborate with fellow technology enthusiasts.
                My Journey</p>
			</div>
		</div>
	)
}

export default Header
