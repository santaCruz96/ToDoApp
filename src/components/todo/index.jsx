import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";

import { deleteTodo, toggleTodo } from "../../store/actions/creators/todo";

import styles from "./index.module.css";

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const filters = useSelector((store) => store.todo.filters);

  const toggleTodoItem = () => {
    dispatch(toggleTodo(todo.id));
  };

  const deleteTodoItem = () => {
    dispatch(deleteTodo(todo.id));
  };

  let all
  let complited
  let notComplited

  if (filters === "all") {
    all = "all"
  }

  if (filters === "done") {
    complited = todo.completed
  }

  if (filters === "active") {
    notComplited = !todo.completed
  }

  return (
    <div className={styles.todoBlock}>
      <div>
        {all && (
          <li className={styles.item} onClick={toggleTodoItem}>
            {todo.completed ? "👌" : "👋"}{" "}
            <span
              className={cx({
                [styles.completed]: todo.completed,
              })}
            >
              {todo.content}
            </span>
            <button onClick={deleteTodoItem}>Удалить</button>
          </li>
        )}
        {complited && (
          <li className={styles.item} onClick={toggleTodoItem}>
          👌{" "}
          <span
            className={styles.completed}
          >
            {todo.content}
          </span>
          <button onClick={deleteTodoItem}>Удалить</button>
        </li>
        )}
        {notComplited && (
          <li className={styles.item} onClick={toggleTodoItem}>
          👋{" "}
          <span
            className={styles.item}
          >
            {todo.content}
          </span>
          <button onClick={deleteTodoItem}>Удалить</button>
        </li>
        )}
      </div>
    </div>
  );
};
