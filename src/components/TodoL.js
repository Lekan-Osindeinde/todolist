import style from "../style.module.css";
const TodoL = ({ todoItem }) => {
  return (
    <div>
      <div className={style.todoitem}>
        <h3 className={style.todoname}>{todoItem}</h3>
        <button className={style.deletebutton}>Done</button>
      </div>
    </div>
  );
};
export default TodoL;
