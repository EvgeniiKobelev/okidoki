<template>
  <ul class="sidenav app-sidenav" :class="{ open: isOpen }">
    <li v-for="link in links" :key="link.url">
      <router-link :to="link.url" class="waves-effect waves-orange pointer">{{
        link.title
      }}</router-link>
    </li>
  </ul>
</template>
<script>
export default {
  props: ["isOpen"],
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
};
</script>
