<template>

    <div class="w-[16rem] h-[12rem] bg-arch-white -ml-[6rem] rounded-lg relative flex items-center justify-center flex-col">
        <div class="text-arch-black text-[3.5rem] font-bold">Bus</div>
        <div class="text-[3.5rem] font-bold -mt-4" :class="busColor(data.bus.changed)">
            {{ parseInt(data.bus.value,2) }}</div>

        <div class="absolute right-[16.25rem] top-0 bottom-0 my-auto flex items-center text-[2.5rem] font-bold">
            <div class="w-fit px-4 pb-4 pt-2 bg-arch-white rounded-lg relative">
                <div class="text-arch-black font-bold text-2xl text-center">Select</div>
                <ul class="flex mt-2 bg-arch-gray rounded-lg p-1">
                    <li v-for="item, index in data.bus.value" class="">
                        <div class="text-2xl text-center">S{{ 2 - index }}</div>
                        <div class="h-1 w-8 mx-auto bg-arch-white mb-2 rounded-full"></div>
                        <div :class="bitColor(data.bus)"
                            class="w-10 h-10 flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                            {{ item }}
                        </div>
                    </li>
                </ul>
            </div>
            <div class="h-2 rounded-l-full w-[4rem]" :class="sigColor(data.bus.changed)"></div>

            <svg class="w-14 -ml-9 -mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                    :stroke="getColor(data.bus.changed)" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </div>
    </div>
</template>

<script setup>
const { data, bitColor, sigColor, textColor, getColor, busColor } = useArch()
</script>