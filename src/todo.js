import { mount } from "svelte";
import "./app.css";
// @ts-ignore
import ToDoApp from "./lib/ToDoApp.svelte";

const app = mount(ToDoApp, {
  target: document.getElementById("app"),
});

export default app;
