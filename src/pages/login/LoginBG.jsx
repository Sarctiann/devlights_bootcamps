import { styled } from '@mui/material/styles'

import image from './assets/pokemon_bg.png'

const LoginBG = styled('div')({
  width: '100vw',
  height: '100vh',
  position: 'absolute',

  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'left',
  backgroundColor: '#909090',
  backgroundBlendMode: 'multiply'
})

export default LoginBG