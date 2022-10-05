<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Ref } from 'vue';
import DetailedProjectVue from './DetailedProject.vue';
import Home from './Home.vue';

const routes:any = {'/home': Home}
const projectsList:Ref = ref([]);

const  currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
   currentPath.value = window.location.hash; 
})

const currentView = computed(() => {

    if( /^\/project-[0-9]+$/.test(currentPath.value.slice(1)) ){ // project-<any-number>, for example: project-2
       return DetailedProjectVue; 
    }
    window.location.hash = '/home';
    return routes[currentPath.value.slice(1) || '/home'] || Home // Be not found in the future 
})

async function show(){
    const resObj = await fetch(import.meta.env.VITE_LOCALHOST + '/api/v1/projects')
    const data = await resObj.json();

    projectsList.value = data; 
}
show();
</script>

<template>
    <h1>Header</h1>

    <!-- <div class="detailed-post" v-html="listItems[0].content"> -->
        <!-- </div> -->

    <a href="#/home">go home</a>
     
    <component v-bind:projects="projectsList" v-bind:is="currentView" />

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
