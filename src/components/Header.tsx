import React from 'react'
import { FlipWords } from './ui/flip-words'

const Header = () => {
	return (
		<div className='flex w-full py-[200px] px-[350px]'>
			<div className='flex flex-col items-start font-bold text-white text-8xl '>
				<h1>Hello, I&apos;m</h1>
				<div>
					<FlipWords words={[`Adam  Wasylak`, 'a frontend developer']} duration={5000} className='text-sky-600' />
				</div>
				<p className='pt-12 text-base max-w-[500px] text-gray-500'>
					I‘m a 18-year-old programmer aspiring to become a full-stack developer. I‘m passionate about programming,
					teamwork, and creating innovative solutions with attractive user interfaces, eager to tackle new challenges
					and collaborate with fellow technology enthusiasts.
				</p>
				<button className='shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 mt-12 bg-[#0070f3] rounded-md text-white text-base font-light transition duration-200 ease-linear'>
					Contact me
				</button>
			</div>
		</div>
	)
}

export default Header
