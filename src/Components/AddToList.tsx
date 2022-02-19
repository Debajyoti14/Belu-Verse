import React, { useState } from "react";

const AddToList = () => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [img, setimg] = useState("");
  const [note, setnote] = useState("");
  const [input, setinput] = useState({
    name: name,
    age: age,
    img: img,
    note: note,
  });
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        onChange={(e) => setname(e.target.value)}
      />{" "}
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        onChange={(e) => setage(e.target.value)}
      />{" "}
      <input
        type="text"
        placeholder="img url"
        className="AddToList-input"
        onChange={(e) => setimg(e.target.value)}
      />{" "}
      <textarea
        placeholder="Name"
        className="AddToList-input"
        onChange={(e) => setnote(e.target.value)}
      />
    </div>
  );
};

export default AddToList;
