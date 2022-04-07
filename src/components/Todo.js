import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    event.preventDefault();
    setTodo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let tempList = todoList;
    tempList.push(todo);
    setTodoList(tempList);
    console.log(todoList);
    setTodo("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={handleChange}
          placeholder="Enter to do List"
        />
        <button type="submit" value={todoList}>
          Add
        </button>
      </form>
    </div>
  );
}
