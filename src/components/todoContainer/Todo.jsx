import React, { useState } from "react";
import "./Todo.css";
import Items from "../Items/Items";
import Emptybox from "../EmptyBox/Emptybox";
import Lottie from "lottie-react";
import round from "./round.json"

export default function Todo() {
  const [TextValue, setTextValue] = useState("")
  const [TodoArray, setTodoArray] = useState([])
  // const [Num, setNum] = useState(0)
  const [Bet, setBet] = useState(0)
  const [editItem, seteditItem] = useState(null)

    const Addhandle = ()=>{
        if(TextValue === ""){
            console.log("You can not add an empty task in list")
        }
        else{
            addTodoFunc(TextValue)
            setTextValue("")
            // setNum(1)
            setBet(1)
        }
    }

    const Changer = (e)=>{
      setTextValue(e.target.value)
    }

    const addTodoFunc = (textValue)=>{
        const newTodoObj = {
          id: Date.now(),
          task: textValue
        };
        setTodoArray([newTodoObj,...TodoArray])
        console.log(TodoArray)
      }


    const doDelete = (id)=>{
      const updatedTodo = TodoArray.filter(todo =>  todo.id !== id)
      setTodoArray(updatedTodo)
      console.log(TodoArray)
    }

    const handleKeyDown = (e)=>{
      if (e.keyCode === 13) {
        Addhandle();
      }
    }

    const startEditing= (id)=>{
      seteditItem(id);
      // setNum(1)
    }

    const handleEditInputChange = (e,id)=>{
      const editUpdateArray = TodoArray.map((todo)=>{
        if (todo.id === id) {
          return {
            ...todo,
            task: e.target.value
          };
        }
        return todo;
      });
      setTodoArray(editUpdateArray);
    }

    const saveEditing = ()=>{
      seteditItem(null);
    }
  return (
    <div className="mainContainer">
      <div className="mainContainerWrapper">
        <div className="HeadingText">
          
          <div className="lottie">
          {(Bet === 0) ? <Lottie animationData={round} loop={true} /> : " "}
        </div>
          <h1>Rise to the Challenge: Embrace the Power of To-Dos</h1>
        </div>
        <div className="TodoAddContainer">
          <div className="addItemTaker">
            <input
            onKeyDown={handleKeyDown} 
            value={TextValue}
            onChange={Changer}
            type="text" placeholder="Add your things to do..." />
            <button onClick={Addhandle}>Add</button>
          </div>
        </div>

        <div className="todoBox">
         
         
        {TodoArray.length < 1 ?<Emptybox/> : TodoArray.map(todo => ( 
           <Items key={todo.id}
           
           item={
            (editItem === todo.id) ?  <input
            className="inputEditing"
            value={todo.task}
            onChange={(e)=> handleEditInputChange(e , todo.id)}
            type="text" /> : todo.task } 

             id={todo.id}
             deleteFunc={() => doDelete(todo.id)}
             startEditing={() => startEditing(todo.id)}
             saveEditing={saveEditing}
             isEditing={todo.id === editItem ? true : false}/>
        ) )}


</div>
    
      </div>
    </div>
  );
}
