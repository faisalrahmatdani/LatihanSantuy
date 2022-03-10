import "./App.css";
import MainPage from "./containers/MainPage";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  

  return <MainPage />;
}

export default App;
