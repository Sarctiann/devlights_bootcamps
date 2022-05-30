import { Outlet } from 'react-router'
import { useQuery } from 'react-query'

import API from '../services/api'
import city_ids from '../helpers/city_ids'

const Dashboard = () => {

  const query = useQuery(
    'corrientes', 
    () => API.get_weather(city_ids.corrientes)
  )

  console.log(query.data)

  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  )
}

export default Dashboard