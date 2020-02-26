import axios from "axios";
import React from "react";


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
{this.state.followers.map(name => {
return (
<div key={name.id}>
<h1>{name.login}</h1>
</div>
);
})}
</body>
);
}
}
export default App;