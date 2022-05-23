import { nanoid } from "nanoid";
import { useEffect } from "react";

const Header = ({ todo, setTodo, input, setInput, edit, setEdit }) => {
  const onSubmitForm = (event) => {
    event.preventDefault();
    if (!edit) {
      setTodo([...todo, { id: nanoid(), text: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, edit.id, edit.completed);
    }
    setEdit("");
  };
  const updateTodo = (text, id, completed) => {
    const newTodo = todo.map((item) =>
      item.id === id ? { text, id, completed } : item
    );
    setTodo(newTodo);
    setInput("");
  };
  useEffect(() => {
    if (edit) {
      setInput(edit.text);
    } else {
      setInput("");
    }
  }, [setInput, edit]);
  const handleInput = (e) => {
    setInput(e.target.value);
    // console.log(input);
  };
  return (
    <form className="form" onSubmit={onSubmitForm}>
      <h1>Todo-List</h1>
      <input
        value={input}
        onChange={handleInput}
        type="text"
        placeholder="Enter your todo..."
      />
      <button type="submit">{edit ? "Edit" : "Add"}</button>
    </form>
  );
};
export default Header;
