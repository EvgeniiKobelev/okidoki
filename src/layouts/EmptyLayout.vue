<template>
  <div>
    <navbar></navbar>

    <main class="telo" style="padding-top: 1px">
      <div>
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large orange accent-4" to="/">
        <i class="large material-icons">contact_support</i>
      </router-link>
    </div>
    <footer class="page-footer orange accent-4">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Карта сайта</h5>
          </div>
          <div class="col l4 offset-l2 s12">
            <img src="../assets/img/oki_19white.png" width="120" />
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2021 OkiDokiCase
          <a
            class="grey-text text-lighten-4 right"
            style="margin: 0px 10px"
            href="#!"
            ><img src="../assets/img/fb.png" width="10"
          /></a>
          <a class="grey-text text-lighten-4 right" href="#!"
            ><img src="../assets/img/inst.png" width="20"
          /></a>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import message from "../utils/messages";
import Navbar from "../components/app/Navbar";
import Sidebar from "../components/app/Sidebar";
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    error(error) {
      this.$error(message[error.code] || "Неизвестная ошибка");
    },
  },
  components: {
    Navbar,
    Sidebar,
  },
};
</script>
<style scoped>
.telo {
  min-height: 100vh;
}
</style>
