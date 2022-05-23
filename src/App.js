import "./styles.css";
import Header from "./components/header";
import Todo from "./components/todo";
import { useEffect, useState } from "react";

const App = () => {
  // const initialStorage = JSON.parse(localStorage.getItem("todo")) || [];
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);
  return (
    <div className="App">
      <Header
        edit={edit}
        setEdit={setEdit}
        todo={todo}
        setTodo={setTodo}
        input={input}
        setInput={setInput}
      />
      <Todo setEdit={setEdit} todo={todo} setTodo={setTodo} />
    </div>
  );
};
export default App;
