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

</script>

<template>
    <h1>Choose your lang</h1>

    <a href="#/home">English</a>
    <br>
    <a href="#/home-pt">Português</a>
     
    <component :is="currentView" />

</template>

<style scoped>

.detailed-post{
    width:50%;
    background-color: rgb(250, 200, 200);
}

.detailed-post :deep(img){
    width: 500px;
    display: block;
}

</style>
