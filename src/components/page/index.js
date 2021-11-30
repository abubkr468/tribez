import React from "react";
import { Header } from "../header";
import "./style.scss";

const Page = ({ children }) => {
  return (
    <>
      <Header />
      <div className="content">{children}</div>
    </>
  );
};

export default Page;
