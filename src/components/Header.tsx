import React from 'react'
import { FlipWords } from './ui/flip-words'
import Image from 'next/image'

const Header = () => {
	return (
		<div className='flex  w-full pt-[120px] md:pt-[200px] pb-[150px]  px-[50px] md:px-[150px] 2xl:px-[300px]'>
			<div className='flex flex-col items-stretch text-4xl font-bold text-white xl:w-8/12 sm:items-start md:text-6xl xl:text-7xl '>
				<h1>Hello, I&apos;m</h1>
				<div className='max-md:visible md:hidden'>
					<span className='text-sky-600'>Adam Wasylak</span>
				</div>
				<div className='md:visible max-md:hidden'>
					<FlipWords words={[`Adam  Wasylak`, 'a frontend developer']} duration={5000} className='text-sky-600' />
				</div>
				<p className='mt-14 text-sm md:text-base max-w-[500px] text-gray-500'>
				I am an 18-year-old programmer with a goal of becoming a full-stack developer. I love coding and working with others to create innovative projects that not only work well but look great too. I am always excited to take on new challenges and collaborate with other tech enthusiasts to bring creative ideas to life.
				</p>
				<button className='shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 mt-16 bg-[#0070f3] rounded-md text-white text-base font-light transition duration-200 ease-linear'>
					<a href='mailto:adamwasylak1@gmail.com'>Contact me</a>
				</button>
			</div>
			<div className='flex items-center justify-center w-5/12 max-xl:hidden'><Image src='/coding-image.svg' alt='' width='500' height='500' /></div>
		</div>
	)
}

export default Header
