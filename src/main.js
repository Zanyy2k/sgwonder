import { createApp } from "vue";
// import './style.css'
import App from "./App.vue";
import router from "./router.js";

const app = createApp(App);

// Use Router
app.use(router);
app.mount("#app");
