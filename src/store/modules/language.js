import { useStorage } from "@vueuse/core";
import Languages from "../../translations";

const supportedLanguages = Object.getOwnPropertyNames(Languages);

const state = {
    language: useStorage("language", "en"), // Default to 'en' if no language is set
};

const mutations = {
    SET_LANGUAGE(state, lang) {
        state.language.value = lang; // Using .value to set the ref
    },
};

const actions = {
    setLanguage({ commit }, languages) {
        if (typeof languages === "string") {
            commit("SET_LANGUAGE", languages);
        } else {
            const language = supportedLanguages.find((sl) =>
                languages.find((l) => l.includes(sl)),
            );
            commit("SET_LANGUAGE", language || "en"); // Fallback to 'en' if no match
        }
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
