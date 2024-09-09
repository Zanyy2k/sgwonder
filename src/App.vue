<template>
  <div>
    <MobileMenu />
    <PageHeader />
    <router-view></router-view>
    <PageFooter />
  </div>
</template>

<script setup>
import MobileMenu from "./components/MobileMenu.vue";
import PageHeader from "./components/PageHeader.vue";
import PageFooter from "./components/PageFooter.vue";
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
