import React from 'react';
import { Container, Row, Col, Navbar, ListGroup, Card } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <>

      {/* Main Content Area */}
      <Container fluid className="p-0 mt-3">
        <Row className="gx-0">
          {/* Sidebar */}
         <Col md={4} className="p-4 hover-box">
  <ListGroup variant="flush">
    <ListGroup.Item action href="#" className="mb-2">
      DIKSHA CLASSES 1 to XII
    </ListGroup.Item>
    <ListGroup.Item action href="#" className="mb-2">
      NIOS CHANNEL FOR SECONDARY CLASSES
    </ListGroup.Item>
    <ListGroup.Item action href="#" className="mb-2">
      FOR SENIOR - SECONDARY CLASSES
    </ListGroup.Item>
    <ListGroup.Item action href="#" className="mb-2">
      Swayam Prabha Free Educational Channel
    </ListGroup.Item>
    <ListGroup.Item action href="#" className="mb-2">
      Khan Academy
    </ListGroup.Item>
    <ListGroup.Item action href="#" className="mb-2">
      MOODLE
    </ListGroup.Item>
  </ListGroup>
</Col>


          {/* Contact Section */}
          <Col md={8} className="p-4">
            <Row>
              <Col md={12}>
                <Row className="mt-3">
                <h2>Contact</h2>
                  <Col md={6}>
                    <h5>
                      <strong>Embassy of India School (Kendriya Vidyalaya), Moscow, Russia</strong>
                      <br />
                      C/o Embassy of India, 6-8, Vorontsovo Polye, Moscow ( Russia ) - PINCODE 105064
                      <br />
                      10/2 Ulitsa Bolshaya
                      <br />
                      Dist: Dorogomilovskaya
                      <br />
                      Kiyevskaya, Moscow - 121059
                      <br />
                      Phone - 8 - 499 243 70 09
                      <br />
                      Email - principalkvm@mail.ru
                    </h5>
                  </Col>
                  <Col md={6}>
                     <Card>
      <Card.Body>
        <div style={{ height: "300px", width: "100%" }}>
          {/* Google Map Embed */}
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.933085518553!2d37.59083247656827!3d55.75199999266025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a568f6f31d7%3A0x6f4f47d5c8bcf7c5!2sEmbassy%20of%20India%20School%20(Kendriya%20Vidyalaya)%2C%20Moscow!5e0!3m2!1sen!2sin!4v1694500000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Card.Body>
    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    
    </>
  );
};

export default Contact;