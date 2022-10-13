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
        
        <div class="language-container">

            <svg class="world-icon">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
            </svg>
            <ul class="lang-ul">
                <li><a href="#/home">English</a></li>
                <li><a href="#/home-pt">Português</a></li>
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
    margin: 0.5rem;
}

.world-icon {
    width: 25px;
    height: 25px;
    fill: #253a49;
    margin: 0 0.5rem;
}

#my-name {
    position: absolute;
    top: 50%;  /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */
    transform: translate(-50%, -50%);
    background: white;
    padding: 0.5rem;
    cursor: pointer;
    z-index: 2;
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
    padding: 0;
}

.lang-ul li a {
    color: #3590F3;
}

@media screen and (min-width: 0px) and (max-width: 700px) {
    #my-name {
        left: 10%;
        top: 50%;
        transform: translate(0, -50%);
    }
}

</style>
