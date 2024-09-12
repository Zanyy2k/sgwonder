// src/router.js

import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import Element from "./views/Element.vue";
import Services from "./views/Services.vue";

const routes = [
  { path: "/sgwonder/", name: "Home", component: Home },
  { path: "/sgwonder/about", name: "About", component: About },
  { path: "/sgwonder/contact", name: "Contact", component: Contact },
  { path: "/sgwonder/element", name: "Element", component: Element },
  { path: "/sgwonder/services", name: "Services", component: Services },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
