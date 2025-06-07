import { mount } from "svelte";
import "./app.css";
// @ts-ignore
import Article from "./lib/Article.svelte";

const app = mount(Article, {
  target: document.getElementById("app"),
});

export default app;
