import { SiGithub } from 'react-icons/si'

const Navbar = () => {
	return (
		<div className='flex items-center justify-between px-[350px] py-8 '>
			<div>
				<h2 className='font-mono text-3xl font-bold text-white'>
					Adam <span className='text-sky-600'>Wasylak</span>
				</h2>
			</div>
			<div className='flex gap-10 font-medium text-md '>
				<a href='https://github.com/adamTop1' target='_blank'>
					<SiGithub size={30} className='text-white' />
				</a>
			</div>
		</div>
	)
}

export default Navbar
