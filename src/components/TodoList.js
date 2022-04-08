import TodoL from "./TodoL";

const TodoList = ({ todoList }) => {
  return (
    <div>
      {todoList.map((todoItem) => (
        <TodoL key={todoItem.id} todoItem={todoItem} />
      ))}
    </div>
  );
};
export default TodoList;
