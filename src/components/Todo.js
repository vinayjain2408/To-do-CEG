import React, { useState ,useEffect } from "react";
import "./Todo.css";
import { useNavigate } from "react-router-dom";

function Todo() {
  const [buttonValue, setbuttonvalue] = useState(false);
  const [inputvalue, setInputValue] = useState("");
  const navigate = useNavigate();

  const [arry, setArry] = useState(
    (localStorage.getItem('arry') === null) 
      ? []
      : JSON.parse(localStorage.getItem('arry')) 
  );
 
  useEffect(() => {
    localStorage.setItem("arry", JSON.stringify(arry));
  }, [arry]);




  const handleButton = () => {
    setbuttonvalue(true);
  };
  const handleinputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleCancel = () => {
    console.log("cancel button");
    setbuttonvalue(false);
  };
  const handleCreate = () => {
    console.log("create list");
    if (inputvalue.length > 0) {
      setbuttonvalue(false);
      console.log(inputvalue);
      setArry([...arry, inputvalue]);
    }
    setInputValue("");
  };

  const handlepath = (data) => {
    navigate(`/list-detail/`,{state : data});
  };
  // const handlepath = (data) => {
  //   navigate(`/list-detail/${data}`);
  // };

  return (
    <div className="task-body">
      <div>
        <div className="new-tabe">
          <button onClick={handleButton}>New List</button>
        </div>
        {buttonValue ? (
          <div className="inp-div">
            <div className="inp-box">
              <p>List Name</p>
              <input
                type="text"
                placeholder="Enter Task"
                value={inputvalue}
                onChange={handleinputChange}
              />
              <button type="submit" onClick={handleCancel}>
                Cancel
              </button>
              <button type="text" onClick={handleCreate}>
                Create List
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="multilist">
        {arry.map((item, index) => {
          return (
            <div key={index} className="box-list">
              <div className="box-task" onClick={() => handlepath(item)}>
                <p>No task</p>
              </div>
              <h3>{item}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;