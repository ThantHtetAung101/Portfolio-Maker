<template>
  <router-view :color="color" />
  <FixedMenu v-if="$route.name === 'live'" />
  <div v-if="$route.name === 'live'">
    <input type="color" v-model="color"
      class="m-5 position-fixed bottom-0 start-0 translate-end form-control form-control-color" id="exampleColorInput"
      title="Choose website background theme color">
    <button class="btn btn-dark btn-lg m-5 position-fixed bottom-0 end-0 translate-end" type="button"
      data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i
        class="bi bi-layers-half"></i></button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title mt-3" id="offcanvasRightLabel">Your Component Lists</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="list-group">
          <li class="list-group-item" v-if="componentCount === 0">There's no component right now</li>
          <li class="list-group-item d-flex" :key="index" v-for="(component, index) in Object.keys(components)">
            {{ component }}
            <button @click="delComponent(component)" class="btn-danger btn btn-sm text-white ms-auto"><i
                class="bi bi-trash"></i></button>
          </li>
        </ul>
        <router-link to="/download">
          <button class="btn btn-dark m-5 position-fixed bottom-0 end-0 translate-end">Download Your
            Website</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/js/bootstrap'
import { mapGetters, mapActions } from 'vuex'
import ComponentList from './components/ComponentList.vue'
export default {
  data() {
    return {
      color: "#ffffff"
    }
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
    },
  },
}
</script>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
@import "bootstrap-icons/font/bootstrap-icons.css";
@import "../src/main.css";
</style>