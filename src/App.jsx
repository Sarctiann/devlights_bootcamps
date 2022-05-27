import { useEffect } from 'react'
import { Routes, Route } from 'react-router'
// import { useQuery } from 'react-query'

import API from './services/api'

const App = () => {

  // const query = useQuery()

  useEffect(()=> {
    (async () => {
      try {
        const res = await API.get('?q=corrientes') 
        console.log(res)
      }
      catch (err) {
        console.error(err)
      }
    })()
  })

  return (
      <Routes>

        <Route path=''element={<h1>hola</h1>} />

      </Routes>
  )
}

export default App