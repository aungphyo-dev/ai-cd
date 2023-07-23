import Demo from "./components/Demo"
import Navbar from "./components/Navbar.jsx";
import BG from './assets/grid.svg'

const App = () => {
  return (
    <main>
      <div className={`bg-cyan-300 min-h-screen px-5`}>
        <Navbar/>
        <Demo />
      </div>
    </main>
  );
}

export default App