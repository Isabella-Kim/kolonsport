//스타일
import "./styles/reset.css";
import "./styles/App.css";
import "./styles/Header.css";
import "./styles/Footer.css";
import "./styles/ProductAllpage.css";
import "./styles/Login.css";
//라이브러리
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
//컴포넌트
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import ProductAllpage from "./pages/ProductAllpage";
import Login from "./pages/Login";
import Private from "./Route/Private";
/*
유저스토리
1. 헤더, 푸터 html, css 작성 미디어쿼리작성
2. gnb 상품 클릭시 상품 전체 페이지가 나온다.
3. 로그인 버튼을 누르면 로그인 페이지가 나온다

4. 상품 클릭시 상품 디테일 페이지가 나온다
5. 상품 디테일을 눌렀으나 로그인이 안되었을 경우 로그인 페이지가 먼저 나온다.
6. 로그인이 되어있으면 상품 상세 페이지를 볼 수 있다.
7. 상품을 검색할 수 있다.
*/

/*
터미널 열어서 
1. npm install react-router-dom@6 입력해서 설치합니다.
2.셋팅은 index.js 파일로 가서 
<BrowserRouter>
  <App />
</BrowserRouter>
3. 
1. 우선 상단에서 여러가지 컴포넌트를 import 해오고 
2. <Routes> 만들고 그 안에 <Route>를 작성합니다.
3. <Route path="/url경로" element={ <보여줄html> } /> 이렇게 작성하면 됩니다. 

*/
function App() {
  // url 확인
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log("인증", authenticate);
  });

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ProductAllpage />}></Route>
        <Route
          path="/Login"
          element={<Login setAuthenticate={setAuthenticate} />}
        ></Route>
        <Route
          path="/products/:id"
          element={<Private authenticate={authenticate} />}
        ></Route>
        {/* restful routes란
        https://velog.io/@janghoon333/Restful-API
        url 디자인패턴임
        HTTP Method 혹은 HTTP verb 라고 하는 URL로 통신하는 방법
        "Representational State Trasfer" 의 약자로, 자원을 이름(자원의 표현)으로 구분해 해당 자원의 상태(정보)를 주고 받는 모든 것을 의미한다.
        -> 자원(resource)의 표현(representation)에 의한 상태 전달
          Method(
          POST 우리가 지금까지 fetch 해서 데이터 가져올 때 항상씀
          GET 새로운데이터 생성, 
          PUT 기존에 있는데이터를 수정 할때
          DELETE 데이터를 삭제할 때
          네가지 방식으로 url 이 만들어지는데 
          
          https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch
          :콜론이 있다는 것은 파라미터다 라는 것
          :뒤에 오는 내용은 가변적
          파라미터란? 
          컴퓨터 프로그래밍에서 매개변수(parameter 파라미터)란 변수의 특별한 한 종류로서, 함수 등과 같은 서브루틴의 인풋으로 제공되는 여러 데이터 중 하나를 가리키기 위해 사용된다

          정리
          REST 규칙을 이용해서 만든 api 디자인 패턴
          Http 명령어와 URL을 매칭시켜 url디자인을 좀더 단순하고 통일성 있게 만듬
          HTTP명령어
          Get : 데이터를 가져올 때 쓰임 (fetch하면 기본 명령어 속성이 Get임)
          Post : 데이터를 생성할 때 쓰임.
          Put : 데이터를 수정할 때 쓰임(Patch 라고도 불림)
          Delete: 데이터를 삭제할때 쓰임

          Restful Route의 필요성

          우리가 쇼핑몰 아이템을 보여주는 페이지가 있다고 가정하자
          어떤사람은
          /showitem 이라고 만들고 /getitem 이라고 만들 수 있다
          어떤 아이템은 삭제하는 경우에는 /removeitems or / deleteitems 


          이렇게 하면 url은 길고 복잡해진다. 이를 해결하기 위해 나온게 restful 디자인이다

          url에서 동사는 빼고 이를 Http 명령어로 대체한다
          /items + get 명령어 = 아이템읽어오기
          /items + post 명령어 = 아이템 생성하기 
          /items + put 명령어 = 아이템 수정하기 
          /items + delete명령어 = 아이템 삭제하기
          이런 규칙으로 바뀐다

          내가 하나의 아이템만 가져오고싶다면 뒤에 아이템의 id를 붙이는것도 restful route의 규칙이다

          /items/:id +get 명령어 = id를 가진 아이템읽어오기 
          /items/:id +put 명령어 = id를 가진 아이템 수정하기 
          /items/:id +delete 명령어 = id를 가진 아이템 삭제하기
        */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
