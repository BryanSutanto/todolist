import CreateTodoForm from "./CreateTodoForm";
import ListTodoItem from "./ListTodoItem";
import { Container as ChakraContainer } from "@chakra-ui/react";
import { useTodo } from "./use-Todo";

function Container() {
  const { value } = useTodo();
  const complete = value.filter((el) => el.checked === true);
  const incomplete = value.filter((el) => el.checked === false);

  return (
    <ChakraContainer>
      <CreateTodoForm />
      <h1>Incomplete</h1>
      <ListTodoItem
        dataList={incomplete}
      />
      <br />
      <h1>Complete</h1>
      <ListTodoItem
        dataList={complete}
      />
    </ChakraContainer>
  );
}

export default Container;
