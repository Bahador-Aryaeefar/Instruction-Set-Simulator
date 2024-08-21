<template>
    <div class="border-r-[0.5rem] border-arch-black bg-arch-white p-4 h-full flex flex-col overflow-auto">

        <div class="border-arch-black border-[0.5rem] rounded-lg">
            <div class="text-[3rem] text-white font-bold py-4 bg-yellow-700 w-full text-center">
                Controls
            </div>
            <div class="flex border-t-[0.5rem] border-arch-black text-[3rem] text-white font-bold text-center">
                <div class="bg-yellow-700 py-4 px-6 w-1/4">CLK</div>
                <input type="text"
                    class="bg-arch-gray py-4 px-6 border-x-[0.5rem] w-0 grow border-arch-black focus:outline-none text-center"
                    v-model="clock" />
                <div class="bg-yellow-700 py-4 px-6 w-1/4">Hz</div>

            </div>
            <div class="flex border-t-[0.5rem] border-arch-black">
                <button @click="useArch().setup()" title="reset"
                    class="shrink-0 text-[3rem] py-5 font-bold w-1/3 text-center overflow-hidden bg-arch-dark hover:bg-red-400">
                    <img class="h-16 mx-auto" src="/icons/reset.svg" alt="">
                </button>
                <button @click="autoAction" title="auto clock"
                    class="shrink-0 text-[3rem] py-5 font-bold w-1/3 text-center border-x-[0.5rem] border-arch-black overflow-hidden "
                    :class="auto ? 'bg-red-700' : 'bg-arch-dark  hover:bg-red-400'">
                    <img :class="auto ? '' : 'hidden'" class="h-16 mx-auto" src="/icons/stop.svg" alt="">
                    <img :class="auto ? 'hidden' : ''" class="h-16 mx-auto" src="/icons/auto.svg" alt="">
                </button>
                <button @click="pulse" title="pulse"
                    class="shrink-0 text-[3rem] py-5 font-bold w-1/3 text-center overflow-hidden bg-arch-dark hover:bg-red-400">
                    <img class="h-16 mx-auto" src="/icons/pulse.svg" alt="">
                </button>
            </div>
        </div>

        <div class="mt-6" v-if="set[0]">
            <div
                class="text-[3rem] text-white font-bold py-4 bg-yellow-700 w-full text-center border-[0.5rem] border-arch-black border-b-0 rounded-t-lg">
                Instructions
            </div>

            <div
                class="max-h-[40rem] overflow-y-scroll bg-arch-gray border-[0.5rem] border-arch-black relative font-bold leading-[4rem] text-[2.25rem] text-arch-white whitespace-nowrap rounded-b-lg">
                <div v-for="(item, index) in set" class="flex text-[2.25rem]  border-arch-black"
                    :class="index ? 'border-t-[0.5rem]' : ''">
                    <div title="set break point" @click="addBreak(item.num)"
                        class="w-[6.5rem] flex items-center justify-center cursor-pointer text-white shrink-0"
                        :class="breadAddr[item.num] ? 'bg-red-700' : ' bg-arch-dark hover:bg-red-400'">
                        {{ addZero(item.num.toString(16), 3).toUpperCase() }}
                    </div>
                    <div :ref="(el) => refs[item.num] = el"
                        class="text-white grow py-4 px-6 border-x-[0.5rem] border-arch-black"
                        :class="(instruction && parseInt(instruction, 2) == item.num) ? 'bg-red-700' : 'bg-arch-gray'">
                        {{ item.label ? `${item.label}, ` : '' }}
                        {{ item.inst.join(" ") }}
                    </div>
                </div>
            </div>

            <div
                class="mt-6 text-[3rem] text-white font-bold py-4 bg-yellow-700 w-full text-center border-[0.5rem] border-arch-black border-b-0 rounded-t-lg">
                Micro Instructions
            </div>

            <div
                class="bg-arch-gray border-[0.5rem] border-arch-black overflow-auto relative font-bold leading-[4rem] text-[2.25rem] text-arch-white whitespace-nowrap">
                <div v-for="(item, index) in (current.micros[0] ? current.micros : ['-'])" v-html="item"
                    :class="index ? 'border-t-[0.5rem]' : ''"
                    class="text-center text-[2.25rem] bg-blue-300 text-red-700 border-arch-black py-4">
                </div>
            </div>

            <div class="flex border-arch-black border-t-0 border-[0.5rem] text-[2.5rem] font-bold rounded-b-lg">
                <div
                    class="text-white font-bold py-4 text-center flex items-center justify-center border-r-[0.5rem] border-arch-black px-6 pb-5 bg-yellow-700">
                    Logic
                </div>
                <div class="bg-arch-gray grow flex items-center px-6 text-white" v-html="current.logic || '-'"></div>
            </div>
        </div>

        <div class="mt-6">
            <div
                class="text-[3rem] font-bold py-4 bg-yellow-700 w-full text-center border-[0.5rem] border-arch-black border-b-0 rounded-t-lg">
                INPUT
            </div>

            <div></div>
            <input type="text" v-model="input" placeholder="Number between 0-255"
                class="w-full bg-arch-gray border-[0.5rem] border-arch-black focus:outline-none font-bold leading-[4rem] text-[2.25rem] text-arch-white px-6 py-4 whitespace-nowrap">


            <button @click="enter"
                class="text-[3rem] py-4 font-bold w-full text-center border-[0.5rem] border-arch-black border-t-0 rounded-b-lg overflow-hidden bg-arch-dark hover:bg-red-400">
                Enter
            </button>
        </div>
    </div>
</template>

<script setup>
const { data, addZero, clear, current, set, instruction, auto, breadAddr } = useArch()

const refs = ref([])

const clock = ref("1")

const input = ref("")

const interrupt = ref(false)

const t = computed(() => parseInt(data.value.sc.value, 2))

const d = computed(() => parseInt(data.value.ir.value.slice(1, 4), 2))

const b = computed(() => parseInt(data.value.ir.value.slice(4, 16), 2))

const enter = () => {
    if (data.value.fgi.value == "1") {
        alert("FGI flip flop has to be 0")
        return
    }

    if (parseInt(input.value) && parseInt(input.value) < 256 && parseInt(input.value) >= 0) {
        data.value.inpr.value = addZero(parseInt(input.value).toString(2), 8)
        data.value.inpr.changed = true
        data.value.inpr.default = false
        data.value.fgi.value = "1"
        data.value.fgi.changed = true
        data.value.fgi.default = false
    } else {
        alert("Input has to be a number between 0 and 255")
    }
}

const pulse = () => {
    clear()
    current.value = { logic: "", micros: [] }
    data.value.clk = true

    if (data.value.s.value == "0") return

    if (data.value.r.value == "1") {
        current.value.logic += "R"
        switch (t.value) {
            case 0:
                current.value.logic = "T<sub>0</sub>" + current.value.logic
                current.value.micros.push("AR &#10229; 0")
                current.value.micros.push("TR &#10229; PC")

                data.value.ar.value = "000000000000"
                data.value.ar.changed = true
                data.value.ar.default = false
                data.value.ar.clr = true

                data.value.tr.value = addZero(data.value.pc.value, 16)
                data.value.tr.changed = true
                data.value.tr.default = false
                data.value.tr.ld = true
                data.value.bus.value = "010"
                data.value.bus.changed = true
                data.value.bus.default = false
                break
            case 1:
                current.value.logic = "T<sub>1</sub>" + current.value.logic
                current.value.micros.push("M[AR] &#10229; TR")
                current.value.micros.push("PC &#10229; 0")


                if (data.value.memory.value.find((x) => x.address == parseInt(data.value.ar.value, 2))) data.value.memory.value.find((x) => x.address == parseInt(data.value.ar.value, 2)).value = data.value.tr.value
                else data.value.memory.value.push({ address: parseInt(data.value.ar.value, 2), value: data.value.tr.value })

                data.value.memory.write = true
                data.value.bus.value = "110"
                data.value.bus.changed = true
                data.value.bus.default = false

                data.value.pc.value = "000000000000"
                data.value.pc.changed = true
                data.value.pc.default = false
                data.value.pc.clr = true
                break
            case 2:
                current.value.logic = "T<sub>1</sub>" + current.value.logic
                current.value.micros.push("PC &#10229; PC + 1")
                current.value.micros.push("IEN &#10229; 0")
                current.value.micros.push("R &#10229; 0")
                current.value.micros.push("SC &#10229; 0")

                data.value.pc.value = addZero((parseInt(data.value.pc.value, 2) + 1).toString(2), 12)
                data.value.pc.changed = true
                data.value.pc.default = false
                data.value.pc.inr = true

                data.value.ien.value = "0"
                data.value.ien.changed = true
                data.value.ien.default = false

                data.value.r.value = "0"
                data.value.r.changed = true
                data.value.r.default = false

                data.value.sc.value = "000"
                data.value.sc.changed = true
                data.value.sc.default = false
                data.value.sc.clr = true
                return
        }
    } else {
        current.value.logic += "R'"
        switch (t.value) {
            case 0:
                instruction.value = data.value.pc.value
                refs.value[parseInt(instruction.value, 2)].scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth", })

                current.value.logic = "T<sub>0</sub>" + current.value.logic
                current.value.micros.push("AR &#10229; PC")

                data.value.ar.value = data.value.pc.value
                data.value.ar.ld = true
                data.value.ar.default = false
                data.value.ar.changed = true

                data.value.bus.value = "010"
                data.value.bus.changed = true
                data.value.bus.default = false
                break
            case 1:
                current.value.logic = "T<sub>1</sub>" + current.value.logic
                current.value.micros.push("IR &#10229; M[AR]")
                current.value.micros.push("PC &#10229; PC + 1")

                data.value.ir.value = (data.value.memory.value.find((x) => x.address == parseInt(data.value.ar.value, 2))?.value ?? "0000000000000000")
                data.value.ir.default = false
                data.value.ir.changed = true
                data.value.ir.ld = true
                data.value.memory.read = true
                data.value.bus.value = "111"
                data.value.bus.changed = true
                data.value.bus.default = false


                data.value.pc.value = addZero((parseInt(data.value.pc.value, 2) + 1).toString(2), 12)
                data.value.pc.default = false
                data.value.pc.changed = true
                data.value.pc.inr = true
                break
            case 2:
                current.value.logic = "T<sub>2</sub>" + current.value.logic
                current.value.micros.push("AR &#10229; IR(0-11)")
                current.value.micros.push("I &#10229; IR(15)")
                current.value.micros.push("D0...D7 &#10229; Decode IR(12-14)")

                data.value.ar.value = data.value.ir.value.slice(4, 16)
                data.value.ar.default = false
                data.value.ar.changed = true
                data.value.ar.ld = true
                data.value.bus.value = "101"
                data.value.bus.changed = true
                data.value.bus.default = false

                data.value.i.value = data.value.ir.value.slice(0, 1)
                data.value.i.default = false
                data.value.i.changed = true

                console.log(parseInt(data.value.ir.value.slice(1, 4), 2));

                switch (parseInt(data.value.ir.value.slice(1, 4), 2)) {
                    case 0:
                        data.value.decode.value = "00000001"
                        break
                    case 1:
                        data.value.decode.value = "00000010"
                        break
                    case 2:
                        data.value.decode.value = "00000100"
                        break
                    case 3:
                        data.value.decode.value = "00001000"
                        break
                    case 4:
                        data.value.decode.value = "00010000"
                        break
                    case 5:
                        data.value.decode.value = "00100000"
                        break
                    case 6:
                        data.value.decode.value = "01000000"
                        break
                    case 7:
                        data.value.decode.value = "10000000"
                        break
                    default:
                        data.value.decode.value = "00000000"
                }
                data.value.decode.default = false
                data.value.decode.changed = true

                break
            default:
                if (data.value.ien.value == "1" && (data.value.fgi.value == "1" || data.value.fgo.value == "1")) {
                    interrupt.value = true
                    data.value.r.value = "1"
                    data.value.r.changed = true
                    data.value.r.default = false
                }
                if (d.value == 7) {
                    current.value.logic += "D<sub>7</sub>"
                    if (data.value.i.value == '1') {
                        current.value.logic += "I"
                        if (t.value = 3) {
                            current.value.logic = "T<sub>3</sub>" + current.value.logic
                            switch (b.value) {
                                case 64:
                                    current.value.logic += "B<sub>6</sub>"
                                    current.value.micros.push("IEN &#10229; 0")

                                    data.value.ien.value = "0";
                                    data.value.ien.default = false
                                    data.value.ien.changed = true
                                    break
                                case 128:
                                    current.value.logic += "B<sub>7</sub>"
                                    current.value.micros.push("IEN &#10229; 1")

                                    data.value.ien.value = "1";
                                    data.value.ien.default = false
                                    data.value.ien.changed = true
                                    break
                                case 256:
                                    current.value.logic += "B<sub>8</sub>"
                                    current.value.micros.push("If (FGO = 1)")
                                    current.value.micros.push("Then (PC &#10229; PC + 1)")

                                    if (data.value.fgo.value == "1") {
                                        data.value.pc.value = addZero((parseInt(data.value.pc.value, 2) + 1).toString(2), 12)
                                        data.value.pc.default = false
                                        data.value.pc.changed = true
                                        data.value.pc.inr = true
                                    }
                                    break
                                case 512:
                                    current.value.logic += "B<sub>9</sub>"
                                    current.value.micros.push("If (FGI = 1)")
                                    current.value.micros.push("Then (PC &#10229; PC + 1)")

                                    if (data.value.fgi.value == "1") {
                                        data.value.pc.value = addZero((parseInt(data.value.pc.value, 2) + 1).toString(2), 12)
                                        data.value.pc.default = false
                                        data.value.pc.changed = true
                                        data.value.pc.inr = true
                                    }
                                    break
                                case 1024:
                                    current.value.logic += "B<sub>10</sub>"
                                    current.value.micros.push("OUTR &#10229; AC(0-7)")
                                    current.value.micros.push("FGO &#10229; 0")

                                    data.value.outr.value = data.value.ac.value.slice(8, 17)
                                    data.value.outr.default = false
                                    data.value.outr.changed = true
                                    data.value.outr.ld = true
                                    data.value.bus.value = '100'
                                    data.value.bus.changed = true
                                    data.value.bus.default = false

                                    data.value.fgo.value = "0"
                                    data.value.fgo.changed = true
                                    break
                                case 2048:
                                    current.value.logic += "B<sub>11</sub>"
                                    current.value.micros.push("AC(0-7) &#10229; INPR")
                                    current.value.micros.push("FGI &#10229; 0")

                                    data.value.ac.value = addZero(data.value.inpr.value, 16)
                                    data.value.ac.changed = true
                                    data.value.ac.default = false
                                    data.value.ac.ld = true

                                    data.value.alu = 5

                                    data.value.fgi.value = "0"
                                    data.value.fgi.changed = true
                                    break
                            }

                            current.value.micros.push("SC &#10229; 0")
                            data.value.sc.value = "000"
                            data.value.sc.default = false
                            data.value.sc.changed = true
                            data.value.sc.clr = true
                            return
                        }
                    }
                    else {
                        current.value.logic += "I'"
                        if (t.value = 3) {
                            current.value.logic = "T<sub>3</sub>" + current.value.logic
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
                                    current.value.micros.push("then (PC &#10229; PC + 1)")

                                    if (data.value.e.value == "0") {
                                        data.value.pc.value = addZero((parseInt(data.value.pc.value, 2) + 1).toString(2), 12)
                                        data.value.pc.default = false
                                        data.value.pc.changed = true
                                        data.value.pc.inr = true
                                    }
                                    break;
                                case 4:
                                    current.value.logic += "B<sub>2</sub>"
                                    current.value.micros.push("If (AC = 0)")
                                    current.value.micros.push("then (PC &#10229; PC + 1)")

                                    if (data.value.ac.value == "0000000000000000") {
                                        data.value.pc.value = addZero((parseInt(data.value.pc.value, 2) + 1).toString(2), 12)
                                        data.value.pc.default = false
                                        data.value.pc.changed = true
                                        data.value.pc.inr = true
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
                                        data.value.pc.inr = true
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
                                        data.value.pc.inr = true
                                    }
                                    break;
                                case 32:
                                    current.value.logic += "B<sub>5</sub>"
                                    current.value.micros.push("AC &#10229; AC + 1")

                                    data.value.ac.value = (parseInt(data.value.ac.value, 2) + 1).toString(2)
                                    if (data.value.ac.value.length == 17) {
                                        // data.value.e.value = data.value.ac.value.slice(0, 1)
                                        data.value.ac.value = data.value.ac.value.slice(1, 17)
                                        // data.value.e.default = false
                                        // data.value.e.changed = true
                                    }
                                    data.value.ac.value = addZero(data.value.ac.value, 16)
                                    data.value.ac.default = false
                                    data.value.ac.changed = true
                                    data.value.ac.inr = true
                                    break;
                                case 64:
                                    current.value.logic += "B<sub>6</sub>"
                                    current.value.micros.push("AC &#10229; shl AC")
                                    current.value.micros.push("AC(0) &#10229; E")
                                    current.value.micros.push("E &#10229; AC(15)")

                                    temp = data.value.e.value
                                    data.value.e.value = data.value.ac.value.slice(0, 1)
                                    data.value.ac.value = data.value.ac.value.slice(1, 16) + temp
                                    data.value.ac.ld = true
                                    data.value.alu = 7

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
                                    data.value.ac.ld = true
                                    data.value.alu = 6


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
                                    data.value.ac.ld = true
                                    data.value.alu = 3
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
                                    data.value.ac.clr = true
                                    break;
                                default:
                            }
                            current.value.micros.push("SC &#10229; 0")

                            data.value.sc.value = "000"
                            data.value.sc.default = false
                            data.value.sc.changed = true
                            data.value.sc.clr = true
                            return
                        }
                    }
                }
                else {
                    // current.value.logic += "D<sub>7</sub>'"
                    if (t.value == 3) {
                        current.value.logic = "T<sub>3</sub>" + current.value.logic
                        if (data.value.i.value == '1') {
                            current.value.logic += "I"
                            current.value.micros.push("AR &#10229; M[AR]")

                            data.value.ar.value = (data.value.memory.value.find((x) => x.address == parseInt(data.value.ar.value, 2))?.value.slice(4, 17) ?? "000000000000")
                            data.value.ar.default = false
                            data.value.ar.changed = true
                            data.value.ar.ld = true
                            data.value.memory.read = true
                            data.value.bus.value = '111'
                            data.value.bus.changed = true
                            data.value.bus.default = false
                        }
                        else {
                            current.value.logic += "I'"
                            current.value.micros.push("-")
                        }
                    }
                    else {
                        switch (d.value) {
                            case 0:
                                current.value.logic += "D<sub>0</sub>"
                                switch (t.value) {
                                    case 4:
                                        current.value.logic = "T<sub>4</sub>" + current.value.logic
                                        current.value.micros.push("DR &#10229; M[AR]")

                                        data.value.dr.value = (data.value.memory.value.find((x) => x.address == parseInt(data.value.ar.value, 2))?.value ?? "0000000000000000")
                                        data.value.dr.default = false
                                        data.value.dr.changed = true
                                        data.value.dr.ld = true
                                        data.value.memory.read = true
                                        data.value.bus.value = '111'
                                        data.value.bus.changed = true
                                        data.value.bus.default = false
                                        break;
                                    case 5:
                                        current.value.logic = "T<sub>5</sub>" + current.value.logic

                                        current.value.micros.push("AC &#10229; AC ^ DR")
                                        current.value.micros.push("SC &#10229; 0")

                                        data.value.ac.value = data.value.ac.value.split('').map((x, index) => (x == "1" && x == data.value.dr.value[index]) ? "1" : "0").join('')
                                        data.value.ac.default = false
                                        data.value.ac.changed = true
                                        data.value.ac.ld = true
                                        data.value.alu = 1

                                        data.value.sc.value = "000"
                                        data.value.sc.default = false
                                        data.value.sc.changed = true
                                        data.value.sc.clr = true
                                        return
                                }
                                break;
                            case 1:
                                current.value.logic += "D<sub>1</sub>"
                                switch (t.value) {
                                    case 4:
                                        current.value.logic = "T<sub>4</sub>" + current.value.logic
                                        current.value.micros.push("DR &#10229; M[AR]")

                                        data.value.dr.value = (data.value.memory.value.find((x) => x.address == parseInt(data.value.ar.value, 2))?.value ?? "0000000000000000")
                                        data.value.dr.default = false
                                        data.value.dr.changed = true
                                        data.value.dr.ld = true
                                        data.value.memory.read = true
                                        data.value.bus.value = '111'
                                        data.value.bus.changed = true
                                        data.value.bus.default = false

                                        break
                                    case 5:
                                        current.value.logic = "T<sub>5</sub>" + current.value.logic
                                        current.value.micros.push("AC &#10229; AC + DR")
                                        current.value.micros.push("E &#10229; C<sub> out</sub>")
                                        current.value.micros.push("SC &#10229; 0")



                                        data.value.ac.value = (parseInt(data.value.ac.value, 2) + parseInt(data.value.dr.value, 2)).toString(2)
                                        if (data.value.ac.value.length == 17) {
                                            data.value.e.value = data.value.ac.value.slice(0, 1)
                                            data.value.ac.value = data.value.ac.value.slice(1, 17)
                                            data.value.e.default = false
                                            data.value.e.changed = true
                                        }
                                        data.value.ac.value = addZero(data.value.ac.value, 16)

                                        data.value.ac.default = false
                                        data.value.ac.changed = true
                                        data.value.ac.ld = true
                                        data.value.alu = 2

                                        data.value.sc.value = "000"
                                        data.value.sc.default = false
                                        data.value.sc.changed = true
                                        data.value.sc.clr = true
                                        return
                                }
                                break;
                            case 2:
                                current.value.logic += "D<sub>2</sub>"
                                switch (t.value) {
                                    case 4:
                                        current.value.logic = "T<sub>4</sub>" + current.value.logic
                                        current.value.micros.push("DR &#10229; M[AR]")

                                        data.value.dr.value = (data.value.memory.value.find((x) => x.address == parseInt(data.value.ar.value, 2))?.value ?? "0000000000000000")
                                        data.value.dr.default = false
                                        data.value.dr.changed = true
                                        data.value.dr.ld = true
                                        data.value.memory.read = true
                                        data.value.bus.value = '111'
                                        data.value.bus.changed = true
                                        data.value.bus.default = false

                                        break
                                    case 5:
                                        current.value.logic = "T<sub>5</sub>" + current.value.logic
                                        current.value.micros.push("AC &#10229; DR")
                                        current.value.micros.push("SC &#10229; 0")

                                        data.value.ac.value = data.value.dr.value
                                        data.value.ac.default = false
                                        data.value.ac.changed = true
                                        data.value.ac.ld = true
                                        data.value.alu = 4

                                        data.value.sc.value = "000"
                                        data.value.sc.default = false
                                        data.value.sc.changed = true
                                        data.value.sc.clr = true
                                        return
                                }
                                break;
                            case 3:
                                current.value.logic += "D<sub>3</sub>"
                                switch (t.value) {
                                    case 4:
                                        current.value.logic = "T<sub>4</sub>" + current.value.logic
                                        current.value.micros.push("M[AR] &#10229; AC")
                                        current.value.micros.push("SC &#10229; 0")

                                        if (data.value.memory.value.find((x) => x.address == parseInt(data.value.ar.value, 2))) data.value.memory.value.find((x) => x.address == parseInt(data.value.ar.value, 2)).value = data.value.ac.value
                                        else data.value.memory.value.push({ address: parseInt(data.value.ar.value, 2), value: data.value.ac.value })

                                        data.value.memory.write = true
                                        data.value.bus.value = '100'
                                        data.value.bus.changed = true
                                        data.value.bus.default = false

                                        data.value.sc.value = "000"
                                        data.value.sc.default = false
                                        data.value.sc.changed = true
                                        data.value.sc.clr = true
                                        return
                                }
                                break;
                            case 4:
                                current.value.logic += "D<sub>4</sub>"
                                switch (t.value) {
                                    case 4:
                                        current.value.logic = "T<sub>4</sub>" + current.value.logic
                                        current.value.micros.push("PC &#10229; AR")
                                        current.value.micros.push("SC &#10229; 0")

                                        data.value.pc.value = data.value.ar.value
                                        data.value.pc.default = false
                                        data.value.pc.changed = true
                                        data.value.pc.ld = true

                                        data.value.bus.value = '001'
                                        data.value.bus.changed = true
                                        data.value.bus.default = false

                                        data.value.sc.value = "000"
                                        data.value.sc.default = false
                                        data.value.sc.changed = true
                                        data.value.sc.clr = true
                                        return
                                }
                                break;
                            case 5:
                                current.value.logic += "D<sub>5</sub>"
                                switch (t.value) {
                                    case 4:
                                        current.value.logic = "T<sub>4</sub>" + current.value.logic
                                        current.value.micros.push("M[AR] &#10229; PC")

                                        if (data.value.memory.value.find((x) => x.address == parseInt(data.value.ar.value, 2))) data.value.memory.value.find((x) => x.address == parseInt(data.value.ar.value, 2)).value = addZero(data.value.pc.value, 16)
                                        else data.value.memory.value.push({ address: parseInt(data.value.ar.value, 2), value: addZero(data.value.pc.value, 16) })

                                        data.value.memory.write = true
                                        data.value.bus.value = '010'
                                        data.value.bus.changed = true
                                        data.value.bus.default = false
                                        break
                                    case 5:
                                        current.value.logic = "T<sub>5</sub>" + current.value.logic
                                        current.value.micros.push("AR &#10229; AR + 1")
                                        current.value.micros.push("PC &#10229; AR")
                                        current.value.micros.push("SC &#10229; 0")

                                        data.value.ar.value = (parseInt(data.value.ar.value, 2) + 1).toString(2)
                                        if (data.value.ar.value.length == 13) {
                                            data.value.ar.value = data.value.ar.value.slice(1, 13)
                                        }
                                        data.value.ar.value = addZero(data.value.ar.value, 12)
                                        data.value.ar.default = false
                                        data.value.ar.changed = true
                                        data.value.ar.inr = true

                                        data.value.pc.value = data.value.ar.value
                                        data.value.pc.changed = true
                                        data.value.pc.default = false
                                        data.value.pc.ld = true
                                        data.value.bus.value = '001'
                                        data.value.bus.changed = true
                                        data.value.bus.default = false

                                        data.value.sc.value = "000"
                                        data.value.sc.default = false
                                        data.value.sc.changed = true
                                        data.value.sc.clr = true
                                        return
                                }
                                break;
                            case 6:
                                current.value.logic += "D<sub>6</sub>"
                                switch (t.value) {
                                    case 4:
                                        current.value.logic = "T<sub>4</sub>" + current.value.logic
                                        current.value.micros.push("DR &#10229; M[AR]")

                                        data.value.dr.value = (data.value.memory.value.find((x) => x.address == parseInt(data.value.ar.value, 2))?.value ?? "0000000000000000")
                                        data.value.dr.default = false
                                        data.value.dr.changed = true
                                        data.value.dr.ld = true
                                        data.value.memory.read = true
                                        data.value.bus.value = '111'
                                        data.value.bus.changed = true
                                        data.value.bus.default = false
                                        break
                                    case 5:
                                        current.value.logic = "T<sub>5</sub>" + current.value.logic
                                        current.value.micros.push("DR &#10229; DR + 1")

                                        data.value.dr.value = (parseInt(data.value.dr.value, 2) + 1).toString(2)
                                        if (data.value.dr.value.length == 17) {
                                            data.value.dr.value = data.value.dr.value.slice(1, 17)
                                        }
                                        data.value.dr.value = addZero(data.value.dr.value, 16)
                                        data.value.dr.default = false
                                        data.value.dr.changed = true
                                        data.value.dr.inr = true
                                        break
                                    case 6:
                                        current.value.logic = "T<sub>6</sub>" + current.value.logic
                                        current.value.micros.push("M[AR] &#10229; DR")
                                        current.value.micros.push("If (DR = 0)")
                                        current.value.micros.push("Then (PC &#10229; PC + 1)")
                                        current.value.micros.push("SC &#10229; 0")

                                        if (data.value.memory.value.find((x) => x.address == parseInt(data.value.ar.value, 2))) data.value.memory.value.find((x) => x.address == parseInt(data.value.ar.value, 2)).value = data.value.dr.value
                                        else data.value.memory.value.push({ address: parseInt(data.value.ar.value, 2), value: data.value.dr.value })

                                        data.value.memory.write = true
                                        data.value.bus.value = '011'
                                        data.value.bus.changed = true
                                        data.value.bus.default = false

                                        if (data.value.dr.value == "0000000000000000") {
                                            data.value.pc.value = (parseInt(data.value.pc.value, 2) + 1).toString(2)
                                            if (data.value.pc.value.length == 13) {
                                                data.value.pc.value = data.value.pc.value.slice(1, 13)
                                            }
                                            data.value.pc.value = addZero(data.value.pc.value, 12)
                                            data.value.pc.default = false
                                            data.value.pc.changed = true
                                            data.value.pc.inr = true
                                        }

                                        data.value.sc.value = "000"
                                        data.value.sc.default = false
                                        data.value.sc.changed = true
                                        data.value.sc.clr = true
                                        return
                                }
                                break;
                        }
                    }
                }
        }
    }

    data.value.sc.value = addZero((parseInt(data.value.sc.value, 2) + 1).toString(2), 3)
    if (parseInt(data.value.sc.value, 2) > 7) data.value.sc.value = '000'
    data.value.sc.changed = true
    data.value.sc.inr = true
}

let interval = null;

const autoAction = () => {
    if (interval) clearInterval(interval)
    if (auto.value) {
        auto.value = false
        clearInterval(interval)
    } else {
        auto.value = true
        interval = setInterval(() => {
            if (instruction.value && breadAddr.value[parseInt(instruction.value, 2)]) {
                auto.value = false
                clearInterval(interval);
            } else pulse()
        }, 1000 / parseFloat(clock.value))
    }
}

const addBreak = (addr) => {
    if (breadAddr.value[addr]) breadAddr.value[addr] = false
    else breadAddr.value[addr] = true
}

onUnmounted(() => {
    if (interval) clearInterval(interval)
})
</script>