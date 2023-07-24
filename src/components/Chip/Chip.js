import React from "react";
import { X } from "react-feather";
import "./Chip.css";
const Chip = (props) => {
  const { text, close, color, onClose } = props;
  return (
    <div className="chip" style={{ backgroundColor: color }}>
      {text}
      {close && <X onClick={onClose ? onClose() : ""}/>}
    </div>
  );
};

export default Chip;
