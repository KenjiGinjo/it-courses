<script setup lang="ts">
import { ref, computed } from 'vue';
import HomeVue from './pages/home.vue'
import ContactVue from './pages/contact.vue'
import AboutVue from './pages/about.vue'
import BlogVue from './pages/blog.vue'
import { parseHash } from './utils/parse-hash';

const route: { [key: string]: any } = {
  '/': {
    component: HomeVue,
    title: 'Home'
  },
  '/about': {
    component: AboutVue,
    title: 'About'
  },
  '/contact': {
    component: ContactVue,
    title: 'Contact'
  },
  '/blog': {
    component: BlogVue,
    title: 'Blog',
  }
}


const currentRouter = ref(parseHash(window.location.hash))

window.addEventListener('hashchange', () => {
  currentRouter.value = parseHash(window.location.hash);
});

const currentView = computed(() => route[currentRouter.value.path || '/'] || HomeVue);

</script>

<template>
  <header>
    <nav>
      <ul>
        <li v-for="routeKey in Object.keys(route)" :key="routeKey">
          <a :href="`#${routeKey}`">{{ route[routeKey].title }}</a>
        </li>
      </ul>
    </nav>

    <div>
      <a href="#/blog?id=123">带参数的blog 跳转 </a>
    </div>

    <component :is="currentView.component" :router="currentRouter" />
  </header>
</template>

<style scoped></style>
