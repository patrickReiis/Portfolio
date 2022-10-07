<script setup lang="ts">
import  { ref } from 'vue';
import type { Ref } from 'vue';

type Project = {
    title?: string;
    content?: string;
    video?: string;
    lang?:'en'|'pt';
}
const project:Ref<Project> = ref({});

async function getProject(){
    const onlyNumbers = /^[0-9]+$/;
    const id = window.location.hash.slice(1 + 1 + 'project-'.length);

    try {
        if (onlyNumbers.test(id) === false){
            throw 'Id must be a number'
        }
        const resObj = await fetch(import.meta.env.VITE_LOCALHOST + `/api/v1/project/${id}`);
        const data = await resObj.json();
        project.value = data; 
    } 
    catch (err) {
        console.log(err);
        window.location.hash = '/home';
    }
}
getProject();
</script>

<template>

    <h2>{{project.title}}</h2>    
    <div class="content" v-html="project.content"></div>
    <h3>Final Video</h3>
    
    <iframe id="player" type="text/html" width="640" height="390"
  src="https://www.youtube.com/embed/xcJtL7QggTI?enablejsapi=1&rel=0"
  frameborder="0" allowfullscreen></iframe>

</template>

<style scoped>
.content :deep(img){
    width:500px;
    display:block;
}

</style>
