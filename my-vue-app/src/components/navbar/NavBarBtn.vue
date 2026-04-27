<template>
    <div class="nav-btn">
        <a class="nav-link">Textos</a>
    </div>
</template>

<style scoped>
.nav-btn {
    background: transparent;
    border: 2px solid #00ffff;
    padding: 0.5rem 1rem;
    cursor: pointer;
    position: relative;
    transition: all 0.15s;
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
</style>