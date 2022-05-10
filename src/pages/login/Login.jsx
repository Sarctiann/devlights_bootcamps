import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import LoginBG from './LoginBG'
import {
  Grid, Paper, Typography, TextField, Button, Alert, Fade
} from '@mui/material'
import { UserContext } from '../../contexts/UserContextWrapper'

const Login = () => {

  const [tempUser, setTempUser] = useState({ email: '', password: '' })
  const [message, setMessage] = useState({ message: '', severity: 'warning' })
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setTempUser({ ...tempUser, [name]: value })
  }

  const handleMessage = (message, severity) => {
    setMessage({ message: message, severity: severity })
    setTimeout(() => {
      setMessage({ message: '', severity: severity })
    }, 2500)
  }

  const handleClick = () => {
    if (tempUser.email === '' && tempUser.password === '') {
      handleMessage('Debe completar los campos', 'warning')
      return
    }
    if (tempUser.email === '') {
      handleMessage('el campo "Email" no puede estar vacio', 'warning')
      setTempUser({ ...tempUser, password: '' })
      return
    }
    if (tempUser.password === '') {
      handleMessage('el campo "Contraseña" no puede estar vacio', 'warning')
      return
    }
    if (
      tempUser.email !== 'sebas@ok.com' || tempUser.password !== '123asd'
    ) {
      handleMessage('Credenciales Incorrectas', 'error')
      setTempUser({ email: '', password: '' })
      return
    }
    setUser({ username: 'Sarctiann', email: tempUser.email })
  }

  return (
    <LoginBG>
      <Grid container justifyContent='center' p={10}>
        <Grid item xs={12} md={6}>
          <Paper elevation={5}>
            <Grid container spacing={2} p={2}>

              <Grid item xs={12} align='center'>
                <Typography variant='subtitle1' color='text.disabled'>
                  Ingrese sus credenciales para acceder al sitio
                </Typography>
                <Typography variant='caption' color='text.disabled'>
                  sebas@ok.com 123asd
                </Typography>
              </Grid>

              <Grid item xs={12} align='center'>
                <TextField size='small' fullWidth label='Email'
                  name='email'
                  type='email'
                  value={tempUser.email}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} align='center'>
                <TextField size='small' fullWidth label='Contraseña'
                  name='password'
                  type='password'
                  value={tempUser.password}
                  onChange={handleChange}
                  onKeyPress={
                    e => { if (e.key === 'Enter') { handleClick() } }
                  }
                />
              </Grid>

              <Grid item xs={12} md={6} align='center'>
                <Button variant='contained' color='success' fullWidth
                  onClick={handleClick}
                >
                  Ingresar
                </Button>
              </Grid>

              <Grid item xs={12} md={6} align='center'>
                <Button variant='contained' fullWidth
                  onClick={() => { navigate('/') }}
                >
                  Volver al Inicio
                </Button>
              </Grid>

            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid container justifyContent='center' p={10}>
        <Grid item xs={12} md={6}>
          <Fade in={Boolean(message.message)} timeout={500}>
            <Alert severity={message.severity} variant='outlined'>
              <Typography variant='h5' color='white'>
                {message.message}
              </Typography>
            </Alert>
          </Fade>
        </Grid>
      </Grid>
    </LoginBG>
  )
}

export default Login;
