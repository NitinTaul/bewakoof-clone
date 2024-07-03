import "./Navbar3.css";
import React, { useContext } from "react";
import {
  Box,
  HStack,
  Image,
  Link as ChakraLink,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

const HTLlinks = [
  { to: "/offers", label: "Offers" },
  { to: "/fanbook", label: "Fanbook" },
  { to: "/download_app", label: "Download App" },
  { to: "/tribe_membership", label: "Tribe Membership" },
  { to: "/contact_us", label: "Contact Us" },
];

const HTRlinks = [
  { to: "/track_order", label: "Track Order" },
  { to: "/login", label: "Login" },
];

const HBlinks = [
  { to: "/men-home", label: "MEN" },
  { to: "/women-home", label: "WOMEN" },
  { to: "/accessories", label: "ACCESSORIES" },
  { to: "/sneakers", label: "SNEAKERS" },
  { to: "/BWKF_X_Google", label: "BWKF X GOOGLE" },
  { to: "/bewakoof_air", label: "BEWAKOOF AIR" },
  { to: "/heavy_duty", label: "HEAVY DUTY" },
  { to: "/customization", label: "CUSTOMIZATION" },
  { to: "/Official_Merch", label: "OFFICIAL MERCH" },
  { to: "/plus_size", label: "PLUS SIZE" },
];

// Dropdown data
const menDropdownLinks = {
  New: [
    { label: "All New", to: "/dashboard" },
    { label: "Just Dropped", to: "#" },
    { label: "New Makeup", to: "#" },
    { label: "New Skincare", to: "#" },
  ],
  Trending: [
    { label: "The Next Big Thing", to: "#" },
    { label: "Bestsellers", to: "#" },
    { label: "Trending on Social", to: "#" },
  ],
};

const womenDropdownLinks = {
  New: [
    { label: "All New", to: "/dashboard" },
    { label: "Just Dropped", to: "#" },
    { label: "New Makeup", to: "#" },
    { label: "New Skincare", to: "#" },
  ],
  Trending: [
    { label: "The Next Big Thing", to: "#" },
    { label: "Bestsellers", to: "#" },
    { label: "Trending on Social", to: "#" },
  ],
};

const mobileCoversDropdownLinks = {
  New: [
    { label: "All New", to: "/dashboard" },
    { label: "Just Dropped", to: "#" },
    { label: "New Makeup", to: "#" },
    { label: "New Skincare", to: "#" },
  ],
  Trending: [
    { label: "The Next Big Thing", to: "#" },
    { label: "Bestsellers", to: "#" },
    { label: "Trending on Social", to: "#" },
  ],
};

const Navbar = () => {
  const { logout, authDetails } = useContext(AuthContext);

  const renderDropdown = (label, data) => (
    <Menu>
      <MenuButton
        as={ChakraLink}
        fontFamily={["montserrat", "sans-serif"]}
        fontSize={14}
        px={2}
        py={2}
        transition="all 0.2s"
        _hover={{
          textDecoration: "underline",
          textDecorationColor: "yellow",
          textUnderlineOffset: "14px",
          textUnderlineThickness: "10px",
        }}
        className="dropbtn"
      >
        {label}
      </MenuButton>
      <MenuList
        minWidth="950px"
        mt="6px"
        ml="-200px"
        bg="white"
        color="black"
        boxShadow="0px 8px 16px 0px rgba(0, 0, 0, 0.2)"
      >
        <HStack justify="space-around" p="30px 0" w="85%" m="auto">
          {Object.keys(data).map((section, index) => (
            <Box key={index}>
              <Box
                fontWeight="bold"
                mb="10px"
                color="black"
                fontFamily={["montserrat", "sans-serif"]}
                fontSize={14}
              >
                {section}
              </Box>

              {data[section].map((link, linkIndex) => (
                <ChakraLink
                  as={ReactLink}
                  to={link.to}
                  key={linkIndex}
                  display="block"
                  py="0.4vw"
                  color="black"
                  fontWeight="300"
                  fontSize={12}
                  _hover={{ backgroundColor: "#FFFFFF" }}
                >
                  {link.label}
                </ChakraLink>
              ))}
            </Box>
          ))}
        </HStack>
      </MenuList>
    </Menu>
  );

  return (
    <Box position="sticky" top="0" left="0" zIndex="10000" bg="white">
      <Box px={48} py={1} bg="#EFEFEE" color="rgba(0, 0, 0, .8)">
        <HStack justifyContent="space-between">
          <HStack>
            {HTLlinks.map((link, index) => (
              <ChakraLink
                as={ReactLink}
                key={index}
                to={link.to}
                _hover={{ textDecoration: "none" }}
              >
                {link.label}{" "}
              </ChakraLink>
            ))}
          </HStack>
          <HStack>
            {HTRlinks.map((link, index) => (
              <ChakraLink as={ReactLink} key={index} to={link.to}>
                {link.label}
              </ChakraLink>
            ))}
          </HStack>
        </HStack>
      </Box>
      <Box w="70%" m="auto" mt={0} mb={0}>
        <Flex justifyContent="space-between">
          <HStack>
            <ReactLink to="/">
              <Image
                src="https://tse3.mm.bing.net/th?id=OIP.wkhVrA0R93qBb0qBKVqEqgHaCX&pid=Api&P=0&h=180"
                alt="Logo"
                w="190px"
              />
            </ReactLink>
            <HStack>
              {[
                { label: "MEN", data: menDropdownLinks },
                { label: "WOMEN", data: womenDropdownLinks },
                { label: "MOBILE COVERS", data: mobileCoversDropdownLinks },
              ].map((category, index) => (
                <Box
                  key={index}
                  position="relative"
                  display="inline-block"
                  fontFamily={["montserrat", "sans-serif"]}
                  fontSize={4}
                  px={2}
                  py={2}
                  transition="all 0.2s"
                  _hover={{
                    textDecoration: "underline",
                    textDecorationColor: "yellow",
                    textUnderlineOffset: "14px",
                    underlineThickness: "5px",
                  }}
                >
                  {renderDropdown(category.label, category.data)}
                </Box>
              ))}
            </HStack>
          </HStack>
          <HStack>
            <InputGroup bg="#EFEFEE" borderRadius="15px" size="sm" w={242}>
              <InputLeftElement>
                <Image
                  src="https://images.bewakoof.com/web/ic-web-head-search.svg"
                  alt="Search Logo"
                  h="15px"
                  w="15px"
                />
              </InputLeftElement>

              <Input
                type="text"
                placeholder="Search by Product, Category or Collection"
                fontSize="10px"
              />
            </InputGroup>
            <Box borderLeft="1px solid #ddd" h="24px" mx={2} />
            <ChakraLink as={ReactLink} to="/login">
              Login
            </ChakraLink>
            <ChakraLink as={ReactLink} to="/wishlist">
              <Image
                src="https://images.bewakoof.com/web/ic-web-head-wishlist.svg"
                alt="Wishlist"
                h="25px"
                w="25px"
              />
            </ChakraLink>
            <ChakraLink as={ReactLink} to="/bag">
              <Image
                src="https://images.bewakoof.com/web/ic-web-head-cart.svg"
                alt="Cart"
                h="25px"
                w="25px"
              />
            </ChakraLink>
          </HStack>
        </Flex>
      </Box>
      <Box borderBottom="1px solid #ddd" />
      <Box alignContent="center" mx={7}>
        <HStack justifyContent="space-around">
          {HBlinks.map((link, index) => (
            <ChakraLink
              as={ReactLink}
              key={index}
              to={link.to}
              fontFamily={["montserrat", "sans-serif"]}
              fontSize={16}
              pt={2}
              px={2}
              color="rgba(0, 0, 0, .8)"
              _hover={{ textDecoration: "none" }}
            >
              {link.label}
            </ChakraLink>
          ))}
        </HStack>
      </Box>
    </Box>
  );
};

export default Navbar;
