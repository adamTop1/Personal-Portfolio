import React from 'react'

export function Background({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='h-full w-full bg-black bg-dot-white/[0.2] relative'>
    {/* Radial gradient for the container to give a faded look */}
    <div className='absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0'></div>
    
    <div className='relative z-10'>{children}</div>
</div>
	)
}
