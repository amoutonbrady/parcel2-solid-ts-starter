import { render } from "solid-js/web";
import { Component, createSignal } from "solid-js";

const Counter: Component = () => {
  const [count, setCount] = createSignal(0);
  const inc = (by: number) => setCount(count() + by);

  return (
    <button type="button" onClick={[inc, 1]}>
      {count()}
    </button>
  );
};

render(() => <Counter />, document.getElementById("app"));
