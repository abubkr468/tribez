import React from "react";
import {
  HomePage,
  NFTMarketPlace,
  ProductDetail,
  ProfileSetting,
  CoverPage,
} from "../screens";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const TribezRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections" element={<NFTMarketPlace />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/user-settings" element={<ProfileSetting />} />
        <Route path="/my-profile" element={<CoverPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default TribezRouter;
