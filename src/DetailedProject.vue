<script setup lang="ts">
import  { ref } from 'vue';
import type { Ref } from 'vue';
import type { Project } from './customTypes';
import database from '../db/projects.json';


const project:Ref<Project|null> = ref(null);

async function getProject(){
    let currentLang = window.location.hash.slice(1);

    const isPtHome = currentLang.slice(0, '/home-pt/'.length)

    currentLang = isPtHome === '/home-pt/' ? 'pt' : 'en';
    
    if (currentLang !== 'en' && currentLang !== 'pt') {
      window.location.hash = '/home' 
      return
    } 

    let id:string|number = currentLang === 'pt' ? window.location.hash.slice('/home-pt/'.length + 1) : window.location.hash.slice('/home/'.length + 1)

    id = Number(id);


    const projectDb = (database as {'en': Project[], 'pt': Project[]})[currentLang as 'pt'|'en'][id-1];
    project.value = projectDb; 

}
getProject();
</script>

<template>

    <main>
        <h2 class="title-project">{{project?.title}}</h2>    
        <div class="content-container">
            <div class="content" v-html="project?.content"></div>
            <h3 v-if="project?.lang === 'en'">Final Video</h3>
            <h3 v-else>Vídeo Final</h3>

            <iframe id="player" type="text/html" width="640" height="390"
                :src="project?.video + '?enablejsapi=1&rel=0'"
                frameborder="0" allowfullscreen class="video-yt"></iframe>

        </div>
    </main>

</template>

<style scoped>

main {
    background: var(--project-bg-color);
    color: var(--main-font-color);
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

@media screen and (min-width:0px) and (max-width:700px){
    .content :deep(img){
        width: 260px;
    }

    .video-yt{
        width: 80%;
        height: 80%;
        min-width: 300px;
        min-height: 250px;
    }

    .content {
        width: 90%;
    }
}
</style>
