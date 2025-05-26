import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Approutes from "./Routes/Approutes/Approutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router>
        <Approutes />
        <Toaster position="top-center" reverseOrder={false} />
      </Router>
    </>
  );
}

export default App;
