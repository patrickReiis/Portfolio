<script setup lang="ts">
import  { ref } from 'vue';
import type { Ref } from 'vue';
import type { Project } from './customTypes';
import database from '../db/projects.json';


const project:Ref<Project|null> = ref(null);

async function getProject(){
    let id:string|number = window.location.hash.slice(1 + 1 + 'project-'.length);

    id = Number(id);

    const projectDb = (database.filter(element => element.id == id)[0] as Project);
    project.value = projectDb; 

}
getProject();
</script>

<template>

    <main>
        <h2 class="title-project">{{project?.title}}</h2>    
        <div class="content-container">
            <div class="content" v-html="project?.content"></div>
            <h3>Final Video</h3>

            <iframe id="player" type="text/html" width="640" height="390"
                src="https://www.youtube.com/embed/xcJtL7QggTI?enablejsapi=1&rel=0"
                frameborder="0" allowfullscreen></iframe>

        </div>
    </main>

</template>

<style scoped>

main {
    background: white;
    margin: 1rem;
    margin-top: 0;
}

.title-project {
    text-align: center;
    padding: 1rem;
}

.content :deep(img){
    width:500px;
    display:block;
    margin: 0.5rem auto;

}

.content {
    white-space: pre-wrap;
    text-align: justify;
    width: 70%;
}

.content-container {
    margin: 0.5rem;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
}

</style>
