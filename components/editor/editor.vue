<template>
    <div
        class="border-r-[0.5rem] border-arch-black bg-arch-white p-4  self-strech w-[40rem] fixed z-[2] h-[calc(100dvh-7rem)] left-0 top-[7rem] flex flex-col">
        <div class="py-4 bg-arch-white text-[3rem] font-bold">
            <div class="w-fit mx-auto">Code Editor</div>
            <button @click="assemble"
                class="block bg-arch-dark rounded-lg p-2 px-4 text-[2.25rem] font-bold text-white w-fit mx-auto mt-3 border-[0.4rem] border-arch-black">Assemble</button>
        </div>
        <div class="bg-arch-gray border-[0.5rem] border-arch-black overflow-auto h-full relative">
            <ul class="font-bold flex flex-col items-end absolute top-4 left-0 bg-arch-gray w-[5rem]">
                <li v-for="item, index in lineCount" class="leading-[4rem] text-[2.25rem] text-[#a9a9a9] text-right">{{
                index + 1 }}.</li>
            </ul>
            <div class="gap-6 px-6 pl-[8rem] pt-4 h-full">
                <textarea v-model="code" style="resize: none;" @input="code = code.toUpperCase()"
                    :style="`height: ${lineCount.length * 4 + 3}rem; width: ${(maxLine + 1) * 2}rem;`"
                    class="min-h-[calc(100%-1rem)] whitespace-nowrap leading-[4rem] min-w-full focus:outline-none bg-transparent text-arch-white text-[2.5rem] font-bold placeholder:text-[#a9a9a9]"
                    placeholder=""></textarea>
            </div>
        </div>
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
        console.log(line);
        let label = ""
        if (line[0][line[0].length - 1] == ",") label = line.shift();
        line = { label: label, inst: line }
        console.log(line);

        if (line.inst.length > 2) {
            alert(`line ${index + 1}: Too many instructions`)
            return
        }
        else if(line.inst[0] == ''){
            alert(`line ${index + 1}: No instructions`)
            return
        }

        if(line.inst.length == 1) {
            
        }
    }
}

const lineCount = computed(() => code.value.split("\n"))
const maxLine = computed(() => Math.max(...code.value.split("\n").map(x => x.length)))
</script>