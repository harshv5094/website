import { useEffect } from 'react'
import Main from '../components/Main'

function NotFound() {
  useEffect(() => {
    document.title = 'Harsh Vyapari - 404'
  })
  return (
    <Main>
      <div>Not Found</div>
    </Main>
  )
}

export default NotFound
