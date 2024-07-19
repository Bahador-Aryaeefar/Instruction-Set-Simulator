<template>
    <div class="flex items-center pt-[7rem] relative">
        <div class="h-2 w-[8rem] grow" :class="sigColor(data.dr.ld)"></div>

        <svg class="w-14 -ml-9 -mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                :stroke="getColor(data.dr.ld)" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>

        <div class="w-fit px-4 pb-4 pt-2 bg-arch-white rounded-lg relative">
            <div class="text-arch-black font-bold text-4xl text-center py-2">
                DR
            </div>
            <div class="text-center flex gap-4">
                <div class="w-1/2 flex border-arch-gray rounded-lg border-[0.25rem] overflow-hidden">
                    <div
                        class="py-1 px-2 flex items-center justify-center text-white text-3xl font-medium bg-yellow-700 border-arch-gray border-r-[0.25rem]">
                        HEX
                    </div>

                    <div class="py-1 px-2 flex items-center justify-center text-white text-3xl font-medium grow"
                        :class="bitColor(data.dr)">
                        {{ parseInt(data.dr.value, 2).toString(16).toUpperCase() }}
                    </div>
                </div>

                <div class="w-1/2 flex border-arch-gray rounded-lg border-[0.25rem] overflow-hidden">
                    <div
                        class="py-1 px-2 flex items-center justify-center text-white text-3xl font-medium bg-yellow-700 border-arch-gray border-r-[0.25rem]">
                        DEC
                    </div>

                    <div class="py-1 px-2 flex items-center justify-center text-white text-3xl font-medium grow"
                        :class="bitColor(data.dr)">
                        {{ parseInt(data.dr.value, 2) }}
                    </div>
                </div>
            </div>
            <ul class="flex mt-2 bg-arch-gray rounded-lg p-1">
                <li v-for="item in data.dr.value" :class="bitColor(data.dr)"
                    class="w-12 h-12 flex items-center justify-center text-white text-3xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                    {{ item }}</li>
            </ul>

            <div class="absolute -bottom-[4.25rem] left-[2rem] flex-col flex items-center gap-1 text-3xl font-bold"
                :class="textColor(data.dr.ld)">
                <div class="w-2 h-7 rounded-b-full" :class="sigColor(data.dr.ld)"></div>
                LD
            </div>
            <div class="absolute -bottom-[4.25rem] left-[8rem] flex-col flex items-center gap-1 text-3xl font-bold"
                :class="textColor(data.dr.inr)">
                <div class="w-2 h-7 rounded-b-full" :class="sigColor(data.dr.inr)"></div>
                INR
            </div>
            <div class="absolute -bottom-[4.25rem] left-[15rem] flex-col flex items-center gap-1 text-3xl font-bold"
                :class="textColor(data.dr.clr)">
                <div class="w-2 h-7 rounded-b-full" :class="sigColor(data.dr.clr)"></div>
                CLR
            </div>


            <div class="absolute -bottom-[4.25rem] right-[2rem] flex-col flex items-center gap-1 text-3xl font-bold">
                <div class="w-2 h-7 bg-arch-white rounded-b-full"></div>
                CLK
            </div>
        </div>

        <div class="h-2 w-[24rem] z-[1]" :class="sigColor(parseInt(data.bus.value, 2) == 3 && data.bus.changed)">
            <div class="h-full w-[4.5rem]" :class="sigColor([1, 2, 4].includes(data.alu) || (parseInt(data.bus.value, 2) == 3 && data.bus.changed))"></div>
        </div>

        <svg class="w-14 -ml-9 -mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                :stroke="getColor(parseInt(data.bus.value, 2) == 3 && data.bus.changed)" stroke-width="3"
                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        <!-- Connector -->
        <div class="absolute right-[20rem] top-[12.9rem] flex flex-col">
            <div class="h-[13rem] w-2 self-end" :class="sigColor([1, 2, 4].includes(data.alu))"></div>
            <div class="w-[94.8rem] h-2" :class="sigColor([1, 2, 4].includes(data.alu))"></div>
        </div>

        <div class="absolute top-[8rem] -right-11 text-[3rem] font-bold h-fit"
            :class="busColor(parseInt(data.bus.value, 2) == 3 && data.bus.changed)">3
        </div>
    </div>
</template>

<script setup>
const { data, bitColor, sigColor, textColor, getColor, busColor } = useArch()
</script>