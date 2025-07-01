import { useEffect } from 'react'
import Main from '../components/Main'

function About() {
  useEffect(() => {
    document.title = 'Harsh Vyapari - About'
  }, [])
  return (
    <Main>
      <div>About</div>
    </Main>
  )
}

export default About
