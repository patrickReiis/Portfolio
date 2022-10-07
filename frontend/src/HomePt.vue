<script setup lang="ts">

import * as endpoint from './handleEndpoints';
import { ref } from 'vue';
import type { Ref } from 'vue';
import type { Project } from './customTypes';

const projectsList:Ref<Project[]> = ref([]);

async function postsResolve(){
    projectsList.value = await endpoint.getAllData('pt');

    console.log(projectsList.value[0].brief);
}

postsResolve();
</script>

<template>
    <h2>Sobre mim </h2>
    <div v-for="project in projectsList" :key="project.id">
        <span>
            {{ project.brief }}
            {{ project.video }} 
        </span>
        <a v-bind:href="'#/project-' + project.id">see full</a>
    </div>
    <h2>Contato</h2>
</template>
