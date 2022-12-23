<template>
    <div>
        <div :class="['container-fluid mt-5 text-center p-3', component.theme]">
            <div class="d-flex justify-content-center align-items-center mb-2">
                <div v-for="icon in component.icons">
                    <a :href="'https://'+component.icons[0][icon]" :class="[component.theme]">
                        <i :class="['bi fs-3 me-3', `bi-${icon}`]"></i>
                    </a>
                </div>
            </div>
            <span>@{{ component.year }} Copyright reserved to {{ component.name }}</span>
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