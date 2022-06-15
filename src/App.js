import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Container from "./components/Container.js";
import { TodoProvider } from "./components/use-Todo";

function App() {
  return (
    <ChakraProvider>
      <TodoProvider>
        <Container />
      </TodoProvider>
    </ChakraProvider>
  );
}

export default App;
