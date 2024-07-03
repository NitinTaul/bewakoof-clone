import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel_4.css";

const Carousel_4ImgCard = ({ image }) => {
  return (
    <div style={{ padding: "10px" }}>
      <img
        style={{ width: "100%", borderRadius: "8px" }}
        src={image}
        alt="img"
      />
    </div>
  );
};

const Carousel_4 = () => {
  const Products = [
    {
      id: 1,
      image:
        "https://images.bewakoof.com/uploads/grid/app/1x1-jeans-common-1717402266.jpg",
    },
    {
      id: 2,
      image:
        "https://images.bewakoof.com/uploads/grid/app/1x1-summershirts-common-1717402266.jpg",
    },
    {
      id: 3,
      image:
        "https://images.bewakoof.com/uploads/grid/app/1x1-jeans-common-1717402266.jpg",
    },
    {
      id: 4,
      image:
        "https://images.bewakoof.com/uploads/grid/app/1x1-summershirts-common-1717402266.jpg",
    },
    {
      id: 5,
      image:
        "https://images.bewakoof.com/uploads/grid/app/1x1-jeans-common-1717402266.jpg",
    },
    {
      id: 6,
      image:
        "https://images.bewakoof.com/uploads/grid/app/1x1-summershirts-common-1717402266.jpg",
    },
  ];

  const imageElements = Products.map((product) => (
    <Carousel_4ImgCard key={product.id} image={product.image} />
  ));

  return (
    <div style={{ position: "relative" }}>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass="custom-dot-list-4"
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass="carousel-item-padding-40-px"
        keyBoardControl
        minimumTouchDrag={80}
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
            items: 3,
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
        slidesToSlide={1}
        swipeable
      >
        {imageElements}
      </Carousel>
    </div>
  );
};

export default Carousel_4;
