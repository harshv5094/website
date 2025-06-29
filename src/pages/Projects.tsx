import { useEffect } from 'react'
import Main from '../components/Main'

function Projects() {
  useEffect(() => {
    document.title = 'Harsh Vyapari - Projects'
  }, [])
  return (
    <Main>
      <div>Projects</div>
    </Main>
  )
}

export default Projects
