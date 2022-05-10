import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const Background = (props) => {

  const Bgimage = styled('div')({
    width: '100vw',
    height: '100vh',
    position: 'absolute',

    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    filter: 'blur(3px)'
  })

  return (
    <>
      <Bgimage />
      <Box sx={{ position: 'fixed' }}>
        {props.children}
      </Box>
    </>
  )
}

export default Background