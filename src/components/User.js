import classes from "./User.module.css";
import { Component } from "react";

class User extends Component {
  componentWillUnmount() {
    console.log("list is removed");
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

export default User;
