import axios from "axios";
import React from "react";
import {Img, Card} from "./Styles"


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
<body>
<h1>Followers:</h1>
{this.state.followers.map(name => {
return (
<Card key={name.id}>
<h1>{name.login}</h1>
<Img src ={name.avatar_url}></Img>
</Card>
);
})}
</body>
);
}
}
export default App;