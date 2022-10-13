<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import type { Project } from './customTypes';
import database from '../db/projects.json';

const projectsList:Ref<Project[]> = ref([]);

async function postsResolve(){
    projectsList.value = (database.filter(e => e.lang === 'pt') as Project[]);
}

postsResolve();
</script>

<template>
    <header class="general-container">
        <h2 class="title">Sobre Mim</h2>
        <div class="about-me-content">
            <p>
                Eu sou um programador procurando pelo meu primeiro emprego na area de programação.
            </p>
            <p>
                Tenho um ótimo conhecimento backend mas também sou capaz de trabalhar no frontend.
            </p>
            <p>
                Eu gosto de programar porque isso me possibilita transformar ideias em realidade.
            </p>
        </div>
    </header>

    <main class="general-container">
        <h2 class="title">Projetos</h2>


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
                    Tecnologias Usadas:
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
        <h2 class="title">Contato</h2>
        <div class="contact-content">
            <p>
                Contate-me no email: patrickpereirareal1@gmail.com
                <br>
                Estou aberto a trabalhos freelancer.
            </p>
        </div>
    </footer>
</template>

<style scoped>
</style>
