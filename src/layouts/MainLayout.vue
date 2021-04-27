<template>
  <div>
    <loader v-if="loading"></loader>
    <div class="app-main-layout" v-else>
      <navbar-user @hamburgerOpenClose="isOpen = !isOpen"></navbar-user>
      <sidebar-user :isOpen="isOpen"></sidebar-user>

      <main class="app-content full">
        <div class="app-page">
          <router-view />
        </div>
      </main>

      <div class="fixed-action-btn">
        <router-link class="btn-floating btn-large blue" to="/">
          <i class="large material-icons">contact_support</i>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Loader from "../components/app/Loader";
import NavbarUser from "../components/app/NavbarUser";
import SidebarUser from "../components/app/SidebarUser";
export default {
  name: "main-layout",
  data() {
    return {
      isOpen: false,
      loading: true,
    };
  },
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch("fetchInfo");
    }
    this.loading = false;
  },
  components: {
    NavbarUser,
    SidebarUser,
    Loader,
  },
};
</script>
