import { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  Row,
  Col,
  Button,
  Table,
  Image,
} from "react-bootstrap";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import "./App.css";

const SAMPLE_USERS = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice@example.com",
  },
  { id: 2, firstName: "Bob", lastName: "Smith", email: "bob@example.com" },
  {
    id: 3,
    firstName: "Carol",
    lastName: "Williams",
    email: "carol@example.com",
  },
  { id: 4, firstName: "David", lastName: "Brown", email: "david@example.com" },
];

function App() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <>
      {/* Part 4: Responsive Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="md" sticky="top">
        <Container>
          <Navbar.Brand href="#home">MyApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Part 1: Registration Form */}
      <Container className="mt-5" id="home">
        <h2 className="mb-4">Registration Form</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your first name.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your last name.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email address.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              required
              minLength={6}
            />
            <Form.Control.Feedback type="invalid">
              Password must be at least 6 characters.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4" controlId="terms">
            <Form.Check
              type="checkbox"
              label="I agree to the terms and conditions"
              required
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>

          <Button type="submit" variant="success">
            Submit
          </Button>
        </Form>
      </Container>

      {/* Part 2: Table for Displaying Data */}
      <Container className="mt-5" id="about">
        <h2 className="mb-4">Registered Users</h2>
        <div className="table-responsive">
          <Table striped hover className="align-middle">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {SAMPLE_USERS.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>

      {/* Part 3: Image and Button Utilities */}
      <Container fluid className="mt-5 px-0" id="contact">
        <img
          src={heroImg}
          className="img-fluid w-100"
          alt="Hero banner"
          style={{ maxHeight: "300px", objectFit: "cover" }}
        />
      </Container>

      <Container className="mt-4 text-center">
        <Image
          src={reactLogo}
          roundedCircle
          style={{
            width: "120px",
            height: "120px",
            background: "#1a1a1a",
            padding: "12px",
          }}
          alt="Circular profile"
        />

        <div className="mt-4 d-flex gap-3 justify-content-center align-items-center">
          <Button variant="primary">Always Visible</Button>
          <Button variant="secondary" className="d-none d-md-block">
            Visible on Medium+ Screens
          </Button>
        </div>
      </Container>

      <footer className="mt-5 py-4 bg-dark text-white text-center">
        <p className="mb-0">&copy; 2026 MyApp. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
