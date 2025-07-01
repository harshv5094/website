import { useEffect } from 'react'

function About() {
  useEffect(() => {
    document.title = 'Harsh Vyapari - About'
  }, [])
  return (
    <>
      <div>About</div>
    </>
  )
}

export default About
