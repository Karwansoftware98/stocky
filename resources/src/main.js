import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import {
//     ValidationProvider,
//     configure,
// } from "vee-validate";
// import { localize } from "@vee-validate/i18n";
import VueCookies from "vue-cookies";
import VueExcelXlsx from "vue-excel-xlsx";
import axios from "axios";
import "@trevoreyre/autocomplete-vue/dist/style.css";
import StockyKit from "./plugins/stocky.kit";
import VueI18n from "vue-i18n";
import messages from "./translations";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
const app = createApp(App);

const i18n = new VueI18n({
    locale: "en",
    fallbackLocale: "en",
    messages,
});


const options = {
    confirmButtonColor: "#41b882",
    cancelButtonColor: "#ff7674",
};

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

// Install plugins
app.use(router);
app.use(store);
app.use(VueSweetalert2, options);
app.use(VueCookies);
app.use(VueExcelXlsx);
app.use(i18n);
app.use(StockyKit);

// Set up axios
window.axios = axios;
window.axios.defaults.baseURL = "/api/";
window.axios.defaults.withCredentials = true;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

//Axios Interceptor
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

// Mount the app
app.mount("#app");
