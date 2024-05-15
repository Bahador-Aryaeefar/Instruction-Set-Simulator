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
        memory: { value: [], read: false, write: false },
        ar: { value: "000000000000", changed: false, default: true, ld: false, inr: false, clr: false },
        pc: { value: "000000000000", changed: false, default: true, ld: false, inr: false, clr: false },
        dr: { value: "0000000000000000", changed: false, default: true, ld: false, inr: false, clr: false },
        alu: 0,
        e: { value: "0", changed: false, default: true },
        ac: { value: "0000000000000000", changed: false, default: true, ld: false, inr: false, clr: false },
        inpr: { value: "00000000", changed: false, default: true },
        ir: { value: "0000000000000000", changed: false, default: true, ld: false, inr: false, clr: false },
        tr: { value: "0000000000000000", changed: false, default: true, ld: false, inr: false, clr: false },
        outr: { value: "00000000", changed: false, default: true, ld: false },
        sc: { value: "000", changed: false, default: true, ld: false, inr: false, clr: false },
        bus: {value: "000", changed: false, default: true}
    }))

    const reset = () => {
        data.value = {
            s: { value: "0", changed: false, default: true },
            i: { value: "0", changed: false, default: true },
            r: { value: "0", changed: false, default: true },
            ien: { value: "0", changed: false, default: true },
            fgi: { value: "0", changed: false, default: true },
            fgo: { value: "0", changed: false, default: true },
            memory: { value: [], read: false, write: false },
            ar: { value: "000000000000", changed: false, default: true, ld: false, inr: false, clr: false },
            pc: { value: "000000000000", changed: false, default: true, ld: false, inr: false, clr: false },
            dr: { value: "0000000000000000", changed: false, default: true, ld: false, inr: false, clr: false },
            alu: 0,
            e: { value: "0", changed: false, default: true },
            ac: { value: "0000000000000000", changed: false, default: true, ld: false, inr: false, clr: false },
            inpr: { value: "00000000", changed: false, default: true },
            ir: { value: "0000000000000000", changed: false, default: true, ld: false, inr: false, clr: false },
            tr: { value: "0000000000000000", changed: false, default: true, ld: false, inr: false, clr: false },
            outr: { value: "00000000", changed: false, default: true, ld: false },
            sc: { value: "000", changed: false, default: true, ld: false, inr: false, clr: false },
            bus: {value: "000", changed: false, default: true}
        }
    }

    const bitColor = (bit) => {
        if (bit.changed) return "bg-red-700"
        else if (bit.default) return "bg-gray-500"
        else return "bg-arch-dark"
    }

    const sigColor = (sig) => {
        if (sig) return "bg-red-700"
        else return "bg-arch-white"
    }

    const textColor = (sig) => {
        if (sig) return "text-red-700"
        else return "text-arch-white"
    }

    const busColor = (sig) => {
        if (sig) return "text-red-700"
        else return "text-arch-black"
    }

    const getColor =  (sig) => {
        if (sig) return "#b91c1c"
        else return "#C5C6C7"
    }

    const addZero = (num, length) => {
        while (num.length < length) { num = "0" + num }
        return num
    }

    return { set, editor, asm, data, reset, bitColor, addZero, sigColor, textColor, getColor, busColor }
}