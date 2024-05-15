<template>
    <div ref="progress" @mouseenter="showProgress" @click="jumpTO" class="progress-container">
        <div class="progress" >
        <div class="progressline" :style="{width:(current/total) * 100 + '%'}"  ></div></div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
const props = defineProps<{
    total: number,
    current:number
}>()
const emit = defineEmits<{
    (e:'jumpTo',time:number):void
}>()

const progress = ref<HTMLDivElement>()
const marginLeft = ref('')
function showProgress(e: MouseEvent) {
    e.offsetX  
}
function jumpTO(e: MouseEvent) {
    const offset = e.offsetX
    const t = progress.value as HTMLDivElement
    const w = t.clientWidth
    console.log((offset / w),(offset / w) * props.total);
    
    emit('jumpTo',(offset / w) * props.total)
}

</script>
<style scoped>
.progress-container {
    position: absolute;
    height: 15px;
    top: -15px;
    width: 100%;
    cursor: pointer;
}
.progress {
    position: absolute;
    height: 5px;
    top: 10px;
    width: 100%;
    background-color: aliceblue;
}
.progressline {
    width: 0%;
    height: 100%;
    background-color: rgb(255, 0, 0);
}
</style>