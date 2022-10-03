<script setup lang="ts">
import { ref } from 'vue';

const listItems = ref([]);

async function show(){
    const api = await fetch(import.meta.env.VITE_LOCALHOST + '/api/v1/test')
    const res = await api.json();
    listItems.value = res 
}

show();

</script>

<template>
    <p>Hi, patrick.</p>
    {{ listItems }}
    <a href="#oi">skdlfjlskdjfklsdjflk</a>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
