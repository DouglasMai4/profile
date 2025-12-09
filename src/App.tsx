import { About } from './components/about';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { Hero } from './components/hero';
import { Navbar } from './components/navbar';
import { Projects } from './components/projects';

function App() {
	return (
		<>
			<main className="min-h-dvh">
				<Hero />

				<About />

				<Projects />

				<Contact />
			</main>

			<Footer />

			<Navbar />
		</>
	);
}

export default App;
