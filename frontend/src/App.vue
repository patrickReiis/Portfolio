<template>
  <nav class="nav-app">
    <div class="my-name-container">
      <h1 id="patrick" class="my-name" @click="goToHome">PATRICK</h1>
      <h1 class="my-name" @click="goToHome">DOS REIS</h1>
    </div>
    <div class="language-container">
      <ul class="lang-ul">
        <li>
          <router-link
            to="/"
            :class="{ selected: currentLangSelected === 'en' }"
            @click="setLanguage('en')"
          >
            English
          </router-link>
        </li>
        <li>
          <router-link
            to="/pt"
            :class="{ selected: currentLangSelected === 'pt' }"
            @click="setLanguage('pt')"
          >
            Português
          </router-link>
        </li>
      </ul>
    </div>
  </nav>

  <router-view />
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const currentLangSelected = ref('en');

const router = useRouter();
const route = useRoute();

watch(route, (newRoute) => {
  const path = newRoute.path;
  if (path.includes('/pt')) {
    currentLangSelected.value = 'pt';
  } else {
    currentLangSelected.value = 'en';
  }
});

function goToHome() {
  if (currentLangSelected.value === 'pt') {
    router.push('/pt');
  } else {
    router.push('/');
  }
}

function setLanguage(lang: string) {
  currentLangSelected.value = lang;
}
</script>

<style scoped>
.language-container {
  display: flex;
  justify-content: end;
  align-items: center;
  z-index: 1;
  position: absolute;
  right: 0;
  top: 0;
  padding: 0.5rem;
}

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

.lang-ul li a {
  color: var(--main-font-color);
  text-decoration: none;
  background: transparent;
  padding: 0.4rem;
}

.lang-ul li a.selected {
  background: #a6a6a6;
  padding: 0.4rem;
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
