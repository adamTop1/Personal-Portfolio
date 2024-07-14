import ParticlesBackground from '@/components/config/ParticlesBackground'
import Image from 'next/image'

export default function Home() {
	return (
		<>
			<ParticlesBackground id="particles"/>
			<div className='flex w-full h-screen justify-around py-[250px] gap-10'>
				<div className='font-bold text-transparent bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-7xl '>
					<h1>Hello</h1>
					<p>
						I&apos;m <span className='text-sky-600'>Adam Wasylask</span>
					</p>
					<p>Frontend Developer</p>
				</div>

				<div>
					<Image src={'/programmer.webp'} alt='website icon' width={300} height={300} />
				</div>
			</div>
		</>
	)
}
