import React from "react";

const CarouselCard = ({ element }) => {
  const { image, brand, details, mainprice, price, discount } = element;
  return (
    <div
      style={{
        height: "350px",
        width: "80%",
        border: "1px solid #d3d3d3",
        borderRadius: "10px",
        // boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      }}
    >
      <img
        style={{ width: "100%", borderRadius: "10px" }}
        src={image}
        alt="img"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0px 8px",
        }}
      >
        <div>
          <b style={{ fontSize: "9px" }}>{brand}</b>
          <p
            style={{
              fontSize: "7px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "150px", // You can adjust this value as needed
            }}
          >
            {details}
          </p>
        </div>
        <div>
          <img
            style={{ width: "40px", height: "40px", objectFit: "contain" }}
            src="https://images.bewakoof.com/web/Wishlist.svg"
            alt="wishlist"
          />
        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
          padding: "0px 8px",
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "space-around",
            gap: "5px",
          }}
        >
          <b>₹{price}</b>
          <p style={{ textDecoration: "line-through" }}>₹{mainprice}</p>
        </div>
        <div>
          <h2 style={{ color: "#14BE60" }}>{discount}</h2>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
