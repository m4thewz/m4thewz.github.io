import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/styles/tailwind.css";
const app = createApp(App);
const messages = {
  en: require("./assets/locales/en.json"),
  pt: require("./assets/locales/pt.json"),
};

app.config.globalProperties.$locale = localStorage.getItem("locale") || "en";
app.config.globalProperties.$t = (key) => {
  return messages[app.config.globalProperties.$locale][key] || key;
};
app.config.globalProperties.$toggleLocale = () => {
  let locale = localStorage.getItem("locale") == "en" ? "pt" : "en";
  localStorage.setItem("locale", locale);
  app.config.globalProperties.$locale = locale;
  location.reload();
};

app.use(router).mount("#app");
