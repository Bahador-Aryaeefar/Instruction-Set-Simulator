<template>
    <div class="border-r-[0.5rem] border-arch-black bg-arch-white p-4 h-full flex flex-col">
        <div class="text-[2.5rem] text-center font-bold mt-10">
            Instruction
        </div>
        <div
            class="bg-arch-gray border-[0.5rem] border-arch-black overflow-auto relative font-bold leading-[4rem] text-[2.25rem] text-arch-white px-6 py-4 whitespace-nowrap mt-6">
            {{ data }}
        </div>
    </div>
</template>

<script setup>
const { data } = useArch()

const toHex = (num, pad) => {
    let hex = num.toString(16)
    while (hex.length < pad) {
        hex = "0" + hex
    }
    return hex.toUpperCase()
}

const micros = {
    RpT0: "AR &#10229; PC",
    RpT1: "IR &#10229; M[AR]<br/>PC &#10229; PC + 1",
    RpT2: "AR &#10229; IR<br/>I &#10229; IR(15)<br/>D0...D7 &#10229; Decode IR(12-14)",
    D7IpT3B11: "AC &#10229; 0",
    D7IpT3B10: "E &#10229; 0",
    D7IpT3B9: "AC &#10229; <span style='text-decoration:overline'>AC</span>",
    D7IpT3B8: "E &#10229; <span style='text-decoration:overline'>E</span>",
    D7IpT3B7: "AC &#10229; shr AC<br/>AC(15) &#10229; E<br/>E &#10229; AC(0)",
    D7IpT3B6: "AC &#10229; shl AC<br/>AC(0) &#10229; E<br/>E &#10229; AC(15)",
    D7IpT3B5: "AC &#10229; AC + 1",
    D7IpT3B4: "If (AC(15) = 0)<br/>then (PC &#10229; PC + 1)",
    D7IpT3B3: "If (AC(15) = 1)<br/>then (PC &#10229; PC + 1)",
    D7IpT3B2: "If (AC = 0)<br/>then (PC &#10229; PC + 1)",
    D7IpT3B1: "If (E = 0)<br/>then (PC &#10229; PC + 1)",
    D7IpT3B0: "S &#10229; 0",
}
</script>