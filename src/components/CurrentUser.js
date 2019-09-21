import React from "react";

export default class CurrentUser extends React.Component {
  state = {
    name: "Fulano",
    movies: []
  };
  constructor(props) {
    super(props);
  }

  // semelhante ao useEffect ()
  componentDidMount() {
    this.setState({ name: this.props.nameUser });
    this.setState({ name: "Marcio" });
  }

  shouldComponentUpdate(newProps, oldProps) {
    return newProps.nameUser != oldProps.nameUser;
  }

  render() {
    return <h2>Bem-vindo {this.state.name} </h2>;
  }
}
