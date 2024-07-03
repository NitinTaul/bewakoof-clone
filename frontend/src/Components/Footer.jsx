import React from "react";
import { Box, Heading, HStack, Button, Grid, GridItem } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Box bg="black" p={5}>
      <Box w="75%" m="auto">
        <Heading as="h3" size="lg" color="#fdd835" mb={5}>
          Bewakoof
        </Heading>
        <Grid templateColumns="repeat(4, 1fr)" gap={6} color="white">
          <GridItem>
            <Heading as="h6" size="xs" mb={2} color="#7F6E24">
              CUSTOMER SERVICE
            </Heading>
            <ul className="footerDiv">
              <li style={{ listStyleType: "none" }}>
                <a href="#">Contact Us</a>
              </li>
              <li style={{ listStyleType: "none" }}>
                <a href="#">Track Order</a>
              </li>
              <li style={{ listStyleType: "none" }}>
                <a href="#">Return Order</a>
              </li>
              <li style={{ listStyleType: "none" }}>
                <a href="#">Cancel Order</a>
              </li>
            </ul>
          </GridItem>

          <GridItem>
            <Heading as="h6" size="xs" mb={2} color="#7F6E24">
              COMPANY
            </Heading>
            <ul className="footerDiv">
              <li style={{ listStyleType: "none" }}>
                <a href="#">About Us</a>
              </li>
              <li style={{ listStyleType: "none" }}>
                <a href="#">We're Hiring</a>
              </li>
              <li style={{ listStyleType: "none" }}>
                <a href="#">Terms & Conditions</a>
              </li>
              <li style={{ listStyleType: "none" }}>
                <a href="#">Privacy Policy</a>
              </li>
              <li style={{ listStyleType: "none" }}>
                <a href="#">Blog</a>
              </li>
            </ul>
          </GridItem>

          <GridItem>
            <Heading as="h6" size="xs" mb={2} color="#7F6E24">
              CONNECT WITH US
            </Heading>
            <ul className="footerDiv">
              <li style={{ listStyleType: "none" }}>
                <HStack>
                  <a href="#">
                    <img
                      className="Socialmedia"
                      src="https://img.icons8.com/?size=100&id=21077&format=png&color=000000"
                      alt=""
                    />
                  </a>
                  <a href="#">4.7M People Like this</a>
                </HStack>
              </li>
              <li style={{ listStyleType: "none" }}>
                <HStack>
                  <a href="#">
                    <img
                      className="Socialmedia"
                      src="https://img.icons8.com/?size=100&id=48839&format=png&color=000000"
                      alt=""
                    />
                  </a>
                  <a href="#">1M Followers</a>
                </HStack>
              </li>
              <li style={{ listStyleType: "none" }}>
                <HStack>
                  <a href="#">
                    <img
                      className="Socialmedia"
                      src="https://img.icons8.com/?size=100&id=13963&format=png&color=000000"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      className="Socialmedia"
                      src="https://img.icons8.com/?size=100&id=63676&format=png&color=000000"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      className="Socialmedia"
                      src="https://img.icons8.com/?size=100&id=xX_DGGk3VqYA&format=png&color=000000"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      className="Socialmedia"
                      src="https://img.icons8.com/?size=100&id=17843&format=png&color=000000"
                      alt=""
                    />
                  </a>
                </HStack>
              </li>
            </ul>
          </GridItem>

          <GridItem>
            <Heading as="h6" size="xs" mb={2} color="#7F6E24">
              KEEP UP TO DATE
            </Heading>
            <HStack>
              <input
                type="text"
                placeholder="Enter Email Id"
                style={{
                  fontSize: "10px",
                  color: "gray",
                  backgroundColor: "black",
                  borderBottom: "1px solid yellow",
                  height: "22px",
                }}
              />
              <Button
                colorScheme="yellow"
                variant="solid"
                size="xs"
                borderRadius="0px"
              >
                Subscribe
              </Button>
            </HStack>
          </GridItem>
          <GridItem>
            <HStack>
              <a href="#">
                <img
                  className="seviceimg"
                  src="https://img.icons8.com/?size=100&id=OnZ1L3z1o4Cx&format=png&color=000000"
                  alt=""
                />
              </a>
              <a href="#">15 Days return policy*</a>
            </HStack>
            <HStack>
              <a href="#">
                <img
                  className="seviceimg"
                  src="https://img.icons8.com/?size=100&id=HC6aqv5gbRrZ&format=png&color=000000"
                  alt=""
                />
              </a>
              <a href="#">Cash on delivery*</a>
            </HStack>
          </GridItem>
          <GridItem>
            <Heading as="h6" size="xs" mb={2} color="#7F6E24">
              DOWNLOAD THE APP
            </Heading>
            <HStack>
              <a href="#">
                {" "}
                <img
                  src="https://images.bewakoof.com/web/app_android_v1.png"
                  alt=""
                />
              </a>
              <a href="#">
                {" "}
                <img
                  src="https://images.bewakoof.com/web/app_ios_v1.png"
                  alt=""
                />
              </a>
            </HStack>
          </GridItem>
          <GridItem>
            <Heading as="h6" size="xs" mb={2} color="#7F6E24">
              100% SECURE PAYMENT
            </Heading>
            <img
              src="https://images.bewakoof.com/web/secure-payments-image.png"
              alt=""
            />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
