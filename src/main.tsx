import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home.tsx'
import NotFound from './pages/NotFound.tsx'
import Projects from './pages/Projects.tsx'
import Contact from './pages/Contact.tsx'
import Legal from './pages/Legal.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/legal' element={<Legal />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
