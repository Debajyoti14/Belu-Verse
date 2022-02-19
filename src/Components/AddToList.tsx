import React, { useState } from "react";
import { peopleData as props } from "../App";

interface iprops{
  people: props["people"]
  setpeople: React.Dispatch<React.SetStateAction<props["people"]>>
}



const AddToList: React.FC<iprops>= ({ people,setpeople }) => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [img, setimg] = useState("");
  const [note, setnote] = useState("");

  const handleClick = ():void => {
    if(!name || !age || !img){
      return;
    }
    else{
      setpeople([
        ...people,
        {
          name: name,
          age: parseInt(age),
          url: img,
          note: note,
        }
      ])
    }

  }
  return (
    <div className="AddToList">
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
        placeholder="Note"
        className="AddToList-input"
        onChange={(e) => setnote(e.target.value)}
      />
      <button className="AddToList-btn" onClick={handleClick}>Add To List</button>
    </div>
  );
};

export default AddToList;
