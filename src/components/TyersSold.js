import React from "react";
import { Card, Button } from "react-bootstrap";

const TyreSold = ({ brand, model, size, price, warranty, reviews }) => {
  return (
    <Card style={{ width: "18rem" }} className="m-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <span
            className="text-uppercase"
            style={{ color: "purple", fontWeight: "bold" }}
          >
            {brand}
          </span>
          <span className="badge bg-warning text-dark">{warranty}</span>
        </div>
        <Card.Title>{model}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{size}</Card.Subtitle>
        <Card.Text>
          <div className="d-flex align-items-center">
            <i className="bi bi-star-fill text-success me-2"></i>
            <span>{reviews} Reviews</span>
          </div>
          <h5 className="mt-2">&#8377; {price}</h5>
          <p className="text-success">Offer available</p>
          <p className="text-muted">Tubeless</p>
        </Card.Text>
        {/* <Button variant="primary">Buy Now</Button> */}
      </Card.Body>
    </Card>
  );
};

export default TyreSold;
