import "./App.css";
//import Numberz from "./Components/numberzmod/Numberzod";
import Imager from "./Components/imager/Imager";
import Login from "./Components/login/Logins";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
function App() {
  const [am, setam] = useState(localStorage.getItem("name"));

  // useEffect(() => {
  //   setam(localStorage.getItem("name"));
  //   console.log(am);
  //   setamn(!amn);
  // }, []);
  const setter = () => {
    setam(localStorage.getItem("name"));
    console.log(0);
  };
  return (
    <>
      <Routes>
        <Route
          path="/home"
          element={am ? <Imager /> : <Login setter={setter} />}
        />
        <Route path="/login" element={<Login setter={setter} />} />
      </Routes>
    </>
  );
}
export default App;
