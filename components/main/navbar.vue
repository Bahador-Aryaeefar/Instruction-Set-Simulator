<template>
    <div
        class="fixed top-0 left-0 w-full h-[7rem] bg-arch-white border-b-[0.5rem] border-arch-black z-[1] flex items-center justify-center">
        <div
            class="flex p-1 h-[5rem] bg-arch-gray rounded-lg text-[2rem] font-bold text-white w-[40rem] border-arch-black ">
            <div class="w-1/3 cursor-pointer flex items-center justify-center rounded-lg"
                :class="editor ? 'bg-arch-dark border-arch-black border-[0.25rem]' : ''" @click="editor = true">
                Assembler
            </div>

            <div class="w-1/3 cursor-pointer flex items-center justify-center rounded-lg"
                :class="!editor ? 'bg-arch-dark border-arch-black border-[0.25rem]' : ''" @click="editor = false">
                Simulator
            </div>

            <div class="w-1/3 cursor-pointer flex items-center justify-center rounded-lg"
                :class="false ? 'bg-arch-dark border-arch-black border-[0.25rem]' : ''" @click="navigateTo('https://amirabbas-compiler.netlify.app/', {
                    external: true,
                    open: {
                        target: '_blank'
                    }
                })">
                Compiler
            </div>
        </div>
    </div>
</template>

<script setup>
const { editor } = useArch()
</script>