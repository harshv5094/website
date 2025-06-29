import { useEffect } from 'react'
import Main from '../components/Main'

function Contact() {
  useEffect(() => {
    document.title = 'Harsh Vyapari - Contact'
  }, [])

  return (
    <Main>
      <div>Contact Us</div>
    </Main>
  )
}

export default Contact
