<template>
    <div class="container">
        <nav class="top">
            <h1><a href="/">Vercel-App</a></h1>
        </nav>
        <Nuxt />
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
}

.container {
    display: flex;
    width: 100%;
    height: 100vh;

    align-items: center;
    justify-content: center;
}

nav {
    width: 100%;
    background-color: black;
    color: white;
    font-family: sans-serif;
    padding: 8px 10px;
}

nav a {
    color: white;
    text-decoration: none;
}

nav.top {
    position: fixed;
    top: 0;
    left: 0;
}
</style>