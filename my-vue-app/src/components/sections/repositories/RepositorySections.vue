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
}

.loading,
.error {
    text-align: center;
    padding: 2rem;
}

.error {
    color: #d73a49;
    background-color: #ffeef0;
    border: 1px solid #d73a49;
    border-radius: 6px;
}

.repos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
}
</style>