import { useState } from 'react'

import LoginForm from './loginForm/LoginForm'
import Success from './successPage/Success'

const App = () => {

  const [loggedIn, setLoggedIn] = useState('')

  return (
    loggedIn 
      ? <Success loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> 
      : <LoginForm loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
  )
}

export default App;