import React from 'react'
import { FlipWords } from './ui/flip-words'

const Header = () => {
	return (
		<div className='flex w-full py-[200px] px-[200px] '>
			<div className='flex flex-col items-start font-bold text-white text-8xl '>
				<h1>Hello</h1>
				<div>
					I&apos;m <FlipWords words={[`Adam  Wasylak`, 'a fullstack developer ']} duration={5000} className='text-sky-600' />
				</div>
                <p className='pt-10 text-sm max-w-[500px]'>I‘m a 18-year-old programmer aspiring to become a full-stack developer. I‘m passionate about programming, teamwork, and creating innovative solutions with attractive user interfaces, eager to tackle new challenges and collaborate with fellow technology enthusiasts.</p>
			</div>
		</div>
	)
}

export default Header
