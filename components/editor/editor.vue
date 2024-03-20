<template>
    <div
        class="border-r-[0.5rem] border-arch-black bg-arch-white p-4  self-strech w-[40rem] fixed z-[2] h-[calc(100dvh-7rem)] left-0 top-[7rem] flex flex-col">
        <div class="py-4 bg-arch-white text-[3rem] font-bold">
            <div class="w-fit mx-auto">Code Editor</div>
            <button @click="assemble"
                class="block bg-arch-dark rounded-lg p-2 px-4 text-[2.25rem] font-bold text-white w-fit mx-auto mt-3 border-[0.4rem] border-arch-black">Assemble</button>
        </div>
        <textarea v-model="code" style="resize: none;"
            class="focus:outline-none w-full h-full bg-arch-gray text-arch-white text-[2.5rem] px-8 pt-6 font-bold border-[0.5rem] border-arch-black"
            placeholder="Begin writing"></textarea>
    </div>
    <div class="self-strech w-[40rem] shrink-0"></div>
</template>

<script setup>
const code = ref("")
const assemble = () => {
    let lines = code.value.split("\n")
    for (let [index, line] of lines.entries()) {
        line = line.split(" ")
        if (line.length > 3) {
            alert(`line ${index + 1}: Too many arguments`)
            return
        }
    }
}
</script>