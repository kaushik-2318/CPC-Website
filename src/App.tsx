import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import background from './assets/background.png'

function App() {

  return (
    <>
      <div className="relative text-white">
        <img className='absolute -z-10 h-screen w-screen' src={background} alt="Background" />
        <Navbar />
        <Hero />
      </div>

    </>
  )
}

export default App
