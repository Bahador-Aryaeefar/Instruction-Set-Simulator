export const useArch = () => {
    const editor = useState("editor", () => true)
    const asm = useState("asm", () => "")
    const set = useState("set", () => [])
    const data = useState("data", () => ({
        s: { value: "0", changed: false, default: true },
        i: { value: "0", changed: false, default: true },
        r: { value: "0", changed: false, default: true },
        ien: { value: "0", changed: false, default: true },
        fgi: { value: "0", changed: false, default: true },
        fgo: { value: "0", changed: false, default: true },
        memory: [],
        ar: { value: "000000000000", changed: false, default: true },
        pc: { value: "000000000000", changed: false, default: true },
        dr: { value: "0000000000000000", changed: false, default: true },
        alu: 0,
        e: { value: "0", changed: false, default: true },
        ac: { value: "0000000000000000", changed: false, default: true },
        inpr: { value: "00000000", changed: false, default: true },
        ir: { value: "0000000000000000", changed: false, default: true },
        tr: { value: "0000000000000000", changed: false, default: true },
        outr: { value: "00000000", changed: false, default: true },
        sc: { value: "000", changed: false, default: true }
    }))

    const reset = () => {
        data.value = {
            s: { value: "0", changed: false, default: true },
            i: { value: "0", changed: false, default: true },
            r: { value: "0", changed: false, default: true },
            ien: { value: "0", changed: false, default: true },
            fgi: { value: "0", changed: false, default: true },
            fgo: { value: "0", changed: false, default: true },
            memory: [],
            ar: { value: "000000000000", changed: false, default: true },
            pc: { value: "000000000000", changed: false, default: true },
            dr: { value: "0000000000000000", changed: false, default: true },
            alu: 0,
            e: { value: "0", changed: false, default: true },
            ac: { value: "0000000000000000", changed: false, default: true },
            inpr: { value: "00000000", changed: false, default: true },
            ir: { value: "0000000000000000", changed: false, default: true },
            tr: { value: "0000000000000000", changed: false, default: true },
            outr: { value: "00000000", changed: false, default: true },
            sc: { value: "000", changed: false, default: true }
        }
    }

    const bitColor = (bit) => {
        if (bit.changed) return "bg-red-700"
        else if (bit.default) return "bg-gray-500"
        else return "bg-arch-dark"
    }

    const addZero = (num, length) => {
        while (num.length < length) { num = "0" + num }
        return num
    }

    return { set, editor, asm, data, reset, bitColor, addZero }
}