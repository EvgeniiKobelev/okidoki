<template>
  <div class="row">
    <div class="col m6 offset-m3 center">
      <h5>Мои кейсы</h5>
    </div>
  </div>
  <div class="row">
    <div class="col m6 offset-m3 center">
      <ul class="tabs" ref="tabs">
        <li class="tab col m6">
          <a href="#test1" class="active">Отправленные</a>
        </li>
        <li class="tab col m6">
          <a href="#test2">Полученные</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="row">
    <div class="col center m6 offset-m3">
      <div id="test1" class="col s12">
        <ul>
          <li v-for="num in 12" :key="num">
            {{ num }} Lorem ipsum dolor sit amet.
          </li>
        </ul>
      </div>
      <div id="test2" class="col s12">
        <ul>
          <li v-for="num in 4" :key="num">
            {{ num }} Lorem ipsum, dolor sit amet consectetur adipisicing.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: null,
    };
  },
  mounted() {
    this.tabs = M.Tabs.init(this.$refs.tabs);
  },
};
</script>
