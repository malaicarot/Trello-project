import React, { useState } from "react";
import { X } from "react-feather";
import "./Editable.css";
const Editable = (props) => {
  const [showEdit, setShowEdit] = useState(false);
  const { text, buttonText, placeholder, onSubmit, displayClass, editClass } =
    props;
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="editable">
      {showEdit ? (
        <form
          className={`editable-edit ${editClass} || ""`}
          onSubmit={(e) => {
            e.preventDefault();
            if (onSubmit) onSubmit(inputValue);
            setShowEdit(false)
            setInputValue("")
          }}
        >
          <input
            autoFocus
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            type="text"
            placeholder={placeholder || "Enter item"}
           
          />
          <div className="editable-edit-footer">
            <button type="submit">{buttonText || "Add"}</button>
            <X onClick={() => setShowEdit(false)} />
          </div>
        </form>
      ) : (
        <p
          className={`editable-display ${displayClass ? displayClass : ""}`}
          onClick={() => setShowEdit(true)}
        >
          {text || "Add item"}
        </p>
      )}
    </div>
  );
};

export default Editable;
