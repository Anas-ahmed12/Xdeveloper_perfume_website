import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import ScentNotes from './components/ScentNotes';
import Synthesis from './components/Synthesis';
import Initialize from './components/Initialize';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Products />
        <ScentNotes />
        <Synthesis />
        <Initialize />
      </main>
    </div>
  );
}

export default App;
