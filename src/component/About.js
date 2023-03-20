import React from "react";

// import React, { useState } from "react";

export default function About(props) {
  //  1

  // const [myStyle, setStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // const [btnText, setText] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //   if (myStyle.color === "black") {
  //     setStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setText("Enable Light Mode");
  //   } else {
  //     setStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setText("Enable Dark Mode");
  //   }
  // };

  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
    border: "2px solid",
    borderColor: props.mode === "dark" ? "white" : "#042743",
  };

  return (
    <div
      className="accordion my-5"
      style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      id="accordionExample"
    >
      <h1 className=" mb-3">About</h1>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
            style={myStyle}
          >
            <strong>Accordion Item #1</strong>
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show" //show
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={myStyle}>
            <strong>This is the first item's accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
            style={myStyle}
          >
            <strong>Accordion Item #2</strong>
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={myStyle}>
            <strong>This is the second item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
            style={myStyle}
          >
            <strong>Accordion Item #3</strong>
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={myStyle}>
            <strong>This is the third item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>

      {/* <div className="container my-3">
        <button type="button" className="btn btn-primary" onClick={toggleStyle}>
          {btnText}
        </button>
      </div> */}
    </div>
  );
}