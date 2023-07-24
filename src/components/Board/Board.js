import React, { useState } from "react";
import "./Board.css";
import { MoreHorizontal } from "react-feather";
import Editable from "../Editable/Editable";
import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
const Board = (props) => {
  const { board, removeBoard, addCard, removeCard } = props;
  const { id, title } = board || {};
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="board">
      <div className="board-top">
        <p className="board-top-title">
          {title} <span>{`${board.cards.length}`}</span>
        </p>
        <div className="board-top-more" onClick={() => setShowDropdown(true)}>
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown onClose={() => setShowDropdown(false)}>
              <div className="board-dropdown">
                <p onClick={() => removeBoard(id)}>Delete Board</p>
              </div>
            </Dropdown>
          )}
        </div>
      </div>
      <div className="board-cards custom-scroll">
        {board.cards.map((item) => (
          <Card 
          key={item.id} 
          card={item} 
          removeCard={removeCard} 
          boardId={board.id}/>
        ))}
        <Editable
          displayClass="board-cards-add"
          text="Add Card"
          placeholder="Enter Card Title"
          onSubmit={(value) => addCard(value, board.id)}
        />
      </div>
    </div>
  );
};

export default Board;
