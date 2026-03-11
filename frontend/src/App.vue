<template>
  <nav class="nav-app">
    <div class="my-name-container">
      <h1 id="patrick" class="my-name" @click="goToHome">PATRICK</h1>
      <h1 class="my-name" @click="goToHome">PREIS</h1>
    </div>
    <div class="language-container">
      <ul class="lang-ul">
        <li>
          <button
            :class="{ selected: getCurrentLanguage === 'en' }"
            @click="switchLanguage('en')"
          >
            {{ t.nav.english }}
          </button>
        </li>
        <li>
          <button
            :class="{ selected: getCurrentLanguage === 'pt' }"
            @click="switchLanguage('pt')"
          >
            {{ t.nav.portuguese }}
          </button>
        </li>
      </ul>
    </div>
  </nav>

  <router-view />
</template>

<script lang="ts" setup>
import { useRouter, useRoute, onMounted, watch } from 'vue';
import { useLanguage } from './composables/useLanguage';

const { t, setLanguage, getCurrentLanguage } = useLanguage();

const router = useRouter();
const route = useRoute();

onMounted(() => {
  // Initialize language based on current route
  if (route.path.includes('/pt')) {
    setLanguage('pt');
  } else {
    setLanguage('en');
  }
});

// Watch for route changes and update language accordingly
watch(route, (newRoute) => {
  if (newRoute.path.includes('/pt')) {
    setLanguage('pt');
  } else {
    setLanguage('en');
  }
});

function goToHome() {
  router.push('/');
}

function switchLanguage(lang: 'en' | 'pt') {
  setLanguage(lang);
  // No need to change routes anymore, just change language
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

.lang-ul {
  list-style: none;
  text-align: end;
  padding: 0;
}

.lang-ul li {
  margin: 0.25rem;
}

.lang-ul li button {
  color: var(--main-font-color);
  background: transparent;
  border: none;
  padding: 0.4rem;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
}

.lang-ul li button.selected {
  background: #b3a6c7;
  padding: 0.4rem;
  border-radius: 1rem;
}

.lang-ul li button:hover {
  background: rgba(179, 166, 199, 0.5);
  border-radius: 1rem;
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
