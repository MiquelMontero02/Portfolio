<script setup lang="ts">
defineProps<{
    footerText?: string;
}>();
</script>

<template>
    <footer class="footer">
        <p class="copyright">&copy; 2026 My Portfolio. All rights reserved.</p>
        <p v-if="footerText" class="status">{{ footerText }}</p>
    </footer>
</template>

<style scoped>
.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1.5rem;
    background: rgba(10, 10, 15, 0.95);
    border-top: 2px solid #00ffff;
    position: relative;
    margin-top: auto;
}

.footer::before {
    content: '';
    position: absolute;
    top: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #ff00ff, #00ffff, #ff00ff, transparent);
}

.copyright {
    font-family: 'VT323', monospace;
    font-size: 1rem;
    color: #39ff14;
    text-shadow: 0 0 5px #39ff14;
    animation: pulse 2s ease-in-out infinite;
}

.status {
    font-family: 'Press Start 2P', cursive;
    font-size: 0.5rem;
    color: #ff00ff;
    text-transform: uppercase;
    animation: blink 1s steps(2, start) infinite;
    text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
}
</style>


