<template>
    <div ref="progress" @mouseleave="leave" @mouseenter="showProgress" @click="jumpTO" class="progress-container">
        <div class="progress">
            <div ref="progressline" class="progressline" :style="{ width: (current / total) * 100 + '%' }"></div>
            <div v-show="showHead" class="progressHead"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
const props = defineProps<{
    total: number,
    current: number
}>()
const emit = defineEmits<{
    (e: 'jumpTo', time: number): void
}>()
const progressline = ref<HTMLDivElement>()
const showHead = ref(false)
const progress = ref<HTMLDivElement>()
const marginLeft = ref('')
function showProgress(e: MouseEvent) {
    e.offsetX
    showHead.value = true
}
function leave (e:MouseEvent) {
    showHead.value = false
}
function jumpTO(e: MouseEvent) {
    const offset = e.offsetX
    const t = progress.value as HTMLDivElement
    const w = t.clientWidth
    console.log((offset / w), (offset / w) * props.total);
    emit('jumpTo', ((offset / w) * props.total))
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
    display: flex;
    align-items: center;
}

.progressline {
    width: 0%;
    height: 100%;
    background-color: rgb(255, 0, 0);
    transition: all 1s linear;
}
.progressHead {
    height: 200%;
    width: 10px;
    background-color: rgb(255, 0, 0);
    border-radius: 3px;
}
</style>