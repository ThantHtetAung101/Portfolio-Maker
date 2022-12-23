<template>
    <div class="container d-flex justify-content-center align-items-center w-50 text-center">
        <div :id="'carousel'+component.rand" class="carousel slide mt-5" style="overflow: hidden;" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="200">
                    <img :src="component.preImages[0]" class="d-block w-100">
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img :src="component.preImages[1]" class="d-block img-fluid">
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img :src="component.preImages[2]" class="d-block img-fluid">
                </div>
                <div v-for="i in component.count">
                    <div class="carousel-item" data-bs-interval="2000">
                        <img :src="component.preImages[i + 2]" class="d-block img-fluid">
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" :data-bs-target="'#carousel'+component.rand"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" :data-bs-target="'#carousel'+component.rand"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        component: {
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>

</style>