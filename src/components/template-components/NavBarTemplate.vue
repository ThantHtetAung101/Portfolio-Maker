<template>
    <nav :class="['navbar navbar-expand-lg p-3', component.theme]">
        <div class="container-fluid">
            <a class="navbar-brand cursor">{{ component.brandName }}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul :class="['navbar-nav', component.position]">
                    <li class="nav-item">
                        <a class="nav-link cursor" :href="'#'+component.LinkOne">{{ component.LinkOneName }}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link cursor" :href="'#'+component.LinkTwo">{{ component.LinkTwoName }}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link cursor" :href="'#'+component.LinkThree">{{ component.LinkThreeName }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
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