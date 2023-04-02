"use strict"
import HomeScreen from "./features/services/Home/HomeScreen";
import LoginScreen from "./features/services/Authentication/LoginScreen";
import WindowDisplayScreen from "./features/services/WindowDisplay/WindowDisplayScreen";
import {
  Route,
  BrowserRouter,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import BigSpinner from "./features/components/BigSpinner";


function App() {
  const [showSpinner, setShowSpinner] = useState(false);

  return showSpinner ?
    (<BigSpinner />)
    :
    (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeScreen />}></Route>
          <Route exact path="/login" element={<LoginScreen />}></Route >
          <Route exact path="/window" element={<WindowDisplayScreen />}></Route>
        </Routes >
      </BrowserRouter >

    );
}

export default App;
