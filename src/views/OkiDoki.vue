<template>
  <div v-if="activeProject" class="row center">
    <div class="col m8 offset-m2">
      <h5>
        {{ name }}, для того, чтобы получить подарок, вам необходимо сначала
        самому отправить свой подарок
      </h5>
      <button
        class="btn waves-effect waves-light orange accent-4"
        type="submit"
        @click.prevent="activeProject = true"
      >
        Выбрать человека
        <i class="material-icons right">send</i>
      </button>
    </div>
  </div>
  <div v-else class="row center">
    <div class="col m8 offset-m2">
      <h5>Добро пожаловать, {{ name }}!</h5>
      <p>
        С нами уже <strong>1320</strong> человек из <strong>13</strong> стран
      </p>
      <p>Описание</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        illum necessitatibus magnam, amet doloremque vero odit incidunt est
        reprehenderit. Nihil nemo asperiores cum magnam. Error consequuntur
        optio odio similique voluptatibus consequatur a laborum animi soluta?
      </p>
      <p>
        <label>
          <input type="checkbox" />
          <span>С правилами согласен</span>
        </label>
      </p>
      <button
        class="btn waves-effect waves-light auth-submit orange accent-4"
        type="submit"
        @click.prevent="activeProject = true"
      >
        Участовать в проекте
        <i class="material-icons right">send</i>
      </button>
    </div>
  </div>
</template>
<script>
import messages from "../utils/messages";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      name: "",
      activeProject: false,
    };
  },
  mounted() {
    this.name = this.info.name;
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message]);
    }
  },
  computed: {
    ...mapGetters(["info"]),
  },
};
</script>
