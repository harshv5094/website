import { useEffect } from 'react'
import Main from '../components/Main'

function Home() {
  useEffect(() => {
    document.title = 'Harsh Vyapari - Home'
  }, [])
  return (
    <Main>
      <div>Hello World</div>
    </Main>
  )
}

export default Home
