import React from "react";
import { Carousel } from "react-bootstrap";

const DealsIn = () => {
  const deals = [
    {
      name: "MRF",
      logo: "https://www.pngitem.com/pimgs/m/218-2189796_mrf-tyre-logo-png-transparent-png.png",
    },
    {
      name: "CEAT",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS57pHnjMcb8dvXB8SqScKgyChVSZBvFzrbbA&s",
    },
    {
      name: "Goodyear",
      logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0005/1588/brand.gif?itok=r8IBTqqp",
    },
    {
      name: "Apollo",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh1kRb4e_oO66pfRumyerbfY_QOHw-2OCk0Q&s",
    },
    {
      name: "Bridgestone",
      logo: "https://i.pinimg.com/originals/6b/db/80/6bdb803d5948189038910297567f6f2e.png",
    },
    {
      name: "JK Tyre",
      logo: "https://jktyre.com/images/new/JKTyreIndustries.jpg",
    },
    {
      name: "Apollo",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh1kRb4e_oO66pfRumyerbfY_QOHw-2OCk0Q&s",
    },
    {
      name: "Bridgestone",
      logo: "https://i.pinimg.com/originals/6b/db/80/6bdb803d5948189038910297567f6f2e.png",
    },
    {
      name: "JK Tyre",
      logo: "https://jktyre.com/images/new/JKTyreIndustries.jpg",
    },
  ];

  // Split the deals into groups of 3 items per slide
  const groupedDeals = [];
  for (let i = 0; i < deals.length; i += 3) {
    groupedDeals.push(deals.slice(i, i + 3));
  }

  return (
    <div className="container my-4 mt-3 row1">
      <h5>Deals in</h5>
      <Carousel indicators={false} interval={3000} controls={true}>
        {groupedDeals.map((group, index) => (
          <Carousel.Item key={index} className="">
            <div className="d-flex justify-content-between ">
              {group.map((deal, idx) => (
                <div key={idx} className="text-center row2 box gap">
                  <img src={deal.logo} alt={deal.name} width="100" />
                  <p>{deal.name}</p>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default DealsIn;
