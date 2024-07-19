<template>
    <div class="absolute left-[5rem] top-[6rem] z-[1]">
        <div class="flex gap-4">
            <div
                class="bg-arch-white p-2 text-arch-black text-4xl font-bold rounded-lg flex flex-col items-center w-[5.5rem]">
                <div class="pb-1">S</div>
                <div class="flex bg-arch-gray rounded-lg p-1">
                    <div :class="bitColor(data.s)"
                        class="w-12 h-12 flex items-center justify-center text-white text-3xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                        {{ data.s.value }}</div>
                </div>
            </div>
            <div
                class="bg-arch-white p-2 text-arch-black text-4xl font-bold rounded-lg flex flex-col items-center w-[5.5rem]">
                <div class="pb-1">I</div>
                <div class="flex bg-arch-gray rounded-lg p-1">
                    <div :class="bitColor(data.i)"
                        class="w-12 h-12 flex items-center justify-center text-white text-3xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                        {{ data.i.value }}</div>
                </div>
            </div>
            <div
                class="bg-arch-white p-2 text-arch-black text-4xl font-bold rounded-lg flex flex-col items-center w-[5.5rem]">
                <div class="pb-1">R</div>
                <div class="flex bg-arch-gray rounded-lg p-1">
                    <div :class="bitColor(data.r)"
                        class="w-12 h-12 flex items-center justify-center text-white text-3xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                        {{ data.r.value }}</div>
                </div>
            </div>
        </div>

        <div class="flex gap-4 mt-4">
            <div
                class="bg-arch-white p-2 text-arch-black text-4xl font-bold rounded-lg flex flex-col items-center w-[5.5rem]">
                <div class="pb-1">IEN</div>
                <div class="flex bg-arch-gray rounded-lg p-1">
                    <div :class="bitColor(data.ien)"
                        class="w-12 h-12 flex items-center justify-center text-white text-3xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                        {{ data.ien.value }}</div>
                </div>
            </div>
            <div
                class="bg-arch-white p-2 text-arch-black text-4xl font-bold rounded-lg flex flex-col items-center w-[5.5rem]">
                <div class="pb-1">FGI</div>
                <div class="flex bg-arch-gray rounded-lg p-1">
                    <div :class="bitColor(data.fgi)"
                        class="w-12 h-12 flex items-center justify-center text-white text-3xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                        {{ data.fgi.value }}</div>
                </div>
            </div>
            <div
                class="bg-arch-white p-2 text-arch-black text-4xl font-bold rounded-lg flex flex-col items-center w-[5.5rem]">
                <div class="pb-1">FGO</div>
                <div class="flex bg-arch-gray rounded-lg p-1">
                    <div :class="bitColor(data.fgo)"
                        class="w-12 h-12 flex items-center justify-center text-white text-3xl font-medium rounded-lg border-[0.125rem] border-arch-gray">
                        {{ data.fgo.value }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data, bitColor } = useArch()
</script>