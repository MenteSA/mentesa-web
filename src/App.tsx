import { ToastContainer } from "react-toastify";
import Routes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
