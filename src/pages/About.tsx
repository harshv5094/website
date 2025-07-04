import { useEffect } from 'react'
import Container from '../components/Container'

function About() {
  useEffect(() => {
    document.title = 'Harsh Vyapari - About'
  }, [])
  return (
    <Container>
      <div className=''>
        <h1 className='font-heading text-xl'>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
        </p>
      </div>
    </Container>
  )
}

export default About
