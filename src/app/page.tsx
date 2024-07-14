import Image from 'next/image'

export default function Home() {
	return (
		<>
			<div className='flex w-full h-screen justify-around py-[250px] gap-10'>
				<div className='font-bold text-white text-7xl '>
					<h1>Hello</h1>
					<p>
						I&apos;m <span className='text-sky-600'>Adam Wasylask</span>
					</p>
					<p>Frontend Developer</p>
				</div>
			</div>
		</>
	)
}
