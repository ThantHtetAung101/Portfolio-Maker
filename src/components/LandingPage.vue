<script setup>
import { useMotion } from '@vueuse/motion'
import { ref } from 'vue';
const header = ref()
const feature = ref()
const faq = ref()
const contact = ref()
function dynamicMotion(component) {
    useMotion(component, {
        initial: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0
        }
    })
}
dynamicMotion(header)
dynamicMotion(faq)
dynamicMotion(contact)
</script>
<template>
    <div class="bg-light gradientbg overflow-hidden">
        <NavBar />
        <Header ref="header" />
        <FeatureSection ref="feature" />
        <FaQ ref="faq" />
        <ContactUs ref="contact" />
    </div>
</template>
  
<script>
import NavBar from './NavBar.vue';
import Header from './Header.vue';
import FaQ from './FaQ.vue';
import FeatureSection from './FeatureSection.vue';
import ContactUs from './ContactUs.vue';
export default {
    components: { NavBar, Header, FeatureSection, FaQ, ContactUs }
}
</script>
  
<style>

</style>