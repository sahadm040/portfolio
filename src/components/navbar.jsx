import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function SNavbar() {
  return (
    <Navbar className="container " bg="light" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: "#2fa56e", fontWeight: "bold" }}>
          portfolio.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">about</Nav.Link>
            <NavDropdown title="service" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                {"web development"}
              </NavDropdown.Item>

              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">portfolio</Nav.Link>
            <Nav.Link href="#contact">contact</Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SNavbar;
