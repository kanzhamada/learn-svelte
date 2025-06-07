import { mount } from "svelte";
import "./app.css";
// @ts-ignore
import StoreCounterApp from "./lib/StoreCounterApp.svelte";

const app = mount(StoreCounterApp, {
  target: document.getElementById("app"),
});

export default app;
