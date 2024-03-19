<template>
    <div class="text-arch-white px-10 py-20">
        <div class="flex justify-center">
            <div class="self-strech flex">
                <div class="w-16 h-[calc(100%-6rem)] bg-arch-white rounded-t-lg rounded-bl-lg self-end">
                </div>
            </div>

            <div class="mt-[10rem]">
                <div class="flex items-center relative">
                    <div class="h-2 w-[8rem] bg-arch-white grow"></div>

                    <svg class="w-14 -ml-9 -mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                            stroke="#C5C6C7" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>

                    <div class="relative">
                        <div class="bg-arch-white min-h-[20rem] h-[22rem] overflow-hidden rounded-lg px-4 pt-3 pb-8 flex-col flex"
                            style="resize: vertical;">
                            <div class="text-arch-black font-bold text-2xl text-center">Memory Unit</div>
                            <ul class="bg-arch-gray rounded-lg mt-3 overflow-y-scroll overflow-x-hidden">
                                <li v-for="item, index in mem" class="flex gap-2 p-1 pl-3 text-xl">
                                    <span class="self-center w-10 text-center text-2xl font-bold">{{ toHex(index, 3)
                                        }}</span>
                                    <div class="self-strech w-1 rounded-full bg-arch-white"></div>
                                    <ul class="flex">
                                        <li v-for="item2 in item"
                                            class="w-10 h-10 bg-arch-dark flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                                            {{ item2 }}</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div
                            class="absolute -bottom-[4.75rem] left-[8rem] flex-col flex items-center gap-1 text-2xl font-bold">
                            <div class="w-2 h-10 bg-arch-white rounded-b-full"></div>
                            Read
                        </div>

                        <div
                            class="absolute -bottom-[4.75rem] right-[8rem] flex-col flex items-center gap-1 text-2xl font-bold">
                            <div class="w-2 h-10 bg-arch-white rounded-b-full"></div>
                            Write
                        </div>
                    </div>

                    <div class="h-2 w-[24rem] bg-arch-white"></div>

                    <svg class="w-14 -ml-9 -mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                            stroke="#C5C6C7" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>

                    <div class="absolute right-[10rem] bottom-0 w-2 h-[6rem] bg-arch-white"></div>
                    <div class="flex items-center absolute right-[10rem] bottom-[4.25rem]">
                        <svg class="w-14 rotate-180 -ml-4 -mr-9" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
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

                <div class="flex items-center pt-[7rem] relative">
                    <div class="h-2 w-[8rem] bg-arch-white grow"></div>

                    <svg class="w-14 -ml-9 -mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                            stroke="#C5C6C7" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>

                    <div class="w-fit px-4 pb-4 pt-2 bg-arch-white rounded-lg relative">
                        <div class="text-arch-black font-bold text-2xl text-center">AR</div>
                        <ul class="flex mt-2 bg-arch-gray rounded-lg p-1">
                            <li v-for="item in [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1]"
                                class="w-10 h-10 bg-arch-dark flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                                {{ item }}</li>
                        </ul>

                        <div
                            class="absolute top-[7rem] left-[2rem] flex-col flex items-center gap-1 text-2xl font-bold">
                            <div class="w-2 h-7 bg-arch-white rounded-b-full"></div>
                            LD
                        </div>
                        <div
                            class="absolute top-[7rem] left-[7rem] flex-col flex items-center gap-1 text-2xl font-bold">
                            <div class="w-2 h-7 bg-arch-white rounded-b-full"></div>
                            INR
                        </div>
                        <div
                            class="absolute top-[7rem] left-[12rem] flex-col flex items-center gap-1 text-2xl font-bold">
                            <div class="w-2 h-7 bg-arch-white rounded-b-full"></div>
                            CLR
                        </div>


                        <div
                            class="absolute top-[7rem] right-[2rem] flex-col flex items-center gap-1 text-2xl font-bold">
                            <div class="w-2 h-7 bg-arch-white rounded-b-full"></div>
                            CLK
                        </div>
                    </div>

                    <div class="h-2 w-[24rem] bg-arch-white"></div>

                    <svg class="w-14 -ml-9 -mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                            stroke="#C5C6C7" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>

                    <div class="absolute right-[10rem] top-0 w-2 h-[calc(50%+3.5rem)] bg-arch-white"></div>
                    <div class="absolute top-[8rem] -right-11 text-arch-black text-[3rem] font-bold h-fit">1
                    </div>
                </div>

                <div class="flex items-center pt-[7rem] relative">
                    <div class="h-2 w-[8rem] bg-arch-white grow"></div>

                    <svg class="w-14 -ml-9 -mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                            stroke="#C5C6C7" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>

                    <div class="w-fit px-4 pb-4 pt-2 bg-arch-white rounded-lg relative">
                        <div class="text-arch-black font-bold text-2xl text-center">PC</div>
                        <ul class="flex mt-2 bg-arch-gray rounded-lg p-1">
                            <li v-for="item in [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1]"
                                class="w-10 h-10 bg-arch-dark flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                                {{ item }}</li>
                        </ul>

                        <div
                            class="absolute top-[7rem] left-[2rem] flex-col flex items-center gap-1 text-2xl font-bold">
                            <div class="w-2 h-7 bg-arch-white rounded-b-full"></div>
                            LD
                        </div>
                        <div
                            class="absolute top-[7rem] left-[7rem] flex-col flex items-center gap-1 text-2xl font-bold">
                            <div class="w-2 h-7 bg-arch-white rounded-b-full"></div>
                            INR
                        </div>
                        <div
                            class="absolute top-[7rem] left-[12rem] flex-col flex items-center gap-1 text-2xl font-bold">
                            <div class="w-2 h-7 bg-arch-white rounded-b-full"></div>
                            CLR
                        </div>


                        <div
                            class="absolute top-[7rem] right-[2rem] flex-col flex items-center gap-1 text-2xl font-bold">
                            <div class="w-2 h-7 bg-arch-white rounded-b-full"></div>
                            CLK
                        </div>
                    </div>

                    <div class="h-2 w-[24rem] bg-arch-white"></div>

                    <svg class="w-14 -ml-9 -mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                            stroke="#C5C6C7" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    <div class="absolute top-[8rem] -right-11 text-arch-black text-[3rem] font-bold h-fit">2
                    </div>
                </div>

                <div class="flex items-center pt-[7rem] relative">
                    <div class="h-2 w-[8rem] bg-arch-white grow"></div>

                    <svg class="w-14 -ml-9 -mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                            stroke="#C5C6C7" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>

                    <div class="w-fit px-4 pb-4 pt-2 bg-arch-white rounded-lg relative">
                        <div class="text-arch-black font-bold text-2xl text-center">DR</div>
                        <ul class="flex mt-2 bg-arch-gray rounded-lg p-1">
                            <li v-for="item in [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1]"
                                class="w-10 h-10 bg-arch-dark flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                                {{ item }}</li>
                        </ul>

                        <div
                            class="absolute top-[7rem] left-[2rem] flex-col flex items-center gap-1 text-2xl font-bold">
                            <div class="w-2 h-7 bg-arch-white rounded-b-full"></div>
                            LD
                        </div>
                        <div
                            class="absolute top-[7rem] left-[7rem] flex-col flex items-center gap-1 text-2xl font-bold">
                            <div class="w-2 h-7 bg-arch-white rounded-b-full"></div>
                            INR
                        </div>
                        <div
                            class="absolute top-[7rem] left-[12rem] flex-col flex items-center gap-1 text-2xl font-bold">
                            <div class="w-2 h-7 bg-arch-white rounded-b-full"></div>
                            CLR
                        </div>


                        <div
                            class="absolute top-[7rem] right-[2rem] flex-col flex items-center gap-1 text-2xl font-bold">
                            <div class="w-2 h-7 bg-arch-white rounded-b-full"></div>
                            CLK
                        </div>
                    </div>

                    <div class="h-2 w-[24rem] bg-arch-white"></div>

                    <svg class="w-14 -ml-9 -mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                            stroke="#C5C6C7" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>

                    <div class="absolute right-[20rem] top-[10.25rem] flex flex-col">
                        <div class="h-[9.75rem] w-2 bg-arch-white self-end"></div>
                        <div class="w-[82rem] h-2 bg-arch-white"></div>
                    </div>
                    <div class="absolute top-[8rem] -right-11 text-arch-black text-[3rem] font-bold h-fit">3
                    </div>
                </div>

                <div class="flex items-center pt-[9rem] relative">
                    <div class="w-[20rem] grow"></div>

                    <div class="w-fit px-4 pb-4 pt-2 bg-arch-white rounded-lg relative">
                        <div class="text-arch-black font-bold text-2xl text-center">ALU</div>
                        <ul class="mt-2 bg-arch-gray rounded-lg p-2 space-y-1">
                            <li class="flex gap-1">
                                <div
                                    class="p-2 py-1.5 bg-arch-dark flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                                    AND</div>
                                <div
                                    class="p-2 py-1.5 bg-arch-dark flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                                    ADD</div>
                                <div
                                    class="p-2 py-1.5 bg-arch-dark flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                                    COM</div>
                            </li>

                            <li class="flex gap-1 justify-center">
                                <div
                                    class="p-2 py-1.5 bg-arch-dark flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                                    DR</div>
                                <div
                                    class="p-2 py-1.5 bg-arch-dark flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                                    INPR</div>
                            </li>

                            <li class="flex gap-1 justify-center">
                                <div
                                    class="p-2 py-1.5 bg-arch-dark flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                                    SHR</div>
                                <div
                                    class="p-2 py-1.5 bg-arch-dark flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                                    SHL</div>
                            </li>
                        </ul>

                        <div class="absolute right-[16.8rem] top-0 flex items-center">
                            <div class="h-2 w-[6rem] bg-arch-white"></div>

                            <svg class="w-14 -ml-9 -mr-4" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                                    stroke="#C5C6C7" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>

                            <div class="absolute bottom-7 left-0 h-[4.75rem] w-2 bg-arch-white"></div>
                        </div>

                        <div class="absolute right-[16.8rem] top-0 bottom-0 my-auto flex items-center">
                            <div class="h-2 w-[12.25rem] bg-arch-white relative">
                                <div class="absolute top-0 left-0 h-[18.1rem] w-2 bg-arch-white"></div>
                            </div>

                            <svg class="w-14 -ml-9 -mr-4" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                                    stroke="#C5C6C7" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>

                        </div>

                        <div class="absolute right-[16.8rem] bottom-0 flex items-center">
                            <div class="h-2 w-[6rem] bg-arch-white"></div>

                            <svg class="w-14 -ml-9 -mr-4" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                                    stroke="#C5C6C7" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>

                            <div class="absolute top-7 left-0 h-[4.75rem] w-2 bg-arch-white"></div>
                        </div>

                        <div class="absolute left-[16.8rem] top-0 flex items-center">
                            <div class="h-2 w-[4rem] bg-arch-white"></div>

                            <svg class="w-14 -ml-9 -mr-4" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                                    stroke="#C5C6C7" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>

                            <div
                                class="bg-arch-white pb-1 px-2 text-arch-black text-2xl font-bold rounded-lg flex flex-col items-center">
                                <div>E</div>
                                <div class="flex bg-arch-gray rounded-lg p-1">
                                    <div
                                        class="w-10 h-10 bg-arch-dark flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                                        0</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="h-2 w-[12rem] bg-arch-white"></div>

                    <svg class="w-14 -ml-9 -mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                            stroke="#C5C6C7" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>

                    <div class="w-fit px-4 pb-4 pt-2 bg-arch-white rounded-lg relative">
                        <div class="text-arch-black font-bold text-2xl text-center">AC</div>
                        <ul class="flex mt-2 bg-arch-gray rounded-lg p-1">
                            <li v-for="item in [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1]"
                                class="w-10 h-10 bg-arch-dark flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                                {{ item }}</li>
                        </ul>

                        <div
                            class="absolute top-[7rem] left-[2rem] flex-col flex items-center gap-1 text-2xl font-bold">
                            <div class="w-2 h-7 bg-arch-white rounded-b-full"></div>
                            LD
                        </div>
                        <div
                            class="absolute top-[7rem] left-[7rem] flex-col flex items-center gap-1 text-2xl font-bold">
                            <div class="w-2 h-7 bg-arch-white rounded-b-full"></div>
                            INR
                        </div>
                        <div
                            class="absolute top-[7rem] left-[12rem] flex-col flex items-center gap-1 text-2xl font-bold">
                            <div class="w-2 h-7 bg-arch-white rounded-b-full"></div>
                            CLR
                        </div>


                        <div
                            class="absolute top-[7rem] right-[2rem] flex-col flex items-center gap-1 text-2xl font-bold">
                            <div class="w-2 h-7 bg-arch-white rounded-b-full"></div>
                            CLK
                        </div>
                    </div>

                    <div class="h-2 w-[24rem] bg-arch-white"></div>

                    <svg class="w-14 -ml-9 -mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                            stroke="#C5C6C7" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>

                    <div class="absolute right-[20rem] top-[16rem] flex flex-col">
                        <div class="h-[10rem] w-2 bg-arch-white self-end"></div>
                        <div class="w-[82rem] h-2 bg-arch-white"></div>
                    </div>

                    <div class="absolute top-[13.5rem] -right-11 text-arch-black text-[3rem] font-bold h-fit">4
                    </div>
                </div>

                <div class="flex items-center pt-[7rem] relative">
                    <div class="h-2 w-[8rem] grow"></div>

                    <div class="w-fit px-4 pb-4 pt-2 bg-arch-white rounded-lg relative">
                        <div class="text-arch-black font-bold text-2xl text-center">INPR</div>
                        <ul class="flex mt-2 bg-arch-gray rounded-lg p-1">
                            <li v-for="item in [1, 1, 1, 1, 1, 0, 1, 1]"
                                class="w-10 h-10 bg-arch-dark flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                                {{ item }}</li>

                            <div
                                class="h-2 w-[41.5rem] bg-arch-white grow absolute top-0 bottom-0 my-auto right-[22.5rem]">
                            </div>
                        </ul>
                    </div>

                    <div class="h-2 w-[44.25rem]"></div>
                </div>

                <div class="flex items-center pt-[4rem] relative">
                    <div class="h-2 w-[8rem] bg-arch-white grow"></div>

                    <svg class="w-14 -ml-9 -mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                            stroke="#C5C6C7" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>

                    <div class="w-fit px-4 pb-4 pt-2 bg-arch-white rounded-lg relative">
                        <div class="text-arch-black font-bold text-2xl text-center">IR</div>
                        <ul class="flex mt-2 bg-arch-gray rounded-lg p-1">
                            <li v-for="item in [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1]"
                                class="w-10 h-10 bg-arch-dark flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                                {{ item }}</li>
                        </ul>

                        <div
                            class="absolute top-[7rem] left-[2rem] flex-col flex items-center gap-1 text-2xl font-bold">
                            <div class="w-2 h-7 bg-arch-white rounded-b-full"></div>
                            LD
                        </div>


                        <div
                            class="absolute top-[7rem] right-[2rem] flex-col flex items-center gap-1 text-2xl font-bold">
                            <div class="w-2 h-7 bg-arch-white rounded-b-full"></div>
                            CLK
                        </div>
                    </div>

                    <div class="h-2 w-[24rem] bg-arch-white"></div>

                    <svg class="w-14 -ml-9 -mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                            stroke="#C5C6C7" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    <div class="absolute top-[5rem] -right-11 text-arch-black text-[3rem] font-bold h-fit">5
                    </div>
                </div>

                <div class="flex items-center pt-[7rem] relative">
                    <div class="h-2 w-[8rem] bg-arch-white grow"></div>

                    <svg class="w-14 -ml-9 -mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                            stroke="#C5C6C7" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>

                    <div class="w-fit px-4 pb-4 pt-2 bg-arch-white rounded-lg relative">
                        <div class="text-arch-black font-bold text-2xl text-center">TR</div>
                        <ul class="flex mt-2 bg-arch-gray rounded-lg p-1">
                            <li v-for="item in [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0]"
                                class="w-10 h-10 bg-arch-dark flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                                {{ item }}</li>
                        </ul>

                        <div
                            class="absolute top-[7rem] left-[2rem] flex-col flex items-center gap-1 text-2xl font-bold">
                            <div class="w-2 h-7 bg-arch-white rounded-b-full"></div>
                            LD
                        </div>
                        <div
                            class="absolute top-[7rem] left-[7rem] flex-col flex items-center gap-1 text-2xl font-bold">
                            <div class="w-2 h-7 bg-arch-white rounded-b-full"></div>
                            INR
                        </div>
                        <div
                            class="absolute top-[7rem] left-[12rem] flex-col flex items-center gap-1 text-2xl font-bold">
                            <div class="w-2 h-7 bg-arch-white rounded-b-full"></div>
                            CLR
                        </div>


                        <div
                            class="absolute top-[7rem] right-[2rem] flex-col flex items-center gap-1 text-2xl font-bold">
                            <div class="w-2 h-7 bg-arch-white rounded-b-full"></div>
                            CLK
                        </div>
                    </div>

                    <div class="h-2 w-[24rem] bg-arch-white"></div>

                    <svg class="w-14 -ml-9 -mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                            stroke="#C5C6C7" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    <div class="absolute top-[8rem] -right-11 text-arch-black text-[3rem] font-bold h-fit">6
                    </div>
                </div>

                <div class="flex items-center pt-[7rem] relative">
                    <div class="h-2 w-[8rem] bg-arch-white grow"></div>

                    <svg class="w-14 -ml-9 -mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                            stroke="#C5C6C7" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>

                    <div class="w-fit px-4 pb-4 pt-2 bg-arch-white rounded-lg relative">
                        <div class="text-arch-black font-bold text-2xl text-center">OUTR</div>
                        <ul class="flex mt-2 bg-arch-gray rounded-lg p-1">
                            <li v-for="item in [1, 1, 1, 1, 1, 0, 1, 1]"
                                class="w-10 h-10 bg-arch-dark flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                                {{ item }}</li>
                        </ul>

                        <div
                            class="absolute top-[7rem] left-[2rem] flex-col flex items-center gap-1 text-2xl font-bold">
                            <div class="w-2 h-7 bg-arch-white rounded-b-full"></div>
                            LD
                        </div>


                        <div
                            class="absolute top-[7rem] right-[2rem] flex-col flex items-center gap-1 text-2xl font-bold">
                            <div class="w-2 h-7 bg-arch-white rounded-b-full"></div>
                            CLK
                        </div>
                    </div>

                    <div class="h-2 w-[44.25rem]"></div>
                </div>

                <div
                    class="h-16 bg-arch-white w-full mt-[7rem] text-arch-black flex items-center justify-center text-[2rem] font-bold">
                    16 Bit Common Bus
                </div>
            </div>

            <div class="self-strech">
                <div
                    class="w-[16rem] h-[12rem] bg-arch-white -ml-[6rem] rounded-lg relative flex items-center justify-center">
                    <span class="text-arch-black text-[3.5rem] font-bold">Bus</span>

                    <div class="absolute right-[16.25rem] top-0 flex items-center text-[2.5rem] font-bold">
                        <div class="-mt-2 mr-4">S2</div>
                        <div class="h-2 rounded-l-full w-[6rem] bg-arch-white"></div>

                        <svg class="w-14 -ml-9 -mr-4" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                                stroke="#C5C6C7" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div
                        class="absolute right-[16.25rem] top-0 bottom-0 my-auto flex items-center text-[2.5rem] font-bold">
                        <div class="-mt-2 mr-4">S1</div>
                        <div class="h-2 rounded-l-full w-[6rem] bg-arch-white"></div>

                        <svg class="w-14 -ml-9 -mr-4" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                                stroke="#C5C6C7" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div class="absolute right-[16.25rem] bottom-0 flex items-center text-[2.5rem] font-bold">
                        <div class="-mt-2 mr-4">S0</div>
                        <div class="h-2 rounded-l-full w-[6rem] bg-arch-white"></div>

                        <svg class="w-14 -ml-9 -mr-4" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                                stroke="#C5C6C7" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <div class="w-16 h-[calc(100%-12rem)] bg-arch-white rounded-br-lg"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
let mem = ref([])
for (let i = 0; i < 40; i++) {
    mem.value[i] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
}

const toHex = (num, pad) => {
    let hex = num.toString(16)
    while (hex.length < pad) {
        hex = "0" + hex
    }
    return hex.toUpperCase()
}
</script>