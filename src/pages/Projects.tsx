import { useEffect } from 'react'

function Projects() {
  useEffect(() => {
    document.title = 'Harsh Vyapari - Projects'
  }, [])
  return (
    <>
      <div>Projects</div>
    </>
  )
}

export default Projects
