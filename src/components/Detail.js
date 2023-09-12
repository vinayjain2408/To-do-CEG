// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import AddIcon from "@mui/icons-material/Add";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
// import "./Detail.css";
// import { useLocation } from 'react-router-dom';

// function Detail() {

//   const location = useLocation();
//   const userData = location.state ? location.state.userData : null;
//   const [value, onChange] = useState(new Date());
//   const { inputvalue } = useParams();
//   const [adding, setAdding] = useState(false);
//   const [valueinp, setValue] = useState(inputvalue);
//   const [showCalendar, setShowCalendar] = useState(false);
//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   const handleSelectChange = (e) => {
//     setShowCalendar(e.target.value === 'date');
//   };

//   const handleclick = () => {
//     console.log("vinay jain");
//     setAdding(true);
//   };
//   const handleDelete = () => {
//     setAdding(false);
//   }

//   return (
//     <div className="Detail-page">
//       <div className="boxex">
//         {adding ? (
//           <div>
//             <Accordion>
//               <AccordionSummary
//                 expandIcon={<ExpandMoreIcon />}
//                 aria-controls="panel1a-content"
//                 id="panel1a-header"
//               >
//                 <Typography>
//                   <input type="text" value={userData ? userData.state : ''} onChange={handleChange} />
//                 </Typography>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <div className="divide">
//                   <div className="note">
//                     <textarea rows="12" cols="21" defaultValue="Notes"></textarea>
//                   </div>
//                   <div>
//                     <div className="date">
//                       <div>Due Date</div>
//                       <button>Today</button>
//                       <button>Tomorrow</button>
//                       <p>{value.date}</p>
//                       <div>
//                         <select value={value} onChange={handleSelectChange}>
//                           <option value=""></option>
//                           <option value="date">Date</option>
//                         </select>
//                         {showCalendar && (
//                           <div className="calendar">
//                             <Calendar onChange={onChange} value={value} />
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                     <div className="options">
//                       <div>Priority</div>
//                       <select>
//                         <option value="">None</option>
//                         <option value="High">High</option>
//                         <option value="Medium">Medium</option>
//                         <option value="Low">Low</option>
//                       </select>
//                       <button onClick={handleDelete}>Delete</button>
//                     </div>
//                   </div>
//                 </div>
//               </AccordionDetails>
//             </Accordion>
//           </div>
//         ) : (
//           ""
//         )}

//         <div className="List-input">
//           <AddIcon onClick={handleclick} />
//           <input type="text" placeholder="New task..." />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Detail;





import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Detail.css";
import { useLocation } from "react-router-dom";

function Detail() {
  const location = useLocation();
  // The error likely occurs here. Make sure 'userData' is defined in the location state.
  const userData = location.state ? location.state.userData : null;
  const [value, onChange] = useState(new Date());
  const { inputvalue } = useParams();
  const [adding, setAdding] = useState(false);
  const [valueinp, setValue] = useState(inputvalue);
  const [showCalendar, setShowCalendar] = useState(false);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSelectChange = (e) => {
    setShowCalendar(e.target.value === "date");
  };

  const handleclick = () => {
    console.log("vinay jain");
    setAdding(true);
  };
  const handleDelete = () => {
    setAdding(false);
  };

  return (
    <div className="Detail-page">
      <div className="boxex">
        {adding ? (
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <input
                    type="text"
                    value={userData ? userData.state : ""}
                    onChange={handleChange}
                  />
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
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

                        <p>{value.date}</p>
                        <div>
                          <select value={value} onChange={handleSelectChange}>
                            <option value=""></option>
                            <option value="date">Date</option>
                          </select>
                          {showCalendar && (
                            <div className="calendar">
                              <Calendar onChange={onChange} value={value} />
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="options">
                        <div>Priority</div>
                        <select>
                          <option value="">None</option>
                          <option value="High">High</option>
                          <option value="Medium">Medium</option>
                          <option value="Low">Low</option>
                        </select>
                        <button onClick={handleDelete}>Delete</button>
                      </div>
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        ) : (
          ""
        )}

        <div className="List-input">
          <AddIcon onClick={handleclick} />
          <input type="text" placeholder="New task..." />
        </div>
      </div>
    </div>
  );
}

export default Detail;

