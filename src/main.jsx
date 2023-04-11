import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Home'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './components/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/projects',
    element: <Projects />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)
