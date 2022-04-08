import TodoL from "./TodoL";
const TodoList = ({ todoList }) => {
  return (
    <div>
      {todoList.map((todoItem) => (
        <TodoL todoItem={todoItem} />
      ))}
    </div>
  );
};
export default TodoList;
