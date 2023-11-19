import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { BsEnvelopeAtFill, BsWhatsapp, BsTelephoneOutbound } from "react-icons/bs";

export const FooterSection = () => {
  return (
    <>
     <Navbar className="mt-5 d-none d-md-block" fixed = 'bottom' bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link href="#" className="text-light"> <BsWhatsapp  className="text-light"/> </Nav.Link>
            <Nav.Link href="#"> <BsEnvelopeAtFill className="text-light"/> </Nav.Link>
            <Nav.Link href="#"><BsTelephoneOutbound className="text-light"/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
};
