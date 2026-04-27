<script setup lang="ts">
defineProps<{
  text: string;
  to: string;
}>();
</script>

<template>
  <router-link :to="to" class="nav-btn">
    <span class="nav-link">{{ text }}</span>
  </router-link>
</template>

<style scoped>
.nav-btn {
    background: transparent;
    border: 2px solid #00ffff;
    padding: 0.5rem 1rem;
    cursor: pointer;
    position: relative;
    transition: all 0.15s;
    text-decoration: none;
    display: inline-block;
}

.nav-btn::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #00ffff;
    z-index: -1;
    opacity: 0;
    filter: blur(8px);
    transition: opacity 0.15s;
}

.nav-btn:hover::before {
    opacity: 0.4;
}

.nav-link {
    font-family: 'Press Start 2P', cursive;
    font-size: 0.5rem;
    color: #00ffff;
    text-transform: uppercase;
    text-decoration: none;
    text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff;
    transition: all 0.15s;
    display: block;
}

.nav-btn:hover {
    border-color: #ff00ff;
    transform: translateY(-2px);
    box-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff;
}

.nav-btn:hover .nav-link {
    color: #ff00ff;
    text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff;
}

.nav-btn.router-link-active {
    border-color: #ff00ff;
}

.nav-btn.router-link-active .nav-link {
    color: #ff00ff;
    text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff;
}
</style>