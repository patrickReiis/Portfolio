<script setup lang="ts">

type Project = {
        brief: string;
        video: string;
        id: number|string;
}

defineProps<{
    projects:Project[] 
}>();

</script>

<template>
    <div v-for="project in projects" :key="project.id">
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
