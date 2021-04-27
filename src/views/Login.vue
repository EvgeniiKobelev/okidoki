<template>
  <div class="row">
    <div class="col s12 m6 offset-m3">
      <form class="card" @submit.prevent="submitHandler">
        <div class="card-content">
          <span class="card-title center">Авторизация</span>
          <div class="input-field">
            <input id="email" type="email" class="validate" v-model="email" />
            <label for="email">Email</label>
            <small
              class="helper-text"
              data-error="Не бывает такого"
              data-success="Успех!"
              >Введите ваш e-mail</small
            >
          </div>
          <div class="input-field">
            <input
              id="password"
              type="password"
              class="validate"
              v-model="password"
            />
            <label for="password">Пароль</label>
            <small class="helper-text" data-error="Не бывает такого"
              >Введите пароль</small
            >
          </div>
        </div>
        <div class="card-action">
          <div>
            <button
              class="btn waves-effect waves-light auth-submit orange accent-4"
              type="submit"
            >
              Войти
              <i class="material-icons right">send</i>
            </button>
          </div>

          <p class="center">
            Нет аккаунта?
            <router-link to="/register">Зарегистрироваться</router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import messages from "../utils/messages";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message]);
    }
  },
  methods: {
    async submitHandler() {
      const formData = {
        email: this.email,
        password: this.password,
      };
      try {
        await this.$store.dispatch("login", formData);
        this.$router.push("/okidoki?message=signin");
      } catch (error) {}
    },
  },
};
</script>
