import React from "react";
import ReactDOM from "react-dom";

import Unmountrender from "./component/unmount-render.js";

import Headerderived from "./component/derivedstate.js";
import HeaderCompUpdate from "./component/react-component-update.js";
import Headercomponentmount from "./component/react-componentmount.js";
import HeaderPrevState from "./component/component-update-prevstate.js";

function Car(props) {
  return <h2>I am a {props.brand.model}!</h2>;
}

function Garage() {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={carInfo} />
    </>
  );
}
class Headerred extends React.Component {
  constructor(props) {
    super(props);
    this.setState({ model: "Benz" });
    this.state = { favoritecolor: "red" };
  }
  render() {
    return (
      <h1>
        My Favorite Color is {this.state.favoritecolor}
        {this.state.carmodel}
        {this.state.carmodel}
      </h1>
    );
  }
}

class Header extends React.Component {
  render() {
    return <h1>This is the content of the Header component</h1>;
  }
}

//ReactDOM.render(<Garage />, document.getElementById("root"));
ReactDOM.render(
  <React.Fragment>
    <Header />
    <Headerred />
    <HeaderPrevState />
    <Headerderived favcol="orange" />
    <Garage />
    <Unmountrender />
    <Headercomponentmount />
    <HeaderCompUpdate />
  </React.Fragment>,
  document.getElementById("root")
);
