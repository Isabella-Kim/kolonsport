import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  //useNavigate를 활용한 페이지 이동
  const navigate = useNavigate();
  const goToProductDetailpage = () => {
    navigate(`/ProductDetailpage`);
  };
  const goProduct = () => {
    navigate("product?=detail");
  };

  return (
    <div>
      <div className="inner">
        <Link to="/ProductAllpage">링크</Link>
        <br />
        <button onClick={goToProductDetailpage}>버튼클릭</button>
        <button onClick={goProduct}>상품상세</button>
      </div>
    </div>
  );
};

export default Homepage;
