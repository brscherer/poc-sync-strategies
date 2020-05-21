import React, { useState, useEffect } from "react";
import axios from "axios";

import PageLoader from "./components/PageLoader";

import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [todo, setTodo] = useState({ data: "" });
  const [todoList, setTodoList] = useState([]);

  const addTodoPessimistic = () => {
    setIsLoading(true);
    axios
      .post("http://localhost:8080/todo/pessimistic", todo)
      .then(({ data }) => {
        setTodoList(data);
        setTodo({ data: "" });
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const addTodoOptimistic = () => {
    setTodoList((list) => [...list, todo.data]);
    setTodo({ data: "" });
    axios
      .post("http://localhost:8080/todo/optimistic", todo)
      .then(({ data }) => {
        setTodoList(data);
      })
      .catch(() => {
        setTodoList((list) => list.splice(-1, 1));
        setIsLoading(false);
      });
  };

  const clearAll = () => {
    axios.post("http://localhost:8080/todo/clear").then(({ data }) => {
      setTodoList(data);
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/todo")
      .then(({ data }) => setTodoList(data));
  }, []);

  return (
    <>
      {isLoading && <PageLoader />}
      <div className="App">
        <h1>ToDo List</h1>

        <input
          type="text"
          value={todo.data}
          onChange={(e) => setTodo({ data: e.target.value })}
        />
        <button onClick={addTodoOptimistic}>Add Todo - Optimistic</button>
        <button onClick={addTodoPessimistic}>Add Todo - Pessimistic</button>
        <button onClick={clearAll}>Clear</button>

        <ul>
          {!!todoList.length &&
            todoList.map((todoItem, index) => <li key={index}>{todoItem}</li>)}
        </ul>
      </div>
    </>
  );
};

export default App;
