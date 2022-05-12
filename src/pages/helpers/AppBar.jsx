import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Button } from '@mui/material'

import { UserContext } from '../../contexts/UserContextWrapper'


const AppBar = ({ setIsLoggedIn }) => {

  const { user, setUser } = useContext(UserContext)

  const handleLogout = () => {
    setUser(null)
    setIsLoggedIn(false)
    localStorage.clear()

  }

  return (
    <>
      <Box sx={{
        display: 'flex',
        justifyContent: 'right',
        height: '5vh',
        backgroundColor: 'secondary.light',
        p:1
      }}>
        <Button
          disabled={!Boolean(user)}
          size='small'
          variant='contained'
          color='warning'
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
      <Outlet />
    </>
  )
}

export default AppBar