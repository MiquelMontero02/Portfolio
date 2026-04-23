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
    width: auto;
    position:relative;
    bottom: 0;

    background-color: aquamarine;
}
p{
    color: #646cff;
    font-weight: bold;
}
</style>


