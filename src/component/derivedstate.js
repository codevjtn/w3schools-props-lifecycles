import React from "react";
import ReactDOM from "react-dom";

class Headerderived extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  static getDerivedStateFromProps(props, state) {
    return { favoritecolor: props.favcol };
  }
  render() {
    return (
      <h4>Headerderived My Favorite Color is {this.state.favoritecolor}</h4>
    );
  }
}

export default Headerderived;
