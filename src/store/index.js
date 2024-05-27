import { createApp } from "vue";
import { createStore } from "vuex";
import largeSidebar from "./modules/largeSidebar";
import compactSidebar from "./modules/compactSidebar";
import config from "./modules/config";
import auth from "./modules/auth";
import language from "./modules/language";

// Create store
const store = createStore({
    modules: {
        language,
        auth,
        largeSidebar,
        compactSidebar,
        config,
    },
});

export default store
// Create Vue app and use the store
// const app = createApp(App);
// app.use(store);
// app.mount("#app");
