import React from "react";
import {
  HomePage,
  NFTMarketPlace,
  ProductDetail,
  ProfileSetting,
} from "../screens";
// import ProductDetail from "../screens";
// import ProfileSetting from "../screens/profile_setting";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const TribezRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/market-place" element={<NFTMarketPlace />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/profile-setting" element={<ProfileSetting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default TribezRouter;
