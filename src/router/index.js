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
        <Route path="/market-place" element={<NFTMarketPlace />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/profile-setting" element={<ProfileSetting />} />
        <Route path="/cover-page" element={<CoverPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default TribezRouter;
