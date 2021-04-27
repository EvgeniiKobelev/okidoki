<template>
  <nav class="navbar white lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('hamburgerOpenClose')">
          <i class="material-icons black-text">dehaze</i>
        </a>

        <span class="black-text">OkiDokiCase</span>
      </div>
      <ul class="right">
        <li>
          <a
            class="dropdown-trigger black-text"
            href="#"
            data-target="dropdown"
            ref="dropdown"
            >{{ name }}
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  emits: ["hamburgerOpenClose"],
  data() {
    return {
      name: "",
      dropdown: null,
      avatarImg: null,
    };
  },
  mounted() {
    this.avatarImg = this.info.avatarImg;
    this.name = this.info.name;
    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: false,
    });
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/login?message=logout");
    },
  },
  computed: {
    ...mapGetters(["info"]),
  },
};
</script>
<style scoped></style>
