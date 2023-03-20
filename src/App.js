import { useState } from "react";
import "./App.css";
import About from "./component/About";
import Alert from "./component/Alert";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Form } from "./client/form";
// import ui, { b, c, d } from "./Modules2";

function App() {
  // console.log(ui);
  // console.log(d);
  // console.log(c);
  // console.log(b);

  const [mode, setMode] = useState("light"); // when dark mode enable or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      setInterval(() => {
        document.title = "TextUtils is Amazing";
      }, 2000);

      setInterval(() => {
        document.title = "Install TextUtils Now";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  const [modeTwo, setModeTwo] = useState("success");

  const toggleModeTwo = () => {
    if (modeTwo === "success") {
      setModeTwo("danger");
      document.body.style.backgroundColor = "red";
      showAlert("Red mode has been enabled", "success");
    } else {
      setModeTwo("success");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        modeTwo={modeTwo}
        toggleMode={toggleMode}
        toggleModeTwo={toggleModeTwo}
      />

      <Alert alert={alert} />

      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
        />

        <About mode={mode} />
      </div>
      {/* <Email /> */}
    </>
  );
}

export default App;
