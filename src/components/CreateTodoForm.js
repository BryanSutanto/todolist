import { Input } from "@chakra-ui/react";
import React, { useRef } from "react";

function CreateTodoForm({ onSubmit }) {
  const inputRef = useRef();
  function handleSubmit(e) {
    if (inputRef.current.value.trim() === "") return;
    e.preventDefault();
    onSubmit(inputRef.current.value);
    inputRef.current.value = "";
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input">TODO LIST </label>
      <Input id="input" placeholder="add a task..." ref={inputRef}></Input>
    </form>
  );
}

export default CreateTodoForm;
