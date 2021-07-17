import "./App.css";

function App() {
  const name = "정석호";
  const url = "/logo192.png";

  // jsxVar은 [리액트 엘리먼트] 변수
  // const jsxVar = <img src="/logo192.png" alt="" />;
  const jsxVar = <img src={url} alt="" />;

  // Img은 [리액트 컴포넌트] 변수
  // 리액트 컴포넌트: 리액트 엘리먼트 변수를 반환하는 함수
  const Img = function () {
    return jsxVar;
  };

  // 리액트 컴포넌트는 또다시 jsx 안 에서 HTML 태그처럼 쓸 수있다.
  const result = (
    <div className="App">
      Hello {name}
      <Img />
    </div>
  );

  return result;
}

export default App;
