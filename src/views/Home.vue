<template>
  <div class="container1">
    <img
      class="responsive-img"
      src="../assets/bgempty.jpg"
      alt="Фон главной страницы"
    />
    <div class="rowbtn center">
      <router-link
        to="/register"
        class="waves-effect waves-light btn orange accent-4"
        ><i class="material-icons left">person_add</i>Регистрация</router-link
      >
    </div>
  </div>
  <div class="center">
    <h3 class="orange-text text-accent-4">Как это работает?</h3>
  </div>
  <div class="row olspisok">
    <div class="col m6 s12">
      <ul>
        <li>1. Зарегистрируйте и заполните свои данные</li>
        <li>2. Участвуйте в обмене подарками</li>
        <li>3. Получите адрес получателя</li>
      </ul>
    </div>
    <div class="col m6 s12">
      <ul>
        <li>4. Соберите и отправьте подарок</li>
        <li>5. Получите подарок в ответ</li>
        <li>6. Делитесь своими эмоциями</li>
      </ul>
    </div>
  </div>
  <div class="orange accent-4 white-text">
    <div class="row stats">
      <div class="col m6 s12">
        <div class="row valign-wrapper">
          <div class="col offset-m1 m3">
            <img src="../assets/img/doc22.png" width="120" />
          </div>
          <div class="col m8">
            <span class="white-text">
              <h2>1 112</h2>
              <p style="font-size: 24px">Пользователей</p>
            </span>
          </div>
        </div>
      </div>
      <div class="col m6 s12">
        <div class="row valign-wrapper">
          <div class="col m3">
            <img src="../assets/img/oki_1934.png" width="120" />
          </div>
          <div class="col m9">
            <span class="white-text">
              <h2>589</h2>
              <p style="font-size: 24px">Полученных подарков</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="center">
    <h3 class="orange-text text-accent-4">Отзывы</h3>
  </div>
  <div class="divider"></div>
  <div class="center terms">
    <h3 class="orange-text text-accent-4">Правила и соглашения</h3>
    <div class="row">
      <div class="col m6 s12 valign-wrapper">
        <img src="../assets/img/doc11.png" width="80" />
        <h5>Положения</h5>
      </div>
      <div class="col m6 s12 valign-wrapper">
        <img src="../assets/img/doc11.png" width="80" />
        <h5>Правила</h5>
      </div>
    </div>
    <div class="row">
      <div class="col m6 s12 valign-wrapper">
        <img src="../assets/img/doc11.png" width="80" />
        <h5>Пользовательское соглашение</h5>
      </div>
      <div class="col m6 s12 valign-wrapper">
        <img src="../assets/img/doc11.png" width="80" />
        <h5>Инструкция</h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
};
</script>
<style scoped>
.terms img {
  margin: 10px 30px 10px 10px;
}
.container1 {
  padding: 0;
  margin: 0;
}
.rowbtn {
  position: relative;
  top: -65px;
}
.olspisok {
  font-size: 22px;
  line-height: 2em;
  padding: 25px 0px 25px 25px;
}
ul {
  margin: 0px 0px;
}
.stats {
  padding: 20px 0px;
}
.row {
  margin: 0px;
}
.col {
  margin: 0px;
}
</style>
