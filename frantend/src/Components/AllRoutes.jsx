import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute.jsx";
import Offers from "../Pages/Header/Top/Offers.jsx";
import Fanbook from "../Pages/Header/Top/Fanbook.jsx";
import Download_App from "../Pages/Header/Top/Download App.jsx";
import TriBe_Membership from "../Pages/Header/Top/TriBe_Membership.jsx";
import Contact_Us from "../Pages/Header/Top/Contact Us.jsx";
import Track_Order from "../Pages/Header/Top/Track_Order.jsx";
import Bag from "../Pages/Header/Middle/Bag.jsx";
import Login from "../Pages/Header/Middle/Login.jsx";
import Men from "../Pages/Header/Middle/Men.jsx";
import Women from "../Pages/Header/Middle/Women.jsx";
import Mobile_cover from "../Pages/Header/Middle/Mobile_cover.jsx";
import Search from "../Pages/Header/Middle/Search.jsx";
import Wishlist from "../Pages/Header/Middle/Wishlist.jsx";
import Accessories from "../Pages/Header/Bottom/Accessories.jsx";
import Sneakers from "../Pages/Header/Bottom/Sneakers.jsx";
import BWKF_X_Google from "../Pages/Header/Bottom/BWKF_X_Google.jsx";
import Bewakoof_Air from "../Pages/Header/Bottom/Bewakoof_Air.jsx";
import Plus_Size from "../Pages/Header/Bottom/Plus_Size.jsx";
import Customization from "../Pages/Header/Bottom/Customization.jsx";
import Official_Merch from "../Pages/Header/Bottom/Official_Merch.jsx";
 

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/offers"
        element={
         
            <Offers />
         
        }
      />
      <Route
        path="/fanbook"
        element={
            <Fanbook />
        }
      />{" "}
      <Route
        path="/download_app"
        element={
            <Download_App />
        }
      />
      <Route
        path="/tribe_membership"
        element={
            <TriBe_Membership />
        }
      />
      <Route
        path="/contact_us"
        element={
            <Contact_Us />
        }
      />
      <Route
        path="/track_oder"
        element={
          <PrivateRoute>
            <Track_Order />
          </PrivateRoute>
        }
      />
   
      <Route path="/men-clothing" element={<Men />} />
      <Route path="/women-clothing" element={<Women />} />
      <Route path="/mobile_cover" element={<Mobile_cover />} />
      <Route path="/search" element={<Search />} />
      <Route path="/login" element={<Login />} />
  <Route
        path="/wishlist"
        element={
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        }
      />
      <Route
        path="/bag"
        element={
          <PrivateRoute>
            <Bag />
          </PrivateRoute>
        }
      />
      <Route path="/men-home" element={<Men />} />
      <Route path="/women-home" element={<Women />} />
      <Route path="/accessories-home" element={<Accessories />} />
      <Route path="/sneakers-home" element={<Sneakers />} />
      <Route path="/BWKF_X_Google-home" element={<BWKF_X_Google />} />
      <Route path="/bewakoof_air-home" element={<Bewakoof_Air />} />
      <Route path="/customizatiom-home" element={<Customization/>} />
      <Route path="/official_merch-home" element={<Official_Merch/>} />
      <Route path="/plus_size-home" element={<Plus_Size/>} />






      
    </Routes>
  );
};

export default AllRoutes;
