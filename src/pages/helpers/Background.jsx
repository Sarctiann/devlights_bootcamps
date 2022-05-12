import { Container } from '@mui/material'
import { styled } from '@mui/material/styles'

const Background = (props) => {

  const Bgimage = styled('div')({
    width: '100vw',
    height: '100vh',
    position: 'fixed',

    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    filter: 'blur(3px)',
    zIndex: -1
  })

  return (
    <>
      <Bgimage />
      <Container maxWidth='100vw'>
        {props.children}
      </Container>
    </>
  )
}

export default Background