import React, { useEffect, useState } from "react";
// 파라미터 값 불러오기 위한 useParams
import { useParams } from "react-router-dom";

const ProductDetailpage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/Isabella-Kim/kolonsport/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, [id]);

  if (!product) {
    // 데이터가 로딩 중인 경우
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div className="product_detail_img">
        <img src={product.img} alt="" />
      </div>
      <div className="product_info">
        <h2>{product.title}</h2>
        <h3>{product.price}</h3>
        <form>
          <select>
            {/* 좌항, 우항 같으면 map 실행 */}
            {product?.size.length > 0 &&
              product.size.map((item) => <option>{item}</option>)}
          </select>
        </form>
      </div>
    </div>
  );
};

export default ProductDetailpage;
