<template>
    <div
        class="border-r-[0.5rem] border-arch-black bg-arch-white p-4  self-strech w-[40rem] fixed z-[2] h-[calc(100dvh-7rem)] left-0 top-[7rem] flex flex-col">
        <div class="py-4 bg-arch-white text-[3rem] font-bold">
            <div class="w-fit mx-auto">Code Editor</div>
            <button @click="assemble"
                class="block bg-arch-dark rounded-lg p-2 px-4 text-[2.25rem] font-bold text-white w-fit mx-auto mt-3 border-[0.4rem] border-arch-black">Assemble</button>
        </div>
        <div class="bg-arch-gray border-[0.5rem] border-arch-black overflow-auto h-full relative">
            <ul class="font-bold flex flex-col items-end absolute top-4 left-0 bg-arch-gray w-[5rem]">
                <li v-for="item, index in lineCount" class="leading-[4rem] text-[2.25rem] text-[#a9a9a9] text-right">{{
                    index + 1 }}.</li>
            </ul>
            <div class="gap-6 px-6 pl-[8rem] pt-4 h-full">
                <textarea v-model="code" style="resize: none;"
                    :style="`height: ${lineCount.length * 4 + 3}rem; width: ${(maxLine + 1) * 2}rem;`"
                    class="uppercase min-h-[calc(100%-1rem)] leading-[4rem] min-w-full focus:outline-none bg-transparent text-arch-white text-[2.5rem] font-bold placeholder:text-[#a9a9a9]"
                    placeholder=""></textarea>
            </div>
        </div>
    </div>
    <div class="self-strech w-[40rem] shrink-0"></div>
</template>

<script setup>
const code = ref("")
const assemble = () => {
    code.value = code.value.toUpperCase()
    let labels = []
    let lines = code.value.split("\n")
    let num = 0
    let set = []
    for (let [index, line] of lines.entries()) {
        line = line.split(" ")
        if (line.length > 3) {
            alert(`line ${index + 1}: Too many arguments`)
            return
        }

        let label = ""
        if (line[0][line[0].length - 1] == ",") label = line.shift().slice(0, -1);
        line = {
            // label, 
            inst: line
        }

        if (line.inst.length > 3 || (line.inst.length == 3 && line.inst[line.inst.length - 1] != "I")) {
            alert(`line ${index + 1}: Too many instructions`)
            return
        }
        else if (line.inst[0] == '') {
            alert(`line ${index + 1}: No instructions`)
            return
        }

        if (line.inst[0] == "ORG") {
            if (line.inst[1]) {
                if (isNaN(parseInt(line.inst[1], 16))) {
                    alert(`line ${index + 1}: '${line.inst[1]}' is not a HEX number`)
                    return
                }
                num = parseInt(line.inst[1], 16)
            }
            else {
                alert("ORG needs a hex value")
                return
            }
        }
        else {
            line.num = num
            set.push(line)
            if(label) labels.push({ label, num })
            line.line = index + 1
            num++
        }
    }
    console.log(set);
    console.log(labels);
    for (let [index, line] of set.entries()) {
        if (line.inst.length == 1) {
            switch (line.inst[0]) {
                // register ops
                case "CLA":
                    line.code = "0111100000000000"
                    break
                case "CLE":
                    line.code = "0111010000000000"
                    break
                case "CMA":
                    line.code = "0111001000000000"
                    break
                case "CME":
                    line.code = "0111000100000000"
                    break
                case "CIR":
                    line.code = "0111000010000000"
                    break
                case "CIL":
                    line.code = "0111000001000000"
                    break
                case "INC":
                    line.code = "0111000000100000"
                    break
                case "SPA":
                    line.code = "0111000000010000"
                    break
                case "SNA":
                    line.code = "0111000000001000"
                    break
                case "SZA":
                    line.code = "0111000000000100"
                    break
                case "SZE":
                    line.code = "0111000000000010"
                    break
                case "HLT":
                    line.code = "0111000000000001"
                    break
                // I/O ops
                case "INP":
                    line.code = "1111100000000000"
                    break
                case "OUT":
                    line.code = "1111010000000000"
                    break
                case "SKI":
                    line.code = "1111001000000000"
                    break
                case "SKO":
                    line.code = "1111000100000000"
                    break
                case "ION":
                    line.code = "1111000010000000"
                    break
                case "IOF":
                    line.code = "1111000001000000"
                    break
                default:
                    alert(`line ${line.line}: '${line.inst[0]}' is not a valid instruction`)
                    return
            }
        }
        else {
            let num = null
            if (line.inst[0] == "DEC" || line.inst[0] == "HEX") {
                if (line.inst[2]) {
                    alert(`line ${line.line}: too many instructions`)
                    return
                }
                if (line.inst[0] == "DEC" && !isNaN(parseInt(line.inst[1], 10))) {
                    num = parseInt(line.inst[1], 10).toString(2)
                } else if (line.inst[0] == "HEX" && !isNaN(parseInt(line.inst[1], 16))) {
                    num = parseInt(line.inst[1], 16).toString(2)
                } else {
                    alert(`line ${line.line}: '${line.inst[0]} ${line.inst[1]}' is not a valid number`)
                    return
                }

                if (num.length > 16) {
                    alert(`line ${line.line}: '${line.inst[1]}' is more than 'HEX FFFF'`)
                    return
                }
                while (num.length < 16) num = "0" + num
                line.code = num
            }

            else {
                if (!isNaN(parseInt(line.inst[1], 16))) {
                    num = parseInt(line.inst[1], 16).toString(2)
                } else if (labels.find(x => x.label == line.inst[1])) {
                    num = labels.find(x => x.label == line.inst[1]).num.toString(2)
                } else {
                    alert(`line ${line.line}: '${line.inst[1]}' is neither a HEX number nor a label`)
                    return
                }
                if (num.length > 12) {
                    alert(`line ${line.line}: '${line.inst[1]}' is more than 'HEX FFF'`)
                    return
                }
                while (num.length < 12) num = "0" + num

                switch (line.inst[0]) {
                    case "AND":
                        line.code = "000"
                        break;
                    case "ADD":
                        line.code = "001"
                        break;
                    case "LDA":
                        line.code = "010"
                        break;
                    case "STA":
                        line.code = "011"
                        break;
                    case "BUN":
                        line.code = "100"
                        break;
                    case "BSA":
                        line.code = "101"
                        break;
                    case "ISZ":
                        line.code = "110"
                        break;
                    default:
                        alert(`line ${line.line}: '${line.inst[0]}' is not a valid instruction`)
                        return
                }

                line.code = line.code + num
                line.code = + Boolean(line.inst[2]) + line.code
            }
        }
        set[index] = line
    }
    console.log(set);
}

const lineCount = computed(() => code.value.split("\n"))
const maxLine = computed(() => Math.max(...code.value.split("\n").map(x => x.length)))
</script>