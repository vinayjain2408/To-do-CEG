import React, { useState, useEffect } from "react";
import "./Todo.css";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

function Todo() {
  const [buttonValue, setbuttonvalue] = useState(false);
  const [inputvalue, setInputValue] = useState("");
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState([]);
  const [arry, setArry] = useState(
    localStorage.getItem("arry") === null
      ? []
      : JSON.parse(localStorage.getItem("arry"))
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
    setbuttonvalue(false);
  };
  
  const handleCreate = () => {
    if (inputvalue.length > 0) {
      setbuttonvalue(false);
      setArry([...arry, { name: inputvalue, isChecked: false }]);
    }
    setInputValue("");
  };

  const handlepath = (index) => {
    navigate(`/list-detail/`);
  };

  const toggleCheck = (index) => {
    const updatedIsChecked = [...isChecked];
    updatedIsChecked[index] = !updatedIsChecked[index];
    setIsChecked(updatedIsChecked);
  };

  const deleteTask = (index) => {
    const updatedArry = [...arry];
    updatedArry.splice(index, 1);
    setArry(updatedArry);
    const updatedIsChecked = [...isChecked];
    updatedIsChecked.splice(index, 1);
    setIsChecked(updatedIsChecked);
  };

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
              <div className="icons">
                <input
                  type="checkbox"
                  checked={isChecked[index] || false}
                  onChange={() => toggleCheck(index)}
                />
                {isChecked[index] ? (
                  <button onClick={() => deleteTask(index)}>
                    <DeleteIcon />
                  </button>
                ) : (
                  ""
                )}
              </div>
              <div className="box-task" onClick={ handlepath}>
                <p>No task</p>
              </div>
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;













// import React, { useState, useEffect } from "react";
// import "./Todo.css";
// import { useNavigate } from "react-router-dom";
// import DeleteIcon from "@mui/icons-material/Delete";

// function Todo() {
//   const [buttonValue, setbuttonvalue] = useState(false);
//   const [inputvalue, setInputValue] = useState("");
//   const navigate = useNavigate();
//   const [isChecked, setIsChecked] = useState(false);


//   const [arry, setArry] = useState(
//     localStorage.getItem("arry") === null
//       ? []
//       : JSON.parse(localStorage.getItem("arry"))
//   );

//   useEffect(() => {
//     localStorage.setItem("arry", JSON.stringify(arry));
//   }, [arry]);

//   const handleButton = () => {
//     setbuttonvalue(true);
//   };
//   const handleinputChange = (e) => {
//     setInputValue(e.target.value);
//   };
//   const handleCancel = () => {
//     console.log("cancel button");
//     setbuttonvalue(false);
//   };
//   const handleCreate = () => {
//     console.log("create list");
//     if (inputvalue.length > 0) {
//       setbuttonvalue(false);
//       console.log(inputvalue);
//       setArry([...arry, inputvalue]);
//     }
//     setInputValue("");
//   };

//   const handlepath = () => {
//     navigate(`/list-detail/`);
//   };
//   // const handlepath = (data) => {
//   //   navigate(`/list-detail/`,{state : data});
//   // };

//   const toggleCheck = (index) => {  
//     const updatedIsChecked = { ...isChecked };
//     updatedIsChecked[index] = !updatedIsChecked[index];
//     setIsChecked(updatedIsChecked);
//   };

//   function deleteTask( index){
//     setArry(
//        arry.filter((tab,id)=>{
//          return(
//            index !== id
//            )
//        })
//     ) 
//  }
// return (
//     <div className="task-body">
//       <div>
//         <div className="new-tabe">
//           <button onClick={handleButton}>New List</button>
//         </div>
//         {buttonValue ? (
//           <div className="inp-div">
//             <div className="inp-box">
//               <p>List Name</p>
//               <input
//                 type="text"
//                 placeholder="Enter Task"
//                 value={inputvalue}
//                 onChange={handleinputChange}
//               />
//               <button type="submit" onClick={handleCancel}>
//                 Cancel
//               </button>
//               <button type="text" onClick={handleCreate}>
//                 Create List
//               </button>
//             </div>
//           </div>
//         ) : (
//           ""
//         )}
//       </div>
//       <div className="multilist">
//         {arry.map((item, index) => {
//           return (
//             <div key={index} className="box-list">
//               <div className="icons">
//               <input
//                 type="checkbox"
//                 checked={isChecked[index] || false}
//                 onChange={() => toggleCheck(index)}
//               />
//               {isChecked[index] ? (
//                 <button onClick={() => deleteTask(index)}>
//                   <DeleteIcon />
//                 </button>
//               ) : (
//                 ""
//               )}
//               </div>
//               {/* <div className="box-task" onClick={() => handlepath(item)}> */}
//               <div className="box-task" onClick={handlepath}>
//                 <p>No task</p>
//               </div>
//               <h3>{item}</h3>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Todo;
