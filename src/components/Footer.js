import React from "react";
import "./DealerInfo.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className=" text-white p-3">
      <Container>
        <Row className="p-3 f-up">
          <div className="col">
            <h6 className="text-dark">Have a question about Tyres?</h6>
            <p className="text-secondary">
              Get an answer in 24 hours from our experts.
            </p>
            <input
              type="search"
              placeholder="Ask or Search your question"
            ></input>
          </div>
          <div className="col-2">
            <img
              class="card-img-top"
              src="https://cdn.tyreplex.net/themes/moonlight/images/haveQuestion-bg.png?v=600&tr=q-60"
              alt="Card image"
              width={40}
              height={100}
            />
          </div>
        </Row>
        <Row className="text-secondary mt-3">
          <div className="col ">
            <center>
              <div className="col-3  ">
                <img
                  class="card-img-top"
                  src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo-mbl.png?tr=w-150,q-77&v=512"
                  alt="Card image"
                  width={10}
                  height={30}
                />
              </div>
              <div className="col-2 d-flex mt-2 gap-2 ">
                <img
                  class="card-img-top"
                  src="https://cdn.tyreplex.net/themes/moonlight/images/fb-icon.png?v=526&tr=w-24,q-40"
                  alt="Card image"
                  width="10px"
                  height="10px"
                />
                <img
                  class="card-img-top"
                  src="https://cdn.tyreplex.net/themes/moonlight/images/insta-icon.png?v=526&tr=w-24,q-40"
                  alt="Card image"
                  width="10px"
                  height="10px"
                />
              </div>
            </center>
          </div>
          <div className="col mb-3">
            <div className="col">Who We Are</div>
            <div className="col">Are you a Tyre Dealer?</div>
          </div>
          <div className="col mb-3">
            <div className="col">Privacy Policy</div>
            <div className="col">Terms of use</div>
          </div>
          <div className="col mb-3">
            <div className="col">Contact Us</div>
            <div className="col">Career </div>
            <div className="col">Shipping & Return Policy</div>
          </div>
          <hr></hr>
          <p className="text-center">
            ©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights
            Reserved.
          </p>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
