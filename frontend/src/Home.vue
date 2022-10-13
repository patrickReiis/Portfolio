<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import type { Project } from './customTypes';
import database from '../db/projects.json';

const projectsList:Ref<Project[]> = ref([]);

async function postsResolve(){
    projectsList.value = (database.filter(e => e.lang === 'en') as Project[]);
}

postsResolve();
</script>

<template>
    <header class="general-container">
        <h2 class="title">About Me</h2>
        <div class="about-me-content">
            <p>
                I am a web developer from Brazil looking for my first programming job.
            </p>
            <p>
                I have a strong knowledge on the backend but I can also work on the frontend.
            </p>
            <p>
                I like coding because it allows me to transform ideas into reality.
            </p>
        </div>
    </header>

    <main class="general-container">
        <h2 class="title">Projects</h2>


        <div class="projects-container" v-for="project in projectsList" :key="project.id">
            <div class="rule"></div>
            <hr>
            <h3 class="projects-title">{{ project.title }}</h3>
            <div class="projects-content">
                <div class="project-brief">
                    <p>{{ project.brief }}</p>
                </div>

                <iframe id="player" type="text/html" width="400" height="190"
                    class="video"
                    :src="project.video + '?enablejsapi=1&rel=0'"
                    frameborder="0" allowfullscreen>
                </iframe>
            </div>

            <div class="tech-container">
                <p>
                    Technologies Used:
                </p>
                <ul class="project-technologies">
                    <li v-for="tech in project.technologies" :key="tech" class="item-tech">
                            {{tech}}
                        </li>
                    </ul>
                </div>
            <div class="read-more-container">
                <a class="read-more" v-bind:href="'#/project-' + project.id">
                    Read Entire Project
                </a>
            </div>
        </div>
    </main>

    <footer class="footer-contact general-container">
        <h2 class="title">Contact</h2>
        <div class="contact-content">
            <p>
                Contact me at patrickpereirareal1@gmail.com
                <br>
                I am also open to freelance work.
            </p>
        </div>
    </footer>
</template>

<style scoped>
</style>
