import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, changeFilter } from "../../store/actions/creators/todo";

import styles from "./index.module.css";

const BUTTONS = [
  {name: "all", label: "Все"},
  {name: "active", label: "Невыполненные"},
  {name: "done", label: "Выполненные"},
]

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
        {BUTTONS.map(({name, label}) => (
          <button type="button" key={name} onClick={() => dispatch(changeFilter({name}))}>{label}</button>
        ))}
      </div>
    </div>
  );
};
