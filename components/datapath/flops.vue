<template>
    <div class="absolute left-[5rem] top-[6rem] z-[1]">
        <div class="flex gap-4">
            <div
                class="bg-arch-white pb-1 px-2 text-arch-black text-2xl font-bold rounded-lg flex flex-col items-center">
                <div>S</div>
                <div class="flex bg-arch-gray rounded-lg p-1">
                    <div :class="bitColor(data.s)"
                        class="w-10 h-10 flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                        {{ data.s.value }}</div>
                </div>
            </div>
            <div
                class="bg-arch-white pb-1 px-2 text-arch-black text-2xl font-bold rounded-lg flex flex-col items-center">
                <div>I</div>
                <div class="flex bg-arch-gray rounded-lg p-1">
                    <div :class="bitColor(data.i)"
                        class="w-10 h-10 flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                        {{ data.i.value }}</div>
                </div>
            </div>
            <div
                class="bg-arch-white pb-1 px-2 text-arch-black text-2xl font-bold rounded-lg flex flex-col items-center">
                <div>R</div>
                <div class="flex bg-arch-gray rounded-lg p-1">
                    <div :class="bitColor(data.r)"
                        class="w-10 h-10 flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                        {{ data.r.value }}</div>
                </div>
            </div>
        </div>

        <div class="flex gap-4 mt-4">
            <div
                class="bg-arch-white pb-1 px-2 text-arch-black text-2xl font-bold rounded-lg flex flex-col items-center">
                <div>IEN</div>
                <div class="flex bg-arch-gray rounded-lg p-1">
                    <div :class="bitColor(data.ien)"
                        class="w-10 h-10 flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                        {{ data.ien.value }}</div>
                </div>
            </div>
            <div
                class="bg-arch-white pb-1 px-2 text-arch-black text-2xl font-bold rounded-lg flex flex-col items-center">
                <div>FGI</div>
                <div class="flex bg-arch-gray rounded-lg p-1">
                    <div :class="bitColor(data.fgi)"
                        class="w-10 h-10 flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                        {{ data.fgi.value }}</div>
                </div>
            </div>
            <div
                class="bg-arch-white pb-1 px-2 text-arch-black text-2xl font-bold rounded-lg flex flex-col items-center">
                <div>FGO</div>
                <div class="flex bg-arch-gray rounded-lg p-1">
                    <div :class="bitColor(data.fgo)"
                        class="w-10 h-10 flex items-center justify-center text-white text-2xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                        {{ data.fgo.value }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data, bitColor } = useArch()
</script>