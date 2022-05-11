import { useState, useContext, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import Login from './pages/login';
import List from './pages/list';
import Landing from './pages/landing';
import View from './pages/view'
import NotFound from './pages/not_found';

import { UserContext } from './contexts/UserContextWrapper'


const App = () => {

  const { user } = useContext(UserContext)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (user?.email === 'sebas@ok.com') {
      setIsLoggedIn(true)
    }
  }, [user])

  return (
    <CssBaseline enableColorScheme>
      <Routes>

        {/* List o Landing dependiendo de si está loggeado */}
        <Route
          path='/'
          element={isLoggedIn
            ? <List />
            : <Landing />
          }
        />

        {/* View o Login dependiendo de si está loggeado */}
        <Route path='/pokemon/:id' element={isLoggedIn
          ? <View />
          : <Login />
        }
        />

        {/* Login si el usuario no está loggeado */}
        <Route
          path='/login'
          element={isLoggedIn
            ? <Navigate to='/' replace={true} />
            : <Login {...{ setIsLoggedIn }} />
          }
        />

        {/* Manejando Paginas desconocidas */}
        <Route
          path='*'
          element={<NotFound />}
        />

      </Routes>
    </CssBaseline>
  )
}

export default App