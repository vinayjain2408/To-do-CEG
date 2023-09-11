import React from 'react'
import "./Detail.css"
import AddIcon from '@mui/icons-material/Add';

function Detail() {
  return (
    <div className='Detail-page'>
        <div className='boxex'>
        <div className='List-input'>
            <AddIcon />
        <input type='text'placeholder='New task...'/>
        </div>
        </div>
    </div>
  )
}

export default Detail