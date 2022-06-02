import { Routes, Route, useLocation } from 'react-router'

import Dashboard from './pages/dashboard'
import City from './pages/city'
import NotFound from './pages/notFound'
import city_ids from './helpers/city_ids'

import './styles/App.scss'

const App = () => {

  const location = useLocation()
  const isAbailableCity = city_ids.map(city => {
    return city.name
  }).includes(location?.pathname.replace('/', '').toLowerCase())

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