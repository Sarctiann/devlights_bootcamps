import { useState } from 'react'

const useUser = () => {
  
  const getUser = () => {
    const userString = localStorage.getItem('user')
    const userObj = JSON.parse(userString)
    return userObj
  };

  const [user, _setUser] = useState(getUser())

  const setUser = user => {
    localStorage.setItem('user', JSON.stringify(user))
    _setUser(user);
  };

  return [
    user,
    setUser
  ]
}

export default useUser