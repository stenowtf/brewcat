import PropTypes from "prop-types";
import React from "react";

export class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log(
      "LOG: Error -> static getDerivedStateFromError -> error",
      error
    );
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("LOG: Error -> componentDidCatch -> info", info);
    console.log("LOG: Error -> componentDidCatch -> error", error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

Error.propTypes = {
  children: PropTypes.node.isRequired
};
