<script lang="ts" setup>
defineProps({
  technologies: Array,
  projectId: Number
});

function handleShowProject(id: number) {
  const currentURL = window.location.hash
  return currentURL + `/${id+1}`
}

</script>

<template>
            <div class="tech-container">
                <p>
                    Tecnologias Usadas:
                </p>
                <ul class="project-technologies">
                    <li v-for="tech in technologies" :key="tech as string" class="item-tech">
                        {{tech}}
                    </li>
                </ul>
            </div>
            <div class="read-more-container">
                <a class="read-more" v-bind:href="handleShowProject(projectId as number)">
                   Ler o Projeto Inteiro 
                </a>
            </div>
</template>
