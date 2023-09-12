import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "react-calendar/dist/Calendar.css";
import "./Detail.css";

function Detail() {
  const [inputValue, setInputValue] = useState("");
  const [inputList, setInputList] = useState([]);

  const handleclick = () => {
    // setAdding(true);
  };

  const handleEdit = (e, index) => {
    const updatedInputList = inputList.map((item, i) => {
      if (i === index) {
        return e.target.value;
      }
      return item;
    });
    setInputList(updatedInputList);
  };

  function handleDelete(index) {
    console.log("delete", index);
    setInputList(
      inputList.filter((tab, id) => {
        return index !== id;
      })
    );
  }

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setInputList([...inputList, inputValue]);

      console.log("vinay jain press on input");
      setInputValue("");
    }
  };

  return (
    <div className="Detail-page">
      <div className="boxex">
        {inputList.map((inp, index) => {
          return (
            <div key={index} className="Accordians">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <input
                      className="input-text"
                      type="text"
                      value={inp}
                      onClick={(e) => handleEdit(e, index)}
                      onChange={(e) => handleEdit(e, index)} 
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="divide">
                    <div className="note">
                      <textarea
                        rows="12"
                        cols="21"
                        defaultValue="Notes"
                      ></textarea>
                    </div>
                    <div>
                      <div className="date">
                        <div>Due Date</div>
                        <button>Today</button>
                        <button>Tomorrow</button>
                      </div>
                      <div className="options">
                        <div>Priority</div>
                        <select>
                          <option value="">None</option>
                          <option value="High">High</option>
                          <option value="Medium">Medium</option>
                          <option value="Low">Low</option>
                        </select>
                        <button onClick={() => handleDelete(index)}>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}

        <div className="List-input">
          <AddIcon onClick={handleclick} />
          <input
            type="text"
            placeholder="New task..."
            value={inputValue}
            onChange={handleInput}
            onKeyPress={handleInputKeyPress}
          />
        </div>
      </div>
    </div>
  );
}

export default Detail;
