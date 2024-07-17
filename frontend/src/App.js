
// import { Button } from '@chakra-ui/react';
import './App.css';
// import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Homepage from "./Pages/Homepage";
// import ChatPage from "./Pages/ChatPage";
import { ChakraProvider } from "@chakra-ui/react";
 function App() {
  return (
    <ChakraProvider>
      {" "}
      <div className="App">
        <Homepage />
      </div>
    </ChakraProvider>
  );
}

export default App;
