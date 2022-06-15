import React, { createContext, useContext } from "react";
import useLocalStorage from "./use-local-storage";

const defaultValue = {
  value: [],
  handleSubmit: () => {},
  handleCheck: () => {},
  handleDelete: () => {},
};

const TodoContext = createContext(defaultValue);

function TodoProvider({children}) {
  const [value, setValue] = useLocalStorage("todos");
  function handleSubmit(data) {
    setValue((currValue) => [
      ...currValue,
      { text: data, checked: false, id: new Date().getTime() },
    ]);
  }

  function handleCheck(id) {
    const temp = [...value];
    const index = temp.findIndex((item) => item.id === id);
    temp[index].checked = !temp[index].checked;
    setValue(temp);
  }

  function handleDelete(id) {
    const temp = value.filter((el) => el.id !== id);
    setValue(temp);
  }

  return (
    <TodoContext.Provider value={{value, handleSubmit, handleCheck, handleDelete}}>
        {children}
    </TodoContext.Provider>
  )
}

function useTodo() {
    return useContext(TodoContext)
}

export {useTodo, TodoProvider}