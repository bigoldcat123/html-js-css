<template>
    <div>
        <div @mousemove="showControls" @dblclick="enterOrExitFullScreen" ref="videoContainer"
        class="video-container video-container-normal-screen ">
        <video @click="startOrPasue" ref="vdo" :poster="poster">
            <source v-for="item in source" :src="item" type="video/mp4" />
            <track default v-for="item in traker" kind="subtitles" :src="item" srclang="es" label="Spanish" />
        </video>
        <div ref="videoControl" class="video-controls video-controls-normal-screen ">
            <slot name="control"></slot>
        </div>
        <div ref="videoHead" class="video-head">
            <slot name="head" :height="height"></slot>
        </div>
        <div v-show="isPause" @click="startOrPasue" class="stopBanner">
            <img src="/nicevideo/kaishi.png" style="height: 100%;width: 100%;" alt="">
        </div>
    </div>

    <button @click="testc">s</button>
    </div>

</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
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

const isPause = ref(true)
const testc = () => {
    console.log(vdo.value!.currentTime = 0);

}
let startOrPasueTimer: number[] = []
let videoTImer = -1
function startOrPasue() {
    if (videoTImer == -1) {
        videoTImer = setInterval(() => {
            console.log(vdo.value?.currentTime + ' -> ' + vdo.value?.duration);
            if (vdo.value?.currentTime == vdo.value?.duration) {
                clearInterval(videoTImer)
                videoTImer = -1
            }
        }, 1000);
    }

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
    });
    videoContainer.value.addEventListener('mouseenter', () => {
        videoControl.value.style.display = 'block'
        videoHead.value!.style.display = 'block'
    })
    videoContainer.value.addEventListener('mouseleave', () => {
        videoControl.value.style.display = 'none'
        videoHead.value!.style.display = 'none'
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

.stopBanner {
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
</style>