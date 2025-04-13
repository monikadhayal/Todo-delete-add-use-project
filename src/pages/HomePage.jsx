import AddTodo from "../component/AddTodo";
import Navbar from "../component/Navbar";
import ShowTodo from "../component/ShowTodo";
import { useState, useEffect } from "react";
import uuid4 from "uuid4";


export default function HomePage() {
  const [count, setCount] = useState(0);
  const [todoItem, setTodoItem] = useState("");
  const localStorageKey = "todoList";
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

    
  const [todoList, setTodoList] = useState(()=>{
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
    
    });
  
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todoList));
  }, [todoList]);


  const updateTodoList = (event) => {
    setTodoItem(event.target.value);
  };

  const AddTask = () => {
    if (todoItem.trim() === "") {
      alert("please enter something!");
      return;
    }
    
  if(editMode) {
      const updatedTodos = todoList.map((item) => 
      item.id === editId ? {...item, todoItem} : item);
    
    setTodoList(updatedTodos);
    setEditMode(false);
    setEditId(null);
  } else {

    setTodoList([...todoList, { id: uuid4(), todoItem }]);
    setCount(count + 1);
  }
    setTodoItem("");
    };

  const deleteTodoitem = (id) => {
    const updateList = todoList.filter((item) => {
      return item.id !== id;
    });
    setCount(count - 1);
    setTodoList(updateList);
    };
  const AllclearTodoList = () => {
    setTodoList([]);
    setCount(0);
   };
  
  
  const handleEdit = (item) => {
    setTodoItem(item.todoItem); 
    setEditMode(true);
    setEditId(item.id);
   };

  

  return (
    <div className="bg-blue-800 h-screen flex flex-col justify-center items-center">
      <Navbar />
      <AddTodo
        count={count}
        AddTask={AddTask}
        updateTodoList={updateTodoList}
        todoItem={todoItem}
      />
      <ShowTodo
        todoList={todoList}
        deleteTodoitem={deleteTodoitem}
        AllclearTodoList={AllclearTodoList}
         handleEdit={handleEdit}
      />
    </div>
  );
}
