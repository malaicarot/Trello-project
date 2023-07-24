import React, { useState } from "react";
import "./App.css";

import Board from "./components/Board/Board";
import Editable from "./components/Editable/Editable";

function App() {
  const [boards, setBoards] = useState([
    {
      id: Date.now() + Math.random() * 2,
      title: "To Do",
      cards: [
        {
          id: Date.now() + Math.random(),
          title: "Card 1",
          tasks: [],
          labels: [
            {
              text: "Frontend",
              color: "blue",
            },
          ],
          desc: "sdfdsfsdf",
          date: "",
        },
        {
          id: Date.now() + Math.random(),
          title: "Card 2",
          tasks: [],
          labels: [
            {
              text: "Backend",
              color: "green",
            },
          ],
          desc: "dfgsdf sdf",
          date: "",
        },
      ],
    },
  ]);
  const addCard = (title, bid) => {
    const card = {
      id: Date.now() + Math.random(),
      title,
      labels: [],
      tasks: [],
      date: "",
      desc: "",
    };

    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;
    const tempBoards = [...boards];
    tempBoards[index].cards.push(card);
    setBoards(tempBoards);
  };

  const removeCard = (bid, cid) => {
    const bIndex = boards.findIndex((item) => item.id === bid)
    if(bIndex < 0) return;

    const cIndex = boards[bIndex].cards.findIndex((item) => item.id === cid)
    if(cIndex < 0) return;

    const tempBoards = [...boards]
    tempBoards[bIndex].cards.splice(cIndex,1)
    setBoards(tempBoards)
  }

  const addBoard = (title) => {
    setBoards([...boards, {
      id: Date.now() + Math.random(),
      title,
      cards: [],
    }])
  }

  const removeBoard = bid => {
    const tempBoards = boards.filter(item => item.id !== bid)
    setBoards(tempBoards)
  }
  return (
    <div className="app">
      <div className="app-outer">
        <div className="app-boards">
          {boards.map((item) => (
            <Board key={item.id} board={item} 
            addCard={addCard}
            removeCard={removeCard}
            removeBoard={removeBoard}
            />
          ))}
          <div className="app-boards-board">
            <Editable
              text="Add Board"
              placeholder="Enter Board Title"
              displayClass="app-boards-board-add"
              onSubmit={(value) => addBoard(value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
