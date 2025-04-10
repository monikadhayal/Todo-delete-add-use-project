function ShowTodo({todoList}) {
    console.log(todoList)
  return (
    <div>
      <div className="bg-white w-96 rounded-b-lg ">
        <div className="pl-5">
          {todoList.map((item) => (
            // <div className="bg-white text-black   px-4 py-2 rounded-lg border-l-[6px] border-l-blue-900 border-blue-900 w-80">
            // <div className="w-80 px-4 py-2 rounded-lg bg-white text-black border-l-4 border-l-blue-500 hover:border-l-pink-500 transition-all duration-300">
             <div className="w-80 px-4 py-2 rounded-lg bg-white text-black border-l-[6px] border-l-blue-600 hover:shadow-[inset_6px_0_10px_#3b82f6] transition-all duration-500">
              {item}
            </div>
          ))}
        </div>
        <button className="bg-red-600 m-3 flext justify-center text-white w-20 h-8 rounded-md ">
          Clear All
        </button>
      </div>
    </div>
  );
}
export default ShowTodo;
