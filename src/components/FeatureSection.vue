<script setup>
import { useMotion } from '@vueuse/motion'
import { ref } from 'vue';
const leftDiv = ref()
const rightDiv = ref()

useMotion(leftDiv, {
    initial: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0
    }
})
useMotion(rightDiv, {
    initial: {
        opacity: 0,
        x: 100
    },
    visible: {
        opacity: 1,
        x: 0
    }
})
</script>
<template>
    <div class="container mt-5 pb-5 pt-5 mb-5" id="features">
        <div class="row">
            <div class="col-lg-6" ref="leftDiv">
                <h1 class="fw-semibold mb-3">What We Can Provide?</h1>
                <h5 class="lh-base fw-normal">
                    We will provide everything you will want for a beautiful portfolio website. You can freely choose
                    any components you want like Navbar, Carousel (Slider), Forms, Accordion, Dropdowns, Cards,
                    Buttons...etc <br>
                    We still can't provide the grid system but it will be availabled in future updates
                </h5>
            </div>
            <div class="col-lg-6" ref="rightDiv">
                <div class="mb-3 mt-3">
                    <label for="exampleFormControlInput1" class="form-label">A Sample Form Input</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1"
                        placeholder="This is a sample input">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>