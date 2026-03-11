<script setup lang="ts">
import { ref, watch } from "vue";
import type { Ref } from "vue";
import type { Project } from "./customTypes";
import database from "../db/projects.json";
import ProjectFooterUnified from "./ProjectFooterUnified.vue";
import Division from "./Division.vue";
import FooterUnified from "./FooterUnified.vue";
import { useLanguage } from "./composables/useLanguage";

const { t, getCurrentLanguage } = useLanguage();
const projectsList: Ref<Project[]> = ref([]);

async function postsResolve() {
  const db = database as { en: Project[]; pt: Project[] };
  projectsList.value = db[getCurrentLanguage.value] as Project[];
}

// Watch for language changes and update projects
watch(getCurrentLanguage, () => {
  postsResolve();
});

postsResolve();
</script>

<template>
  <header class="general-container">
    <h2 class="title">{{ t.title.aboutMe }}</h2>
    <div class="about-me-content">
      <p v-html="t.about.description"></p>
    </div>
  </header>

  <!-- Music Platforms Section -->
  <main class="general-container">
    <h2 class="title project-title">{{ t.title.projects }}</h2>
    <div class="music-platforms-container">
      <div class="platform-item">
        <a :href="'https://open.spotify.com/artist/0l9mI7bCNJXEJg0Sa6b5Zk'" target="_blank" class="platform-link spotify">
          <svg class="platform-icon" viewBox="0 0 24 24" width="30" height="30">
            <path fill="#1DB954" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.32 11.28-1.08 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
          {{ t.music.spotify }}
        </a>
      </div>
      <div class="platform-item">
        <a :href="'https://www.youtube.com/@patrick_preis'" target="_blank" class="platform-link youtube">
          <svg class="platform-icon" viewBox="0 0 24 24" width="30" height="30">
            <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          {{ t.music.youtube }}
        </a>
      </div>
      <div class="platform-item">
        <a href="https://njump.me/patrickdosreis.com" target="_blank" class="platform-link nostr">
          <svg class="platform-icon" viewBox="0 0 24 24" width="30" height="30">
            <path fill="#9C27B0" d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.568 8.16c-.161.73-.845 1.23-1.57 1.23-.191 0-.382-.03-.57-.1l-1.298-.49c-.648-.24-1.39-.24-2.037 0l-1.299.49c-.188.07-.379.1-.569.1-.726 0-1.41-.5-1.571-1.23-.161-.73.191-1.46.845-1.78l3.13-1.52c.456-.22.989-.22 1.445 0l3.13 1.52c.654.32 1.006 1.05.845 1.78z"/>
          </svg>
          Nostr Profile
        </a>
      </div>
    </div>

    <!-- Bitcoin Donation Section -->
    <div class="donation-section">
      <h3 class="donation-title">{{ t.music.donation }}</h3>
      <p class="donation-text">{{ t.music.donationText }}</p>
      <div class="bitcoin-address">
        <code>bc1qtr4ju5r0wnn06ld92zgalvrw477s65q2u470ar</code>
      </div>
    </div>

    <!-- Nostalgic Proof Section (Former Developer Work) -->
    <h2 class="title project-title nostalgia-title">{{ t.nostalgia.title }}</h2>
    <p class="nostalgia-description">{{ t.nostalgia.description }}</p>
    <div class="open-source-container nostalgia-container">
      <div class="open-source-project">
        <p class="open-source-project-title">
          {{ t.openSource.ipfs.title }}
        </p>
        <ul>
          <li v-for="desc in t.openSource.ipfs.description" :key="desc">
            {{ desc }}
          </li>
          <li>
            <a href="https://github.com/ipfs/kubo/pull/10143" target="_blank">
              {{ t.openSource.ipfs.link }}
            </a>
          </li>
        </ul>
      </div>
      <div class="open-source-project">
        <p class="open-source-project-title">{{ t.openSource.monero.title }}</p>
        <ul>
          <li v-for="desc in t.openSource.monero.description" :key="desc">
            {{ desc }}
          </li>
          <li>
            <a href="https://github.com/moneromooo-monero/monero-wallet-generator/pull/31" target="_blank">
              {{ t.openSource.monero.link }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- GitHub/GitLab Links -->
    <div class="dev-links-section">
      <div class="dev-link">
        <svg
          class="github-icon"
          width="25px"
          height="25px"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"
          />
        </svg>
        <a href="https://github.com/patrickReiis/" target="_blank">GitHub</a>
      </div>
      <div class="dev-link">
        <svg class="gitlab-icon" width="25px" height="25px" viewBox="0 0 24 24">
          <path fill="#FCA326" d="M23.955 13.587l-1.342-4.135-2.664-8.189c-.135-.423-.73-.423-.867 0L16.418 9.45H7.582L4.918 1.263c-.135-.423-.73-.423-.867 0L1.387 9.452.045 13.587a.849.849 0 0 0 .307.95l11.683 8.508 11.683-8.508a.849.849 0 0 0 .307-.95z"/>
        </svg>
        <a href="https://gitlab.com/patrickReiis" target="_blank">GitLab</a>
      </div>
    </div>
  </main>
  <FooterUnified />
</template>

<style scoped>
.music-platforms-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.platform-item {
  display: flex;
  justify-content: center;
}

.platform-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  color: var(--main-font-color);
  text-decoration: none;
  border: 2px solid;
  border-radius: 1rem;
  transition: all 0.3s ease;
  font-weight: bold;
  min-width: 200px;
  justify-content: center;
}

.platform-link.spotify {
  border-color: #1DB954;
  background: rgba(29, 185, 84, 0.1);
}

.platform-link.spotify:hover {
  background: rgba(29, 185, 84, 0.2);
  transform: translateY(-2px);
}

.platform-link.youtube {
  border-color: #FF0000;
  background: rgba(255, 0, 0, 0.1);
}

.platform-link.youtube:hover {
  background: rgba(255, 0, 0, 0.2);
  transform: translateY(-2px);
}

.platform-link.nostr {
  border-color: #9C27B0;
  background: rgba(156, 39, 176, 0.1);
}

.platform-link.nostr:hover {
  background: rgba(156, 39, 176, 0.2);
  transform: translateY(-2px);
}

.donation-section {
  background: var(--project-bg-color);
  padding: 2rem;
  border-radius: 1rem;
  margin: 3rem 0;
  text-align: center;
}

.donation-title {
  color: var(--main-font-color);
  font-family: contentFont;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.donation-text {
  color: var(--main-font-color);
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.bitcoin-address {
  background: rgba(166, 166, 166, 0.2);
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--division-surround-color);
}

.bitcoin-address code {
  color: #FFD700;
  font-size: 1.1rem;
  font-weight: bold;
  word-break: break-all;
}

.nostalgia-title {
  margin-top: 4rem;
  opacity: 0.8;
}

.nostalgia-description {
  color: var(--main-font-color);
  text-align: center;
  margin-bottom: 2rem;
  opacity: 0.7;
  font-style: italic;
}

.nostalgia-container {
  opacity: 0.6;
}

.dev-links-section {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin: 3rem 0;
  padding: 2rem 0;
  border-top: 1px solid var(--division-surround-color);
  opacity: 0.7;
}

.dev-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dev-link a {
  color: var(--main-font-color);
  text-decoration: none;
}

.dev-link a:hover {
  text-decoration: underline;
}

.github-icon, .gitlab-icon {
  fill: var(--main-font-color);
}

.platform-icon {
  flex-shrink: 0;
}

@media screen and (min-width: 768px) {
  .music-platforms-container {
    flex-direction: row;
    justify-content: space-around;
  }
  
  .dev-links-section {
    gap: 4rem;
  }
}
</style>