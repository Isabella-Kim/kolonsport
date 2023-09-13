import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Header = ({ authenticate, setAuthenticate }) => {
  //const sideList = ["KOLON MALL", "로그인", "회원가입", "고객센터"];
  //state값추가
  const [activeLink, setactiveLink] = useState(0); //초기값 0
  //Link를 클릭 했을 때 활성화
  const LinkClick = (index) => {
    setactiveLink(index); //클릭시 이벤트
  };
  //로그인시 페이지 이동
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/Login");
  };
  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      navigate(`?q=${e.target.value}`);
    }
  };
  return (
    <div className="header">
      <div className="HeaderTop inner">
        <Link to="/" className="logo"></Link>
        <form>
          <input
            type="search"
            onKeyPress={onCheckEnter}
            placeholder="신상품이 보고 싶다면? #신상품 태그"
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </form>
        <div className="snb">
          <ul>
            <li>KOLON MALL</li>
            <li onClick={goToLogin}>Login</li>
            <li>회원가입</li>
            <li>고객센터</li>
            <Link to="/">
              <i className="fa-solid fa-basket-shopping"></i>
            </Link>
          </ul>
        </div>
      </div>
      <div className="gnb inner">
        <Link
          to="/"
          className={activeLink === 0 ? "active" : ""}
          onClick={() => LinkClick(0)}
        >
          소개
        </Link>
        <Link
          to="/"
          className={activeLink === 1 ? "active" : ""}
          onClick={() => LinkClick(1)}
        >
          홈
        </Link>
        <Link
          to="/"
          className={activeLink === 2 ? "active" : ""}
          onClick={() => LinkClick(2)}
        >
          상품
        </Link>
        <Link
          to="/"
          className={activeLink === 3 ? "active" : ""}
          onClick={() => LinkClick(3)}
        >
          기획전
        </Link>
        <Link
          to="/"
          className={activeLink === 4 ? "active" : ""}
          onClick={() => LinkClick(4)}
        >
          컬렉션
        </Link>
        <Link
          to="/"
          className={activeLink === 5 ? "active" : ""}
          onClick={() => LinkClick(5)}
        >
          매장안내
        </Link>
        <Link
          to="/"
          className={activeLink === 6 ? "active" : ""}
          onClick={() => LinkClick(6)}
        >
          WEATHER MONSTER
        </Link>
      </div>
    </div>
  );
};

export default Header;
