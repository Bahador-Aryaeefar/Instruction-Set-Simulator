<template>
    <div class="text-arch-white px-10 pt-20">
        <div class="flex">
            <div class="w-16 self-strech bg-arch-white rounded-t-lg rounded-bl-lg"></div>

            <div>
                <div class="flex items-center">
                    <div class="h-1 w-[20rem] bg-arch-white"></div>

                    <svg class="w-14 -ml-9 -mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                            stroke="#C5C6C7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>

                    <div class="w-fit px-4 pb-4 pt-2 bg-arch-white rounded-lg relative">
                        <div class="text-arch-black font-bold text-2xl text-center">AR</div>
                        <ul class="flex mt-2 gap-1">
                            <li v-for="item in [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1]"
                                class="w-10 h-10 bg-arch-dark flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                                {{ item }}</li>
                        </ul>
                    </div>

                    <div class="h-1 w-[20rem] bg-arch-white"></div>

                    <svg class="w-14 -ml-9 -mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008"
                            stroke="#C5C6C7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>

                <div class="h-16 bg-arch-white w-full mt-20"></div>
            </div>

            <div class="w-16 self-strech bg-arch-white rounded-t-lg rounded-br-lg"></div>
        </div>
    </div>
</template>