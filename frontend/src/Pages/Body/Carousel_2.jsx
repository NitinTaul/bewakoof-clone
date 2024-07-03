import React from "react";
import Carousel from "react-multi-carousel";
import CarouselCard from "./CarouselCard";

function calculateDiscount(mainPrice, price) {
  const discount = ((mainPrice - price) / mainPrice) * 100;
  return discount.toFixed(2) + "% OFF"; // Format discount to two decimal places with "%"
}

const Carousel_2 = () => {
  const Products = [
    {
      id: 1,
      image:
        "https://images.bewakoof.com/t1080/women-s-black-my-badass-tee-graphic-printed-boyfriend-t-shirt-538536-1661584501-1.jpg",
      brand: "Bewakoof®",
      details: "Women's Black My Badass Tee Graphic Printed Boyfriend T-shirt",
      price: 349,
      mainprice: 999,
      discount: calculateDiscount(999, 349),
    },
    {
      id: 2,
      image:
        "https://images.bewakoof.com/t1080/men-s-blue-rider-vroom-panda-graphic-printed-t-shirt-387282-1717060217-1.jpg",
      brand: "Bewakoof®",
      details: "Men's Blue Rider Vroom Panda Graphic Printed T-shirt",
      price: 399,
      mainprice: 1099,
      discount: calculateDiscount(1099, 399),
    },
    {
      id: 3,
      image:
        "https://images.bewakoof.com/t1080/women-s-blue-just-kickin-it-graphic-printed-boyfriend-t-shirt-633730-1716287912-1.jpg",
      brand: "Bewakoof®",
      details: "OFFICIAL KUNG FU PANDA MERCHANDISE",
      price: 399,
      mainprice: 1099,
      discount: calculateDiscount(1099, 399),
    },
    {
      id: 4,
      image:
        "https://images.bewakoof.com/t1080/men-s-black-oversized-cargo-joggers-552880-1710766583-1.jpg",
      brand: "Bewakoof Air® 1.0",
      details: "Men's Black Oversized Cargo Joggers",
      price: 1049,
      mainprice: 2199,
      discount: calculateDiscount(2199, 1049),
    },
    {
      id: 5,
      image:
        "https://images.bewakoof.com/t1080/women-courage-cowardly-boyfriend-graphic-printed-t-shirt-608814-1696418509-1.jpg",
      brand: "Bewakoof®",
      details:
        "Women's Black Courage Cowardly Graphic Printed Boyfriend T-shirt",
      price: 449,
      mainprice: 1099,
      discount: calculateDiscount(1099, 449),
    },
    {
      id: 6,
      image:
        "https://images.bewakoof.com/t1080/women-s-white-motd-panda-graphic-printed-t-shirt-479771-1717060186-1.jpg",
      brand: "Bewakoof®",
      details: "Women's White MOTD Panda Graphic Printed T-shirt",
      price: 479,
      mainprice: 999,
      discount: calculateDiscount(999, 479),
    },
    {
      id: 7,
      image:
        "https://images.bewakoof.com/t1080/women-s-blue-hang-loose-relax-boyfriend-t-shirt-387816-1717060353-1.jpg",
      brand: "Bewakoof®",
      details: "Women's Blue Hang Loose Relax Boyfriend T-shirt",
      price: 399,
      mainprice: 1099,
      discount: calculateDiscount(1099, 399),
    },
    {
      id: 8,
      image:
        "https://images.bewakoof.com/t1080/men-s-red-hunter-graphic-printed-oversized-t-shirt-636819-1716287798-1.jpg",
      brand: "Bewakoof®",
      details: "Men's Red Hunter Graphic Printed Oversized T-shirt",
      price: 689,
      mainprice: 1499,
      discount: calculateDiscount(1499, 689),
    },
    {
      id: 9,
      image:
        "https://images.bewakoof.com/t320/men-s-red-pocket-jerry-graphic-printed-t-shirt-241993-1715257877-1.jpg",
      brand: "Bewakoof®",
      details: "Men's Red Pocket Jerry Graphic Printed T-shirt",
      price: 499,
      mainprice: 1099,
      discount: calculateDiscount(1099, 499),
    },
    {
      id: 10,
      image:
        "https://images.bewakoof.com/t1080/men-s-black-marvel-moon-knight-graphic-printed-t-shirt-483825-1717060300-1.jpg",
      brand: "Bewakoof®",
      details: "Men's Black Marvel Moon Knight Graphic Printed T-shirt",
      price: 399,
      mainprice: 999,
      discount: calculateDiscount(999, 399),
    },
    {
      id: 11,
      image:
        "https://images.bewakoof.com/t1080/women-s-red-sarcastic-one-dl-boyfriend-graphic-printed-t-shirt-386575-1715257454-1.jpg",
      brand: "Bewakoof®",
      details:
        "Women's Red Sarcastic One (DL) Boyfriend Graphic Printed T-shirt",
      price: 522,
      mainprice: 1099,
      discount: calculateDiscount(1099, 522),
    },
    {
      id: 12,
      image:
        "https://images.bewakoof.com/t1080/men-s-purple-seek-balance-graphic-printed-t-shirt-580213-1715257573-1.jpg",
      brand: "Bewakoof®",
      details: "Men's Purple Seek Balance Graphic Printed T-shirt",
      price: 399,
      mainprice: 1499,
      discount: calculateDiscount(1499, 399),
    },
    {
      id: 13,
      image:
        "https://images.bewakoof.com/t1080/men-s-purple-beast-within-graphic-printed-oversized-t-shirt-581488-1715257463-1.jpg",
      brand: "Bewakoof®",
      details: "Men's Purple Beast Within Graphic Printed Oversized T-shirt",
      price: 699,
      mainprice: 1499,
      discount: calculateDiscount(1499, 699),
    },
    {
      id: 14,
      image:
        "https://images.bewakoof.com/t1080/men-s-black-panther-mech-graphic-printed-oversized-t-shirt-620196-1715258032-1.jpg",
      brand: "Bewakoof®",
      details: "Men's Black Panther Mech Graphic Printed Oversized T-shirt",
      price: 699,
      mainprice: 1299,
      discount: calculateDiscount(1299, 699),
    },
    {
      id: 15,
      image:
        "https://images.bewakoof.com/t1080/men-s-white-t-shirt-105-1702967985-1.jpg",
      brand: "Bewakoof®",
      details: "Men's White T-shirt",
      price: 479,
      mainprice: 1099,
      discount: calculateDiscount(1099, 479),
    },
  ];

  return (
    <div style={{ margin: "20px 20px 30px 50px" }}>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={1000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={40}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        showDots={true}
        renderDotsOutside={true}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 5,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        sliderClass=""
        slidesToSlide={5}
        swipeable
      >
        {Products &&
          Products.map((ele) => <CarouselCard key={ele.id} element={ele} />)}
      </Carousel>
    </div>
  );
};

export default Carousel_2;
