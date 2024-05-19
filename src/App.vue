<script setup lang="ts">
import TimerView from './view/TimerView.vue';
import HeighLight from './view/HeighLightView.vue';
import NiceVideo from '@/components/NiceVideo/index.vue'
import test from '@/components/test/index.vue'
// import { NiceVideo } from '../dist/index';
// import { NiceVideo } from 'my-vue-components-czh';
</script>

<template>
   <!-- <NiceVideo :poster="'/api/niceVideo/poster'" :source="[
      {
         title: '4K',
         src: '/api/niceVideo/heigh',
      },
      {
         title: '1080p',
         src: '/api/niceVideo/low',
      }
   ]" :traker="['/nicevideo/test.vtt']" style="margin: 0 auto;">
      <template #head="scopp">
         <button>呃呃呃{{ scopp.height }}</button>
      </template>
   </NiceVideo> -->
<test></test>
</template>

<style scoped></style>
