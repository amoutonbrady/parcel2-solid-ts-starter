import { Component, createSignal } from "solid-js";
import { render } from "solid-js/dom";

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  return <button onClick={() => setCount(count() + 1)}>{count()}</button>;
};

render(() => App, document.getElementById("app"));
