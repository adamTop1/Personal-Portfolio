import React from 'react'

export function Background({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<div className='h-full w-full bg-black  bg-grid-white/[0.15] relative -z-10 '>
				<div className='absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-10'></div>

				{children}
			</div>
		</>
	)
}
