import { createApp } from "vue";

import { createRouter, createWebHistory } from 'vue-router'
import "./css/tailwind.css";
import App from "./App.vue";

import DocumentView from "./views/DocumentView.vue";
import LoginView from "./views/LoginView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: DocumentView },
      { path: '/login', component: LoginView },
    ],
  })
  
  createApp(App).use(router).mount('#app')