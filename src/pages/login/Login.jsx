import { useState, useContext } from 'react'

import LoginBG from './LoginBG'
import { Grid, Paper, Typography, TextField, Button } from '@mui/material'
import { UserContext } from '../../contexts/UserContextWrapper'

const Login = (props) => {

  const [tempUser, setTempUser] = useState({ username: '', password: '' })
  const { user, setUser } = useContext(UserContext)

  const handleChange = (e) => {
    const { name, value } = e.target
    setTempUser({ ...tempUser, [name]: value })
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
                  Sebas 123asd
                </Typography>
              </Grid>

              <Grid item xs={12} align='center'>
                <TextField size='small' fullWidth label='Nombre de Usuario'
                  name='username'
                  value={tempUser.username}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} align='center'>
                <TextField size='small' fullWidth label='Contraseña'
                  name='password'
                  value={tempUser.password}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} md={6} align='center'>
                <Button variant='contained' color='success' fullWidth>
                  Ingresar
                </Button>
              </Grid>

              <Grid item xs={12} md={6} align='center'>
                <Button variant='contained' fullWidth>
                  Volver al Inicio
                </Button>
              </Grid>

            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </LoginBG>
  )
}

export default Login;