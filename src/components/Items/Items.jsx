import React from "react";

export default function Items(props) {
  return (
    <div className="TodoItemsContainer">
      <div className="todoItem">
        <div className="textItem">
          <h4>{props.item}</h4>
        </div>
        <div className="textBtnItems">
       
        {props.isEditing === true ? 
         <button onClick={props.saveEditing}><i class="fa-regular fa-floppy-disk"></i> </button>
         : <button onClick={props.startEditing}><i className="fa-regular fa-pen-to-square"></i></button>}
          <button onClick={props.deleteFunc}><i className="fa-solid fa-trash-can icon-delete"></i></button>
        </div>
      </div>
    </div>
  );
}
