import style from "../style.module.css";
const TodoL = () => {
  return (
    <div>
      <div className={style.todoitem}>
        <h3 className={style.todoname}>Todo Item</h3>
        <button className={style.deletebutton}>Done</button>
      </div>
    </div>
  );
};
export default TodoL;
