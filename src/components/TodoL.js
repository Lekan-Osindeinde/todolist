import style from "../style.module.css";
const TodoL = ({ todoItem, todoList, setTodoList }) => {
  const deleteTodo = () => {
    setTodoList(todoList.filter((item) => item.id !== todoItem.id));
  };
  return (
    <div>
      <div className={style.todoitem}>
        <h3 className={style.todoname}>{todoItem.name}</h3>
        <button onClick={deleteTodo} className={style.deletebutton}>
          Done
        </button>
      </div>
    </div>
  );
};
export default TodoL;
