import React from 'react'
import './addStory.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
function AddStory({ profileSrc}) {
  return (
    <div className='addstory' style={{backgroundImage:`url(${profileSrc})`}}>
       
      <button><AddCircleIcon/></button> 
      <h4>Add Story</h4>
       
    </div>
  ) 
}

export default AddStory