<template>
    <div class="border-r-[0.5rem] border-arch-black bg-arch-white p-4 h-full flex flex-col">
        <div class="text-[2.5rem] text-center font-bold mt-10">
            Instruction
        </div>
        <div
            class="h-[50rem] bg-arch-gray border-[0.5rem] border-arch-black overflow-auto relative font-bold leading-[4rem] text-[2.25rem] text-arch-white px-6 py-4 whitespace-nowrap mt-6">
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

const b = computed(() => parseInt(data.value.ir.value.slice(4, 16), 2))

const micros = {
    D7IpT3B4: "",
    D7IpT3B3: "<br/>",
    D7IpT3B2: "<br/>)",
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
                current.value.micros.push("D0...D7 &#10229; Decode IR(12-14)")

                data.value.ir.value = (data.value.memory.value.find((x) => x.address == parseInt(data.value.ar.value, 2))?.value ?? "0000000000000000")
                data.value.ir.default = false
                data.value.ir.changed = true

                data.value.pc.value = addZero((parseInt(data.value.pc.value, 2) + 1).toString(2), 12)
                data.value.pc.default = false
                data.value.pc.changed = true
                break
            case 2:
                current.value.logic += "T<sub>2</sub>"
                current.value.micros.push("AR &#10229; IR(0-11)")
                current.value.micros.push("I &#10229; IR(15)")

                data.value.ar.value = data.value.ir.value.slice(4, 16)
                data.value.ar.default = false
                data.value.ar.changed = true

                data.value.i.value = data.value.ir.value.slice(0, 1)
                data.value.i.default = false
                data.value.i.changed = true

                break
            default:
                if (d.value == 7) {
                    current.value.logic += "D<sub>7</sub>"
                    if (data.value.i.value == '1') {
                        current.value.logic += "I"
                        if (t.value = 3) {
                            current.value.logic += "T<sub>3</sub>"
                        }
                    }
                    else {
                        current.value.logic += "I'"
                        if (t.value = 3) {
                            current.value.logic += "T<sub>3</sub>"
                            let temp
                            switch (b.value) {
                                case 1:
                                    current.value.logic += "B<sub>0</sub>"
                                    data.value.s.value = 0
                                    data.value.s.default = false
                                    data.value.s.changed = true

                                    break;
                                case 2:
                                    current.value.logic += "B<sub>1</sub>"
                                    current.value.micros.push("If (E = 0)")
                                    current.value.micros.push("then (PC &#10229; PC + 1")

                                    if (data.value.e.value == "0") {
                                        data.value.pc.value = addZero((parseInt(data.value.pc.value, 2) + 1).toString(2), 12)
                                        data.value.pc.default = false
                                        data.value.pc.changed = true
                                    }
                                    break;
                                case 4:
                                    current.value.logic += "B<sub>2</sub>"
                                    current.value.micros.push("If (AC = 0)")
                                    current.value.micros.push("then (PC &#10229; PC + 1")

                                    if (data.value.ac.value == "0000000000000000") {
                                        data.value.pc.value = addZero((parseInt(data.value.pc.value, 2) + 1).toString(2), 12)
                                        data.value.pc.default = false
                                        data.value.pc.changed = true
                                    }
                                    break;
                                case 8:
                                    current.value.logic += "B<sub>3</sub>"
                                    current.value.micros.push("If (AC(15) = 1)")
                                    current.value.micros.push("then (PC &#10229; PC + 1)")

                                    if (data.value.ac.value[0] == "1") {
                                        data.value.pc.value = addZero((parseInt(data.value.pc.value, 2) + 1).toString(2), 12)
                                        data.value.pc.default = false
                                        data.value.pc.changed = true
                                    }
                                    break;
                                case 16:
                                    current.value.logic += "B<sub>4</sub>"
                                    current.value.micros.push("If (AC(15) = 0)")
                                    current.value.micros.push("then (PC &#10229; PC + 1)")

                                    if (data.value.ac.value[0] == "0") {
                                        data.value.pc.value = addZero((parseInt(data.value.pc.value, 2) + 1).toString(2), 12)
                                        data.value.pc.default = false
                                        data.value.pc.changed = true
                                    }
                                    break;
                                case 32:
                                    current.value.logic += "B<sub>5</sub>"
                                    current.value.micros.push("AC &#10229; AC + 1")

                                    data.value.ac.value = (parseInt(data.value.ac.value, 2) + 1).toString(2)
                                    if (data.value.ac.value.length == 17) {
                                        data.value.e.value = data.value.ac.value.slice(0, 1)
                                        data.value.ac.value = data.value.ac.value.slice(1, 17)
                                        data.value.e.default = false
                                        data.value.e.changed = true
                                    }
                                    data.value.ac.value = addZero(data.value.ac.value, 16)
                                    data.value.ac.default = false
                                    data.value.ac.changed = true
                                    break;
                                case 64:
                                    current.value.logic += "B<sub>6</sub>"
                                    current.value.micros.push("AC &#10229; shl AC")
                                    current.value.micros.push("AC(0) &#10229; E")
                                    current.value.micros.push("E &#10229; AC(15)")

                                    temp = data.value.e.value
                                    data.value.e.value = data.value.ac.value.slice(0, 1)
                                    data.value.ac.value = data.value.ac.value.slice(1, 16) + temp


                                    data.value.e.default = false
                                    data.value.e.changed = true
                                    data.value.ac.default = false
                                    data.value.ac.changed = true
                                    break;
                                case 128:
                                    current.value.logic += "B<sub>7</sub>"
                                    current.value.micros.push("AC &#10229; shr AC")
                                    current.value.micros.push("AC(15) &#10229; E")
                                    current.value.micros.push("E &#10229; AC(0)")

                                    temp = data.value.e.value
                                    data.value.e.value = data.value.ac.value.slice(15, 16)
                                    data.value.ac.value = temp + data.value.ac.value.slice(0, 15)


                                    data.value.e.default = false
                                    data.value.e.changed = true
                                    data.value.ac.default = false
                                    data.value.ac.changed = true
                                    break;
                                case 256:
                                    current.value.logic += "B<sub>8</sub>"
                                    current.value.micros.push("E &#10229; <span style='text-decoration:overline'>E</span>")

                                    data.value.e.value = data.value.e.value === "0" ? "1" : "0"
                                    data.value.e.default = false
                                    data.value.e.changed = true
                                    break;
                                case 512:
                                    current.value.logic += "B<sub>9</sub>"
                                    current.value.micros.push("AC &#10229; <span style='text-decoration:overline'>AC</span>")

                                    data.value.ac.value = data.value.ac.value.split('').map(x => x === "0" ? "1" : "0").join('')
                                    data.value.ac.default = false
                                    data.value.ac.changed = true
                                    break;
                                case 1024:
                                    current.value.logic += "B<sub>10</sub>"
                                    current.value.micros.push("E &#10229; 0")

                                    data.value.e.value = "0"
                                    data.value.e.default = false
                                    data.value.e.changed = true
                                    break;
                                case 2048:
                                    current.value.logic += "B<sub>11</sub>"
                                    current.value.micros.push("AC &#10229; 0")

                                    data.value.ac.value = "0000000000000000"
                                    data.value.ac.default = false
                                    data.value.ac.changed = true
                                    break;
                                default:
                            }
                            current.value.micros.push("SC &#10229; 0")

                            data.value.sc.value = "000"
                            data.value.sc.default = false
                            data.value.sc.changed = true
                            return
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