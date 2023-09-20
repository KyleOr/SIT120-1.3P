import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 
import "./components/HomePageStyles.css";
import "./components/PortfolioPageStyles.css";

const app = createApp(App).use(router);


if (router) {
  app.use(router);
}

app.mount('#app'); 
