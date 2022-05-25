<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
</script>

<template>
  <main>
    <Header />
    <RouterView />
  </main>
</template>

<script>
export default {
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll (event) {
      const header = document.querySelector('header');
      const fixnav = header.offsetTop;

      if (window.pageYOffset > fixnav) {
          header.classList.add('nav-fixed');
      } else {
          header.classList.remove('nav-fixed');
      }
    }
  },
}
</script>