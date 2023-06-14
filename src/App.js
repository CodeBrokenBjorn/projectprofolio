
import {Routes, Route} from "react-router-dom";
import "./App.css";
import MainPage from "./page/MainPage.js";


function App() {
  return (

      <Routes>
        <Route path="/" element={ <MainPage /> } />
      </Routes>

  );
}

export default App;
