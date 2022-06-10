import Input from "./input"
import List from "./todo_item"
import useLocalStorage from "./localstorage";
import { Container as ChakraContainer } from '@chakra-ui/react'

function Container(){
    const [value,setValue] = useLocalStorage("todos")
    function Submitted(data){
        setValue((currValue) => [...currValue, {text: data, checked: false, id: (new Date()).getTime()}])
    }
    console.log(value)
    const complete = value.filter((el) => el.checked === true)
    const incomplete = value.filter((el) => el.checked === false)
  
    function handleCheck(id) {
        const temp = [...value]
        const index = temp.findIndex(item => item.id === id)
        temp[index].checked = !temp[index].checked
        console.log(temp,"temp");
        console.log(index, "index");
        setValue(temp)
    }

    function handleDelete(id){
        const temp = value.filter((el) => el.id !== id)
        setValue(temp)
    }

    return (
        <ChakraContainer>
            <Input inputValue = {Submitted}/>
            <h1>Complete</h1>
            <List dataList={complete} onCheck={handleCheck} onDelete={handleDelete}/>
            <br />
            <h1>Incomplete</h1>
            <List dataList={incomplete} onCheck={handleCheck} onDelete={handleDelete}/>
        </ChakraContainer>
    )
}

export default Container