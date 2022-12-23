<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col">
                <img :src="component.preImage"
                    :class= "['img-fluid', component.isRounded ? 'rounded-pill' : '', component.animation ? 'profile_animate' : '']"
                    id="showImg">
            </div>
            <div class="col">
                <div :class="['container pt-5', `mt-${component.margin}`]">
                    <h1 class="fw-bold" :style="{color : color === '#ffffff' ? '#000000' : '#ffffff'}">{{ component.title }}</h1>
                    <div class="text-warp mt-3" style="width: 33rem;">
                        <p class="fw-light" :style="{color : color === '#ffffff' ? '#000000' : '#ffffff'}">
                            {{ component.bio }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script defer>
export default {
    props: {
        color: String,
        component: {
            type: Object
        },
    },
}
</script>

<style lang="scss" scoped>

</style>