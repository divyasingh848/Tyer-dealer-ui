import React from "react";
import { Carousel } from "react-bootstrap";

const reviews = [
  {
    name: "Md Nasir",
    review:
      "Excellent service from start to finish. 100% satisfaction with the job.",
    image: "https://via.placeholder.com/50", // Replace with actual image URLs
  },
  {
    name: "Rohit Bhati",
    review:
      "Went for Tyre change. Ultimate service by shoppe boys. Highly recommend.",
    image: "https://via.placeholder.com/50", // Replace with actual image URLs
  },
  {
    name: "Pradeep Kumar",
    review:
      "Best tyre shop in Indirapuram. Good dealing with customer. Overall good experience.",
    image: "https://via.placeholder.com/50", // Replace with actual image URLs
  },
];

const ReviewCarousel = () => {
  return (
    <div className="container">
      <div className=" p-2">
        <Carousel className="mt-2 p-2 ">
          <Carousel.Item>
            <div className="d-flex justify-content-around">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="text-center p-3 border rounded box gap"
                >
                  <img
                    className="rounded-circle mb-3"
                    src={review.image}
                    alt={review.name}
                    width="50"
                    height="50"
                  />
                  <div className="review-text">
                    <h5>{review.name}</h5>
                    <p>{review.review}</p>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default ReviewCarousel;
