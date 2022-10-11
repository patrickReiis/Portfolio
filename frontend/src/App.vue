<script setup lang="ts">
// This is the 'mother' component, it's job is to provide the routes and components based on the user's chosen language
import { ref, computed } from 'vue';
import DetailedProjectVue from './DetailedProject.vue';
import Home from './Home.vue';
import NotFound from './NotFound.vue';
import HomePt from './HomePt.vue';

const routes:any = {'/home': Home, '/home-pt': HomePt}

const  currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
   currentPath.value = window.location.hash; 
})

const currentView = computed(() => {

    if( /^\/project-[0-9]+$/.test(currentPath.value.slice(1)) ){ // project-<any-number>, for example: project-2
       return DetailedProjectVue; 
    }

    return routes[currentPath.value.slice(1) || '/home'] || NotFound // Be not found in the future 
});

function goToHome() {
    window.location.hash = ''
}

</script>

<template>

    <nav class="nav-app">
        <h1 id="my-name" @click="goToHome">
            Patrick dos Reis
        </h1>
        <ul class="lang-ul">
            <li><a href="#/home">English</a></li>
            <li><a href="#/home-pt">Português</a></li>
        </ul>
    </nav>
     
    <component :is="currentView" />

</template>

<style scoped>

#my-name {
    position: absolute;
    top: 50%;  /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */
    transform: translate(-50%, -50%);
    background: white;
    padding: 0.5rem;
    cursor: pointer;
    z-index: 1;
    font-weight: bold;
}

.nav-app {
    position: sticky;
    top: 0;
    z-index: 1;
    padding: 0.35rem;
    background: rgb(230, 230, 240); 
    box-shadow: 0px 3px 1px rgb(144, 144, 144);
}

.lang-ul {
    list-style:none;
    text-align: end;
    margin: 0.5rem;
    margin-right: 3rem;
}

</style>
