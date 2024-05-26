<template>
  <div class="app-admin-wrap layout-sidebar-large clearfix">
    <top-nav />

    <sidebar />

    <main>
      <div
        :class="{ 'sidenav-open': getSideBarToggleProperties.isSideNavOpen }"
        class="main-content-wrap d-flex flex-column flex-grow-1"
      >
        <transition name="page" mode="out-in">
          <router-view />
        </transition>

        <div class="flex-grow-1"></div>
        <appFooter />
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import TopNav from "./TopNav.vue";
import appFooter from "../common/footer.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Sidebar,
    TopNav,
    appFooter,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getSideBarToggleProperties"]),
  },
  methods: {},
};
</script>
<style>
</style>