import React from 'react';
import './AddActivity.css';
import {handleAddActivity} from './Activity';

const AddActivity = ({ handleAddActivity }) => {
  return (  
    <div className="add-activity">
      <input type="text" id="title" placeholder="title"></input>
      <input type="text" id="description" placeholder="description"></input>
      <button onClick={handleAddActivity}>Add</button>
    </div>
  );
}

export default AddActivity;
