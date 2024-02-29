<template>
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
      </div>
      <h1>Добро пожаловать в таск-менеджер</h1>
      <button @click="router.push({name: 'tasks'})">Перейти к задачам</button>
    </div>
</template>
<script setup>

  import { useRouter } from 'vue-router';

  const router = useRouter()

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