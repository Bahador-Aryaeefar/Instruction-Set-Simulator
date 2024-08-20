<template>
    <div class="w-[40rem] fixed z-[2] h-[calc(100dvh-7rem)] left-0 top-[7rem] self-strech">
        <SideEditor :class="useArch().editor.value ? '' : 'hidden'"></SideEditor>
        <SideSimulator :class="useArch().editor.value ? 'hidden' : ''"></SideSimulator>
    </div>
    <div class="self-strech w-[40rem] shrink-0"></div>
</template>