<script setup lang="ts">
import * as endpoint from './handleEndpoints';
import { ref } from 'vue';
import type { Ref } from 'vue';
import type { Project } from './customTypes';

const projectsList:Ref<Project[]> = ref([]);

async function postsResolve(){
    projectsList.value = await endpoint.getAllData('en');
}

postsResolve();
</script>

<template>
    <div v-for="project in projectsList" :key="project.id">
        <span>
            {{ project.brief }}
            {{ project.video }} 
        </span>
        <a v-bind:href="'#/project-' + project.id">see full</a>
    </div>
    <p>it is here, HOME</p>

</template>

<style scoped>

</style>
