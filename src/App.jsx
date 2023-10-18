import './App.css';
import HankoAuth from './components/HankoAuth';
import { ChakraProvider } from '@chakra-ui/react'
import IndexPage from './pages/IndexPage';
import AboutUsPage from './pages/AboutUsPage';
import HelpAndSupport from './pages/HelpAndSupport';

function App() {
  return (
    <ChakraProvider>
      {/* <HankoAuth /> */}
      {/* <IndexPage /> */}
      {/* <AboutUsPage /> */}
      <HelpAndSupport />
    </ChakraProvider>
  )
}

export default App;
