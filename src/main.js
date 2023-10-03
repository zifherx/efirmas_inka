import App from "./App.vue";
import { createApp } from "vue";
//Vuetify
import { registerPlugins } from "./plugins";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");
