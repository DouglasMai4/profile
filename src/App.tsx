import { About } from './components/about';
import { Contact } from './components/contact';
import { Hero } from './components/hero';
import { Navbar } from './components/navbar';
import { Projects } from './components/projects';

function App() {
	return (
		<>
			<Navbar />

			<main className="min-h-dvh">
				<Hero />

				<About />

				<Projects />

				<Contact />
			</main>
		</>
	);
}

export default App;
