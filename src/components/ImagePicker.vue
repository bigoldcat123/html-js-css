<template>
    <div class="container_imagepicker">
        <div ref="imgfather" class="imagecontent_imagepicker">
            <img draggable="false" ref="img" class="img_imagepicker" src="a.png" />
        </div>
        <div class="btns_imagepicker">
            <div><input ref="ipt" v-model="imagerate" type="range"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
const img = ref<HTMLImageElement>()
const imgfather = ref<HTMLDivElement>()
const ipt = ref<HTMLInputElement>()
const imagerate = ref(0)
watch(imagerate,(value,old) => {
    console.log(value);
    const v = value - old as number
    let height =  img.value?.clientHeight as number
    height = height + v*3
    console.log(height);
    
    img.value!.style.height = `${height}px`
})
onMounted(() => {
    img.value!.addEventListener('mousedown', (e) => {

        const transform = img.value!.style.transform
        const x_y = transform.substring(transform.indexOf('(') + 1, transform.indexOf(')')).split(',')
        const x = x_y[0] ? Number.parseInt(x_y[0].replace('px', "")) : 0
        const y = x_y[1] ? Number.parseInt(x_y[1].replace('px', "")) : 0
        const startX = e.clientX
        const startY = e.clientY
        const imgheight = img.value!.clientHeight
        const imgwidht = img.value!.clientWidth
        const imagefatherheight = imgfather.value!.clientHeight
        const imagefatherwidth = imgfather.value!.clientWidth
        const mousemove = (ee: any) => {
            let offsetX = x + ee.clientX - startX
            let offsetY = y + ee.clientY - startY
            // 父级div的宽度-图片的宽度
            offsetX = Math.max(offsetX, imagefatherwidth - imgwidht)
            offsetX = Math.min(offsetX, 0)
            offsetY = Math.min(0, offsetY)
            // 父级div的高度-图片的高度
            offsetY = Math.max(offsetY, imagefatherheight - imgheight)
            img.value!.style.transform = `translate(${offsetX}px,${offsetY}px)`
        }
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', mousemove)
        })
        document.addEventListener('mousemove', mousemove)

    })
})

</script>
<style scoped>
.container_imagepicker {
    width: 500px;
    background-color: antiquewhite;
    height: 500px
}

.imagecontent_imagepicker {
    height: 400px;
    width: 500px;
    overflow: hidden;
}

.img_imagepicker {
    height: 600px;
    cursor: grab;
}

.btns_imagepicker {}
</style>