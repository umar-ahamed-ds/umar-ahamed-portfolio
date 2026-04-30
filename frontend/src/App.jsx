import Navbar from './components/Navbar';
import Home from './sections/Home';
import Projects from './sections/Projects';

function App() {
  return (
    <div className="min-h-screen bg-[#000919] text-white selection:bg-[#0A6ED3] selection:text-white">
      <Navbar />
      <main>
        <Home />
        <Projects />
      </main>
    </div>
  );
}

export default App;