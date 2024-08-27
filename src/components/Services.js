import React from "react";

const Services = () => {
  const services = [
    {
      name: "Wheel Balancing",
      icon: "	https://cdn.tyreplex.net/images/wheel-alignment-bal.png?tr=w-100",
    }, // Replace with actual icon URLs
    {
      name: "Wheel Alignment",
      icon: "https://cdn.tyreplex.net/images/wheel-alignment.png?tr=w-100",
    },
  ];

  return (
    <div className="container mt-3 row1">
      <h3>Services offered by this dealer</h3>
      <div className="d-flex gap ">
        {services.map((service, index) => (
          <div
            key={index}
            className="card p-3 text-center"
            style={{ width: "18rem" }}
          >
            <img
              src={service.icon}
              alt={service.name}
              className="card-img-top"
              style={{ maxWidth: "100px", margin: "0 auto" }}
            />
            <div className="card-body">
              <p className="card-title">{service.name}</p>
              <button className="btn btn-danger">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
