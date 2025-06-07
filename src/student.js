import { mount } from "svelte";
import "./app.css";
// @ts-ignore
import Student from "./lib/Student.svelte";

const app = mount(Student, {
  target: document.getElementById("app"),
});

export default app;
