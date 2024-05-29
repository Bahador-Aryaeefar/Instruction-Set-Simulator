<template>
    <div class="w-[40rem] fixed z-[2] h-[calc(100dvh-7rem)] left-0 top-[7rem] self-strech">
        <SideEditor v-if="useArch().editor.value"></SideEditor>
        <SideSimulator v-else></SideSimulator>
    </div>
    <div class="self-strech w-[40rem] shrink-0"></div>
</template>