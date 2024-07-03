import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel_1.css";

const Carousel_1ImgCard = ({ image }) => {
  return (
    <div style={{ padding: "30px 10px" }}>
      <img
        style={{ width: "100%", borderRadius: "8px" }}
        src={image}
        alt="img"
      />
    </div>
  );
};

const Carousel_1 = () => {
  const Products = [
    {
      id: 1,
      image:
        "https://images.bewakoof.com/uploads/grid/app/1xx1June-statementtexturedshirts-men1-1718722221.jpg",
    },
    {
      id: 2,
      image:
        "https://images.bewakoof.com/uploads/grid/app/Summer-Essential-1x1-IK-RM-HC-Banner-1718285039.gif",
    },
    {
      id: 3,
      image:
        "https://images.bewakoof.com/uploads/grid/app/HC---1X1-DOTW-1718707621.jpg",
    },
    {
      id: 4,
      image:
        "https://images.bewakoof.com/uploads/grid/app/HC---1X1-parachute-pants-common-1718893703.jpg",
    },
    {
      id: 5,
      image:
        "https://images.bewakoof.com/uploads/grid/app/HC---1X1-twice-as-nice---common-1718284306.jpg",
    },
    {
      id: 6,
      image:
        "https://images.bewakoof.com/uploads/grid/app/HC---1X1-DOTW-common---1--1718962415.jpg",
    },
  ];

  const imageElements = Products.map((product) => (
    <Carousel_1ImgCard key={product.id} image={product.image} />
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
        dotListClass="custom-dot-list"
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
        slidesToSlide={2}
        swipeable
      >
        {imageElements}
      </Carousel>
    </div>
  );
};

export default Carousel_1;
