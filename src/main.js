import { createApp } from "vue";
import App from "./App";
import components from "@/components/UI";

const app = createApp(App);

Object.keys(components).forEach((el) => {
  app.component(components[el].name, components[el]);
});

app.mount("#app");
