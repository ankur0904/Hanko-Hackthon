import './App.css';
import HankoAuth from './components/HankoAuth';
import { ChakraProvider } from '@chakra-ui/react'
import IndexPage from './pages/IndexPage';
import AboutUsPage from './pages/AboutUsPage';
import HelpAndSupport from './pages/HelpAndSupport';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUsPage from './pages/ContactUsPage';
import List from './components/List';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/help&support" element={<HelpAndSupport />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/contactus" element={<ContactUsPage />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App;
