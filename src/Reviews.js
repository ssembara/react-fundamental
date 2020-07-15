import React from "react";
import "./App.css";

function ReviewBox() {
  const reviews = [
    {
      id: 1,
      avatar: "https://gtp.now.sh/ssembara",
      name: "Sebastianus Sembara",
      review: "Harga murah, kualitas oke banget... recomendeh dehhh",
    },
    {
      id: 2,
      avatar: "https://gtp.now.sh/griko_nibras",
      name: "Griko Nibras",
      review: "Bukan kaleng2 deh, cocok banget dibuat aktivitas",
    },
    {
      id: 3,
      avatar: "https://gtp.now.sh/joshuanatanielm",
      name: "Irvan Alfaridzi",
      review: "Anjayyy... sepatu paling recomended buat anak muda....",
    },
  ];

  const listReviews = reviews.map((itemReview) => (
    <div key={itemReview.id} className="item">
      <img src={itemReview.avatar} alt="avatar_photo"></img>
      <div className="user">
        <h3>{itemReview.name}</h3>
        <p>{itemReview.review}</p>
      </div>
    </div>
  ));

  return (
    <div className="review-box">
      <h2>Reviews</h2>
      {listReviews}
    </div>
  );
}

export default ReviewBox;
