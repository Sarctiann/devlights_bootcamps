import './Success.css'

const Success = (props) => {
  return (
    <div className='successCss'>
      <h1>Welcome {props.loggedIn}!</h1>

      <p className='pButton' onClick={() => {
        props.setLoggedIn('')
      }}
      > Logout </p>

    </div>
  )
}

export default Success;