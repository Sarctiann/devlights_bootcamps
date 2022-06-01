import { useEffect, useMemo } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router'

import city_ids from '../../helpers/city_ids'

const Dashboard = () => {

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('corrientes')
    }
  })

  const selected = useMemo(() =>
    location.pathname.replace('/', ''), [location]
  )

  const handleChangeSelect = (e) => {
    navigate(e.target.value)
  }

  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>

      <select value={selected} onChange={handleChangeSelect}>
        {city_ids.map(city => {
          const n = city.name[0].toUpperCase() + city.name.slice(1)
          return (
            <option key={n} value={city.name}> {n} </option>
          )
        })}
      </select>
      <Outlet />
    </div>
  )
}

export default Dashboard