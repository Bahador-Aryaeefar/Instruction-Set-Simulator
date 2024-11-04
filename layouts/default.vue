<template>
    <div>

        <Head>
            <title>Basic Computer Simulator</title>
        </Head>
        <MainNavbar></MainNavbar>
        <slot />
        <div v-if="toast.errors.value && toast.errors.value[0]"
            class="fixed left-0 top-0 w-full h-full bg-[#00000077] backdrop-blur-[0.25rem] z-[200] flex items-center justify-center pb-20 break-words text-[3.5rem] font-bold"
            @click="toast.clearErrors()">
            <div class="w-1/2 bg-arch-gray border-arch-white border-[0.5rem] rounded-lg p-6 pt-10 pb-12" @click.stop="">
                <img class="w-[12rem] mb-6 mx-auto" src="/icons/fail.svg" alt="fail">
                <div class="overflow-auto max-h-[50vh] px-2">
                    <p v-for="(item, index) in toast.errors.value" :key="index" class="text-center text-white">
                        {{ item }}</p>
                </div>
                <button @click="toast.clearErrors()"
                    class="px-12 py-2 rounded-lg bg-arch-dark text-white mt-10 mx-auto block">
                    OK
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const toast = useToast()
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