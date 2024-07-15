import React from 'react'
import Image from 'next/image'

type ProjectCardProps = {
	title: string
	technologies: string[]
	description: string
	codeLink: string
	liveLink: string
}

const ProjectCard = ({ title, technologies, description, codeLink, liveLink }: ProjectCardProps) => {
	const newTechnologies = technologies.join(', ')

	return (
		<div
			className=' duration-500 hover:translate-x-2 grid max-sm:grid-rows-1 max-md:grid-rows-2 md:grid-cols-2  rounded-2xl  overflow-hidden bg-black border hover:border-sky-600/50 border-white/[0.2] group-hover:border-slate-700
         my-5 mx-4'>
			<Image src={'/111.png'} width={500} height={120} alt='project photo' className='p-2 rounded-3xl max-sm:hidden' />
			<div className='flex flex-col items-start p-4 justify-evenly max-sm:gap-5'>
				<h3 className='text-xl font-bold text-white'>{title}</h3>
				<p className='text-sm text-sky-600'>{newTechnologies}</p>
				<p className='max-sm:text-xs text-sm max-w-[450px]'>{description}</p>
				<div className='flex gap-8 text-white'>
					<a
						href={liveLink}
						target='_blank'
						className="duration-300 hover:text-sky-600  relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-sky-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
						View live
					</a>
					<a
						href={codeLink}
						target='_blank'
						className="duration-300 hover:text-sky-600 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-sky-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
						View code
					</a>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
