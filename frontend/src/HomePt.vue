<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import type { Project } from "./customTypes";
import database from "../db/projects.json";
import ProjectFooterPt from "./ProjectFooterPt.vue";
import Division from "./Division.vue";
import FooterPt from "./FooterPt.vue";

const projectsList: Ref<Project[]> = ref([]);

async function postsResolve() {
  const db = database as { en: Project[]; pt: Project[] };
  projectsList.value = db["pt"] as Project[];
}

postsResolve();
</script>

<template>
  <header class="general-container">
    <h2 class="title">SOBRE MIM</h2>
    <div class="about-me-content">
      <p>
        Eu sou um desenvolvedor de software do Brasil procurando por uma vaga na
        área de programação.
      </p>
    </div>
  </header>

  <main class="general-container">
    <h2 class="title project-title">OPEN SOURCE</h2>
    <div class="open-source-container">
      <div class="open-source-project">
        <p class="open-source-project-title">
          InterPlanetary File System (IPFS)
        </p>
        <ul>
          <li>
            Corrigi dois problemas e escrevi testes do zero usando a linguagem
            de programação Go.
          </li>
          <li>+117 linhas adicionadas e -1 linha removida.</li>
          <li>
            <a href="https://github.com/ipfs/kubo/pull/10143" target="_blank"
              >Ver Pull Request</a
            >
          </li>
        </ul>
      </div>
      <div class="open-source-project">
        <p class="open-source-project-title">Monero Wallet Generator</p>
        <ul>
          <li>
            Aprimorei a experiência do usuário com um QR Code interativo em
            JavaScript e CSS.
          </li>
          <li>+30 linhas adicionadas e 0 linha removida.</li>
          <li>
            <a
              href="https://github.com/moneromooo-monero/monero-wallet-generator/pull/31"
              target="_blank"
              >Ver Pull Request</a
            >
          </li>
        </ul>
      </div>
    </div>
    <h2 class="title project-title">PROJETOS</h2>

    <div class="projects-container">
      <div v-for="project in projectsList" :key="project.id">
        <Division />
        <div class="project-container">
          <h3 class="projects-title">
            {{ project.title }}
          </h3>
          <div class="projects-content">
            <div class="project-brief">
              <p>{{ project.brief }}</p>
              <ProjectFooterPt
                :projectId="(project.id as number)"
                :technologies="project.technologies"
                :projectContent="project.content"
              />
            </div>
            <div class="video-github">
              <iframe
                id="player"
                type="text/html"
                width="400"
                height="190"
                class="video"
                :src="project.video + '?enablejsapi=1&rel=0'"
                frameborder="0"
                allowfullscreen
                style="border: solid 4px #37474f"
              >
              </iframe>
              <a :href="project.github" target="_blank" class="github-source">
                <svg
                  class="github-icon"
                  width="25px"
                  height="25px"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"
                  /></svg
                >Código fonte
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <FooterPt />
</template>

<style scoped></style>
