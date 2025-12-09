import { About } from './components/about';
import { Contact } from './components/contact';
import { Hero } from './components/hero';
import { Projects } from './components/projects';

function App() {
	return (
		<main className="min-h-dvh">
			<Hero />

			<About />

			<Projects />

			<Contact />
		</main>
	);
}

export default App;
