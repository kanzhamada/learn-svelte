import { mount } from "svelte";
import "./app.css";
// @ts-ignore
import Counter from "./lib/Counter.svelte";

const app = mount(Counter, {
  target: document.getElementById("app"),
});

export default app;
