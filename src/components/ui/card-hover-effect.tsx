import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { IconType } from 'react-icons'

export const HoverEffect = ({
	items,
	className,
}: {
	items: {
		title: string
		icon: IconType
	}[]
	className?: string
}) => {
	let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

	return (
		<div className={cn('grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10', className)}>
			{items.map((item, idx) => {
				const Icon = item.icon
				return (
					<div
						key={item?.title}
						className='relative block w-full h-full p-2 group'
						onMouseEnter={() => setHoveredIndex(idx)}
						onMouseLeave={() => setHoveredIndex(null)}>
						<AnimatePresence>
							{hoveredIndex === idx && (
								<motion.span
									className='absolute inset-0 h-full w-full  bg-sky-600/[0.8] block  rounded-3xl'
									layoutId='hoverBackground'
									initial={{ opacity: 0 }}
									animate={{
										opacity: 1,
										transition: { duration: 0.15 },
									}}
									exit={{
										opacity: 0,
										transition: { duration: 0.15, delay: 0.2 },
									}}
								/>
							)}
						</AnimatePresence>
						<Card className='flex flex-col items-center justify-center text-white'>
							<div className='flex items-center justify-center pb-5'>
								<Icon size={40} />
							</div>
							<p className='text-2xl font-bold'>{item.title}</p>
						</Card>
					</div>
				)
			})}
		</div>
	)
}

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
	return (
		<div
			className={cn(
				'rounded-2xl h-full w-full py-6 px-10 overflow-hidden bg-black border border-white/[0.2] group-hover:border-slate-700 relative z-20',
				className
			)}>
			<div className='relative z-50'>
				<div className='p-4'>{children}</div>
			</div>
		</div>
	)
}
