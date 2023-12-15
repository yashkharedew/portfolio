import logo from "./logo.svg";
import "./App.css";
import { theme } from "./theme/index";
import { ChakraProvider } from "@chakra-ui/react";
import Index from "./pages/digitalS/Index";
import CdSec from "./pages/creativeDesign/CdSec";
import MainSec from "./pages/creativeDesign/MainSec";
import Sdeveloper from "./pages/smartDeveloper/Sdeveloper";
import BrandVideoSec from "./pages/brandIdentities/BrandVideoSec";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Index />
        <CdSec />
        <Sdeveloper />
        <BrandVideoSec />
      </ChakraProvider>
    </>
  );
}

export default App;
