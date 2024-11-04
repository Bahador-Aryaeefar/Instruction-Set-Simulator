<!-- a component for a select input -->
<template>
    <div @focusout="blurInput"
        class="text-base flex justify-between items-center relative cursor-pointer focus:outline-none group font-bold text-white"
        :tabindex="isInput ? '-1' : '0'">
        <div @click.stop="isOpen = !isOpen">
            <input @focus="isOpen = true" @focusout="blurInput" v-model="selectInput" @input.prevent="inputValue"
                :placeholder="placeHolder" :disabled="!isInput"
                class="pointer-events-none cursor-pointer text-[2rem] px-4 bg-red-700 rounded-lg focus:outline-none h-20 w-full placeholder:text-white pb-1 curspr-pointer border-[0.4rem] border-arch-black"
                type="text">

            <img class="absolute right-3 top-0 bottom-0 my-auto transition-all duration-[250ms] pointer-events-none w-16 z-[1]"
                :class="(isOpen) ? 'rotate-180' : ''" src="/icons/down.svg" alt="down">
        </div>
        <ul v-if="isOpen && items[0]" tabindex="0" @click.stop=""
            class="select z-[2] max-h-[15rem] rounded-[0.5rem] overflow-y-auto overflow-x-hidden bg-red-700 FirefoxScroll absolute top-[5.2rem] ltr:left-0 rtl:right-0 min-w-full border-[0.4rem] border-arch-black"
            style="box-shadow: 0px 16px 49px rgba(46, 33, 51, 0.12);">

            <template v-for="(item, index) in items" :key="index">
                <hr v-if="index != 0" class="mx-1 border-[0] border-transparent rounded-full bg-arch-black h-1">

                <li @click="pick(item)" ref="view"
                    class="h-[4rem] hover:bg-red-600 active:bg-crs-active px-4 flex items-center cursor-pointer text-[2rem]"
                    :class="index == listOn ? 'bg-[#F0F1F2]' : ''">{{ item.text }}
                </li>
            </template>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
    // default value of input
    value: [Number, String],
    // list of options to show
    items: Object,
    // title of input
    title: String,
    // placeholder of the input
    placeHolder: String,
    // is the input field of select active or not
    // if true you can input custom text in the input
    // if false you can only pick value from the list
    isInput: Boolean,
    // if strict mode is true the custom input is cleared after input goes out of focus
    // so you can search for items by typing in input field but you have to pick an item from list
    strict: Boolean,
})

// emit over when listOn is bigger than options length
// emit under when listOn is negative
// over and under reset listOn value to 0
// emit down when "down" key is pressed while the select input is in focus
// emit up when "up" key is pressed while the select input is in focus
// emit enter when "enter" key is pressed while the select input is in focus
// emit pick when an item is picked
const emit = defineEmits(['pick'])

// v-model for input
const selectInput = ref(props?.value?.text)
// whether the options drop down is open or not
const isOpen = ref(false)
// the previously picked value
const picked = ref(props.value)

// when an item is picked
const pick = (item) => {
    // set v-model
    selectInput.value = item.text
    // store as previously picked value 
    picked.value = item
    // close drop down
    isOpen.value = false
    // emit value to parent
    emit('pick', item)
}

// handle typing input
const inputValue = (event) => {
    // v-model doesn't change in real-time in mobile phones so do it manually
    selectInput.value = event.target.value
    // if we strict mode is true return
    if (props.strict) return
    // else pick the v-model value
    emit('pick', selectInput.value)
}

// when input goes out of focus
const blurInput = (event) => {
    // items inside select input are given the class "select"
    // so if the focused input doesn't have class "select" it is outside the input
    if (!event.relatedTarget || !event.relatedTarget.classList.contains('select')) {
        // close drop down
        isOpen.value = false;
        // if strict mode is true return to previous picked value
        if (props.strict) pick(picked.value)
    }
}

// if default value changes from parent
watch(() => props.value, (newvalue, oldvalue) => {
    // set v-model and previously picked value
    selectInput.value = props?.value?.text
    picked.value = props.value
})

</script>

<style scoped>
.FirefoxScroll {
    scrollbar-color: #A8AEB5 transparent;
    scrollbar-width: thin;
}

/* width */
::-webkit-scrollbar {
    width: 0.188rem;
    height: 0;
}

/* Track */
::-webkit-scrollbar-track {
    background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #A8AEB5;
    border-radius: 300px;
}

::-webkit-scrollbar-button:end:increment {
    height: 0.25rem;
    display: block;
    background: transparent;
}

::-webkit-scrollbar-button:start:increment {
    height: 0.25rem;
    display: block;
    background: transparent;
}
</style>