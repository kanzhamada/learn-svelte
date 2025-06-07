import { mount } from "svelte";
import "./app.css";
// @ts-ignore
import SayHello from "./lib/SayHello.svelte";

const app = mount(SayHello, {
  target: document.getElementById("app"),
});

export default app;
