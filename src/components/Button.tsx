import { createSignal } from "solid-js";

export default function Hello() {
  const [count, setCount] = createSignal(0);
  return (
    <>
      <h1>Hello, world!</h1>
      <p>You clicked {count()} times</p>
      <button
        class="b-bluegray b-2 rounded-2 hover-b-amber transition-all-300"
        onClick={() => setCount(count() + 1)}
      >
        Click me
      </button>
    </>
  );
}
