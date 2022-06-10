import CreateTodoForm from "./CreateTodoForm";
import ListTodoItem from "./ListTodoItem";
import useLocalStorage from "./use-local-storage";
import { Container as ChakraContainer } from "@chakra-ui/react";

function Container() {
  const [value, setValue] = useLocalStorage("todos");
  function handleSubmit(data) {
    setValue((currValue) => [
      ...currValue,
      { text: data, checked: false, id: new Date().getTime() },
    ]);
  }
  const complete = value.filter((el) => el.checked === true);
  const incomplete = value.filter((el) => el.checked === false);

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
    <ChakraContainer>
      <CreateTodoForm onSubmit={handleSubmit} />
      <h1>Incomplete</h1>
      <ListTodoItem
        dataList={incomplete}
        onCheck={handleCheck}
        onDelete={handleDelete}
      />
      <br />
      <h1>Complete</h1>
      <ListTodoItem
        dataList={complete}
        onCheck={handleCheck}
        onDelete={handleDelete}
      />
    </ChakraContainer>
  );
}

export default Container;
