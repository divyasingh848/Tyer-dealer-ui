import React from "react";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import { FaMapMarkerAlt, FaClock, FaCheckCircle } from "react-icons/fa";
import GoogleReview from "./GoogleReview";

const DealerComponent = () => {
  return (
    <Container className="my-4 ">
      <Card className="nab-btm ">
        <Card.Body>
          <Row>
            <Col md={9}>
              <h3>SHREE HEMKUNT TYRES AND SERVICES</h3>
              <div className="d-flex align-items-center">
                <Badge bg="success" className="me-2">
                  4.9
                </Badge>
                <span>2278 Reviews</span>
                <Button variant="outline-secondary" className="ms-2">
                  Rate
                </Button>
              </div>
              <p className="mt-2">
                <FaMapMarkerAlt /> PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD,
                <br></br>
                AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
              </p>
              <p>
                <FaClock /> Open - Monday to Sunday - 10:00AM to 8:00PM
              </p>
              <Button variant="danger">Get Directions</Button>
            </Col>
            <Col md={3}>
              <img
                src="https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300" // Replace with the actual image source
                alt="Shop Image"
                className="img-fluid"
              />
            </Col>

            <h6 className="mt-3 ">2278 Google Reviews</h6>
            <GoogleReview />
          </Row>
        </Card.Body>
      </Card>

      {/* <Row className="mt-3">
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <div className="d-flex align-items-center mb-2">
                <img
                  src="https://via.placeholder.com/50" // Replace with the actual image source
                  alt="User"
                  className="rounded-circle me-2"
                />
                <h6 className="mb-0">Md Nasir</h6>
              </div>
              <Card.Text>
                Excellent service from start to finish. 100% satisfaction with
                the job, professionalism and overall service.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <div className="d-flex align-items-center mb-2">
                <div
                  className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center"
                  style={{ width: "50px", height: "50px" }}
                >
                  R
                </div>
                <h6 className="mb-0 ms-2">Rohit Bhati</h6>
              </div>
              <Card.Text>
                Went for Tyre change. Ultimate service by shoppe boys. Owner
                behavior very cool. Guide as per ur budget. Highly recommend.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <div className="d-flex align-items-center mb-2">
                <div
                  className="rounded-circle bg-warning text-white d-flex align-items-center justify-content-center"
                  style={{ width: "50px", height: "50px" }}
                >
                  P
                </div>
                <h6 className="mb-0 ms-2">Pradeep Kumar</h6>
              </div>
              <Card.Text>
                Best tyre shop in Indirapuram. Good dealing with customer. All
                types tyre available here. Price also responsible. Overall good
                experience.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}
    </Container>
  );
};

export default DealerComponent;
