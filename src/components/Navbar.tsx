import { SiGithub } from 'react-icons/si'

const Navbar = () => {
	return (
		<div className='flex items-center justify-between py-8 px-[50px] md:px-[150px] xl:px-[300px]'>
			<div>
				<h2 className='font-mono text-2xl font-bold text-white md:text-3xl'>
					Adam <span className='text-sky-600'>Wasylak</span>
				</h2>
			</div>
			<div className='flex gap-10 font-medium text-md '>
				<a href='https://github.com/adamTop1' target='_blank' className='duration-300 hover:scale-105'>
					<SiGithub size={30} className='text-white' />
				</a>
			</div>
		</div>
	)
}

export default Navbar
