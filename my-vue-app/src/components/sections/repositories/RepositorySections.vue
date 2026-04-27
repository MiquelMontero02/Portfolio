<script setup>
    import { ref, watch } from 'vue';
    import { githubService } from '@/services/githubService';
    import RepositoryCard from './RepositoryCard.vue';

    const props = defineProps({
        username: {
            type: String,
            required: true,
            default: 'MiquelMontero02' // Un valor por defecto siempre ayuda
        }
    });

    const repos = ref([]);
    const loading = ref(true);
    const error = ref(null);

    const loadRepos = async (user) => {
    if (!user) return;
    
    loading.value = true;
    error.value = null;
    
    try {
        repos.value = await githubService.getUserRepos(user);
    } catch (err) {
        error.value = "No se pudieron cargar los repositorios de " + user;
        repos.value = [];
    } finally {
        loading.value = false;
    }
    };

// 3. Vigilamos la prop: si cambia el usuario, recargamos la lista
    watch(() => props.username, (newUsername) => {
        loadRepos(newUsername);
    }, { immediate: true });
</script>

<template>
    <section class="repositories-section">
        <div v-if="loading" class="loading">Cargando repositorios...</div>
        <div v-else-if="error" class="error">{{ error }}</div>
        <div v-else class="repos-grid">
            <RepositoryCard 
                v-for="repo in repos" 
                :key="repo.id"
                :repo="{
                    name: repo.name,
                    description: repo.description,
                    url: repo.html_url,
                    language: repo.language,
                    stars: repo.stargazers_count,
                    forks: repo.forks_count,
                    openIssues: repo.open_issues_count
                }"
            />
        </div>
    </section>
</template>

<style scoped>
.repositories-section {
    padding: 2rem 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
}

.loading {
    font-family: 'Press Start 2P', cursive;
    font-size: 0.6rem;
    text-align: center;
    padding: 2rem;
    color: #00ffff;
    text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff;
    animation: blink 1s steps(2, start) infinite;
}

.error {
    color: #ff3131;
    text-shadow: 0 0 5px #ff3131;
    background: rgba(255, 49, 49, 0.1);
    border: 2px solid #ff3131;
    border-radius: 2px;
    padding: 1rem;
    font-family: 'VT323', monospace;
    font-size: 1.2rem;
    animation: flicker 0.15s infinite;
}

.repos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    position: relative;
}

.repos-grid::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 20px 20px;
    pointer-events: none;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
}

@keyframes flicker {
    0% { opacity: 0.95; }
    50% { opacity: 1; }
    100% { opacity: 0.9; }
}
</style>