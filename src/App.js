import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Container from "./components/Container.js"

function App() {
  return (
    <ChakraProvider>
      <Container />
    </ChakraProvider>
  );
}

export default App;
