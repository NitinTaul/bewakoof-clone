import "./Navbar4.css";
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
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

const HTLlinks = [
  { to: "/offers", label: "Offers" },
  { to: "/fanbook", label: "Fanbook" },
  { to: "/download_app", label: "Download App" },
  { to: "/tribe_membership", label: "Tribe Membership" },
];

const HTRlinks = [
  { to: "/contact_us", label: "Contact Us" },
  { to: "/track_order", label: "Track Order" },
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
      <MenuButton as={ChakraLink} className="dropbtn">
        {label}
      </MenuButton>
      <MenuList className="menu-list">
        <HStack justify="space-around" p="30px 0" w="85%" m="auto">
          {Object.keys(data).map((section, index) => (
            <Box key={index}>
              <Box className="menu-heading">{section}</Box>
              {data[section].map((link, linkIndex) => (
                <ChakraLink
                  as={ReactLink}
                  to={link.to}
                  key={linkIndex}
                  className="menu-item"
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
                fontFamily={["montserrat", "sans-serif"]}
                fontSize={8}
                _hover={{ textDecoration: "none" }}
              >
                {link.label}
              </ChakraLink>
            ))}
          </HStack>
          <HStack>
            {HTRlinks.map((link, index) => (
              <ChakraLink
                as={ReactLink}
                key={index}
                to={link.to}
                fontFamily={["montserrat", "sans-serif"]}
                fontSize={8}
                _hover={{ textDecoration: "none" }}
              >
                {link.label}
              </ChakraLink>
            ))}
          </HStack>
        </HStack>
      </Box>

      <Box w="70%" m="auto" mt={0} mb={0} pt={0} pb={0}>
        <HStack justifyContent="space-between">
          <HStack>
            <ReactLink to="/">
              <Image
                src="https://tse3.mm.bing.net/th?id=OIP.wkhVrA0R93qBb0qBKVqEqgHaCX&pid=Api&P=0&h=180"
                alt="Logo"
                w="160px"
              />
            </ReactLink>
            {/* <HStack>
              {[
                { label: "MEN", data: menDropdownLinks },
                { label: "WOMEN", data: womenDropdownLinks },
                { label: "MOBILE COVERS", data: mobileCoversDropdownLinks },
              ].map((category, index) => (
                <Box
                  key={index}
                  position="relative"
                  display="inline-block"
                  className="dropbtn"
                >
                  {renderDropdown(category.label, category.data)}
                </Box>
              ))}
            </HStack> */}
            <HStack>
            <div className="dropdown">
              <a href="#" className="dropbtn">
                <ReactLink to="/products">Men</ReactLink>
              </a>
              <div className="dropdown-content">
                <div className="row">
                  <div className="column sub-menu">
                    <ReactLink to="/dashboard">All New</ReactLink>
                    <ReactLink to="">Just Dropped</ReactLink>
                    <ReactLink to="">New Makeup</ReactLink>
                    <ReactLink to="">New Skincare</ReactLink>
                    <ReactLink to="">New Hair Care</ReactLink>
                    <ReactLink to="">New Fragrance</ReactLink>
                    <ReactLink to="">New Bath & Body</ReactLink>
                    <ReactLink to="">New Tools & Brushes</ReactLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown">
              <a href="#" className="dropbtn">
                <ReactLink to="/products">Women</ReactLink>
              </a>
              <div className="dropdown-content">
                <div className="row">
                  <div className="column sub-menu">
                    <ReactLink to="/dashboard">All New</ReactLink>
                    <ReactLink to="">Just Dropped</ReactLink>
                    <ReactLink to="">New Makeup</ReactLink>
                    <ReactLink to="">New Skincare</ReactLink>
                    <ReactLink to="">New Hair Care</ReactLink>
                    <ReactLink to="">New Fragrance</ReactLink>
                    <ReactLink to="">New Bath & Body</ReactLink>
                    <ReactLink to="">New Tools & Brushes</ReactLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown">
              <a href="#" className="dropbtn">
                <ReactLink to="/products">Mobile Cover</ReactLink>
              </a>
              <div className="dropdown-content">
                <div className="row">
                  <div className="column sub-menu">
                    <ReactLink to="/dashboard">All New</ReactLink>
                    <ReactLink to="">Just Dropped</ReactLink>
                    <ReactLink to="">New Makeup</ReactLink>
                    <ReactLink to="">New Skincare</ReactLink>
                    <ReactLink to="">New Hair Care</ReactLink>
                    <ReactLink to="">New Fragrance</ReactLink>
                    <ReactLink to="">New Bath & Body</ReactLink>
                    <ReactLink to="">New Tools & Brushes</ReactLink>
                  </div>
                </div>
              </div>
            </div>
            </HStack>
          </HStack>
          <HStack>
            <InputGroup bg="#EFEFEE" borderRadius="35px" size="sm" w={242}>
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
            <ChakraLink
              as={ReactLink}
              to="/login"
              _hover={{ textDecoration: "none" }}
            >
              Login
            </ChakraLink>
            <ChakraLink as={ReactLink} to="/wishlist">
              <Image
                src="https://images.bewakoof.com/web/ic-web-head-wishlist.svg"
                alt="Wishlist"
                h="20px"
                w="20px"
              />
            </ChakraLink>
            <ChakraLink as={ReactLink} to="/bag">
              <Image
                src="https://images.bewakoof.com/web/ic-web-head-cart.svg"
                alt="Cart"
                h="20px"
                w="20px"
              />
            </ChakraLink>
          </HStack>
        </HStack>
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
              fontSize={14}
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
