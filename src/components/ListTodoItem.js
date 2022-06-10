import { Button, Checkbox } from "@chakra-ui/react";

function ListTodoItem({ dataList, onCheck, onDelete }) {
  const item = dataList.map((item) => {
    return (
      <li className="listItem" key={item.id}>
        <Checkbox
          defaultChecked={item.checked}
          onChange={() => onCheck(item.id)}
        >
          {item.text}
        </Checkbox>
        <Button
          size="sm"
          ml="auto"
          onClick={() => onDelete(item.id)}
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
