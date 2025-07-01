import { useEffect } from 'react'

function Home() {
  useEffect(() => {
    document.title = 'Harsh Vyapari - Home'
  }, [])
  return (
    <>
      <div>Hello World</div>
    </>
  )
}

export default Home
