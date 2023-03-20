// import React, { Component } from "react";
// import "./style.css";

// export class Form extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       number: "",
//       topic: "me",
//     };
//   }

//   handlerChange = (event) => {
//     this.setState = {
//       name: event.target.value,
//     };
//   };

//   handlerCommentChange = (event) => {
//     this.setState = {
//       number: event.target.value,
//     };
//   };

//   handlerTopicChange = (event) => {
//     this.setState = {
//       topic: event.target.value,
//     };
//   };

//   handlerSubmit = (event) => {
//     alert(`${this.state.name} ${this.state.number} ${this.state.topic}`);
//     event.preventDefault();
//   };

//   render() {
//     return (
//       <form action="" onSubmit={this.handlerSubmit}>
//         <div>
//           <label htmlFor="">Name </label>
//           <input
//             type="text"
//             defaultValue={this.state.name}
//             onChange={this.handlerChange}
//           />
//         </div>

//         <div>
//           <label htmlFor="">Phone Number</label>
//           <input
//             type="text"
//             defaultValue={this.state.number}
//             onChange={this.handlerCommentChange}
//           />
//         </div>

//         <div>
//           <label htmlFor="">Topics</label>
//           <select name="" id="" defaultValue={this.state.topic}>
//             <option defaultValue="react">React</option>
//             <option defaultValue="ruby">Ruby</option>
//             <option defaultValue="me">MERN</option>
//           </select>
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }

import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
      topics: "me",
    };
  }
  changeHandlerName = (event) => {
    this.setState = {
      name: event.target.value,
    };
  };

  changeHandlerPassword = (event) => {
    this.setState = {
      password: event.target.value,
    };
  };

  handlerSubmit = (event) => {
    alert(`${this.state.name} ${this.state.password} ${this.state.topics}`);
    event.preventDefault();
  };

  render() {
    return (
      <form action="" onSubmit={this.handlerSubmit}>
        <div>
          <label htmlFor="">Name </label>
          <input
            type="text"
            defaultValue={this.state.name}
            onChange={this.changeHandlerName}
          />
        </div>

        <div>
          <label htmlFor="">Password </label>
          <input
            type="password"
            defaultValue={this.state.password}
            onChange={this.changeHandlerPassword}
          />
        </div>

        <div>
          <label htmlFor="">Topics </label>
          <select name="" id="" defaultValue={this.state.topics}>
            <option defaultValue="re">React</option>
            <option defaultValue="ht">Html</option>
            <option defaultValue="me">CSs</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}
