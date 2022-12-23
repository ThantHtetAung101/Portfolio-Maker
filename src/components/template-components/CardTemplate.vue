<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-4">
                <div class="card mb-3" style="width: 18rem;">
                    <img :src="component.preImages[0]" v-if="component.isImage === true" class="card-img-top" alt="...">
                    <div :class="['card-body', component.theme]">
                        <h5 class="card-title">{{ component.title }}</h5>
                        <p class="card-text">{{ component.desc }}</p>
                        <a href="#" :class="['btn', component.btnTheme]">{{ component.btn }}</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4" v-for="i in component.count">
                <div class="card mb-3" style="width: 18rem;">
                    <img :src="component.preImages[i]" v-if="component['isImage' + i] === true" class="card-img-top"
                        alt="...">
                    <div :class="['card-body', component['theme' + i]]">
                        <h5 class="card-title">{{ component['title' + i] }}</h5>
                        <p class="card-text">{{ component['desc' + i] }}</p>
                        <a href="#" :class="['btn', component['btnTheme' + i]]">{{ component['btn' + i] }}</a>
                    </div>
                </div>
            </div>
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