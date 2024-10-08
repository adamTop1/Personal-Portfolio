'use client'
import { HoverEffect } from './ui/card-hover-effect'
import { projects } from '@/constants'

export function Skills() {
	return (
		<section className='flex flex-col items-center py-10' id='skills' >
			{/* <div className='w-[1800px] h-[1px] bg-white'></div> */}
            <h2 className='text-6xl font-bold text-slate-200 max-sm:text-5xl'>SKILLS</h2>
			<div className='max-w-5xl px-8 mx-auto my-12'>
				<HoverEffect items={projects} />
			</div>
		</section>
	)
}
