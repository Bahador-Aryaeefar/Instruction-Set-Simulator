<template>
    <div class="flex">
        <div class="flex items-center pt-[7rem] relative">
            <div class="w-fit px-4 pb-4 pt-2 bg-arch-white rounded-lg relative">
                <div class="text-arch-black font-bold text-2xl text-center">SC</div>
                <ul class="flex mt-2 bg-arch-gray rounded-lg p-1">
                    <li v-for="item in data.sc.value" :class="bitColor(data.sc)"
                        class="w-10 h-10 flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                        {{ item }}</li>
                </ul>

                <div class="absolute bottom-[7rem] left-0 flex-col flex items-center gap-1 text-2xl font-bold" :class="textColor(data.sc.inr)">
                    INR
                    <div class="w-2 h-7 rounded-t-full" :class="sigColor(data.sc.inr)"></div>
                </div>
                <div :class="textColor(data.sc.clr)"
                    class="absolute bottom-[7rem] left-0 right-0 mx-auto flex-col flex items-center gap-1 text-2xl font-bold">
                    CLR
                    <div class="w-2 h-7 rounded-t-full" :class="sigColor(data.sc.clr)"></div>
                </div>


                <div class="absolute bottom-[7rem] right-0 flex-col flex items-center gap-1 text-2xl font-bold">
                    CLK
                    <div class="w-2 h-7 bg-arch-white rounded-t-full"></div>
                </div>
            </div>

            <div class="h-2 w-[10rem]" :class="sigColor(data.sc.changed)"></div>

            <svg class="w-14 -ml-9 -mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                    :stroke="getColor(data.sc.changed)" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
            <div class="absolute top-[8rem] -right-11 text-arch-black text-[3rem] font-bold h-fit">2
            </div>

            <div class="w-fit px-4 pb-4 pt-2 bg-arch-white rounded-lg relative">
                <div class="text-arch-black font-bold text-2xl text-center">3x8 Decoder</div>
                <ul class="flex mt-2 bg-arch-gray rounded-lg p-1">
                    <li v-for="item, index in t" class="">
                        <div class="text-2xl text-center">T{{ 7 - index }}</div>
                        <div class="h-1 w-8 mx-auto bg-arch-white mb-2 rounded-full"></div>
                        <div :class="bitColor(data.sc)"
                            class="w-10 h-10 flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                            {{ item }}
                        </div>
                    </li>
                </ul>
            </div>

            <div class="w-fit px-4 pb-4 pt-2 bg-arch-white rounded-lg relative ml-[10rem]">
                <div class="text-arch-black font-bold text-2xl text-center">IR(12-14)</div>
                <ul class="flex mt-2 bg-arch-gray rounded-lg p-1">
                    <li v-for="item in data.ir.value.slice(1,4)" :class="bitColor(data.ir)"
                        class="w-10 h-10 flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                        {{ item }}</li>
                </ul>
            </div>

            <div class="h-2 w-[10rem]" :class="sigColor(data.ir.changed)"></div>

            <svg class="w-14 -ml-9 -mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                    :stroke="getColor(data.ir.changed)" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>

            <div class="w-fit px-4 pb-4 pt-2 bg-arch-white rounded-lg relative">
                <div class="text-arch-black font-bold text-2xl text-center">3x8 Decoder</div>
                <ul class="flex mt-2 bg-arch-gray rounded-lg p-1">
                    <li v-for="item, index in d" class="">
                        <div class="text-2xl text-center">D{{ 7 - index }}</div>
                        <div class="h-1 w-8 mx-auto bg-arch-white mb-2 rounded-full"></div>
                        <div :class="bitColor(data.ir)"
                            class="w-10 h-10 flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                            {{ item }}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data, bitColor, sigColor, textColor, getColor } = useArch()

const t = computed(() => {
    switch (parseInt(data.value.sc.value, 2)) {
        case 0:
            return "00000001"
        case 1:
            return "00000010"
        case 2:
            return "00000100"
        case 3:
            return "00001000"
        case 4:
            return "00010000"
        case 5:
            return "00100000"
        case 6:
            return "01000000"
        case 7:
            return "10000000"
        default:
            return "00000000"
    }
})

const d = computed(() => {
    switch (parseInt(data.value.ir.value.slice(1,4), 2)) {
        case 0:
            return "00000001"
        case 1:
            return "00000010"
        case 2:
            return "00000100"
        case 3:
            return "00001000"
        case 4:
            return "00010000"
        case 5:
            return "00100000"
        case 6:
            return "01000000"
        case 7:
            return "10000000"
        default:
            return "00000000"
    }
})
</script>