import AddTodo from "../component/AddTodo";
import Navbar from "../component/Navbar";
import ShowTodo from "../component/ShowTodo";
import { useState } from "react";

export default function HomePage() {
  const [count, setCount] = useState(0);
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  const updateTodoList = (event) => {
    setTodoItem(event.target.value);
  };

  const AddTask = () => {
    if (todoItem.trim() === "") {
      alert("please enter something!");
      return;
    }
    setTodoList([...todoList, todoItem]);
    setCount(count + 1);
    setTodoItem("");
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
       <ShowTodo todoList={todoList} />
     </div>
   );
 }
