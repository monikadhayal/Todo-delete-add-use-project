import AddTodo from "../component/AddTodo";
import Navbar from "../component/Navbar";
import ShowTodo from "../component/ShowTodo";
import { useState } from "react";
import uuid4 from "uuid4";

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
    setTodoList([...todoList, {id: uuid4(),todoItem}]);
    setCount(count + 1);
    setTodoItem("");
  };
  const deleteTodoitem = (id) => {
        const updateList = todoList.filter((item) => {
          return item.id !== id;
        })
        setTodoList(updateList);
  }
   return (
     <div className="bg-blue-800 h-screen flex flex-col justify-center items-center">
       <Navbar />
       <AddTodo  
       count={count}
       AddTask={AddTask}
       updateTodoList={updateTodoList} 
       todoItem={todoItem}
       />
       <ShowTodo todoList={todoList} deleteTodoitem={deleteTodoitem} />
     </div>
   );
 }
