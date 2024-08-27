import React, { useState } from "react";
import TyersSold from "./TyersSold";

const TyreList = () => {
  const tyres = [
    {
      brand: "Apollo",
      model: "AMAZER 4G LIFE",
      size: "145/80 R12",
      price: 3136,
      warranty: "5 Year Warranty",
      reviews: 320,
    },
    {
      brand: "Apollo",
      model: "AMAZER 4G LIFE",
      size: "155/65 R13",
      price: 3562,
      warranty: "5 Year Warranty",
      reviews: 320,
    },
    {
      brand: "Apollo",
      model: "AMAZER 4G LIFE",
      size: "155/70 R13",
      price: 3401,
      warranty: "5 Year Warranty",
      reviews: 320,
    },
    {
      brand: "Apollo",
      model: "AMAZER 4G LIFE",
      size: "145/80 R12",
      price: 3774,
      warranty: "5 Year Warranty",
      reviews: 320,
    },
    {
      brand: "MRF",
      model: "ZVTS",
      size: "145/80 R12",
      price: 3200,
      warranty: "4 Year Warranty",
      reviews: 280,
    },
    {
      brand: "MRF",
      model: "ZVTS",
      size: "155/65 R13",
      price: 3600,
      warranty: "4 Year Warranty",
      reviews: 300,
    },
    {
      brand: "Michelin",
      model: "Energy XM2",
      size: "155/70 R13",
      price: 3900,
      warranty: "6 Year Warranty",
      reviews: 350,
    },
    {
      brand: "Michelin",
      model: "Energy XM2",
      size: "165/80 R14",
      price: 4000,
      warranty: "6 Year Warranty",
      reviews: 340,
    },
  ];

  const [selectedBrand, setSelectedBrand] = useState("");
  const [visibleTyres, setVisibleTyres] = useState(4);

  const handleBrandFilter = (e) => {
    setSelectedBrand(e.target.value);
  };

  const loadMore = () => {
    setVisibleTyres((prevValue) => prevValue + 4);
  };

  const filteredTyres = selectedBrand
    ? tyres.filter((tyre) => tyre.brand === selectedBrand)
    : tyres;

  return (
    <div className="container mt-4 row1">
      <h5>Tyres sold by this Dealer</h5>

      {/* Filter Section */}
      <div className="mb-3">
        <label htmlFor="brandFilter" className="form-label">
          Filter by Brand:
        </label>
        <select
          id="brandFilter"
          style={{ width: "50%" }}
          className="form-select"
          onChange={handleBrandFilter}
          value={selectedBrand}
        >
          <option value="">All Brands</option>
          <option value="Apollo">Apollo</option>
          <option value="MRF">MRF</option>
          <option value="Michelin">Michelin</option>
        </select>
      </div>

      {/* Tyre Cards Section */}
      <div className="d-flex flex-wrap">
        {filteredTyres.slice(0, visibleTyres).map((tyre, index) => (
          <TyersSold
            key={index}
            brand={tyre.brand}
            model={tyre.model}
            size={tyre.size}
            price={tyre.price}
            warranty={tyre.warranty}
            reviews={tyre.reviews}
          />
        ))}
      </div>

      {/* Load More Button */}
      {visibleTyres < filteredTyres.length && (
        <div className="text-center mt-3">
          <button className="btn btn-primary" onClick={loadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default TyreList;
