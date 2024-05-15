<script setup lang="ts">
import TimerView from './view/TimerView.vue';
import HeighLight from './view/HeighLightView.vue';
import NiceVideo from '@/components/NiceVideo/index.vue'
</script>

<template>
   <NiceVideo :poster="'/nicevideo/poster.jpg'" :source="['/nicevideo/test.mp4']" :traker="['/nicevideo/test.vtt']"
   style="margin: 0 auto;" >
      <template #control>
         <div style="display: flex;">
            <div> <button id="bt2n">开始</button></div>
            <div> <button id="btn">开始</button></div>
         </div>
      </template>
      <template #head="scopp">
         <button>呃呃呃{{ scopp.height }}</button>
      </template>
   </NiceVideo>
</template>

<style scoped></style>
