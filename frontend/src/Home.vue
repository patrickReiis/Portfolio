<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import type { Project } from './customTypes';
import database from '../db/projects.json';
import ProjectFooter from './ProjectFooter.vue';

const projectsList: Ref<Project[]> = ref([]);

async function postsResolve() {
    projectsList.value = (database.filter(e => e.lang === 'en') as Project[]);
}

postsResolve();
</script>

<template>
    <header class="general-container">
        <h2 class="title">ABOUT ME</h2>
        <div class="about-me-content">
            <p>
                I am a web developer from Brazil looking for my first programming job.
            </p>
            <p>
                I have a strong knowledge on the backend and I can also work on the frontend.
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
                    <ProjectFooter :projectId="project.id" :technologies="project.technologies"/> 
                </div>

                <div class="video-github">
                    <iframe id="player" type="text/html" width="400" height="190" class="video"
                        :src="project.video + '?enablejsapi=1&rel=0'" frameborder="0" allowfullscreen
                        style="border: solid 4px #37474F">
                    </iframe>
                    <a :href="project.github" target="_blank" class="github-source">
                        <svg class="github-icon" width="25px" height="25px" viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
                        </svg>
                        Source Code
                    </a>
                </div>
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
            <div class="linkedin-container">
                <a href="https://www.linkedin.com/in/patrick-dos-reis/" target="_blank">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 112.196 112.196"
                        style="enable-background:new 0 0 112.196 112.196;" xml:space="preserve" width="25"
                        class="linkedin-icon">
                        <g>
                            <circle style="fill:#007AB9;" cx="56.098" cy="56.097" r="56.098" />
                            <g>
                                <path style="fill:#F1F2F2;" d="M89.616,60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118
c-3.705,0-5.906,2.491-6.878,4.903c-0.353,0.862-0.444,2.059-0.444,3.268v22.524H48.684c0,0,0.18-36.546,0-40.329h13.411v5.715
c-0.027,0.045-0.065,0.089-0.089,0.132h0.089v-0.132c1.782-2.742,4.96-6.662,12.085-6.662
C83.002,42.462,89.616,48.226,89.616,60.611L89.616,60.611z M34.656,23.969c-4.587,0-7.588,3.011-7.588,6.967
c0,3.872,2.914,6.97,7.412,6.97h0.087c4.677,0,7.585-3.098,7.585-6.97C42.063,26.98,39.244,23.969,34.656,23.969L34.656,23.969z
M27.865,83.739H41.27V43.409H27.865V83.739z" />
                            </g>
                        </g>
                    </svg>
                    Linkedin
                </a>
            </div>
        </div>
    </footer>
</template>

<style scoped>

</style>
