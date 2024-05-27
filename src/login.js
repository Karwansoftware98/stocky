import { createApp } from "vue";
import store from "./store";
import router from "./router";
// import {
//     ValidationProvider,
//     configure,
// } from "vee-validate";

// import { ValidationProvider } from "vee-validate";

import "./assets/styles/sass/themes/lite-purple.scss";
import Meta from "vue-meta";
import axios from "axios";

import VueI18n from "vue-i18n";
import messages from "./translations";
// Create the Vue app instance
const app = createApp(App);

const i18n = new VueI18n({
    locale: "en",
    fallbackLocale: "en",
    messages,
});
// Install plugins
app.use(router);
app.use(store);
app.use(Meta, {
    keyName: "metaInfo",
    attribute: "data-vue-meta",
    ssrAttribute: "data-vue-meta-server-rendered",
    tagIDKeyName: "vmid",
    refreshOnceOnNavigation: true,
});
app.use(i18n);

// Configure VeeValidate
configure({
    generateMessage: localize({
        en: {
            messages: {
                required: "This field is required",
                required_if: "This field is required",
                regex: "This field must be a valid",
                mimes: `This field must have a valid file type.`,
                size: (_, { size }) =>
                    `This field size must be less than ${size}.`,
                min: "This field must have no less than {length} characters",
                max: (_, { length }) =>
                    `This field must have no more than ${length} characters`,
            },
        },
    }),
    validateOnInput: true,
    validateOnChange: true,
});

// Register global components (using async import for lazy loading)
app.component("customizer", () =>
    import(
        /* webpackChunkName: "customizer" */ "./components/common/customizer.vue"
    )
);
app.component("vue-perfect-scrollbar", () =>
    import(
        /* webpackChunkName: "vue-perfect-scrollbar" */ "vue-perfect-scrollbar"
    )
);


Vue.component("ValidationProvider", ValidationProvider);
app.component("login-component", () =>
    import("./views/app/sessions/signIn.vue")
);
app.component("forgot-component", () =>
    import("./views/app/sessions/forgot.vue")
);
app.component("reset-component", () =>
    import("./views/app/sessions/reset.vue")
);
// Set up axios
window.axios = axios;
window.axios.defaults.baseURL = "";

window.axios.defaults.withCredentials = true;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.data) {
            if (error.response.status === 401) {
                window.location.href = "/login";
            }

            if (error.response.status === 404) {
                router.push({ name: "NotFound" });
            }
            if (error.response.status === 403) {
                router.push({ name: "not_authorize" });
            }

            return Promise.reject(error.response.data);
        }
        return Promise.reject(error.message);
    }
);

// Global event bus
window.Fire = new Vue();

app.mount("#login"); // Mount using createApp
