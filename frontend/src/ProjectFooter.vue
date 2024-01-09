<script lang="ts" setup>
import { ref } from "vue";

defineProps({
  technologies: Array,
  projectId: Number,
  projectContent: String,
});

const toggleReadMore = ref(false);

function handleShowReadMore() {
  const currentURL = window.location.hash;
  return currentURL;
}
</script>

<template>
  <div class="tech-container">
    <p>Technologies Used:</p>
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
      @click="toggleReadMore = !toggleReadMore"
      v-bind:href="handleShowReadMore()"
    >
      {{ toggleReadMore == false ? "Read More" : "Hide" }}
    </a>
  </div>
</template>
