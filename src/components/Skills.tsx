'use client'
import { HoverEffect } from './ui/card-hover-effect'
import { projects } from '@/constants'

export function Skills() {
	return (
		<section className='flex flex-col items-center' id='skills'>
			<div className='w-8/12 h-[1px] bg-white'></div>
            {/* <h2 className='text-6xl font-bold text-slate-200'>SKILLS</h2> */}
			<div className='max-w-5xl px-8 mx-auto'>
				<HoverEffect items={projects} />
			</div>
		</section>
	)
}
