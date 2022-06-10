import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Container from "./components/container.js"

function App() {
  return (
    <ChakraProvider>
      <Container />
    </ChakraProvider>
  );
}

export default App;
