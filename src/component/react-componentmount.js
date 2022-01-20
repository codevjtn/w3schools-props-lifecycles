import React from "react";

class Headercomponentmount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  componentDidMount() {
    // changeColor () {
    setTimeout(() => {
      this.setState({ favoritecolor: "blue" });
      setTimeout(() => {
        this.setState({ favoritecolor: "yellow" });
      }, 2000);
    }, 2000);
    // }
  }
  render() {
    return (
      <h1 style={{ color: "red" }}>
        My Favorite Color is {this.state.favoritecolor}
      </h1>
    );
  }
}

export default Headercomponentmount;
