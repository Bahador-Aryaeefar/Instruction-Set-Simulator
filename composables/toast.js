export const useToast = () => {
    const errors = useState("errors", () => [])

    const addError = (error) => {
        errors.value.push(error)
    }

    const clearErrors = () => {
        errors.value = []
    }

    return { addError, clearErrors, errors }
}