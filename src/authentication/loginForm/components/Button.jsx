import './Button.css'

const Button = (props) => {
  return (
    <button 
      className='buttonCss'
      onClick={props.handleSubmit}
    >
      {props.Label}
    </button>
  )
}

export default Button;