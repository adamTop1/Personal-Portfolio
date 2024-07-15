import Contact from "@/components/Contact"
import Header from "@/components/Header"
import Projects from "@/components/Projects"
import { Skills } from "@/components/Skills"

export default function Home() {
	return (
		<>
			<Header />
			<Skills /> 
			<Projects />
			<Contact />
		</>
	)
}
