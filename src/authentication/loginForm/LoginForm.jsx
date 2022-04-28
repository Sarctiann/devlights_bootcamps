import { useState } from 'react'

import './LoginForm.css';
import Imagen from './assets/figmaBGImage.svg'
import Frame from './components/Frame'
import Input from './components/Input'
import Button from './components/Button'

function LoginForm(props) {

  const [user, setUser] = useState({ email: '', password: '' })
  const [status, setStatus] = useState('neutral')

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
    if (status === 'error') { setStatus('neutral') }
  }

  const handleSubmit = () => {
    if (
      user.email === 'sebas@ok.com' && user.password === 'asd123'
    ) {
      props.setLoggedIn(user.email)
    }
    setStatus('error')
    setUser({ email: '', password: '' })
  }

  return (
    <div className='loginForm'>
      <h2>Stax Food Admin Login</h2>
      <Frame status={status}>
        <>
          <Input
            Label='Email address' Type='email' Placeholder='sebas@ok.com'
            Name='email' Value={user.email}
            handleChange={handleChange}
          />
          <Input Label='Password' Type='password' Placeholder='asd123'
            Name='password' Value={user.password}
            handleChange={handleChange}
          />

          <p>
            <span className='spanButton'>
              Register
            </span> - <span className='spanButton'>
              Forgot password
            </span>
          </p>

          <Button Label='Sign In'
            handleSubmit={handleSubmit}
          />
        </>
      </Frame>
      <div className='imageContainer'>
        <img className='bgImage' src={Imagen} alt='background' />
      </div>
    </div>
  );
}

export default LoginForm;
