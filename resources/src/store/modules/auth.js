import { createStore } from "vuex";
import axios from "axios";
import VueI18n from "vue-i18n";
import messages from "../../translations";
// Create the Vue app instance

const i18n = new VueI18n({
    locale: "en",
    fallbackLocale: "en",
    messages,
});
const state = {
    isAuthenticated: false,
    permissions: null,
    user: {},
    loading: false,
    error: null,
    notifs: 0,
    defaultLanguage: "en",
};

const getters = {
    isAuthenticated: (state) => state.isAuthenticated,
    currentUser: (state) => state.user,
    currentUserPermissions: (state) => state.permissions,
    loading: (state) => state.loading,
    notifsAlert: (state) => state.notifs,
    defaultLanguage: (state) => state.defaultLanguage,
    error: (state) => state.error,
};

const mutations = {
    setLoading(state, loading) {
        state.loading = loading;
        if (loading) {
            state.error = null;
        }
    },
    setError(state, error) {
        state.error = error;
        state.loading = false;
    },
    clearError(state) {
        state.error = null;
    },
    setPermissions(state, permissions) {
        state.permissions = permissions;
    },
    setUser(state, user) {
        state.user = user;
        state.isAuthenticated = !!user;
    },
    setDefaultLanguage(state, language) {
        i18n.global.locale = language; // Adjusted for Vue 3 i18n
        state.defaultLanguage = language;
    },
    setNotifs(state, notifs) {
        state.notifs = notifs;
    },
    logout(state) {
        state.user = null;
        state.permissions = null;
        state.isAuthenticated = false;
        state.loading = false;
        state.error = null;
        state.notifs = 0;
        state.defaultLanguage = "en";
    },
};

const actions = {
    async refreshUserPermissions({ commit }) {
        commit("setLoading", true);
        try {
            const response = await axios.get("/get_user_auth");
            const {
                permissions,
                user,
                notifs,
                user: { default_language },
            } = response.data;

            commit("setPermissions", permissions);
            commit("setUser", user);
            commit("setNotifs", notifs);
            commit("setDefaultLanguage", default_language);
        } catch (error) {
            commit("setError", error.message);
            commit("setPermissions", null);
            commit("setUser", null);
            commit("setNotifs", 0);
            commit("setDefaultLanguage", "en");
        } finally {
            commit("setLoading", false);
        }
    },
    async logout({ commit }) {
        commit("setLoading", true);
        try {
            await axios.post("/logout");
            commit("logout");
            window.location.href = "/login";
        } catch (error) {
            commit("setError", error.message);
        } finally {
            commit("setLoading", false);
        }
    },
};

export default createStore({
    state,
    getters,
    actions,
    mutations,
});
