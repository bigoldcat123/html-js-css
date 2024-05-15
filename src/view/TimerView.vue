<template>
    <div  class="container" >
        <div ref="container" class="main">
            <div class="item" v-for="item in 100">{{ item }}</div>
        </div>
        <div ref="timeline" class="timeLine">
            <img src="/final.png" style="height: 100%;" alt="">
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
const container = ref<HTMLDivElement>()
const timeline = ref<HTMLDivElement>()
let x = 0;
console.log(document.documentElement.clientHeight);
let lastScrollTop = 0
let scrolling = false
onMounted(() => {
    document.addEventListener('wheel', (event) => {

        if(scrolling){
            console.log("G");
            return
        }
        console.log("on going");
        
        scrolling = true
        var deltaY = event.deltaY;
        setTimeout(() => {
            scrolling = false
        },1000)
        if (deltaY > 0) {
            x++
            console.log('向下滚动');
            container.value!.style.transform = `translateY(-${x * document.documentElement.clientHeight}px)`
            timeline.value!.style.rotate=`-${x*90}deg`
        } else if (deltaY < 0) {
            x--
            console.log('向上滚动');
            container.value!.style.transform = `translateY(-${x * document.documentElement.clientHeight}px)`
            timeline.value!.style.rotate=`-${x*90}deg`
        } else {
            console.log('未滚动');
        }
    })
    container.value?.addEventListener('mousedown',(e) => {
        container.value!.style.transition = 'none'
        const start = e.clientY
        let moving = 0
        console.log(start);
        
        const m = (e:any) => {
             moving = e.clientY - start
            console.log(moving);
            container.value!.style.transform = `translateY(-${x * document.documentElement.clientHeight + moving}px)`
        }
        container.value?.addEventListener('mousemove',m)
        container.value?.addEventListener('mouseup',(e) => {
            if(moving > document.documentElement.clientHeight / 2) {
                x++
                container.value!.style.transform = `translateY(-${x * document.documentElement.clientHeight}px)`
            }else {
                container.value!.style.transform = `translateY(-${x * document.documentElement.clientHeight}px)`
            }
            moving = 0
            container.value!.style.transition = 'all 1s'
            container.value?.removeEventListener('mousemove',m)
        })
    })
})
</script>
<style scoped>
.container {
    /* display: flex; */
    width: 60%;
    margin: 0 auto;
    height: 100%;
    overflow: hidden;
}

.timeLine {
    --size: 700px;
    --half-size: 350px;
    position: fixed;
    width: var(--size);
    height: var(--size);
    background-color: aliceblue;
    top: calc(50% - var(--half-size));
    left: calc(100% - var(--half-size));
    border-radius: var(--size);
    transition: all 1s;
}

.main {
    transition: all 1s;
}

.item {
    height: 100vh;
}
</style>