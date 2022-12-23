<script setup>
import { useMotion } from '@vueuse/motion'
import { ref } from 'vue';
const addButton = ref()
useMotion(addButton, {
    initial: {
        opacity: 0,
        scale: 0.8,
    },
    visibleOnce: {
        opacity: 1,
        scale: 1,
    }
})
</script>
<template>
    <div :style="{backgroundColor: color}">
        <ComponentList :color="color" />
        <div ref="addButton" class="bg-primary text-center bg-gradient p-5 m-3 rounded-4 shadow cursor"
            data-bs-toggle="modal" data-bs-target="#exampleModal">
            <button class="bg-transparent border-0 link-light">
                <h1 class="fw-semibold text-white">Add New Component</h1>
                <i class="fs-1 fw-semibold bi bi-plus-circle"></i>
            </button>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Choose one of the components</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <router-link to="/edit/nav">
                            <button class="btn btn-primary m-3" data-bs-dismiss="modal">Nav Bar Component</button>
                        </router-link>
                        <router-link to="/edit/header">
                            <button class="btn btn-primary m-3" data-bs-dismiss="modal">Header Component</button>
                        </router-link>
                        <router-link to="/edit/slider">
                            <button class="btn btn-primary m-3" data-bs-dismiss="modal">Slider Component</button>
                        </router-link>
                        <router-link to="/edit/card">
                            <button class="btn btn-primary m-3" data-bs-dismiss="modal">Card Component</button>
                        </router-link>
                        <router-link to="/edit/accordion">
                            <button class="btn btn-primary m-3" data-bs-dismiss="modal">FAQ Component</button>
                        </router-link>
                        <router-link to="/edit/footer">
                            <button class="btn btn-primary m-3" data-bs-dismiss="modal">Footer Component</button>
                        </router-link>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import ComponentList from './ComponentList.vue'
import { MotionDirective } from '@vueuse/motion'
export default {
    props: {
        color: String
    },
    components: {
        ComponentList
    },
    computed: {
        ...mapGetters(['components', 'componentsNames', 'componentCount'])
    },
    methods: {
        ...mapActions(['delete']),
        delComponent(component) {
            this.delete(component)
        }
    },
}
</script>
<style lang="scss" scoped>

</style>