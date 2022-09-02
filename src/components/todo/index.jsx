import React from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";

import { deleteTodo, toggleTodo } from "../../store/actions/creators/todo";

import styles from "./index.module.css";

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleTodoItem = () => {
    dispatch(toggleTodo(todo.id));
  };

  const deleteTodoItem = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className={styles.todoBlock}>
      <li className={styles.item} onClick={toggleTodoItem}>
        {todo.completed ? "👌" : "👋"}{" "}
        <span
          className={cx({
            [styles.completed]: todo.completed,
          })}
        >
          {todo.content}
        </span>
      </li>
      <button onClick={deleteTodoItem}>Удалить</button>
    </div>
  );
};
