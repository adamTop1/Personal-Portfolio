import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
	return (
		<section className='flex flex-col items-center py-20' id='projects'>
			<h2 className='mb-10 text-6xl font-bold text-slate-200'>PROJECTS</h2>
			<ProjectCard
				title='Simple Todo'
				technologies={['React', 'Next.js', 'Tailwind CSS']}
				description='Developed a comprehensive Next.js application designed for end-to-end issue tracking and assignment Empowered
					users to break down complex problems into manageable chunks, facilitating efficient tracking and resolution
					within the app.'
				codeLink='https://github.com/adamTop1/simple-todo'
				liveLink='https://todo-app-adamtop1-716676.netlify.app/'
			/>
			<ProjectCard
				title='Simple Todo'
				technologies={['React', 'Next.js', 'Tailwind CSS']}
				description='Developed a comprehensive Next.js application designed for end-to-end issue tracking and assignment Empowered
					users to break down complex problems into manageable chunks, facilitating efficient tracking and resolution
					within the app.'
				codeLink='https://github.com/adamTop1/simple-todo'
				liveLink='https://todo-app-adamtop1-716676.netlify.app/'
			/>
			<ProjectCard
				title='Simple Todo'
				technologies={['React', 'Next.js', 'Tailwind CSS']}
				description='Developed a comprehensive Next.js application designed for end-to-end issue tracking and assignment Empowered
					users to break down complex problems into manageable chunks, facilitating efficient tracking and resolution
					within the app.'
				codeLink='https://github.com/adamTop1/simple-todo'
				liveLink='https://todo-app-adamtop1-716676.netlify.app/'
			/>
		</section>
	)
}

export default Projects
