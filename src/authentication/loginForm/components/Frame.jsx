import './Frame.css'


const Frame = (props) => {

  const labelOption = [
    'Please fill in your unique admin login details below',
    'Falied Login - Invalid Credentials'
  ]

  return (
    <div className="frameCss">
      <p className={props.status}>
        {props.status === 'neutral' ? labelOption[0] : labelOption[1]}
      </p>
      {props.children}
    </div>
  )
}

export default Frame;