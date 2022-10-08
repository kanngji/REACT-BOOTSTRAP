import "./App.css";
import React, { useState } from "react";
import Blog from "./components/Blog";
function App() {
  const [title, setTitle] = useState("오늘의 하루");
  const [name, setName] = useState("강지훈");
  let [content, setContent] = useState(["월요일", "화요일", "수요일"]);
  const [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [change, setChange] = useState(0);
  let [input, setInput] = useState("");
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
      <input
        onChange={(e) => {
          setInput(e.target.value);
          console.log(input);
        }}
      />

      {/* 리스트 map 반복 */}
      {content.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
              }}
            >
              {title}
            </h4>
            <p>{a}</p>
            <p>
              <span
                onClick={() => {
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  setLike(copy);
                }}
              >
                👍
              </span>
              좋아요 갯수:
              {like[i]}
            </p>
            <button
              onClick={() => {
                let copy = [...content];
                copy.push(input);
                setContent(copy);
              }}
            >
              발생
            </button>
            <button
              onClick={() => {
                let copy = [...content];
                copy.splice(i, 1);
                setContent(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      <button
        onClick={() => {
          setChange(0);
        }}
      >
        0번 글
      </button>
      <button
        onClick={() => {
          setChange(1);
        }}
      >
        1번 글
      </button>
      <button
        onClick={() => {
          setChange(2);
        }}
      >
        2번 글
      </button>

      {modal ? <Modal content={content} change={change}></Modal> : null}
    </div>
  );
}

// 모달창
function Modal(props) {
  return (
    <>
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용:{props.content[props.change]}</p>
      </div>
    </>
  );
}

export default App;
