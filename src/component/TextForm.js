import React, { useState } from "react"; // how to use split ,,, string to array

export default function TextForm(props) {
  const [text, setText] = useState("");
  // text = "new text"; // wrong way to change the state
  // setText("new text"); // Correct way to change the state

  function handleOnChange(event) {
    // console.log("Clicked")
    setText(event.target.value);
  }

  const handleUpClick = () => {
    // console.log("hii");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    // console.log("hii");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleCopy = () => {
    let text1 = document.getElementById("myBox");
    text1.select();
    navigator.clipboard.writeText(text1.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  return (
    <>
      <div className="container">
        <h1
          style={{
            color: props.mode === "dark" ? "white" : "#042743",
          }}
        >
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control border border-warning"
            id="myBox"
            rows="8"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
            
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            onChange={handleOnChange}
          ></textarea>
          

        </div>
      </div>

      <button
        type="button"
        disabled={text.length === 0}
        className="btn btn-primary mx-3 my-1"
        onClick={handleUpClick}
      >
        Click To UpperCase
      </button>

      <button
        type="button"
        disabled={text.length === 0}
        className="btn btn-primary mx-3 my-1"
        onClick={handleLoClick}
      >
        Click To LowerCase
      </button>

      <button
        type="button"
        disabled={text.length === 0}
        className="btn btn-primary mx-3 my-1"
        onClick={handleClear}
      >
        Clear Text
      </button>

      <button
        type="button"
        disabled={text.length === 0}
        className="btn btn-primary mx-3 my-1"
        onClick={handleCopy}
      >
        Copy Text
      </button>

      <button
        type="button"
        disabled={text.length === 0}
        className="btn btn-primary mx-3 my-1"
        onClick={handleExtraSpaces}
      >
        Remove Extra Space's
      </button>

      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words, {text.length} Characters
        </p>

        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes Read
        </p>

        <h2>Preview</h2>

        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
