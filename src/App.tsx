import { ToastContainer } from "react-toastify";
import Routes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyles />
      <Routes />
    </>
  );
}

export default App;
