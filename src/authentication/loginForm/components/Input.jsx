import './Input.css'

const Input = (props) => {
  return (
    <>
      <label className='labelInput' htmlFor={props.Label}>{props.Label}</label>
      <input
        className="inputCss"
        id={props.Label}
        type={props.Type}
        name={props.Name}
        placeholder={props.Placeholder}
        onChange={props.handleChange}
        value={props.Value}
      >
      </input>
    </>
  )
}

export default Input;