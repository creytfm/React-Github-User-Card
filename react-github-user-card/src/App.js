import axios from "axios";
import React from "react";
import {Img, Card, Body} from "./Styles"
import User from "./User"


class App extends React.Component {
state = {
followers: []
};

componentDidMount() {
axios.get("https://api.github.com/users/creytfm/followers").then(response => {
this.setState({
followers: response.data
});
console.log(response.data);
});
}

componentDidUpdate(prevProps, prevState) {
if (prevState.followers !== this.state.followers) {
console.log("new followers state");
}
}

render() {
return (
<Body>
  <h1>
  Welcome to Creytfm followers page!
  </h1>
  <User/>
<h2>Followers:</h2>
{this.state.followers.map(name => {
return (
<Card key={name.id}>
<h1>{name.login}</h1>
<Img src ={name.avatar_url}></Img>
</Card>
);
})}
</Body>
);
}
}
export default App;