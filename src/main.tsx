import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home.tsx'
import NotFound from './pages/NotFound.tsx'
import Projects from './pages/Projects.tsx'
import Legal from './pages/Legal.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'
import About from './pages/About.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/legal' element={<Legal />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </ThemeProvider>
)
