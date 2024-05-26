import Vue from "vue";
import VueI18n from "vue-i18n";
import messages from "./path/to/your/messages";

console.log("Vue:", Vue);
console.log("VueI18n:", VueI18n);

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: "en",
    fallbackLocale: "en",
    messages,
});

// console.log("i18n:", i18n);

export default i18n;
