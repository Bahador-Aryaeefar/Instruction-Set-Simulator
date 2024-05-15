<template>
    <div class="flex items-center pt-[7rem] relative">
        <div class="h-2 w-[8rem] grow" :class="sigColor(data.tr.ld)"></div>

        <svg class="w-14 -ml-9 -mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                :stroke="getColor(data.tr.ld)" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>

        <div class="w-fit px-4 pb-4 pt-2 bg-arch-white rounded-lg relative">
            <div class="text-arch-black font-bold text-2xl text-center">TR</div>
            <ul class="flex mt-2 bg-arch-gray rounded-lg p-1"> 
                <li v-for="item in data.tr.value" :class="bitColor(data.tr)"
                    class="w-10 h-10 flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                    {{ item }}</li>
            </ul>

            <div class="absolute top-[7rem] left-[2rem] flex-col flex items-center gap-1 text-2xl font-bold" :class="textColor(data.tr.ld)">
                <div class="w-2 h-7 rounded-b-full" :class="sigColor(data.tr.ld)"></div>
                LD
            </div>
            <div class="absolute top-[7rem] left-[7rem] flex-col flex items-center gap-1 text-2xl font-bold" :class="textColor(data.tr.inr)">
                <div class="w-2 h-7 rounded-b-full" :class="sigColor(data.tr.inr)"></div>
                INR
            </div>
            <div class="absolute top-[7rem] left-[12rem] flex-col flex items-center gap-1 text-2xl font-bold" :class="textColor(data.tr.clr)">
                <div class="w-2 h-7 rounded-b-full" :class="sigColor(data.tr.clr)"></div>
                CLR
            </div>


            <div class="absolute top-[7rem] right-[2rem] flex-col flex items-center gap-1 text-2xl font-bold">
                <div class="w-2 h-7 bg-arch-white rounded-b-full"></div>
                CLK
            </div>
        </div>

        <div class="h-2 w-[24rem]" :class="sigColor(parseInt(data.bus.value,2) == 6 && data.bus.changed)"></div>

        <svg class="w-14 -ml-9 -mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                :stroke="getColor(parseInt(data.bus.value,2) == 6 && data.bus.changed)" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
        <div class="absolute top-[8rem] -right-11 text-[3rem] font-bold h-fit" :class="busColor(parseInt(data.bus.value,2) == 6 && data.bus.changed)">6
        </div>
    </div>
</template>

<script setup>
const { data, bitColor, sigColor, textColor, getColor, busColor } = useArch()
</script>