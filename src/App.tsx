import { About } from './components/about';
import { Hero } from './components/hero';
import { Projects } from './components/projects';

function App() {
	return (
		<main className="min-h-dvh">
			<Hero />

			<About />

			<Projects />
		</main>
	);
}

export default App;
