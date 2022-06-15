import { Button, Checkbox } from "@chakra-ui/react";
import { useTodo } from "./use-Todo";

function ListTodoItem({ dataList }) {
  const {handleCheck, handleDelete} = useTodo()
  const item = dataList.map((item) => {
    return (
      <li className="listItem" key={item.id}>
        <Checkbox
          defaultChecked={item.checked}
          onChange={() => handleCheck(item.id)}
        >
          {item.text}
        </Checkbox>
        <Button
          size="sm"
          ml="auto"
          onClick={() => handleDelete(item.id)}
          colorScheme={"red"}
        >
          {" Delete "}
        </Button>
      </li>
    );
  });
  return <>{item}</>;
}

export default ListTodoItem;
