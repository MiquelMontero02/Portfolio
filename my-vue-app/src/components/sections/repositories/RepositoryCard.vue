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
                <span class="label">★</span>
                <span class="value">{{ repo.stars }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.repo-card {
    border: 2px solid #00ffff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: start;
    border-radius: 2px;
    padding: 1rem;
    margin: 0.5rem;
    background: #1a1a2e;
    transition: all 0.15s;
    position: relative;
    overflow: hidden;
}

.repo-card::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #00ffff, #ff00ff, #00ffff);
    z-index: -1;
    opacity: 0;
    filter: blur(8px);
    transition: opacity 0.15s;
}

.repo-card:hover::before {
    opacity: 0.4;
}

.repo-card:hover {
    border-color: #ff00ff;
    transform: translateY(-2px);
    box-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff;
}

.repo-header {
    width: auto;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.repo-header h3 {
    margin: 0;
    font-family: 'Press Start 2P', cursive;
    font-size: 0.6rem;
}

.repo-header a {
    color: #00ffff;
    text-decoration: none;
    text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff;
    transition: all 0.15s;
}

.repo-header a:hover {
    color: #ff00ff;
    text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff;
}

.language {
    background: rgba(0, 255, 255, 0.1);
    border: 1px solid #00ffff;
    border-radius: 2px;
    padding: 0.25rem 0.5rem;
    font-family: 'VT323', monospace;
    font-size: 0.9rem;
    color: #00ffff;
    text-transform: uppercase;
}

.repo-card:hover .language {
    border-color: #ff00ff;
    color: #ff00ff;
    background: rgba(255, 0, 255, 0.1);
}

.description {
    color: #e0e0e0;
    font-family: 'VT323', monospace;
    font-size: 1rem;
    line-height: 1.4;
    margin-bottom: 0.5rem;
}

.stats {
    display: flex;
    gap: 1rem;
}

.stat {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.label {
    font-size: 0.8rem;
    color: #39ff14;
    text-shadow: 0 0 5px #39ff14;
}

.value {
    font-family: 'VT323', monospace;
    font-size: 1rem;
    color: #ffff00;
    text-shadow: 0 0 5px #ffff00;
}
</style>