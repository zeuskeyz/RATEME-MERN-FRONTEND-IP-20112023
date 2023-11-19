import { Button, Container, Navbar } from 'react-bootstrap'
import Axios from "axios"

export const HeaderSection = () => {
  let handleClick = (event)=>{
    Axios.get('https://rate-me-zpzf.onrender.com/').then(res=>{
      event.target.innerText = `${res.data.NPS}%`
    }).catch(err=>console.log(err.message))
  }
  return (
    <>
        <Navbar className="bg-body-tertiary">
            <Container className='d-flex'>
                <Navbar.Brand>Safaricom Shop Migori</Navbar.Brand>
                <Button variant="outline-secondary" onClick={handleClick}>Current Score</Button>
            </Container>
        </Navbar>
    </>
  )
}
