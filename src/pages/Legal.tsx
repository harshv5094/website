import { useEffect } from 'react'
import Main from '../components/Main'

function Legal() {
  useEffect(() => {
    document.title = 'Harsh Vyapari - Legal'
  }, [])

  return (
    <Main>
      <div>Legal</div>
    </Main>
  )
}

export default Legal
