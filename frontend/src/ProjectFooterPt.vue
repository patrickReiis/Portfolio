<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps({
  technologies: Array,
  projectId: Number,
  projectContent: String,
});

const toggleReadMore = ref(false);

const postReadMorePrefix = "postReadMore";

function getCurrentLocation() {
  const currentURL = window.location.hash;
  return currentURL;
}

function handleToggleReadMore(id: number | undefined) {
  toggleReadMore.value = !toggleReadMore.value;
  if (toggleReadMore.value === true) {
    sessionStorage.setItem(`postReadMore${id}`, "true");
    return;
  }
  sessionStorage.setItem(`${postReadMorePrefix}${id}`, "false");
}

async function getReadMoreState() {
  const shouldReadMore = sessionStorage.getItem(
    `${postReadMorePrefix}${props.projectId}`
  );

  if (shouldReadMore === "true") {
    toggleReadMore.value = true;
  }
}

getReadMoreState();
</script>

<template>
  <div class="tech-container">
    <p>Tecnologias Usadas:</p>
    <ul class="project-technologies">
      <li v-for="tech in technologies" :key="tech as string" class="item-tech">
        {{ tech }}
      </li>
    </ul>
  </div>
  <div class="project-footer-content-container">
    <div
      v-if="toggleReadMore"
      class="project-footer-content"
      v-html="projectContent"
    ></div>
  </div>
  <div class="read-more-container">
    <a
      class="read-more"
      @click="handleToggleReadMore(projectId)"
      v-bind:href="getCurrentLocation()"
    >
      {{ toggleReadMore == false ? "Ler Mais" : "Esconder" }}
    </a>
  </div>
</template>
