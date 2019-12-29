import React, { useState } from "react";
import { db } from "../firebase"
import "./App.css";

function App() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const getList = () => {
    return comments.map((c, i) => <li key={i}>{c}</li>);
  }
  const handleChange = (e) => {
    const val = e.target.value;
    setComment(val);
    return;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, comment]);
    db.collection("rooms").add({ comment: comment })
    return;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="comment" onChange={handleChange} style={{ margin: "20px" }} />
        <input type="submit" />
      </form>
      <ul>{getList()}</ul>
    </div>
  );
}

export default App;
