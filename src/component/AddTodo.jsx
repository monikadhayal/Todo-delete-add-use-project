import { useState } from "react";

function AddTodo({ count, AddTask, updateTodoList, todoItem}) {

  return (
    <div>
      <div className="bg-white w-96  ">
        <div className="flex ">
          <input
            placeholder="Add a new task..."
            type="text"
            className="mt-8 ml-5 w-64 rounded-l-lg text-slate-400 h-12 border p-2 border-gray-400 "
            value={todoItem}
            onChange={updateTodoList}
          ></input>
          <button
            className="text-white bg-green-500 h-12 mt-8 rounded-r-lg w-20  font-bold cursor-pointer "
            onClick={AddTask}
          >
            +Add
          </button>
        </div>
        <div className="w-full h-px bg-gray-300 my-4"></div>
        <div className=" flex  justify-between ">
          <p className="m-5"> Your Tasks</p>
          <button className="bg-blue-600 w-7 h-6 rounded-lg m-5">
            {count}
          </button>
        </div>

      </div>
    </div>
  );
}
export default AddTodo;
