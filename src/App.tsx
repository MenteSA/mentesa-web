import { ToastContainer } from "react-toastify";
import Routes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";
<<<<<<< HEAD
import "react-toastify/dist/ReactToastify.css";
=======
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> fbe4840267500f7999d38e62b56229b2f0ff64ab

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
