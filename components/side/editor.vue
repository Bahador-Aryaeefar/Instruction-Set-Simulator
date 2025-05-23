<template>
    <div class="border-r-[0.5rem] border-arch-black bg-arch-white p-4 h-full flex flex-col">
        <div class="bg-arch-white text-[3rem] font-bold">
            <button @click="assemble"
                class="block bg-arch-dark hover:bg-red-400 rounded-lg p-3 px-4 w-full text-[2.5rem] font-bold text-black mx-auto mt-4 border-[0.4rem] border-arch-black">Assemble</button>
        </div>
        <div class="flex justify-between mt-4 border-[0.4rem] border-arch-black rounded-lg">
            <div title="PC initial value in HEX"
                class="bg-yellow-700 px-4 py-1 text-white border-r-[0.4rem] border-arch-black flex items-center justify-center shrink-0 text-[2.25rem] font-bold">
                PC
            </div>
            <input type="text" class="grow focus:outline-none bg-arch-gray text-white text-[2.25rem] font-bold w-0 px-6"
                v-model="begin" @input="() => { examplesInput = null }">
            <div title="PC initial value in HEX"
                class="px-4 py-1 bg-yellow-700 text-white border-l-[0.4rem] border-arch-black flex items-center justify-center shrink-0 text-[2.25rem] font-bold">
                HEX
            </div>
        </div>
        <div class="flex justify-between mt-4 gap-4">
            <div @click="paste" title="Paste"
                class="bg-red-700 rounded-lg w-20 border-[0.4rem] border-arch-black flex items-center justify-center shrink-0 cursor-pointer">
                <img class="w-14" src="/icons/paste.svg" alt="paste">
            </div>
            <div @click="copy" title="copy"
                class="bg-red-700 rounded-lg w-20 border-[0.4rem] border-arch-black flex items-center justify-center shrink-0 cursor-pointer">
                <img class="w-14" src="/icons/copy.svg" alt="paste">
            </div>
            <UiSelectInput class="w-full" :items="[
                {
                    text: 'Example 1',
                    value: 0
                },
                {
                    text: 'Example 2',
                    value: 1
                },
                {
                    text: 'Example 3',
                    value: 2
                }
            ]" placeHolder="Custom" :value="examplesInput"
                @pick="(item) => { code = examples[item.value]; useArch().asm.value = code; begin = 0; examplesInput = item }">
            </UiSelectInput>
        </div>
        <div class="bg-arch-gray border-[0.5rem] border-arch-black overflow-auto h-full relative mt-4">
            <ul class="font-bold flex flex-col items-end absolute top-4 left-0 bg-arch-gray w-[5rem]">
                <li v-for="item, index in lineCount" class="leading-[4rem] text-[2.25rem] text-[#a9a9a9] text-right">{{
                    index + 1 }}.</li>
            </ul>
            <div class="gap-6 px-6 pl-[8rem] pt-4 h-full">
                <textarea v-model="code" style="resize: none;"
                    @input="(event) => { code = event.target.value; useArch().asm.value = code; examplesInput = null }"
                    :style="`height: ${lineCount.length * 4 + 3}rem; width: ${(maxLine + 1) * 2}rem;`"
                    class="uppercase min-h-[calc(100%-1rem)] leading-[4rem] min-w-full focus:outline-none bg-transparent text-arch-white text-[2.5rem] font-bold placeholder:text-[#a9a9a9]"
                    placeholder=""></textarea>
            </div>
        </div>
    </div>
</template>

<script setup>

const toast = useToast()

const examples = ref([
    `lda num1
add num2
sta num3
out
hlt
org 100
num1, dec 2
num2, dec 3
num3, dec 0`,
    `org 0
lda A
add B
sta C
out
hlt
org 100
A, dec 83
B, dec -23
C, dec 0
end`,
    `lda x
bsa or
hex 3af6
sta y
hlt
x, hex 7b95
y, hex 0
or, hex 0
cma
sta tmp
lda or I
cma
and tmp
cma
isz or
bun or I
tmp, hex 0
end`
])

const { examplesInput } = useArch()

const { addZero, current, begin } = useArch()
const code = ref(useArch().asm.value || examples.value[0])
const assemble = () => {
    code.value = code.value.toUpperCase()
    let labels = []
    let lines = code.value.split("\n")
    let num = 0
    let set = []
    let start = 0
    for (let [index, line] of lines.entries()) {
        line = line.split(" ")
        if (line.length > 3) {
            toast.addError(`line ${index + 1}: Too many arguments`)
            return
        }

        let label = ""
        if (line[0][line[0].length - 1] == ",") label = line.shift().slice(0, -1);
        line = {
            // label, 
            inst: line
        }

        if (line.inst.length > 3 || (line.inst.length == 3 && line.inst[line.inst.length - 1] != "I")) {
            toast.addError(`line ${index + 1}: Too many instructions`)
            return
        }
        else if (line.inst[0] == '') {
            toast.addError(`line ${index + 1}: No instructions`)
            return
        }

        if (line.inst[0] == "ORG") {
            if (line.inst[1]) {
                if (isNaN(parseInt(line.inst[1], 16))) {
                    toast.addError(`line ${index + 1}: '${line.inst[1]}' is not a HEX number`)
                    return
                }
                num = parseInt(line.inst[1], 16)
            }
            else {
                toast.addError("ORG needs a hex value")
                return
            }
        } else if (line.inst[0] == "END") {
            break
        } else if (line.inst[0] == "BGN") {
            start = num
        } else {
            line.num = num
            if (label) {
                labels.push({ label, num })
                line.label = label
            }
            line.line = index + 1
            set.push(line)
            num++
        }
    }

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
                    toast.addError(`line ${line.line}: '${line.inst[0]}' is not a valid instruction`)
                    return
            }
        }
        else {
            let num = null
            if (line.inst[0] == "DEC" || line.inst[0] == "HEX") {
                if (line.inst[2]) {
                    toast.addError(`line ${line.line}: too many instructions`)
                    return
                }
                if (line.inst[0] == "DEC" && !isNaN(parseInt(line.inst[1], 10))) {
                    num = (parseInt(line.inst[1], 10) >>> 0).toString(2)
                } else if (line.inst[0] == "HEX" && !isNaN(parseInt(line.inst[1], 16))) {
                    num = (parseInt(line.inst[1], 16) >>> 0).toString(2)
                } else {
                    toast.addError(`line ${line.line}: '${line.inst[0]} ${line.inst[1]}' is not a valid number`)
                    return
                }
                if (line.inst[1][0] == '-') num = num.slice(16)
                if (num.length > 16) {
                    toast.addError(`line ${line.line}: '${line.inst[1]}' is more than 'HEX FFFF'`)
                    return
                }
                while (num.length < 16) num = "0" + num
                line.code = num
            }

            else {
                if (labels.find(x => x.label == line.inst[1])) {
                    num = labels.find(x => x.label == line.inst[1]).num.toString(2)
                } else if (!isNaN(parseInt(line.inst[1], 16))) {
                    num = parseInt(line.inst[1], 16).toString(2)
                }
                else {
                    toast.addError(`line ${line.line}: '${line.inst[1]}' is neither a HEX number nor a label`)
                    return
                }
                if (num.length > 12) {
                    toast.addError(`line ${line.line}: '${line.inst[1]}' is more than 'HEX FFF'`)
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
                        toast.addError(`line ${line.line}: '${line.inst[0]}' is not a valid instruction`)
                        return
                }

                line.code = line.code + num
                line.code = + Boolean(line.inst[2]) + line.code
            }
        }
        set[index] = line
    }

    useArch().set.value = set
    useArch().setup(true)
}

const lineCount = computed(() => code.value.split("\n"))
const maxLine = computed(() => Math.max(...code.value.split("\n").map(x => x.length)))

const paste = async () => {
    try {
        code.value = await navigator.clipboard.readText();
        code.value = code.value.replace(/["]/gm, '').replace(/[\r\n]+/gm, '\n').toUpperCase()
        useArch().asm.value = code
        examplesInput.value = null
    } catch {
        toast.addError("Could not use the clipboard")
    }

}
const copy = async () => {
    try {
        code.value = code.value.replace(/["]/gm, '').replace(/[\r\n]+/gm, '\n').toUpperCase()
        await navigator.clipboard.writeText(code.value)
        alert("Code copied to clipboard")
    } catch {
        toast.addError("Could not copy to the clipboard")
    }

}

</script>
