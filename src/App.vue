<script setup lang="ts">
import TimerView from './view/TimerView.vue';
import HeighLight from './view/HeighLightView.vue';
import NiceVideo from '@/components/NiceVideo/index.vue'
// import { NiceVideo } from '../dist/index';
// import { NiceVideo } from 'my-vue-components-czh';
</script>

<template>
   <NiceVideo :poster="'/nicevideo/poster.jpg'" :source="[
      {
         title: '4K',
         src: '/api/heigh',
      },
      {
         title: '1080',
         src: '/api/low',
      }
   ]" :traker="['/nicevideo/test.vtt']" style="margin: 0 auto;">
      <template #head="scopp">
         <button>呃呃呃{{ scopp.height }}</button>
      </template>
   </NiceVideo>
</template>

<style scoped></style>
