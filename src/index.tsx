import { Component } from "solid-js";
import { render } from "solid-js/dom";

const App: Component = () => {
  return <h1>Hello world!</h1>;
};

render(() => <App />, document.getElementById("app"));
