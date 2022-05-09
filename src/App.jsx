import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import Login from './pages/login';
import List from './pages/list';
import Landing from './pages/landing';
import { View, Pokemon } from './pages/view'


const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <CssBaseline enableColorScheme>
      <Routes>
        <Route
          path='/'
          element={isLoggedIn
            ? <List />
            : <Landing />
          }
        />
        <Route
          path='/pokemon'
          element={isLoggedIn
            ? <View />
            : <Navigate to='/login' />
          }
        >
          <Route
            path=':id'
            element={<Pokemon />}
          />
        </Route>
        <Route
          path='/login'
          element={isLoggedIn
            ? <Navigate to='/' replace={true} />
            : <Login {...{setIsLoggedIn}} />
          }
        />
      </Routes>
    </CssBaseline>
  )
}

export default App