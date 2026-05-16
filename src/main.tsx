import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutPage from "./pages/about-page/AboutPage"
import ContactPage from "./pages/contact-page/ContactPage"
import HomePage from "./pages/home-page/HomePage"
import Pokemonify from "./pages/project-pages/Pokemonify"
import Portfolio from "./pages/project-pages/Portfolio"

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <HomePage />
  },
  {
    path: '/contact',
    element: <ContactPage />,
    errorElement: <HomePage />
  },
  {
    path: '/about',
    element: <AboutPage />,
    errorElement: <AboutPage />
  },
  {
    path: '/mnfy',
    element: <Pokemonify />,
    errorElement: <Pokemonify />
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
    errorElement: <Portfolio />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
