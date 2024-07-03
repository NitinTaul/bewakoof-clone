import {
  Box,
  HStack,
  Image,
  Link as ChakraLink,
  InputLeftElement,
  Input,
  InputGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
  // useDisclosure,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

import { Link as ReactLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import { useContext, useState } from "react";
import "./Navbar.css";
const HTLlinks = [
  {
    to: "/offers",
    label: "Offers",
  },
  {
    to: "/fanbook",
    label: "Fanbook",
  },
  {
    to: "/download_app",
    label: "Download_App",
  },
  {
    to: "/tribe_membership",
    label: "Tribe Membership",
  },
  {
    to: "/contact_us",
    label: "Contact Us",
  },
];

const HTRlinks = [
  {
    to: "/track_order",
    label: "Track Order",
  },
  {
    to: "/login",
    label: "Login",
  },
];
const HMLlinks = [
  // {
  //   to: "/",
  //   label: "Home",
  //   image: "../assets/images/Logo_img.jsx", // Replace with your image path
  //   alt: "Home icon",
  // },
  {
    to: "/men",
    label: "MEN",
  },
  {
    to: "/women",
    label: "WOMEN",
  },
  {
    to: "/mobile_cover",
    label: "MOBILE COVER",
  },
];
const HMRlinks = [
  {
    to: "/login",
    label: "Login",
  },
  {
    to: "/wishlist",
    label: "Wishlist",
  },
  {
    to: "/bag",
    label: "Bag",
  },
];
const HBlinks = [
  {
    to: "/men-home",
    label: "MEN",
  },
  {
    to: "/women-home",
    label: "WOMEN",
  },
  {
    to: "/accessories",
    label: "ACCESSORIES",
  },
  {
    to: "/sneakers",
    label: "SNEAKERS",
  },
  {
    to: "/BWKF_X_Google",
    label: "BWKF X GOOGLE",
  },
  {
    to: "/bewakoof_air",
    label: "BEWAKOOF AIR",
  },
  {
    to: "/heavy_duty",
    label: "HEAVY DUTY",
  },
  {
    to: "/customization",
    label: "CUSTOMIZATION",
  },
  {
    to: "/Official_Merch",
    label: "OFFICIAL MARCH",
  },
  {
    to: "/plus_size",
    label: "PLUS SIZE",
  },
];
const DropdownMenu = () => {
  return (
    <Menu>
      <MenuButton as={ReactLink} to="/products" variant="link">
        Men
        <Box position="absolute" bottom="-4px" left="0" width="100%">
          <Box h="2px" bg="yellow" />
        </Box>
      </MenuButton>
      <MenuList w="950px" minW="200px" m="auto">
        <MenuOptionGroup title="Shop by Category" type="radio">
          <MenuItem as={ReactLink} to="/dashboard">
            All New
          </MenuItem>
          <MenuItem as={ReactLink} to="">
            Just Dropped
          </MenuItem>
          <MenuItem as={ReactLink} to="">
            New Makeup
          </MenuItem>
          <MenuItem as={ReactLink} to="">
            New Skincare
          </MenuItem>
          <MenuItem as={ReactLink} to="">
            New Hair Care
          </MenuItem>
          <MenuItem as={ReactLink} to="">
            New Fragrance
          </MenuItem>
          <MenuItem as={ReactLink} to="">
            New Bath & Body
          </MenuItem>
          <MenuItem as={ReactLink} to="">
            New Tools & Brushes
          </MenuItem>
        </MenuOptionGroup>
        <MenuDivider />
        <MenuOptionGroup title="Explore More" type="radio">
          <MenuItem as={ReactLink} to="">
            The Next Big Thing
          </MenuItem>
          <MenuItem as={ReactLink} to="">
            Bestsellers
          </MenuItem>
          <MenuItem as={ReactLink} to="">
            Trending on Social
          </MenuItem>
          <MenuItem as={ReactLink} to="">
            Refillable Beauty Products
          </MenuItem>
          <MenuItem as={ReactLink} to="">
            Quizzes & Buying Guides
          </MenuItem>
          <MenuItem as={ReactLink} to="">
            Clean Beauty Guide
          </MenuItem>
          <MenuItem as={ReactLink} to="">
            Clean+ Planet Positive Beauty Guide
          </MenuItem>
          <MenuItem as={ReactLink} to="">
            FSA & HSA Eligible
          </MenuItem>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

// const DropdownMenu = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMouseEnter = () => setIsMenuOpen(true);
//   const handleMouseLeave = () => setIsMenuOpen(false);

//   return (
//     <HStack spacing={4}>
//       <Menu isOpen={isMenuOpen}>
//         <MenuButton
//           as={ReactLink}
//           to="/products"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//           variant="link"
//           position="relative"
//           _focus={{ boxShadow: "none" }}
//           sx={{
//             "&:focus, &:active": {
//               border: "none", // Remove border on hover, focus, and active
//               outline: "none", // Remove outline on focus
//               boxShadow: "none", // Remove box-shadow on focus
//             },
//             "::after": {
//               content: '""',
//               display: "block",
//               width: "0",
//               height: "3px", // Thickness of the underline
//               background: "yellow",
//               transition: "width 0.3s ease",
//               position: "absolute",
//               bottom: "-4px", // Adjust position as needed
//               left: "0",
//             },
//             "&:hover::after": {
//               width: "100%",
//             },
//           }}
//           fontFamily={["montserrat", "sans-serif"]}
//           fontSize={14}
//           pt={2}
//           px={2}
//           color="rgba(0, 0, 0, .8)"
//         >
//           Men
//         </MenuButton>
//         <MenuList
//           w="950px"
//           minW="200px"
//           ml="-200px"
//           mt={11}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//           _focus={{ boxShadow: "none" }}
//           sx={{
//             "&:hover, &:focus, &:active": {
//               border: "none", // Remove border on hover, focus, and active
//               outline: "none", // Remove outline on focus
//               boxShadow: "none", // Remove box-shadow on focus
//             },
//           }}
//         >
//           <MenuOptionGroup title="Shop by Category" type="radio">
//             <MenuItemOption as={ReactLink} to="/dashboard">
//               All New
//             </MenuItemOption>
//             <MenuItemOption as={ReactLink} to="">
//               Just Dropped
//             </MenuItemOption>
//             <MenuItemOption as={ReactLink} to="">
//               New Makeup
//             </MenuItemOption>
//             <MenuItemOption as={ReactLink} to="">
//               New Skincare
//             </MenuItemOption>
//             <MenuItemOption as={ReactLink} to="">
//               New Hair Care
//             </MenuItemOption>
//             <MenuItemOption as={ReactLink} to="">
//               New Fragrance
//             </MenuItemOption>
//             <MenuItemOption as={ReactLink} to="">
//               New Bath & Body
//             </MenuItemOption>
//             <MenuItemOption as={ReactLink} to="">
//               New Tools & Brushes
//             </MenuItemOption>
//           </MenuOptionGroup>
//           <MenuDivider />
//         </MenuList>
//       </Menu>
//     </HStack>
//   );
// };

const Navbar = () => {
  const { logout, authDetails } = useContext(AuthContext);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        left: "0",
        zIndex: "10000",
        backgroundColor: "white",
      }}
    >
      <Box
        px={48}
        py={1}
        mt={0}
        mb={0}
        fontFamily={["montserrat", "sans-serif"]}
        fontSize={8}
        color="rgba(0, 0, 0, .8)"
        bg="#EFEFEE"
      >
        <HStack justifyContent="space-between">
          <HStack>
            {HTLlinks.map((link, index) => (
              <ChakraLink
                as={ReactLink}
                key={index}
                to={link.to}
                _hover={{ textDecoration: "none" }}
              >
                {link.label}
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

        {/* {authDetails.isLoggedIn ? (
          <Button onClick={logout}>Logout</Button>
        ) : (
          <ChakraLink
            as={ReactLink}
            to={"/login"}
            _hover={{ textDecoration: "underline", color: "blue" }}
          >
            <Button>Login</Button>
          </ChakraLink>
        )} */}
      </Box>

      <Box w="70%" m="auto" mt={0} mb={0}>
        <HStack justifyContent="space-between">
          <HStack>
            <a href="../Pages/Header/Middle/Home.jsx">
              <Image
                src="https://tse3.mm.bing.net/th?id=OIP.wkhVrA0R93qBb0qBKVqEqgHaCX&pid=Api&P=0&h=180"
                alt="Logo"
                w="190px"
              />
            </a>

            {/* <DropdownMenu /> */}

            {/* <HStack spacing={4}>
              <Menu isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
                <MenuButton as={ReactLink} to="/products" variant="link">
                  Men
                  <Box position="absolute" bottom="-4px" left="0" width="100%">
                    <Box h="2px" bg="yellow" />
                  </Box>
                </MenuButton>
                <MenuList w="950px" minW="200px" ml="-200px">
                  <MenuOptionGroup title="Shop by Category" type="radio">
                    <MenuItem as={ReactLink} to="/dashboard">
                      All New
                    </MenuItem>
                    <MenuItem as={ReactLink} to="">
                      Just Dropped
                    </MenuItem>
                    <MenuItem as={ReactLink} to="">
                      New Makeup
                    </MenuItem>
                    <MenuItem as={ReactLink} to="">
                      New Skincare
                    </MenuItem>
                    <MenuItem as={ReactLink} to="">
                      New Hair Care
                    </MenuItem>
                    <MenuItem as={ReactLink} to="">
                      New Fragrance
                    </MenuItem>
                    <MenuItem as={ReactLink} to="">
                      New Bath & Body
                    </MenuItem>
                    <MenuItem as={ReactLink} to="">
                      New Tools & Brushes
                    </MenuItem>
                  </MenuOptionGroup>
                  <MenuDivider />
                  <MenuOptionGroup title="Explore More" type="radio">
                    <MenuItem as={ReactLink} to="">
                      The Next Big Thing
                    </MenuItem>
                    <MenuItem as={ReactLink} to="">
                      Bestsellers
                    </MenuItem>
                    <MenuItem as={ReactLink} to="">
                      Trending on Social
                    </MenuItem>
                    <MenuItem as={ReactLink} to="">
                      Refillable Beauty Products
                    </MenuItem>
                    <MenuItem as={ReactLink} to="">
                      Quizzes & Buying Guides
                    </MenuItem>
                    <MenuItem as={ReactLink} to="">
                      Clean Beauty Guide
                    </MenuItem>
                    <MenuItem as={ReactLink} to="">
                      Clean+ Planet Positive Beauty Guide
                    </MenuItem>
                    <MenuItem as={ReactLink} to="">
                      FSA & HSA Eligible
                    </MenuItem>
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            </HStack> */}

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

            {/* {HMLlinks.map((link, index) => (
              <ChakraLink
                as={ReactLink}
                key={index}
                to={link.to}
                fontFamily={["montserrat", "sans-serif"]}
                fontSize={14}
                pt={2}
                px={2}
                color="rgba(0, 0, 0, .8)"
                _hover={{
                  textDecoration: "underline yellow 3px solid",
                  textUnderlineOffset: 14, 
                }}
              >
                {link.label}
              </ChakraLink>
            ))} */}
          </HStack>
          <HStack>
            <InputGroup bg="#EFEFEE" borderRadius="35px" size="md" w={242}>
              <InputLeftElement>
                <Image
                  src="https://images.bewakoof.com/web/ic-web-head-search.svg"
                  alt="Search Logo"
                  h="15px"
                  w="15px"
                />
              </InputLeftElement>
              <Input
                type="tel"
                placeholder="Search by Product,Category or Collection"
                style={{ fontSize: "10px" }}
              />
            </InputGroup>
            <div class="vl"></div>
            <a href="../Pages/Header/Middle/Login.jsx">Login</a>
            <a href="../Pages/Header/Middle/Wishlist.jsx">
              <Image
                src="https://images.bewakoof.com/web/ic-web-head-wishlist.svg"
                alt="Logo"
                h="25px"
                w="25px"
              />
            </a>
            <a href="../Pages/Header/Middle/Bag.jsx">
              <Image
                src="https://images.bewakoof.com/web/ic-web-head-cart.svg"
                alt="Logo"
                h="25px"
                w="25px"
              />
            </a>
          </HStack>
        </HStack>
      </Box>
      <hr />
      <Box alignContent="center" mx={7}>
        <HStack>
          {HBlinks.map((link, index) => (
            <ChakraLink
              as={ReactLink}
              key={index}
              to={link.to}
              fontFamily={["montserrat", "sans-serif"]}
              fontSize={16}
              pt={2}
              px={2}
              mx={0}
              color="rgba(0, 0, 0, .8)"
              _hover={{
                textDecoration: "none",
              }}
            >
              {link.label}
            </ChakraLink>
          ))}
        </HStack>
      </Box>
    </div>
  );
};

export default Navbar;
