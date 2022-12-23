import { createApp } from 'vue'
import { createStore } from 'vuex'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'
import Component from './store/modules/component'

const store = createStore({
    modules: {Component}
})

createApp(App).use(router).use(store).use(MotionPlugin).mount('#app')
