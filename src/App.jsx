import './App.css';
import HankoAuth from './components/HankoAuth';
import { ChakraProvider } from '@chakra-ui/react'
import IndexPage from './pages/IndexPage';

function App() {
  return (
    <ChakraProvider>
      <HankoAuth />
      <IndexPage />
    </ChakraProvider>
  )
}

export default App;
