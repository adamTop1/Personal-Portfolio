import Link from 'next/link'

const Navbar = () => {
	return (
		<div className='flex items-center justify-between px-[350px] py-8 '>
			<div>
				<h2 className='font-mono text-3xl font-bold text-white'>Adam <span className='text-sky-600'>Wasylak</span></h2>
			</div>
			<div className='flex gap-10 font-medium text-md '>
				<Link
					href='/'
					className="duration-300 hover:text-sky-600 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-sky-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
					Home
				</Link>
				<Link
					href='/about'
					className="duration-300 hover:text-sky-600 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-sky-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
					About
				</Link>
				<Link
					href='/projects'
					className="duration-300 hover:text-sky-600 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-sky-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
					Projects
				</Link>
				<Link
					href='/contact'
					className="duration-300 hover:text-sky-600 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-sky-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
					Contact
				</Link>
			</div>
		</div>
	)
}

export default Navbar
