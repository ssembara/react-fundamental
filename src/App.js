import React from "react";
import "./App.css";

import ReviewBox from "./Reviews";

function App() {
  return (
    <div className="parentbox">
      <PhotoProduct />
      <DescProduct
        isDiscount="false"
        category="SNEAKERS"
        title="Green Swamps"
      />
      <ReviewBox />
    </div>
  );
}

function PhotoProduct() {
  return (
    <div className="photo">
      <img src="sneakers.jpg" alt="sneakers.jpg" />
    </div>
  );
}

function CheckDiscount(props) {
  const { isDiscount } = props;

  if (isDiscount === "true") {
    return <p>Diskon 50% Off</p>;
  } else {
    return <p>No Discount</p>;
  }
}

function DescProduct(props) {
  const { category, title, isDiscount } = props;
  const benefits = [
    "Water Resistant",
    "Design of The Year",
    "Glow in The Dark",
  ];
  const listBenefits = benefits.map((itemBenefit) => (
    <span key={itemBenefit} className="label success">{itemBenefit}</span>
  ));

  return (
    <div>
      <div className="description">
        <p className="cate">{category}</p>
        <h1 className="title">{title}</h1>
        <p className="price">IDR 1.500.000</p>
        <CheckDiscount isDiscount={isDiscount} />
        <p className="info">
          Deadlights jack lad schooner scallywag dance the hempen jig carouser
          broadside cable strike colors. Bring a spring upon her cable holystone
          blow the man down spanker Shiver me timbers to go on account lookout
          wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot
          yardarm spyglass sheet transom heave to.
        </p>
        <div>{listBenefits}</div>
        <button onClick={(e) => Cart(title, e)}>Add to Cart</button>
      </div>
    </div>
  );
}

function Cart(e) {
  return alert("Add to Cart " + e);
}

export default App;
