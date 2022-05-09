import { Outlet } from "react-router-dom"

const View = () => {
  return (
    <>
      <h3>View Page</h3>
      <Outlet />
    </>
  )
}

export default View