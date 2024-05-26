import store from "./store";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Auth from './auth/index.js';
window.auth = new Auth();
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import * as rules from "vee-validate/dist/rules";

localize({
  en: {
    messages: {
      required: 'This field is required',
      required_if: 'This field is required',
      regex: 'This field must be a valid',
      mimes: `This field must have a valid file type.`,
      size: (_, { size }) => `This field size must be less than ${size}.`,
      min: 'This field must have no less than {length} characters',
      max: (_, { length }) => `This field must have no more than ${length} characters`
    }
  },
});
// Install VeeValidate rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

// Register it globally
Vue.component("ValidationObserver", ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

import StockyKit from "./plugins/stocky.kit";
Vue.use(StockyKit);
import VueCookies from 'vue-cookies'
Vue.use(VueCookies);

var VueCookie = require('vue-cookie');
Vue.use(VueCookie);

import VueExcelXlsx from "vue-excel-xlsx";
Vue.use(VueExcelXlsx);

window.axios = require('axios');
window.axios.defaults.baseURL = '/api/';

window.axios.defaults.withCredentials = true;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.response.use((response) => {

  return response;
}, (error) => {
  if (error.response && error.response.data) {
    if (error.response.status === 401) {
      window.location.href='/login';
    }

    if (error.response.status === 404) {
      router.push({ name: 'NotFound' });
    }
    if (error.response.status === 403) {
      router.push({ name: 'not_authorize' });
    }

    return Promise.reject(error.response.data);
  }
  return Promise.reject(error.message);
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'performAsyncTask') {
    someAsyncFunction().then((result) => {
      sendResponse({ data: result });
    }).catch((error) => {
      sendResponse({ error: error.message });
    });
    return true; // Indicate that response will be sent asynchronously
  }
});
const express = require('express');
const app = express();

app.get('/setup', async (req, res) => {
  try {
    // Example async operation, e.g., database query
    const result = await someAsyncOperation();
    res.json(result);
  } catch (error) {
    console.error('Error in /setup endpoint:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

async function someAsyncOperation() {
  // Simulate an error
  throw new Error('Simulated error');
}


import vSelect from 'vue-select'
Vue.component('v-select', vSelect)
import 'vue-select/dist/vue-select.css';

import '@trevoreyre/autocomplete-vue/dist/style.css';

window.Fire = new Vue();

import Breadcumb from "./components/breadcumb";
import { i18n } from "./plugins/i18n";

Vue.component("breadcumb", Breadcumb);

Vue.config.productionTip = true;
Vue.config.silent = true;
Vue.config.devtools = false;

new Vue({
  store,
  router,
  VueCookie,
  i18n,
  render: h => h(App),
}).$mount("#app");
