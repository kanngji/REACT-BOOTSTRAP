import "./App.css";
import React, { useState } from "react";
// import React, { useState } from "React";

function App() {
  const [title, setTitle] = useState("오늘의 하루");
  const [name, setName] = useState("강지훈");
  let [content, setContent] = useState(["월요일", "화요일", "수요일"]);
  const [like, setLike] = useState(0);

  return (
    <div className="App">
      <button
        onClick={() => {
          let copy = [...content];
          copy[0] = "에잉";
          setContent(copy);
        }}
      >
        글제목 바꾸기 버튼
      </button>
      <button
        onClick={() => {
          let copy = [...content];
          copy.sort();
          setContent(copy);
        }}
      >
        정렬 버튼
      </button>
      <div className="nav-bar">깡지의 블로그</div>
      <div className="list">
        <h1>제목:{title}</h1>
        <h2>작성자:{name}</h2>
        <h3>
          내용:{content[0]}
          <span onClick={() => setLike(like + 1)}>👍</span>
          {like}
        </h3>
      </div>
      <div className="list">
        <h1>제목:{title}</h1>
        <h2>작성자:{name}</h2>
        <h3>
          내용:{content[1]}
          <span onClick={() => setLike(like + 1)}>👍</span>
          {like}
        </h3>
      </div>
      <div className="list">
        <h1>제목:{title}</h1>
        <h2>작성자:{name}</h2>
        <h3>
          내용:{content[2]}
          <span onClick={() => setLike(like + 1)}>👍</span>
          {like}
        </h3>
      </div>
    </div>
  );
}

export default App;
