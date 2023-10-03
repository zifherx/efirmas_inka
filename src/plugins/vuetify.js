import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";

const myCustomLightTheme = {
  dark: false,
  colors: {
    primary: "#0D47A1",
    secondary: "#673AB7",
    error: "#D50000",
    info: "#004D40",
    success: "#4CAF50",
    warning: "#FF9800",
  },
};

const vuetify = createVuetify({
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },
});

export default vuetify;
