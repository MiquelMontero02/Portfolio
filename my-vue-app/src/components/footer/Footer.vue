<script setup lang="ts">
    defineProps<{
        footerText?: string;
    }>();
</script>

<template>
    <footer>
        <p>&copy; 2026 My Portfolio. All rights reserved.</p>
        <p v-if="footerText">{{ footerText }}</p>
    </footer>
</template>

<style scoped>
footer {
    display: flex;
    width: 90dvw;
    position: sticky;
    bottom: 0;
    margin-top: 0.5rem;
    background-color: aquamarine;
}
p{
    color: #646cff;
    font-weight: bold;
}
</style>


