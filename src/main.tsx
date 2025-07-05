import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home.tsx'
import NotFound from './pages/NotFound.tsx'
import Legal from './pages/Legal.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'
import About from './pages/About.tsx'
import Works from './pages/Work.tsx'
import { SoundProvider } from './context/SoundContext.tsx'
import Layout from './components/Layout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <SoundProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/works' element={<Works />} />
              <Route path='/legal' element={<Legal />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </SoundProvider>
    </ThemeProvider>
  </StrictMode>
)
