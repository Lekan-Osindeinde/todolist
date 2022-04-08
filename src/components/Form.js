import style from "../style.module.css";
const Form = ({ todo, setTodo, todoList, setTodoList }) => {
  const handleChange = (e) => {
    setTodo(e.target.value);
    // console.log(todo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, todo]);
  };
  return (
    <div className={style.todoform}>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          onChange={handleChange}
          className={style.todoinput}
          type="text"
          placeholder="Add Todo Item"
        />
        <button type="submit" className={style.todobutton}>
          Add
        </button>
      </form>
    </div>
  );
};
export default Form;
