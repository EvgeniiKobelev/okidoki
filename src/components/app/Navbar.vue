<template>
  <nav>
    <div class="nav-wrapper white">
      <a href="/" class="brand-logo center"
        ><img :src="require('@/assets/logo.png')" height="36"
      /></a>
      <ul id="slide-out" class="sidenav" ref="slidenav">
        <li v-for="link in links" :key="link.url">
          <router-link
            :to="link.url"
            class="waves-effect waves-orange pointer"
            >{{ link.title }}</router-link
          >
        </li>
      </ul>
      <ul class="left">
        <li>
          <a
            href="#"
            data-target="slide-out"
            class="sidenav-trigger show-on-large"
            ><i class="material-icons black-text">dehaze</i></a
          >
        </li>
      </ul>
      <ul class="right">
        <li>
          <router-link
            to="/login"
            class="waves-effect waves-light btn-small orange accent-4"
            ><i class="material-icons left">input</i>Вход</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      links: [
        { title: "Главная", url: "/" },
        { title: "Новоcти", url: "/news" },
        { title: "FAQ", url: "/faq" },
        { title: "Правила и документы", url: "/" },
      ],
    };
  },
  mounted() {
    M.Sidenav.init(this.$refs.slidenav);
  },
};
</script>
<style scoped>
.brand-logo img {
  height: 50;
}
.nav-wrapper {
  padding-left: 2%;
  padding-right: 2%;
}
</style>
