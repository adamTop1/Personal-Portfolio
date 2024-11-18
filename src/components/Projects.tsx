import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
	return (
		<section className='flex flex-col items-center py-20' id='projects'>
			<h2 className='mb-10 text-6xl font-bold text-slate-200 max-sm:text-5xl'>PROJECTS</h2>
			<ProjectCard
				title='CleanNotes'
				technologies={[ 'Next.js', 'Prisma' , 'Tailwind CSS']}
				description='Developed CleanNotes, an application for creating notes, built using all the knowledge I had acquired previously. This project not only pushed my skills but also taught me to refining my problem-solving techniques.'
				codeLink='https://github.com/adamTop1/CleanNotes'
				liveLink='https://clean-notes-liard.vercel.app'
				imgSrc='/notes.png'
			/>
			<ProjectCard
				title='FreshShop'
				technologies={[ 'Next.js', 'Express.js' , 'Prisma', 'Tailwind CSS']}
				description='Fullstack app => in progress...'
				codeLink='https://github.com/adamTop1/FreshShop'
				imgSrc='/freshshop.png'
			/>
		</section>
	)
}

export default Projects
