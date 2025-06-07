import { mount } from "svelte";
import "./app.css";
// @ts-ignore
import Time from "./lib/Time.svelte";

const app = mount(Time, {
  target: document.getElementById("app"),
});

export default app;
