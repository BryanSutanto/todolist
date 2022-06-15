import { Input } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useTodo } from "./use-Todo";

function CreateTodoForm() {
  const {handleSubmit} = useTodo();
  const inputRef = useRef();
  function handleFormSubmit(e) {
    if (inputRef.current.value.trim() === "") return;
    e.preventDefault();
    handleSubmit(inputRef.current.value);
    inputRef.current.value = "";
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="input">TODO LIST </label>
      <Input id="input" placeholder="add a task..." ref={inputRef}></Input>
    </form>
  );
}

export default CreateTodoForm;
