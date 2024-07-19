<template>
    <div class="text-arch-white px-10 py-20 w-fit">
        <DatapathDecoders></DatapathDecoders>

        <div class="flex relative">
            <DatapathFlops></DatapathFlops>

            <div class="self-strech flex">
                <div class="w-16 h-[calc(100%-6rem)] bg-arch-white rounded-t-lg rounded-bl-lg self-end">
                </div>
            </div>

            <div class="mt-[10rem]">
                <DatapathMemory></DatapathMemory>

                <DatapathAr></DatapathAr>

                <DatapathPc></DatapathPc>

                <DatapathDr></DatapathDr>

                <DatapathAc></DatapathAc>

                <DatapathInpr></DatapathInpr>

                <DatapathIr></DatapathIr>

                <DatapathTr></DatapathTr>

                <DatapathOutr></DatapathOutr>

                <div
                    class="h-16 bg-arch-white w-full mt-[7rem] text-arch-black flex items-center justify-center text-4xl font-bold">
                    16 Bit Common Bus
                </div>
            </div>

            <div class="self-strech">
                <DatapathBus></DatapathBus>
                <div class="w-16 h-[calc(100%-12rem)] bg-arch-white rounded-br-lg"></div>
            </div>
        </div>
    </div>
</template>