<template>
  <div class="row center">
    <div class="col m8 s12 offset-m2">
      <img :src="avatarImg" width="180" />
      <h4>{{ name }}</h4>
      <div v-if="!changeBio">
        <p>
          <a href="#" @click.prevent="changeBio = !changeBio"
            >Добавить биографию</a
          >
        </p>
      </div>
      <div v-else class="input-field">
        <i class="material-icons prefix">mode_edit</i>
        <textarea id="textarea" class="materialize-textarea"></textarea>
        <label for="textarea">Пару слов о себе</label>
      </div>
      <hr />
    </div>
  </div>

  <div class="row">
    <div class="col center m8 s12 offset-m2">
      <h5>Информация</h5>
      <strong>Рейтинг:</strong> {{ info.stars }}
      <p>Дата регистрации: {{ date }}</p>
      <p>Живет в г. <strong>Пермь</strong></p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      avatarImg: null,
      changeBio: false,
      name: "",
      date: null,
      options: {
        year: "numeric",
        month: "long",
        day: "numeric",
      },
    };
  },
  mounted() {
    this.avatarImg = this.info.avatarImg;
    this.name = this.info.name;
    this.date = new Date(this.info.date).toLocaleString("ru", this.options);
  },
  computed: {
    ...mapGetters(["info"]),
  },
};
</script>
