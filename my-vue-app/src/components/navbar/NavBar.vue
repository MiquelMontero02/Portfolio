<script setup lang="ts">
    import NavBarBtn from './NavBarBtn.vue';
</script>

<template>
    <div class="navbar">
        <NavBarBtn v-for="n in 4" :key="n" />
    </div>
</template>

<style>
    .navbar{
        width: 90dvw;
        display:flex;
    }
</style>

