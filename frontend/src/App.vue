<script lang="ts" setup>
// This is the 'mother' component, it's job is to provide the routes and components based on the user's chosen language
import { ref, computed } from "vue";
import DetailedProjectVue from "./DetailedProject.vue";
import Home from "./Home.vue";
import NotFound from "./NotFound.vue";
import HomePt from "./HomePt.vue";

const routes: any = { "/home": Home, "/home-pt": HomePt };

const currentPath = ref(window.location.hash);

const currentLangSelected = ref("en");

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  if (/^\/home(-pt)?\/[0-9]+$/.test(currentPath.value.slice(1))) {
    // project-<any-number>, for example: project-2
    return DetailedProjectVue;
  }

  return routes[currentPath.value.slice(1) || "/home"] || NotFound; // Be not found in the future
});

function goToHome() {
  console.log(
    window.location.hash.slice(1, "/home-pt".length + 1) === "/home-pt"
  );
  window.location.hash =
    window.location.hash.slice(1, "/home-pt".length + 1) === "/home-pt"
      ? "/home-pt"
      : "/home";
}

async function resetReadMore() {
  sessionStorage.clear();
}

resetReadMore();
goToHome();
</script>

<template>
  <nav class="nav-app">
    <div class="my-name-container">
      <h1 id="patrick" class="my-name" @click="goToHome">PATRICK</h1>
      <h1 class="my-name" @click="goToHome">DOS REIS</h1>
    </div>
    <div class="language-container">
      <ul class="lang-ul">
        <li>
          <a
            :class="currentLangSelected === 'en' ? 'selected' : ''"
            @click="currentLangSelected = 'en'"
            href="#/home"
            >English</a
          >
        </li>
        <li>
          <a
            :class="currentLangSelected === 'pt' ? 'selected' : ''"
            @click="currentLangSelected = 'pt'"
            href="#/home-pt"
            >Português</a
          >
        </li>
      </ul>
    </div>
  </nav>

  <component :is="currentView" />
</template>

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

.world-icon {
  width: 25px;
  height: 25px;
  fill: var(--main-font-color);
  margin: 0 0.5rem;
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
