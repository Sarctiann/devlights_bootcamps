import { Routes, Route, useLocation } from 'react-router'

import Dashboard from './pages/Dashboard'
import City from './pages/City'
import NotFound from './pages/NotFound'
import city_ids from './helpers/city_ids'

const App = () => {

  const location = useLocation()
  const isAbailableCity = Object.keys(city_ids).includes(
    location?.pathname.replace('/', '').toLowerCase()
  )

  return (
    <Routes>
      <Route
        path='/'
        element={<Dashboard />}
      >
        <Route
          path=':city'
          element={isAbailableCity ? <City /> : <NotFound />}
        />
      </Route>
      <Route
        path='*'
        element={<NotFound />}
      />
    </Routes>
  )
}

export default App