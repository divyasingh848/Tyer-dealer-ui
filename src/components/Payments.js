import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Payments = () => {
  return (
    <div>
      <div class="container mt-3">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Tyre Dealers</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              SHREE HEMKUNT TYRES AND SERVICES
            </li>
          </ol>
        </nav>
        <div class="card row1 px-9">
          <div class="card-body">
            <ul class="list-unstyled">
              <Row>
                <div className="col-3">
                  <li>
                    {" "}
                    <i
                      className="bi bi-check"
                      style={{ color: "green" }}
                    ></i>{" "}
                    Payment Mode
                  </li>
                  <li>
                    <i className="bi bi-check" style={{ color: "green" }}></i>{" "}
                    Deposit to Account
                  </li>{" "}
                  <li>
                    <i className="bi bi-check" style={{ color: "green" }}></i>{" "}
                    Net Banking
                  </li>{" "}
                </div>
                <div className="col-4">
                  <li>
                    <i className="bi bi-check" style={{ color: "green" }}></i>{" "}
                    Credit Card/Debit Card
                  </li>{" "}
                  <li>
                    <i className="bi bi-check" style={{ color: "green" }}></i>{" "}
                    UPI{" "}
                  </li>{" "}
                  <li>
                    <i className="bi bi-check" style={{ color: "green" }}></i>{" "}
                    Wallets (PayTM/PhonePe/Amazon etc.)
                  </li>
                </div>
              </Row>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
