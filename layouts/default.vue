<template>
    <div>
        <MainNavbar></MainNavbar>
        <slot />
    </div>
</template>

<script setup>
</script>

<style>
:root {
    font-size: 8px;
}

body {
    background-color: #0b0c10;
}

body,
html {
    margin: 0;
    padding: 0;
}
</style>