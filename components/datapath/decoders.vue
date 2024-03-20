<template>
    <div class="flex">
        <div class="flex items-center pt-[7rem] relative">
            <div class="w-fit px-4 pb-4 pt-2 bg-arch-white rounded-lg relative">
                <div class="text-arch-black font-bold text-2xl text-center">SC</div>
                <ul class="flex mt-2 bg-arch-gray rounded-lg p-1">
                    <li v-for="item in [1, 1, 1]"
                        class="w-10 h-10 bg-arch-dark flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                        {{ item }}</li>
                </ul>

                <div class="absolute bottom-[7rem] left-0 flex-col flex items-center gap-1 text-2xl font-bold">
                    INR
                    <div class="w-2 h-7 bg-arch-white rounded-t-full"></div>
                </div>
                <div
                    class="absolute bottom-[7rem] left-0 right-0 mx-auto flex-col flex items-center gap-1 text-2xl font-bold">
                    CLR
                    <div class="w-2 h-7 bg-arch-white rounded-t-full"></div>
                </div>


                <div class="absolute bottom-[7rem] right-0 flex-col flex items-center gap-1 text-2xl font-bold">
                    CLK
                    <div class="w-2 h-7 bg-arch-white rounded-t-full"></div>
                </div>
            </div>

            <div class="h-2 w-[10rem] bg-arch-white"></div>

            <svg class="w-14 -ml-9 -mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                    stroke="#C5C6C7" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
            <div class="absolute top-[8rem] -right-11 text-arch-black text-[3rem] font-bold h-fit">2
            </div>

            <div class="w-fit px-4 pb-4 pt-2 bg-arch-white rounded-lg relative">
                <div class="text-arch-black font-bold text-2xl text-center">3x8 Decoder</div>
                <ul class="flex flex-row-reverse mt-2 bg-arch-gray rounded-lg p-1">
                    <li v-for="item, index in [1, 1, 1, 1, 1, 1, 1, 1]" class="">
                        <div class="text-2xl text-center">T{{ index }}</div>
                        <div class="h-1 w-8 mx-auto bg-arch-white mb-2 rounded-full"></div>
                        <div
                            class="w-10 h-10 bg-arch-dark flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                            {{ item }}
                        </div>
                    </li>
                </ul>
            </div>

            <div class="w-fit px-4 pb-4 pt-2 bg-arch-white rounded-lg relative ml-[10rem]">
                <div class="text-arch-black font-bold text-2xl text-center">IR(14-12)</div>
                <ul class="flex mt-2 bg-arch-gray rounded-lg p-1">
                    <li v-for="item in [1, 1, 1]"
                        class="w-10 h-10 bg-arch-dark flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                        {{ item }}</li>
                </ul>
            </div>

            <div class="h-2 w-[10rem] bg-arch-white"></div>

            <svg class="w-14 -ml-9 -mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                    stroke="#C5C6C7" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>

            <div class="w-fit px-4 pb-4 pt-2 bg-arch-white rounded-lg relative">
                <div class="text-arch-black font-bold text-2xl text-center">3x8 Decoder</div>
                <ul class="flex flex-row-reverse mt-2 bg-arch-gray rounded-lg p-1">
                    <li v-for="item, index in [1, 1, 1, 1, 1, 1, 1, 1]" class="">
                        <div class="text-2xl text-center">D{{ index }}</div>
                        <div class="h-1 w-8 mx-auto bg-arch-white mb-2 rounded-full"></div>
                        <div
                            class="w-10 h-10 bg-arch-dark flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                            {{ item }}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>