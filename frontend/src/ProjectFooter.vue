<script lang="ts" setup>
defineProps({
  technologies: Array,
  projectId: Number
});

</script>

<template>
            <div class="tech-container">
                <p>
                    Technologies Used:
                </p>
                <ul class="project-technologies">
                    <li v-for="tech in technologies" :key="tech" class="item-tech">
                            {{tech}}
                        </li>
                    </ul>
                </div>
            <div class="read-more-container">
                <a class="read-more" v-bind:href="'#/project-' + projectId">
                    Read Entire Project
                </a>
            </div>
</template>
