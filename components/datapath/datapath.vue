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
                <DatapathMemory class="z-[9]"></DatapathMemory>

                <DatapathAr class="z-[8]"></DatapathAr>

                <DatapathPc class="z-[7]"></DatapathPc>

                <DatapathDr class="z-[6]"></DatapathDr>

                <DatapathAc class="z-[5]"></DatapathAc>

                <DatapathInpr class="z-[4]"></DatapathInpr>

                <DatapathIr class="z-[3]"></DatapathIr>

                <DatapathTr class="z-[2]"></DatapathTr>

                <DatapathOutr class="z-[1]"></DatapathOutr>

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