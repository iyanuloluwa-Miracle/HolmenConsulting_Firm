import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
// import "flowbite/dist/flowbite.css";
// import "flowbite";
import router from "./router/index";

const app = createApp(App);

app.use(router);
app.mount("#app");

