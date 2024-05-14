<template>
    <div class="border-r-[0.5rem] border-arch-black bg-arch-white p-4 h-full flex flex-col">
        <div class="text-[2.5rem] text-center font-bold mt-10">
            Instruction
        </div>
        <div
            class="bg-arch-gray border-[0.5rem] border-arch-black overflow-auto relative font-bold leading-[4rem] text-[2.25rem] text-arch-white px-6 py-4 whitespace-nowrap mt-6">
            <div v-html="current.logic"></div>
            <div v-for="item in current.micros" v-html="item"></div>
        </div>
        <button @click="pulse"
            class="rounded-full text-[2.5rem] bg-arch-gray border-[0.5rem] font-bold border-arch-black w-[10rem] h-[10rem] flex items-center justify-center text-arch-white mx-auto mt-10">Pulse</button>
    </div>
</template>

<script setup>
const { data, addZero } = useArch()

const toHex = (num, pad) => {
    let hex = num.toString(16)
    while (hex.length < pad) {
        hex = "0" + hex
    }
    return hex.toUpperCase()
}

const t = computed(() => parseInt(data.value.sc.value, 2))

const d = computed(() => parseInt(data.value.ir.value.slice(1, 4), 2))

const i = computed(() => parseInt(data.value.ir.value.slice(0, 1), 2))

const b = computed(() => parseInt(data.value.ir.value.slice(4, 16), 2))

const micros = {
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

const current = ref({ logic: "", micros: [] })
const pulse = () => {
    data.value.s.changed = false
    data.value.i.changed = false
    data.value.r.changed = false
    data.value.ien.changed = false
    data.value.fgi.changed = false
    data.value.fgo.changed = false
    data.value.ar.changed = false
    data.value.pc.changed = false
    data.value.dr.changed = false
    data.value.e.changed = false
    data.value.ac.changed = false
    data.value.inpr.changed = false
    data.value.ir.changed = false
    data.value.tr.changed = false
    data.value.outr.changed = false
    data.value.sc.changed = false

    current.value = { logic: "", micros: [] }

    if (data.value.r.value == "1") {

    } else {
        current.value.logic += "R'"
        switch (t.value) {
            case 0:
                current.value.logic += "T<sub>0</sub>"
                current.value.micros.push("AR &#10229; PC")

                data.value.ar.value = data.value.pc.value
                data.value.ar.default = false
                data.value.ar.changed = true
                break
            case 1:
                current.value.logic += "T<sub>1</sub>"
                current.value.micros.push("IR &#10229; M[AR]")
                current.value.micros.push("PC &#10229; PC + 1")

                if(data.value.memory.find((x) => x.address == parseInt(data.value.ar.value, 2)))  data.value.ir.value = data.value.memory.find((x) => x.address == parseInt(data.value.ar.value, 2)).value ?? "0000000000000000"
                data.value.ir.default = false
                data.value.ir.changed = true

                
                break
            case 2:
                current.value.logic += "T<sub>2</sub>"
                break
            default:
                if (d.value == 7) {
                    current.value.logic += "D<sub>7</sub>"
                    if (i.value == 0) {
                        current.value.logic += "I"
                        if (t.value = 3) {
                            current.value.logic += "T<sub>3</sub>"

                        }
                    } else {
                        current.value.logic += "I'"
                        if (t.value = 3) {
                            current.value.logic += "T<sub>3</sub>"
                            switch (b.value) {
                                case 1:
                                    current.value.logic += "B<sub>0</sub>"
                                    break;
                                case 2:
                                    current.value.logic += "B<sub>1</sub>"
                                    break;
                                case 4:
                                    current.value.logic += "B<sub>2</sub>"
                                    break;
                                case 8:
                                    current.value.logic += "B<sub>3</sub>"
                                    break;
                                case 16:
                                    current.value.logic += "B<sub>4</sub>"
                                    break;
                                case 32:
                                    current.value.logic += "B<sub>5</sub>"
                                    break;
                                case 64:
                                    current.value.logic += "B<sub>6</sub>"
                                    break;
                                case 128:
                                    current.value.logic += "B<sub>7</sub>"
                                    break;
                                case 256:
                                    current.value.logic += "B<sub>8</sub>"
                                    break;
                                case 512:
                                    current.value.logic += "B<sub>9</sub>"
                                    break;
                                case 1024:
                                    current.value.logic += "B<sub>10</sub>"
                                    break;
                                case 2048:
                                    current.value.logic += "B<sub>11</sub>"
                                    break;
                                default:

                            }
                        }
                    }
                } else {
                    current.value.logic += "D<sub>7</sub>'"
                }

        }
    }

    data.value.sc.value = addZero((parseInt(data.value.sc.value, 2) + 1).toString(2), 3)
    if (parseInt(data.value.sc.value, 2) > 7) data.value.sc.value = '000'
    data.value.sc.changed = true
}
</script>