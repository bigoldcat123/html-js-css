<template>
    <div @mousemove="showControls" @dblclick="enterOrExitFullScreen" ref="videoContainer"
        class="video-container video-container-normal-screen ">
        <video @click="startOrPasue" ref="vdo" :poster="poster" preload="metadata" :src="videoSourceSrc">
            <track default v-for="item in traker" kind="subtitles" :src="item" srclang="es" label="Spanish" />
        </video>
        <div ref="videoControl" class="video-controls video-controls-normal-screen ">
            <Progress @jump-to="jumpTo" :total="total" :current="current"></Progress>
            <div class="videoControlComponentArea">
                <div class="control-side">
                    <div @click="startOrPasue" class="control-btn">
                        <svg v-if="isPause" t="1715781479214" class="video-control-icon" viewBox="0 0 1024 1024"
                            version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4459" width="200" height="200">
                            <path
                                d="M161.2 839.9v-654c0-56.1 60.7-91.1 109.3-63.1l566.3 327c48.6 28 48.6 98.1 0 126.2L270.4 903c-48.5 28-109.2-7.1-109.2-63.1z"
                                fill="#cdcdcd" p-id="4460"></path>
                        </svg>
                        <svg v-else t="1715781525064" class="video-control-icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="5548" width="200" height="200">
                            <path
                                d="M128 106.858667C128 94.976 137.621333 85.333333 149.12 85.333333h85.76c11.648 0 21.12 9.6 21.12 21.525334V917.12c0 11.882667-9.621333 21.525333-21.12 21.525333H149.12A21.290667 21.290667 0 0 1 128 917.141333V106.88z m640 0c0-11.882667 9.621333-21.525333 21.12-21.525334h85.76c11.648 0 21.12 9.6 21.12 21.525334V917.12c0 11.882667-9.621333 21.525333-21.12 21.525333h-85.76a21.290667 21.290667 0 0 1-21.12-21.525333V106.88z"
                                fill="#bfbfbf" p-id="5549"></path>
                        </svg>
                    </div>
                    <div style="margin-right: 10px;">
                        <span>{{ Math.floor(current) }} / {{ Math.floor(total) ? Math.floor(total) : 0 }}</span>
                    </div>
                        <VolumButton @change-volum="changeVolum" class="control-btn"></VolumButton>
                </div>
                <div class="control-side">
                    <div style="margin-right: 20px;position: relative;">
                        <div @mouseenter="tryToCloseQualityContolTimer" @mouseleave="tryToCloseQualityControl"
                            v-show="showQualityControl" class="rate-control"
                            :style="{ top: -props.source.length * 33 - 20 + 'px' }">
                            <div @click="changeVideoQuality(index)" class="rate-control-option"
                                :style="index == currentQualityIndex ? { backgroundColor: 'rgb(43, 43, 43)' } : {}"
                                v-for="item, index in props.source">{{ item.title }}</div>
                        </div>
                        <div @mouseenter="toShowQualityControl" @mouseleave="tryToCloseQualityControl"
                            style="cursor: pointer;">清晰度</div>
                    </div>

                    <div style="margin-right: 20px;position: relative;">
                        <div @mouseenter="tryToCloseRateContolTimer" @mouseleave="tryToCloseRateControl"
                            v-show="showRateControl" class="rate-control" :style="{ top: -rates.length * 33 - 20 + 'px' }">
                            <div @click="changeVideoRate(index)" class="rate-control-option"
                                :style="item.using ? { backgroundColor: 'rgb(43, 43, 43)' } : {}" v-for="item, index in rates">
                                {{ item.rate + ' X' }}</div>
                        </div>
                        <div @mouseenter="toShowRateControl" @mouseleave="tryToCloseRateControl"
                            style="cursor: pointer;">倍速</div>
                    </div>


                    <div @click="enterOrExitFullScreen" class="control-btn"> <svg t="1715780085335"
                            class="video-control-icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="3087" width="200" height="200">
                            <path
                                d="M460.8 940.8h-320l262.4-262.4c12.8-12.8 12.8-38.4 0-51.2-12.8-19.2-38.4-19.2-57.6 0l-262.4 262.4v-345.6c0-19.2-19.2-38.4-38.4-38.4s-38.4 19.2-38.4 38.4v364.8c0 51.2 38.4 115.2 96 115.2h358.4c19.2 0 38.4-19.2 38.4-38.4 0-25.6-19.2-44.8-38.4-44.8zM940.8 6.4h-377.6c-19.2 0-38.4 19.2-38.4 38.4s19.2 38.4 38.4 38.4h320l-268.8 262.4c-12.8 12.8-12.8 38.4 0 57.6 19.2 12.8 44.8 12.8 57.6 0l262.4-262.4v320c0 19.2 19.2 38.4 38.4 38.4s38.4-19.2 38.4-38.4v-352c6.4-64-25.6-102.4-70.4-102.4z"
                                fill="#cdcdcd" p-id="3088"></path>
                        </svg>
                    </div>
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

</template>
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import Progress from './Progress.vue'
import VolumButton from './VolumButton.vue'
type QualitySource = {
    src: string,
    title: string,
}
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
        type: Array<QualitySource>,
        required: true
    },
    traker: {
        type: Array<string>,
        requierd: true
    }
})
const rates = ref([
    {
        rate: 2,
        using: false
    }, {
        rate: 1.75,
        using: false
    }, {
        rate: 1.5,
        using: false
    }, {
        rate: 1,
        using: true
    }, {
        rate: 0.75,
        using: false
    }, {
        rate: 0.5,
        using: false
    }
])
let currentRateIndex = 3

let currentQualityIndex = ref(0)

const videoSourceSrc = ref(props.source[currentQualityIndex.value].src)

watch(currentQualityIndex,() => {
    vdo.value!.src = props.source[currentQualityIndex.value].src
    vdo.value!.currentTime = current.value
    vdo.value?.play()
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
const showRateControl = ref(false)
const showQualityControl = ref(false)

function changeVolum (volum:number) {
    vdo.value!.volume = volum / 100
}
let closeQualityContorlTimer: any = -1
function tryToCloseQualityContolTimer() {
    if (closeQualityContorlTimer != -1) {
        clearTimeout(closeQualityContorlTimer)
        closeQualityContorlTimer = -1
    }
}
function tryToCloseQualityControl() {
    closeQualityContorlTimer = setTimeout(() => {
        console.log(
            'close'
        );

        showQualityControl.value = false
        closeQualityContorlTimer = -1
    }, 1000);
}
function changeVideoQuality(index: number) {
    showQualityControl.value = false
    currentQualityIndex.value = index

    setTimeout(() => {
        tryToCloseQualityContolTimer()
    }, 200);
}
function toShowQualityControl () {
    tryToCloseQualityContolTimer()
    showQualityControl.value = true
}
function changeVideoRate(index: number) {
    console.log('changeVideoRate', index);

    showRateControl.value = false
    rates.value[index].using = true
    rates.value[currentRateIndex].using = false
    currentRateIndex = index
    vdo.value!.playbackRate = rates.value[index].rate
    setTimeout(() => {
        tryToCloseRateContolTimer()
    }, 200);
}
let closeRateContorlTimer: any = -1
function tryToCloseRateContolTimer() {

    if (closeRateContorlTimer != -1) {
        console.log('clear timer ');
        clearTimeout(closeRateContorlTimer)
        closeRateContorlTimer = -1
    }
}
function tryToCloseRateControl() {
    console.log('tryToCloseRateControl');

    closeRateContorlTimer = setTimeout(() => {
        console.log('really closeed ');
        showRateControl.value = false
        closeRateContorlTimer = -1
    }, 1000);
}
function toShowRateControl () {
    tryToCloseRateContolTimer()
    showRateControl.value = true
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
let startOrPasueTimer: any[] = []
let videoTImer: any = -1
function videoFinished() {
    console.log('finished');
    isPause.value = true
}
function startVideoTimer() {
    if (videoTImer == -1) {
        videoTImer = setInterval(() => {
            // console.log(vdo.value?.currentTime + ' -> ' + vdo.value?.duration);
            total.value = vdo.value?.duration as number
            current.value = vdo.value?.currentTime as number
            if (vdo.value?.currentTime == vdo.value?.duration) {
                videoFinished()
                clearInterval(videoTImer)
                videoTImer = -1
            }
        }, 300);
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
let timer: any = -1
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
    // vdo.value!.playbackRate = 2
    vdo.value!.volume = 0.5
    isPause.value = vdo.value!.paused
    videoContainer.value.addEventListener('fullscreenchange', () => {
        if (isFullScreen()) {
            videoContainer.value.classList.remove('video-container-normal-screen')
            videoContainer.value.classList.add('video-container-full-screen')
            videoControl.value.classList.remove('video-controls-normal-screen')
            videoControl.value.classList.add('video-controls-full-screen')
        } else {
            videoContainer.value.classList.remove('video-container-full-screen')
            videoContainer.value.classList.add('video-container-normal-screen')
            videoControl.value.classList.remove('video-controls-full-screen')
            videoControl.value.classList.add('video-controls-normal-screen')
        }
    })
    vdo.value!.addEventListener("playing", () => {
        isWaitting.value = false
        if(isPause.value) {
            startOrPasue()
        }
    });

    vdo.value!.addEventListener("seeked", () => {
        isWaitting.value = false
    });

    vdo.value?.addEventListener('waiting', () => {
        isWaitting.value = true
    })
    vdo.value?.addEventListener('loadedmetadata', () => {
        total.value = Math.floor(vdo.value?.duration as number)
    })
    videoContainer.value.addEventListener('mouseenter', () => {
        videoControl.value.style.opacity = '0.7'
        videoHead.value!.style.opacity = '0.7'
    })
    videoContainer.value.addEventListener('mouseleave', () => {
        // TODO remove this when completed the full screen
        videoControl.value.style.opacity = '0'
        videoHead.value!.style.opacity = '0'
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
    color: aliceblue;
}

.video-control-icon {
    height: 100%;
    width: 100%;
}

.control-btn {
    height: 80%;
    width: 24px;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
}

.control-side {
    height: 70%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
}

.rate-control {
    position: absolute;
    width: 70px;
    background-color: rgb(105, 105, 105);
    /* top: -220px; */
    left: -20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.rate-control-option {
    height: 33px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.rate-control-option:hover {
    background-color: rgb(43, 43, 43);

}
</style>