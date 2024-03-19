<template>
    <div class="flex items-center pt-[7rem] relative">
        <div class="h-2 w-[8rem] grow"></div>

        <div class="w-fit px-4 pb-4 pt-2 bg-arch-white rounded-lg relative">
            <div class="text-arch-black font-bold text-2xl text-center">INPR</div>
            <ul class="flex mt-2 bg-arch-gray rounded-lg p-1">
                <li v-for="item in [1, 1, 1, 1, 1, 0, 1, 1]"
                    class="w-10 h-10 bg-arch-dark flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                    {{ item }}</li>

                <div class="h-2 w-[41.5rem] bg-arch-white grow absolute top-0 bottom-0 my-auto right-[22.5rem]">
                </div>
            </ul>
        </div>

        <div class="h-2 w-[44.25rem]"></div>
    </div>
</template>