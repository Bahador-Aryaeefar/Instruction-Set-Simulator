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
        sc: { value: "000", changed: false, default: true, inr: false, clr: false },
        bus: { value: "000", changed: false, default: true }
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
            bus: { value: "000", changed: false, default: true }
        }
    }

    const clear = () => {
        data.value = {
            s: { ...data.value.s, changed: false },
            i: { ...data.value.i, changed: false },
            r: { ...data.value.r, changed: false },
            ien: { ...data.value.ien, changed: false },
            fgi: { ...data.value.fgi, changed: false },
            fgo: { ...data.value.fgo, changed: false },
            memory: { ...data.value.memory, read: false, write: false },
            ar: { ...data.value.ar, changed: false, ld: false, inr: false, clr: false },
            pc: { ...data.value.pc, changed: false, ld: false, inr: false, clr: false },
            dr: { ...data.value.dr, changed: false, ld: false, inr: false, clr: false },
            alu: 0,
            e: { ...data.value.e, changed: false },
            ac: { ...data.value.ac, changed: false, ld: false, inr: false, clr: false },
            inpr: { ...data.value.inpr, changed: false },
            ir: { ...data.value.ir, changed: false, ld: false, inr: false, clr: false },
            tr: { ...data.value.tr, changed: false, ld: false, inr: false, clr: false },
            outr: { ...data.value.outr, changed: false, ld: false },
            sc: { ...data.value.sc, changed: false, inr: false, clr: false },
            bus: { ...data.value.bus, changed: false }
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

    const getColor = (sig) => {
        if (sig) return "#b91c1c"
        else return "#C5C6C7"
    }

    const addZero = (num, length) => {
        while (num.length < length) { num = "0" + num }
        return num
    }

    return { set, editor, asm, data, reset, bitColor, addZero, sigColor, textColor, getColor, busColor, clear }
}