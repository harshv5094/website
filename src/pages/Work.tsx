import { useEffect } from 'react'

function Works() {
  useEffect(() => {
    document.title = 'Harsh Vyapari - Projects'
  }, [])
  return (
    <>
      <div>Works</div>
    </>
  )
}

export default Works
