import React from "react";
import { useNavigate } from "react-router-dom";

const ProductBox = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/products/${item.id}`);
  };
  return (
    <div className="List" onClick={showDetail}>
      <img src={item?.img} alt="" />
      <p>KOLON SPORT</p>
      <h4>제품명 : {item?.title}</h4>
      <h2>가격 : {item?.price}</h2>
      <span>{item?.tag}</span>
    </div>
  );
};

export default ProductBox;
