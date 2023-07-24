import React, { useState } from "react";
import { CheckSquare, MoreHorizontal, Clock } from "react-feather";
import Chip from "../Chip/Chip";
import "./Card.css";
import Dropdown from "../Dropdown/Dropdown";
const Card = (props) => {
  const { card, removeCard, boardId } = props;
  const { id, labels, title, date } = card || {};
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="card">
      <div className="card-top">
        <div className="card-top-labels">
          {labels.map((item, index) => (
            <Chip key={index} text={item.text} color={item.color} />
          ))}
        </div>
        <div className="card-top-more" onClick={() => setShowDropdown(true)}>
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown onClose={() => setShowDropdown(false)}>
              <div className="card-dropdown">
                <p onClick={() => removeCard( boardId,id)}>Delete Card</p>
              </div>
            </Dropdown>
          )}
        </div>
      </div>
      <div className="card-title">{title}</div>
      <div className="card-footer">
        {date && (
          <p>
            <Clock />
            {date}
          </p>
        )}
        <p>
          <CheckSquare />
          1/4
        </p>
      </div>
    </div>
  );
};

export default Card;
