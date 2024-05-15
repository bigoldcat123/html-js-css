<template>
    <div>
        <div @mousemove="showControls" @dblclick="enterOrExitFullScreen" ref="videoContainer"
            class="video-container video-container-normal-screen ">
            <video @click="startOrPasue" ref="vdo" :poster="poster">
                <source v-for="item in source" :src="item" type="video/mp4" />
                <track default v-for="item in traker" kind="subtitles" :src="item" srclang="es" label="Spanish" />
            </video>
            <div ref="videoControl" class="video-controls video-controls-normal-screen ">
                <Progress @jump-to="jumpTo" :total="total" :current="current"></Progress>
                <div class="videoControlComponentArea">
                    <div> <button id="btn">开始</button></div>
                    <div> 
                        <button id="btn">全片</button>
                        <button id="btn">全屏</button>
                    </div>
                </div>
                <slot name="control"></slot>
            </div>
            <div ref="videoHead" class="video-head">
                <slot name="head" :height="height"></slot>
            </div>
            <div v-show="isPause" @click="startOrPasue" class="Banner">
                <img src="/nicevideo/kaishi.png" style="height: 100%;width: 100%;" alt="">
            </div>
            <div v-show="isWaitting" @click="startOrPasue" class="Banner">
                <svg t="1715774477506" class="loading-icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="1573" width="50%" height="50%">
                    <path
                        d="M510.5 958.7c-60.4 0-119-11.8-174.2-35.2-53.3-22.5-101.1-54.8-142.2-95.9s-73.3-88.9-95.9-142.2C74.9 630.2 63 571.6 63 511.2s11.8-119 35.2-174.2c22.5-53.3 54.8-101.1 95.9-142.2S283 121.5 336.3 99c55.2-23.3 113.8-35.2 174.2-35.2 49.3 0 97.8 8 144.1 23.7 26.1 8.9 40.1 37.3 31.2 63.4-7.1 20.8-26.5 33.9-47.3 33.9-5.3 0-10.8-0.9-16.1-2.7-35.9-12.2-73.6-18.4-111.9-18.4-92.8 0-180 36.1-245.7 101.8C199.2 331.1 163 418.4 163 511.2c0 92.8 36.1 180 101.8 245.7 65.6 65.6 152.9 101.8 245.7 101.8s180-36.1 245.7-101.8C821.8 691.3 858 604 858 511.2c0-58.6-14.9-116.6-43-167.6-13.3-24.2-4.6-54.6 19.6-67.9 24.2-13.3 54.6-4.6 67.9 19.6 36.3 65.7 55.4 140.4 55.4 215.9 0 60.4-11.8 119-35.2 174.2-22.5 53.3-54.8 101.1-95.9 142.2-41.1 41.1-88.9 73.3-142.2 95.9-55.1 23.3-113.7 35.2-174.1 35.2z"
                        p-id="1574" fill="#cdcdcd"></path>
                </svg>
            </div>
        </div>

        <button @click="testc">s</button><input v-model="value">
    </div>

</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Progress from './Progress.vue'
const props = defineProps({
    height: {
        type: Number,
        default: 540
    },
    width: {
        type: Number,
        default: 960
    },
    poster: {
        type: String,
        required: true
    },
    source: {
        type: Array<string>,
        required: true
    },
    traker: {
        type: Array<string>,
        requierd: true
    }
})
const vdo = ref<HTMLVideoElement>()
const videoContainer = ref()
const videoControl = ref()
const videoHead = ref<HTMLDivElement>()
const total = ref(0)
const current = ref(0)
const isWaitting = ref(false)
const isPause = ref(true)
const value = ref(0)
const testc = () => {
    console.log(vdo.value!.currentTime = value.value);
}
function jumpTo(time: number) {
    current.value = time
    vdo.value!.currentTime = time

    if (vdo.value?.paused) {
        vdo.value.play()
        isPause.value = false
        startVideoTimer()
    }
}
let startOrPasueTimer: number[] = []
let videoTImer = -1
function videoFinished() {
    console.log('finished');
    isPause.value = true
}
function startVideoTimer() {
    if (videoTImer == -1) {
        videoTImer = setInterval(() => {
            // console.log(vdo.value?.currentTime + ' -> ' + vdo.value?.duration);
            total.value = Math.floor(vdo.value?.duration as number)
            current.value = Math.floor(vdo.value?.currentTime as number)
            if (vdo.value?.currentTime == vdo.value?.duration) {
                videoFinished()
                clearInterval(videoTImer)
                videoTImer = -1
            }
        }, 1000);
    }
}
function startOrPasue() {

    startVideoTimer()

    startOrPasueTimer.push(setTimeout(() => {
        if (vdo.value!.paused) {
            vdo.value!.play()
            isPause.value = false
        }
        else {
            clearInterval(videoTImer)
            videoTImer = -1
            vdo.value!.pause()
            isPause.value = true
            isWaitting.value = false
        }
    }, 340))
}
let timer: number = -1
let lastNode: any
function showControls(e: MouseEvent) {
    if (e.target != lastNode) {
        clearTimeout(timer)
        timer = -1
    }
    lastNode = e.target
    videoControl.value.style.opacity = '70%'
    videoHead.value!.style.opacity = '70%'
    if (videoControl.value.style.opacity == '0.7') {
        if (timer == -1) {
            timer = setTimeout(() => {
                if (videoControl.value?.contains(e.target)) {
                    videoControl.value.style.opacity = '70%'
                    videoHead.value!.style.opacity = '70%'
                    timer = -1
                } else {
                    videoControl.value.style.opacity = '0%'
                    videoHead.value!.style.opacity = '0%'
                    timer = -1
                }

            }, 2500);
        }
    }
}

function isFullScreen() { return document.fullscreenElement != null }
function enterOrExitFullScreen() {
    for (let index = 0; index < startOrPasueTimer.length; index++) {
        clearTimeout(startOrPasueTimer.pop())
    }
    if (isFullScreen()) {
        document.exitFullscreen()
    } else {
        videoContainer.value.requestFullscreen()
    }
}
onMounted(() => {
    total.value = vdo.value?.duration as number
    console.log(vdo.value?.duration);

    isPause.value = vdo.value!.paused
    const btn = document.querySelector('#btn')

    btn!.addEventListener('click', enterOrExitFullScreen)
    videoContainer.value.addEventListener('fullscreenchange', () => {
        if (isFullScreen()) {
            videoContainer.value.classList.remove('video-container-normal-screen')
            videoContainer.value.classList.add('video-container-full-screen')
            videoControl.value.classList.remove('video-controls-normal-screen')
            videoControl.value.classList.add('video-controls-full-screen')
            // TODO 控制按钮自动隐藏
        } else {
            videoContainer.value.classList.remove('video-container-full-screen')
            videoContainer.value.classList.add('video-container-normal-screen')
            videoControl.value.classList.remove('video-controls-full-screen')
            videoControl.value.classList.add('video-controls-normal-screen')
        }
    })
    vdo.value!.addEventListener("playing", () => {
        console.log("Video is no longer paused");
        isWaitting.value = false
    });

    // vdo.value!.addEventListener("seeking", () => {
    //     console.log("Video is seeking");
    // });

    vdo.value!.addEventListener("seeked", () => {
        console.log("Video is seeked");
        isWaitting.value = false
    });
    vdo.value?.addEventListener('waiting', () => {
        console.log('waitting');
        isWaitting.value = true
    })
    videoContainer.value.addEventListener('mouseenter', () => {
        videoControl.value.style.opacity = '0.7'
        videoHead.value!.style.opacity = '0.7'
    })
    videoContainer.value.addEventListener('mouseleave', () => {
        // videoControl.value.style.opacity = '0'
        // videoHead.value!.style.opacity = '0'
    })
})

</script>
<style scoped>
video {
    display: block;
    width: 100%;
    height: 100%;
}

.video-head {
    height: 40px;
    background-color: rgb(112, 112, 112);
    position: absolute;
    top: 0px;
    width: 100%;
    transition: all 0.3s ease;
}

.video-controls-normal-screen {

    height: 8%;
    top: calc(v-bind('props.height + "px"') - 8%);
}

.video-controls-full-screen {
    height: 4%;
    top: calc(100vh - 4%);
}

.video-controls {
    position: absolute;
    width: 100%;
    background-color: rgb(119, 119, 119);
    opacity: 70%;
    transition: all 0.3s ease;
    ;
}

.video-container {
    position: relative;
    background-color: rgb(0, 0, 0);
}

.video-container-normal-screen {
    width: v-bind('props.width + "px"');
    height: v-bind('props.height + "px"');
}

.video-container-full-screen {
    height: 100vh;
    width: 100vh;
}

.Banner {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    height: 16%;
    top: calc(50% - 8%);
    left: calc(50% - 5%);
    cursor: pointer;
}

.loading-icon {
    animation: round 1s linear infinite;
}

@keyframes round {
    0% {
        transform: rotate(0deg);
    }

    20% {
        transform: rotate(90deg);
    }

    80% {
        transform: rotate(270deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
.videoControlComponentArea {
    height: 100%;
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;
    justify-content: space-between;
}
</style>