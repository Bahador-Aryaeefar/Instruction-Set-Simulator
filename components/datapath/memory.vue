<template>
    <div class="flex items-center relative">
        <div class="h-2 w-[1rem] grow" :class="sigColor(data.memory.write)"></div>

        <svg class="w-14 -ml-9 -mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                :stroke="getColor(data.memory.write)" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>

        <div class="relative">
            <div class="bg-arch-white min-h-[30rem] h-[45rem] overflow-hidden rounded-lg px-4 pt-3 pb-8 flex-col flex"
                style="resize: vertical;">
                <div class="text-arch-black font-bold text-4xl text-center py-2">Memory Unit</div>
                <ul
                    class="flex bg-arch-gray border-[0.5rem] border-arch-gray rounded-t-lg text-3xl font-bold text-center text-white gap-1 mt-3">
                    <li class="grow w-[1rem] h-[3rem] flex items-center justify-center rounded-lg cursor-pointer" :class="index == 0 ? 'bg-arch-dark' : ''"
                        @click="index = 0">000</li>
                    <div class="self-strech bg-white w-1 rounded-full"></div>
                    <li class="grow w-[1rem] h-[3rem] flex items-center justify-center rounded-lg cursor-pointer" :class="index == 1 ? 'bg-arch-dark' : ''"
                        @click="index = 1">100</li>
                    <div class="self-strech bg-white w-1 rounded-full"></div>
                    <li class="grow w-[1rem] h-[3rem] flex items-center justify-center rounded-lg cursor-pointer" :class="index == 2 ? 'bg-arch-dark' : ''"
                        @click="index = 2">200</li>
                    <div class="self-strech bg-white w-1 rounded-full"></div>
                    <li class="grow w-[1rem] h-[3rem] flex items-center justify-center rounded-lg cursor-pointer" :class="index == 3 ? 'bg-arch-dark' : ''"
                        @click="index = 3">300</li>
                    <div class="self-strech bg-white w-1 rounded-full"></div>
                    <li class="grow w-[1rem] h-[3rem] flex items-center justify-center rounded-lg cursor-pointer" :class="index == 4 ? 'bg-arch-dark' : ''"
                        @click="index = 4">400</li>
                    <div class="self-strech bg-white w-1 rounded-full"></div>
                    <li class="grow w-[1rem] h-[3rem] flex items-center justify-center rounded-lg cursor-pointer" :class="index == 5 ? 'bg-arch-dark' : ''"
                        @click="index = 5">500</li>
                    <div class="self-strech bg-white w-1 rounded-full"></div>
                    <li class="grow w-[1rem] h-[3rem] flex items-center justify-center rounded-lg cursor-pointer" :class="index == 6 ? 'bg-arch-dark' : ''"
                        @click="index = 6">600</li>
                    <div class="self-strech bg-white w-1 rounded-full"></div>
                    <li class="grow w-[1rem] h-[3rem] flex items-center justify-center rounded-lg cursor-pointer" :class="index == 7 ? 'bg-arch-dark' : ''"
                        @click="index = 7">700</li>
                </ul>
                <div class="bg-arch-gray border-[0.5rem] border-arch-gray -my-2">
                    <div class="h-1 bg-white rounded-full"></div>
                </div>
                <ul
                    class="flex bg-arch-gray border-[0.5rem] border-arch-gray rounded-b-lg text-3xl font-bold text-center text-white gap-1">
                    <li class="grow w-[1rem] h-[3rem] flex items-center justify-center rounded-lg cursor-pointer" :class="index == 8 ? 'bg-arch-dark' : ''"
                        @click="index = 8">800</li>
                    <div class="self-strech bg-white w-1 rounded-full"></div>
                    <li class="grow w-[1rem] h-[3rem] flex items-center justify-center rounded-lg cursor-pointer" :class="index == 9 ? 'bg-arch-dark' : ''"
                        @click="index = 9">900</li>
                    <div class="self-strech bg-white w-1 rounded-full"></div>
                    <li class="grow w-[1rem] h-[3rem] flex items-center justify-center rounded-lg cursor-pointer" :class="index == 10 ? 'bg-arch-dark' : ''"
                        @click="index = 10">A00</li>
                    <div class="self-strech bg-white w-1 rounded-full"></div>
                    <li class="grow w-[1rem] h-[3rem] flex items-center justify-center rounded-lg cursor-pointer" :class="index == 11 ? 'bg-arch-dark' : ''"
                        @click="index = 11">B00</li>
                    <div class="self-strech bg-white w-1 rounded-full"></div>
                    <li class="grow w-[1rem] h-[3rem] flex items-center justify-center rounded-lg cursor-pointer" :class="index == 12 ? 'bg-arch-dark' : ''"
                        @click="index = 12">C00</li>
                    <div class="self-strech bg-white w-1 rounded-full"></div>
                    <li class="grow w-[1rem] h-[3rem] flex items-center justify-center rounded-lg cursor-pointer" :class="index == 13 ? 'bg-arch-dark' : ''"
                        @click="index = 13">D00</li>
                    <div class="self-strech bg-white w-1 rounded-full"></div>
                    <li class="grow w-[1rem] h-[3rem] flex items-center justify-center rounded-lg cursor-pointer" :class="index == 14 ? 'bg-arch-dark' : ''"
                        @click="index = 14">E00</li>
                    <div class="self-strech bg-white w-1 rounded-full"></div>
                    <li class="grow w-[1rem] h-[3rem] flex items-center justify-center rounded-lg cursor-pointer" :class="index == 15 ? 'bg-arch-dark' : ''"
                        @click="index = 15">F00</li>
                </ul>

                <div class="flex bg-arch-gray text-3xl font-bold mt-4 rounded-t-lg border-b-[0.25rem] border-arch-white">
                    <div class="w-[9.5rem] text-center shrink-0 border-r-[0.25rem] border-arch-white h-full py-4">Address</div>
                    <div class="w-[49.25rem] text-center shrink-0 border-r-[0.25rem] border-arch-white h-full py-4">BIN</div>
                    <div class="w-[9.25rem] text-center shrink-0 border-r-[0.25rem] border-arch-white h-full py-4">HEX</div>
                    <div class="grow text-center h-full py-4">DEC</div>
                </div>

                <ul
                    class="bg-arch-gray border-[0.5rem] border-arch-gray rounded-b-lg overflow-y-scroll overflow-x-hidden">
                    <li v-for="item in mem" class="flex gap-2 p-1 text-xl">
                        <span class="self-center w-[8rem] text-center text-3xl font-bold">{{ toHex(item.address, 3)
                            }}</span>
                        <div class="self-strech w-1 rounded-full bg-arch-white"></div>
                        <ul class="flex">
                            <li v-for="item2 in item.value"
                                :class="(((data.memory.read || data.memory.write) && parseInt(data.ar.value, 2) == item.address) ? 'border-1 border-red-700 ' : '') + bitColor(item)"
                                class="w-12 h-12 flex items-center justify-center text-white text-3xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                                {{ item2 }}</li>
                        </ul>
                        <div class="self-strech w-1 rounded-full bg-arch-white"></div>
                        <span
                            class="h-12 flex items-center justify-center text-white text-3xl font-medium rounded-lg border-[0.125rem] border-arch-gray px-2 w-[8rem]"
                            :class="(((data.memory.read || data.memory.write) && parseInt(data.ar.value, 2) == item.address) ? 'border-1 border-red-700 ' : '') + bitColor(item)">{{
                                parseInt(item.value, 2).toString(16).toUpperCase() }}</span>
                        <div class="self-strech w-1 rounded-full bg-arch-white"></div>
                        <span
                            class="h-12 flex items-center justify-center text-white text-3xl font-medium rounded-lg border-[0.125rem] border-arch-gray w-[8rem]"
                            :class="(((data.memory.read || data.memory.write) && parseInt(data.ar.value, 2) == item.address) ? 'border-1 border-red-700 ' : '') + bitColor(item)">{{
                                parseInt(item.value, 2) }}</span>
                    </li>
                </ul>
            </div>

            <div class="absolute -bottom-[5rem] left-[8rem] flex-col flex items-center gap-1 text-3xl font-bold"
                :class="textColor(data.memory.read)">
                <div class="w-2 h-10 rounded-b-full" :class="sigColor(data.memory.read)"></div>
                Read
            </div>

            <div class="absolute -bottom-[5rem] right-[8rem] flex-col flex items-center gap-1 text-3xl font-bold"
                :class="textColor(data.memory.write)">
                <div class="w-2 h-10 rounded-b-full" :class="sigColor(data.memory.write)"></div>
                Write
            </div>
        </div>

        <div class="h-2 w-[24rem]" :class="sigColor(parseInt(data.bus.value, 2) == 7 && data.bus.changed)"></div>

        <svg class="w-14 -ml-9 -mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                :stroke="getColor(parseInt(data.bus.value, 2) == 7 && data.bus.changed)" stroke-width="3"
                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        <div class="absolute right-[10rem] bottom-0 w-2 h-[6rem]"
            :class="sigColor(data.memory.write || data.memory.read)"></div>
        <div class="flex items-center absolute right-[10rem] bottom-[4.25rem]">
            <svg class="w-14 rotate-180 -ml-3 -mr-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                    :stroke="getColor(data.memory.write || data.memory.read)" stroke-width="3" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div class="w-[14rem] h-2" :class="sigColor(data.memory.write || data.memory.read)"></div>

            <div class="absolute right-16 top-10 text-2xl font-bold"
                :class="textColor(data.memory.write || data.memory.read)">Address</div>
        </div>

        <div class="absolute top-0 bottom-0 my-auto -right-11 text-[3rem] font-bold h-fit"
            :class="busColor(parseInt(data.bus.value, 2) == 7 && data.bus.changed)">7
        </div>
    </div>
</template>

<script setup>
const { data, sigColor, textColor, getColor, busColor } = useArch()
const index = ref(0)
let mem = computed(() => {
    let temp = []
    for (let i = index.value * 256; i < index.value * 256 + 256; i++) {
        let val = data.value.memory.value.find((x) => x?.address == i)?.value
        temp.push({ address: i, value: val ?? "0000000000000000", default: !Boolean(val) })
    }
    return temp
})

const toHex = (num, pad) => {
    let hex = num.toString(16)
    while (hex.length < pad) {
        hex = "0" + hex
    }
    return hex.toUpperCase()
}

const bitColor = (bit) => {
    if (bit.default) return "bg-gray-500"
    else return "bg-arch-dark"
}
</script>