import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, changeFilter } from "../../store/actions/creators/todo";

import styles from "./index.module.css";

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");


  const onInputChange = (evt) => {
    setValue(evt.target.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo(value));
    setValue("");
  };
  

  return (
    <div>
      <input type="text" value={value} onChange={onInputChange} />
      <button className={styles.addButton} onClick={handleAddTodo}>
        Добавить туду
      </button>
      <div className={styles.buttonsBlock}>
          <button type="button" key="all" onClick={() => dispatch(changeFilter("all"))}>Все</button>
          <button type="button" key="active" onClick={() => dispatch(changeFilter("active"))}>Невыполненные</button>
          <button type="button" key="done" onClick={() => dispatch(changeFilter("done"))}>Выполненные</button>
      </div>
    </div>
  );
};
