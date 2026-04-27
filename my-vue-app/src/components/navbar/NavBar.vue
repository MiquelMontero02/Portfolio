<script setup lang="ts">
import NavBarBtn from './NavBarBtn.vue';
</script>

<template>
    <nav class="navbar">
        <NavBarBtn v-for="n in 4" :key="n" />
    </nav>
</template>

<style scoped>
.navbar {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem;
    background: rgba(10, 10, 15, 0.9);
    border-bottom: 2px solid #00ffff;
    position: relative;
}

.navbar::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #ff00ff, #00ffff, #ff00ff, transparent);
    filter: blur(2px);
}
</style>

