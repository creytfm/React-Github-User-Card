import axios from "axios";
import React from "react";
import { Img, Card } from "./Styles";

class User extends React.Component {
  state = {
    user: []
  };

  componentDidMount() {
    axios.get("https://api.github.com/users/creytfm").then(response => {
      this.setState({
        user: response.data
      });
      console.log(response.data);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      console.log("new user state");
    }
  }

  render() {
    return (
      <React.Fragment>
        <h2>user:</h2>
        <Card><h1>{this.state.user.login}</h1>
        <Img src={this.state.user.avatar_url}></Img>
        </Card>
      </React.Fragment>
    );
  }
}
export default User;
