<template>
    <div class="fixed top-0 left-0 w-full h-[7rem] bg-arch-white border-b-[0.5rem] border-arch-black z-[1] flex items-center justify-center">
        <button class="bg-red-400 w-[10rem] h-[5rem] text-[3rem] block" @click="editor = !editor">change</button>
    </div>
</template>

<script setup>
const {editor} = useArch()
</script>