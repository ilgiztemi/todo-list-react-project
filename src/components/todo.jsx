const Todo = ({ todo, setTodo, setEdit }) => {
  const handleComplete = (el) => {
    setTodo(
      todo.map((item) => {
        if (item.id === el.id) {
          return { ...item, completed: !el.completed };
        }
        return item;
      })
    );
    // console.log(el.completed);
  };
  const handleDelete = (el) => {
    setTodo(todo.filter((item) => item.id !== el.id));
  };
  const handleEdit = (el) => {
    const findTodo = todo.find((item) => item.id === el.id);
    setEdit(findTodo);
  };
  return (
    <div className="content">
      {todo.map((el) => (
        <li className="list" key={el.id}>
          <input
            className={`${el.completed ? "completed" : ""}`}
            value={el.text}
            type="text"
            onChange={(e) => e.preventDefault()}
          />
          <button onClick={() => handleComplete(el)}>check</button>
          <button onClick={() => handleEdit(el)}>edit</button>
          <button onClick={() => handleDelete(el)}>delete</button>
        </li>
      ))}
    </div>
  );
};
export default Todo;
