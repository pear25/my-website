import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Home.css'
import TopIntro from './components/TopIntro'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="Home">
      <Navbar />
      <TopIntro />
    </div>
  )
}

export default Home
