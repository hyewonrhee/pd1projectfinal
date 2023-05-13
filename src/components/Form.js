import React from "react";


const Form = ({ setInputText, todos, setTodos, inputText, setStatus}) => {
  //Here I can write javascript code and functions
  const inputTextHandler = (e) =>{
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed: false, id: Math.random() * 1000},
      //if you already have some todos in the list, passes them
    ]);
    setInputText("");
    //resets inputText box to empty after you click "add" new task button to the todolist
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
    return(
        <form>
        <input value={inputText} 
        onChange={inputTextHandler}
        type="text"
        className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
}

/* can also use

function Form{

}
*/

export default Form;
//this is to hook up this component up to your app

