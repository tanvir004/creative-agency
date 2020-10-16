import React from 'react';
import './Home.css';
import { Button, Form, FormControl, Nav, Navbar, Row, Col, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="home">
             <Navbar   expand="lg">
  <Navbar.Brand href="#home"><img style={{width:'40%'}} src="https://i.ibb.co/qmfZ161/logo.png" alt=""/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      
    </Nav>
    <Form inline>
     <Nav.Link style={{color:'black'}} href="/home">Home</Nav.Link>
     <Nav.Link style={{color:'black'}} href="#link">Our Portfolio</Nav.Link>
      <Nav.Link style={{color:'black'}} href="#link">Our Team</Nav.Link>
      <Nav.Link style={{color:'black'}} href="#link">Contact Us</Nav.Link>
      <Button variant="dark">Login</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

<Row className="element">
    <Col className="left-element" sm={4}>
        <h1>Let’s Grow Your<br></br>Brand To The 
             <br></br>Next Level</h1>
             <p>Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit. Purus commodo ipsum duis<br></br>laoreet maecenas. Feugiat </p>
             <Button variant="dark" style={{width: '40%'}}>Hire us</Button>
    </Col>
    <Col className="right-element" sm={8}>
        <img  src="https://i.ibb.co/vxvjz7L/Frame.png" alt=""/>
        
        </Col>
  </Row>
  </div>

  <div className="siteArea">
      <img src="https://i.ibb.co/jffDQVq/airbnb.png" alt=""/>
      <img src="https://i.ibb.co/27YqGgJ/google.png" alt=""/>
      <img src="https://i.ibb.co/27VC607/uber.png" alt=""/>
      <img src="https://i.ibb.co/vJpp6L0/netflix.png" alt=""/>
      <img src="https://i.ibb.co/jffDQVq/airbnb.png" alt=""/>

  </div>

  <div className="cardSiteArea">
  <Card className="cardElement cardShadow" style={{ width: '18rem',border: 'none' }}>
  <Card.Img  variant="top" src="https://i.ibb.co/0VXM4cQ/service1.png" />
  <Card.Body>
    <Card.Title>Web & Mobile Design</Card.Title>
    <Card.Text>
    We craft stunning and amazing web UI, using a well drrafted UX to fit your product.
    </Card.Text>
  </Card.Body>
</Card>

<Card className="cardElement cardShadow" style={{ width: '18rem', border: 'none' }}>
  <Card.Img  variant="top" src="https://i.ibb.co/f9Q7WYd/service2.png" />
  <Card.Body>
    <Card.Title>Graphic Design</Card.Title>
    <Card.Text>
    Amazing flyers, social media posts and brand representations that would make your brand stand out.
    </Card.Text>
  </Card.Body>
</Card>

<Card className="cardElement cardShadow" style={{ width: '18rem', border: 'none' }}>
  <Card.Img  variant="top" src="https://i.ibb.co/T1XVz9h/service3.png" />
  <Card.Body>
    <Card.Title>Web Development</Card.Title>
    <Card.Text>
    With well written codes, we build amazing apps for all platforms, mobile and web apps in general.t.
    </Card.Text>
  </Card.Body>
</Card>
  </div>

  <div className="caroArea">
  <Carousel>
      <h3 className="caroselHead">Here Some of our<span className="highlight"> Works</span></h3>
  <Carousel.Item>
    <img
      className="carImage"
      src="https://i.ibb.co/zsNDwLB/carousel-1.png"
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carImage"
      src="https://i.ibb.co/s2zk4Fj/carousel-2.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carImage"
      src="https://i.ibb.co/N1Hdd5D/carousel-3.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img
      className="carImage"
      src="https://i.ibb.co/QryHwXy/carousel-4.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>



<Carousel.Item>
    <img
      className="carImage"
      src="https://i.ibb.co/cNT4cSr/carousel-5.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </div>


  <h3 className="reviewHead">Cilents <span className="highlight">Feedback</span></h3><br></br>
  <div className="reviewCardSiteArea">
  <Card className="reviewCardElement" style={{ width: '18rem' }}>
  <Card.Body>
  <Row>
    <Col sm={4}> 
    <img style={{width:'100%'}} src="https://i.ibb.co/XZXzxq1/customer-1.png" alt=""/>
    </Col>
    <Col sm={8}>
    <Card.Title>Nash Patrik</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">CEO, Manpol</Card.Subtitle>
    </Col>
  </Row>
  <Card.Text>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat 
    </Card.Text>
    
  </Card.Body>
</Card>


<Card className="reviewCardElement" style={{ width: '18rem' }}>
  <Card.Body>
  <Row>
    <Col sm={4}> 
    <img style={{width:'100%'}} src="https://i.ibb.co/8zHfq2k/customer-2.png" alt=""/>
    </Col>
    <Col sm={8}>
    <Card.Title>Miriam Barron</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">CEO, Manpol</Card.Subtitle>
    </Col>
  </Row>
  <Card.Text>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat 
    </Card.Text>
    
  </Card.Body>
</Card>


<Card className="reviewCardElement" style={{ width: '18rem' }}>
  <Card.Body>
  <Row>
    <Col sm={4}> 
    <img style={{width:'100%'}} src="https://i.ibb.co/DgGSMb6/customer-3.png" alt=""/>
    </Col>
    <Col sm={8}>
    <Card.Title>Bria Malone</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">CEO, Manpol</Card.Subtitle>
    </Col>
  </Row>
  <Card.Text>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat 
    </Card.Text>
    
  </Card.Body>
</Card>
  </div>

  <div className="sendArea">
  <Row>
    <Col className="sendTextArea">
    <h2>Let us handle your project, professionally.</h2>
    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
    </Col>
    <Col>
    <Form className="sendTextArea">
  <Form.Group controlId="formBasicText">

    <Form.Control type="text" placeholder="Your Name/Company Name" />
  </Form.Group>

  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button style={{width:'20%'}} variant="dark" type="submit">
    Submit
  </Button>
</Form>

    </Col>
  </Row>
  <h6 className="copyright">copyright Tanvir 2020</h6>
  </div>


        </div>
        
    );
};

export default Home;