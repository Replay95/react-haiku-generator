import "./App.css";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [text, setText] = useState([]);

  function Post() {
    if (text.length === 3) {
      setInputText("");
    } else {
      setText([...text, { japanese: inputText }]);
      setInputText("");
    }
  }

  function Delete() {
    setInputText("");
    setText([]);
  }

  return (
    <>
      <div>
        {text.map((haiku, index) => (
          <h1 key={`${haiku.japanese}-${index}`}>{haiku.japanese}</h1>
        ))}
      </div>

      <input
        type="text"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />

      <div className="card">
        <button onClick={Post} style={{ marginRight: "1rem" }}>
          投稿
        </button>
        <button onClick={Delete} style={{ marginLeft: "1rem" }}>
          削除
        </button>
      </div>
    </>
  );
}

export default App;
