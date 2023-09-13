import React from "react";
import ProductDetailpage from "../pages/ProductDetailpage";
import { Navigate } from "react-router";

const Private = ({ authenticate }) => {
  return authenticate === true ? (
    <ProductDetailpage />
  ) : (
    <Navigate to="/Login" />
  );
};

export default Private;
