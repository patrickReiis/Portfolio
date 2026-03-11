<template>
  <nav class="nav-app">
    <div class="my-name-container">
      <h1 id="patrick" class="my-name" @click="goToHome">PATRICK</h1>
      <h1 class="my-name" @click="goToHome">PREIS</h1>
    </div>
  </nav>

  <router-view />
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToHome() {
  router.push('/');
}
</script>

<style scoped>
#patrick {
  font-size: 5.5rem;
}

.my-name {
  cursor: pointer;
  color: var(--main-font-color);
  font-size: 5rem;
  font-family: mainFont;
  line-height: 1;
  width: fit-content;
  margin: auto;
}

.nav-app {
  position: sticky;
  top: 0;
  z-index: 1;
  padding-top: 1rem;
  background: var(--background-color);
}

@media screen and (min-width: 0px) and (max-width: 700px) {
  #patrick {
    font-size: 4.5rem;
  }

  .my-name {
    font-size: 4rem;
  }

  .my-name-container {
    margin-top: 3rem;
  }
}
</style>
