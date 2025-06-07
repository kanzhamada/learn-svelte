import { mount } from "svelte";
import "./app.css";
// @ts-ignore
import Mouse from "./lib/Mouse.svelte";

const app = mount(Mouse, {
  target: document.getElementById("app"),
});

export default app;
