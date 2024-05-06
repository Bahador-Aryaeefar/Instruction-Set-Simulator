<template>
    <div class="flex items-center relative">
        <div class="h-2 w-[8rem] bg-arch-white grow"></div>

        <svg class="w-14 -ml-9 -mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                stroke="#C5C6C7" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>

        <div class="relative">
            <div class="bg-arch-white min-h-[20rem] h-[28rem] overflow-hidden rounded-lg px-4 pt-3 pb-8 flex-col flex"
                style="resize: vertical;">
                <div class="text-arch-black font-bold text-2xl text-center">Memory Unit</div>
                <ul
                    class="flex bg-arch-gray border-[0.5rem] border-arch-gray rounded-t-lg text-2xl font-bold text-center text-white gap-1 mt-3">
                    <li class="grow w-[1rem] rounded-lg cursor-pointer" :class="index == 0 ? 'bg-arch-dark' : ''"
                        @click="index = 0">000</li>
                    <div class="self-strech bg-white w-1 rounded-full"></div>
                    <li class="grow w-[1rem] rounded-lg cursor-pointer" :class="index == 1 ? 'bg-arch-dark' : ''"
                        @click="index = 1">100</li>
                    <div class="self-strech bg-white w-1 rounded-full"></div>
                    <li class="grow w-[1rem] rounded-lg cursor-pointer" :class="index == 2 ? 'bg-arch-dark' : ''"
                        @click="index = 2">200</li>
                    <div class="self-strech bg-white w-1 rounded-full"></div>
                    <li class="grow w-[1rem] rounded-lg cursor-pointer" :class="index == 3 ? 'bg-arch-dark' : ''"
                        @click="index = 3">300</li>
                    <div class="self-strech bg-white w-1 rounded-full"></div>
                    <li class="grow w-[1rem] rounded-lg cursor-pointer" :class="index == 4 ? 'bg-arch-dark' : ''"
                        @click="index = 4">400</li>
                    <div class="self-strech bg-white w-1 rounded-full"></div>
                    <li class="grow w-[1rem] rounded-lg cursor-pointer" :class="index == 5 ? 'bg-arch-dark' : ''"
                        @click="index = 5">500</li>
                    <div class="self-strech bg-white w-1 rounded-full"></div>
                    <li class="grow w-[1rem] rounded-lg cursor-pointer" :class="index == 6 ? 'bg-arch-dark' : ''"
                        @click="index = 6">600</li>
                    <div class="self-strech bg-white w-1 rounded-full"></div>
                    <li class="grow w-[1rem] rounded-lg cursor-pointer" :class="index == 7 ? 'bg-arch-dark' : ''"
                        @click="index = 7">700</li>
                </ul>
                <div class="bg-arch-gray border-[0.5rem] border-arch-gray -my-2">
                    <div class="h-1 bg-white rounded-full"></div>
                </div>
                <ul
                    class="flex bg-arch-gray border-[0.5rem] border-arch-gray rounded-b-lg text-2xl font-bold text-center text-white gap-1">
                    <li class="grow w-[1rem] rounded-lg cursor-pointer" :class="index == 8 ? 'bg-arch-dark' : ''"
                        @click="index = 8">800</li>
                    <div class="self-strech bg-white w-1 rounded-full"></div>
                    <li class="grow w-[1rem] rounded-lg cursor-pointer" :class="index == 9 ? 'bg-arch-dark' : ''"
                        @click="index = 9">900</li>
                    <div class="self-strech bg-white w-1 rounded-full"></div>
                    <li class="grow w-[1rem] rounded-lg cursor-pointer" :class="index == 10 ? 'bg-arch-dark' : ''"
                        @click="index = 10">A00</li>
                    <div class="self-strech bg-white w-1 rounded-full"></div>
                    <li class="grow w-[1rem] rounded-lg cursor-pointer" :class="index == 11 ? 'bg-arch-dark' : ''"
                        @click="index = 11">B00</li>
                    <div class="self-strech bg-white w-1 rounded-full"></div>
                    <li class="grow w-[1rem] rounded-lg cursor-pointer" :class="index == 12 ? 'bg-arch-dark' : ''"
                        @click="index = 12">C00</li>
                    <div class="self-strech bg-white w-1 rounded-full"></div>
                    <li class="grow w-[1rem] rounded-lg cursor-pointer" :class="index == 13 ? 'bg-arch-dark' : ''"
                        @click="index = 13">D00</li>
                    <div class="self-strech bg-white w-1 rounded-full"></div>
                    <li class="grow w-[1rem] rounded-lg cursor-pointer" :class="index == 14 ? 'bg-arch-dark' : ''"
                        @click="index = 14">E00</li>
                    <div class="self-strech bg-white w-1 rounded-full"></div>
                    <li class="grow w-[1rem] rounded-lg cursor-pointer" :class="index == 15 ? 'bg-arch-dark' : ''"
                        @click="index = 15">F00</li>
                </ul>
                <ul
                    class="bg-arch-gray border-[0.5rem] border-arch-gray rounded-lg mt-3 overflow-y-scroll overflow-x-hidden">
                    <li v-for="item in mem" class="flex gap-2 p-1 text-xl">
                        <span class="self-center w-10 text-center text-2xl font-bold">{{ toHex(item.address, 3)
                            }}</span>
                        <div class="self-strech w-1 rounded-full bg-arch-white"></div>
                        <ul class="flex">
                            <li v-for="item2 in item.value" :class="bitColor(item)"
                                class="w-10 h-10 bg-arch-dark flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                                {{ item2 }}</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="absolute -bottom-[4.75rem] left-[8rem] flex-col flex items-center gap-1 text-2xl font-bold">
                <div class="w-2 h-10 bg-arch-white rounded-b-full"></div>
                Read
            </div>

            <div class="absolute -bottom-[4.75rem] right-[8rem] flex-col flex items-center gap-1 text-2xl font-bold">
                <div class="w-2 h-10 bg-arch-white rounded-b-full"></div>
                Write
            </div>
        </div>

        <div class="h-2 w-[24rem] bg-arch-white"></div>

        <svg class="w-14 -ml-9 -mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                stroke="#C5C6C7" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>

        <div class="absolute right-[10rem] bottom-0 w-2 h-[6rem] bg-arch-white"></div>
        <div class="flex items-center absolute right-[10rem] bottom-[4.25rem]">
            <svg class="w-14 rotate-180 -ml-4 -mr-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                    stroke="#C5C6C7" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
            <div class="w-[14rem] h-2 bg-arch-white"></div>

            <div class="absolute right-16 top-10 text-arch-white text-2xl font-bold">Address</div>
        </div>

        <div class="absolute top-0 bottom-0 my-auto -right-11 text-arch-black text-[3rem] font-bold h-fit">7
        </div>
    </div>
</template>

<script setup>
const { data } = useArch()
const index = ref(0)
let mem = computed(() => {
    let temp = []
    for (let i = index.value * 256; i < index.value * 256 + 256; i++) {
        let val = data.value.memory.find((x) => x?.address == i)?.value
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