import { render } from "solid-js/web";
import type { Component } from "solid-js";

const Counter: Component = () => {
  return <h1>Hello, World!</h1>;
};

render(() => <Counter />, document.getElementById("app"));
