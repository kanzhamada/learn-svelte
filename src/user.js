import { mount } from "svelte";
import "./app.css";
// @ts-ignore
import UserApp from "./lib/UserApp.svelte";

const app = mount(UserApp, {
  target: document.getElementById("app"),
});

export default app;
