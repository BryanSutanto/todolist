import { Button, Checkbox } from "@chakra-ui/react";

function List({ dataList, onCheck, onDelete }) {
  const item = dataList.map((item) => {
    return (
      <li style={{ display: "flex", marginBottom: "0.1rem" }} key={item.id}>
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
          {" "}
          Delete{" "}
        </Button>
      </li>
    );
  });
  return <>{item}</>;
}

export default List;
