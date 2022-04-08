import TodoL from "./TodoL";

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <div>
      {todoList.map((todoItem) => (
        <TodoL
          key={todoItem.id}
          todoItem={todoItem}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  );
};
export default TodoList;
