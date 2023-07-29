import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./logins.css";
function Logins({ setter }) {
  const [state, setstate] = useState("");
  const navi = useNavigate();
  const About = () => {
    localStorage.setItem("name", state);

    setter();
    navi("/home");
  };
  return (
    <div className="login">
      <div className="input-box">
        <input
          className="input"
          onChange={(e) => setstate(e.target.value)}
          value={state}
          type="text"
          placeholder="enter your name"
        />

        <button className="button" onClick={() => About()}>
          login{" "}
        </button>
        {/* <Link to="/">enter</Link>
      <button>navi-</button> <button>navi-</button> */}
      </div>
    </div>
  );
}

export default Logins;
