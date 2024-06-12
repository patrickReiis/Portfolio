<script lang="ts" setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  technologies: Array,
  projectId: Number,
  projectContent: String,
});

const toggleReadMore = ref(false);

const postReadMorePrefix = "postReadMore";

function handleToggleReadMore(id: number | undefined) {
  toggleReadMore.value = !toggleReadMore.value;
  if (toggleReadMore.value === true) {
    sessionStorage.setItem(`postReadMore${id}`, "true");
  } else {
    sessionStorage.setItem(`${postReadMorePrefix}${id}`, "false");
  }
}

function getReadMoreState() {
  const shouldReadMore = sessionStorage.getItem(
    `${postReadMorePrefix}${props.projectId}`
  );

  if (shouldReadMore === "true") {
    toggleReadMore.value = true;
  }
}

onMounted(() => {
  getReadMoreState();
});
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
    <span
      class="read-more"
      @click.prevent="handleToggleReadMore(projectId)"
    >
      {{ toggleReadMore == false ? "Read More" : "Hide" }}
    </span>
  </div>
</template>

<style scoped>
.read-more {
  cursor: pointer;
  text-decoration: underline;
  color: var(--main-font-color);
}
</style>
