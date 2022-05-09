import { useMemo, createContext } from 'react'
import useUser from '../hooks/useUser'

// 1. Create and export context
export const UserContext = createContext(
  { user: '', setUser: () => { } })

const UserContextWrapper = ({ children }) => {

  // 2. Packing the value and setter function
  const [user, setUser] = useUser()
  const userValue = useMemo(
    () => ({ user, setUser }),
    [user, setUser]
  )

  return (
    // 3. Provide the context
    <UserContext.Provider value={userValue}>
      {children}
    </UserContext.Provider>
    // -----------------------
  )
}

export default UserContextWrapper