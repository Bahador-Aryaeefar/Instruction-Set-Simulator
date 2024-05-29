<template>
    <div class="flex items-center pt-[9rem] relative z-[1]">
        <div class="w-[20rem] grow"></div>

        <div class="w-fit px-4 pb-4 pt-2 bg-arch-white rounded-lg relative">
            <div class="text-arch-black font-bold text-2xl text-center">ALU</div>
            <ul class="mt-2 bg-arch-gray rounded-lg p-2 space-y-1">
                <li class="flex gap-1">
                    <div :class="opColor(1)"
                        class="p-2 py-1.5 flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                        AND</div>
                    <div :class="opColor(2)"
                        class="p-2 py-1.5 flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                        ADD</div>
                    <div :class="opColor(3)"
                        class="p-2 py-1.5 flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                        COM</div>
                </li>

                <li class="flex gap-1 justify-center">
                    <div :class="opColor(4)"
                        class="p-2 py-1.5 flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                        DR</div>
                    <div :class="opColor(5)"
                        class="p-2 py-1.5 flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                        INPR</div>
                </li>

                <li class="flex gap-1 justify-center">
                    <div :class="opColor(6)"
                        class="p-2 py-1.5 flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                        SHR</div>
                    <div :class="opColor(7)"
                        class="p-2 py-1.5 flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                        SHL</div>
                </li>
            </ul>

            <div class="absolute right-[16.8rem] top-0 flex items-center">
                <div class="h-2 w-[6rem]" :class="sigColor([1, 2, 4].includes(data.alu))"></div>

                <svg class="w-14 -ml-9 -mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                        :stroke="getColor([1, 2, 4].includes(data.alu))" stroke-width="3" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <div class="absolute bottom-7 left-0 h-[4.75rem] w-2" :class="sigColor([1, 2, 4].includes(data.alu))">
                </div>
            </div>

            <div class="absolute right-[16.8rem] top-0 bottom-0 my-auto flex items-center">
                <div class="h-2 w-[11.75rem] relative" :class="sigColor(data.alu == 5)">
                    <div class="absolute top-0 left-0 h-[18.1rem] w-2" :class="sigColor(data.alu == 5)"></div>
                </div>

                <svg class="w-14 -ml-9 -mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                        :stroke="getColor(data.alu == 5)" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>

            </div>

            <div class="absolute right-[16.8rem] bottom-0 flex items-center">
                <div class="h-2 w-[6rem]" :class="sigColor([1, 2, 3, 6, 7].includes(data.alu))"></div>

                <svg class="w-14 -ml-9 -mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                        :stroke="getColor([1, 2, 3, 6, 7].includes(data.alu))" stroke-width="3" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <div class="absolute top-7 left-0 h-[4.75rem] w-2" :class="sigColor([1, 2, 3, 6, 7].includes(data.alu))">
                </div>
            </div>

            <div class="absolute left-[16.5rem] top-0 flex items-center z-[-1]">
                <div class="h-2 w-[4.5rem]" :class="sigColor(data.e.changed)"></div>

                <svg class="w-14 -ml-9 -mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                        :stroke="getColor(data.e.changed)" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>

                <div
                    class="bg-arch-white pb-1 px-2 text-arch-black text-2xl font-bold rounded-lg flex flex-col items-center">
                    <div>E</div>
                    <div class="flex bg-arch-gray rounded-lg p-1">
                        <div :class="bitColor(data.e)"
                            class="w-10 h-10 flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                            {{ data.e.value }}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="h-2 w-[12rem]" :class="sigColor(data.ac.ld)"></div>

        <svg class="w-14 -ml-10 -mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                :stroke="getColor(data.ac.ld)" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>

        <div class="w-fit px-4 pb-4 pt-2 bg-arch-white rounded-lg relative z-[1]">
            <div class="text-arch-black font-bold text-2xl text-center">AC</div>
            <ul class="flex mt-2 bg-arch-gray rounded-lg p-1">
                <li v-for="item in data.ac.value" :class="bitColor(data.ac)"
                    class="w-10 h-10 bg-arch-dark flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                    {{ item }}</li>
            </ul>

            <div class="absolute top-[7rem] left-[2rem] flex-col flex items-center gap-1 text-2xl font-bold"
                :class="textColor(data.ac.ld)">
                <div class="w-2 h-7 rounded-b-full" :class="sigColor(data.ac.ld)"></div>
                LD
            </div>
            <div class="absolute top-[7rem] left-[7rem] flex-col flex items-center gap-1 text-2xl font-bold"
                :class="textColor(data.ac.inr)">
                <div class="w-2 h-7 rounded-b-full" :class="sigColor(data.ac.inr)"></div>
                INR
            </div>
            <div class="absolute top-[7rem] left-[12rem] flex-col flex items-center gap-1 text-2xl font-bold"
                :class="textColor(data.ac.clr)">
                <div class="w-2 h-7 rounded-b-full" :class="sigColor(data.ac.clr)"></div>
                CLR
            </div>


            <div class="absolute top-[7rem] right-[2rem] flex-col flex items-center gap-1 text-2xl font-bold">
                <div class="w-2 h-7 bg-arch-white rounded-b-full"></div>
                CLK
            </div>
        </div>

        <div class="h-2 w-[24rem] z-[1]" :class="sigColor(parseInt(data.bus.value, 2) == 4 && data.bus.changed)">
            <div class="h-full w-[4.5rem]" :class="sigColor([1, 2, 3, 6, 7].includes(data.alu) || (parseInt(data.bus.value, 2) == 4 && data.bus.changed))"></div>
        </div>

        <svg class="w-14 -ml-9 -mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                :stroke="getColor(parseInt(data.bus.value, 2) == 4 && data.bus.changed)" stroke-width="3"
                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        <div class="absolute right-[20rem] top-[16rem] flex flex-col">
            <div class="h-[10rem] w-2 self-end" :class="sigColor([1, 2, 3, 6, 7].includes(data.alu))"></div>
            <div class="w-[82.5rem] h-2" :class="sigColor([1, 2, 3, 6, 7].includes(data.alu))"></div>
        </div>

        <div class="absolute top-[13.5rem] -right-11 text-arch-black text-[3rem] font-bold h-fit"
            :class="busColor(parseInt(data.bus.value, 2) == 4 && data.bus.changed)">4
        </div>
    </div>
</template>

<script setup>
const { data, bitColor, sigColor, textColor, getColor, busColor } = useArch()

const opColor = (num) =>
{
    if (num == data.value.alu) return "bg-red-700"
    else return "bg-arch-dark"
}
</script>