import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { Background } from '@/components/Background'

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-spaceGrotesk',
})

export const metadata: Metadata = {
	title: 'Portfolio',
	description: 'My personal portfolio website built with Next.js',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body style={spaceGrotesk.style} className={`${spaceGrotesk.variable} bg-zinc-950 text-zinc-400/80 --font-spaceGrotesk `}>
				<Background>
					<Navbar />
					{children}
				</Background>
			</body>
		</html>
	)
}
