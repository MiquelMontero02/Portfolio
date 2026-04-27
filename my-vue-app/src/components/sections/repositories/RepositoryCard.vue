<script setup lang="ts">
interface Repository {
    name: string;
    description?: string;
    url: string;
    language?: string;
    stars: number;
    forks: number;
    openIssues: number;
}

defineProps<{
    repo: Repository;
}>();
</script>

<template>
    <div class="repo-card">
        <div class="repo-header">
            <h3>
                <a :href="repo.url" target="_blank" rel="noopener noreferrer">
                    {{ repo.name }}
                </a>
            </h3>
            <span v-if="repo.language" class="language">{{ repo.language }}</span>
        </div>

        <p v-if="repo.description" class="description">{{ repo.description }}</p>

        <div class="stats">
            <div class="stat">
                <span class="label">⭐ Stars</span>
                <span class="value">{{ repo.stars }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.repo-card {
    border: 1px solid #e1e4e8;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: start;
    border-radius: 6px;
    padding: 1rem;
    margin: 0.5rem;
    background-color: #fff;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.repo-card:hover {
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
}

.repo-header {
    width: auto;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
}

.repo-header h3 {
    margin: 0;
    font-size: 1.1rem;
}

.repo-header a {
    color: #0366d6;
    text-decoration: none;
}

.repo-header a:hover {
    text-decoration: underline;
}

.language {
    background-color: #f6f8fa;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    padding: 0.25rem 0.5rem;
    font-size: 0.85rem;
    color: #586069;
}

.description {
    color: #586069;
    font-size: 0.9rem;
}


.label {
    font-size: 0.8rem;
    color: #586069;
}

.value {
    font-weight: 600;
    color: #24292e;
    font-size: 1rem;
}
</style>