<template>
    <component :color="color" v-for="(component, index) in components" :key="index" :component="component"
        v-bind:is="component.componentName">
    </component>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import NavBarTemplate from './template-components/NavBarTemplate.vue'
import AccordionTemplate from './template-components/AccordionTemplate.vue'
import HeaderTemplate from './template-components/HeaderTemplate.vue'
import FooterTemplate from './template-components/FooterTemplate.vue'
import SliderTemplate from './template-components/SliderTemplate.vue'
import CardTemplate from './template-components/CardTemplate.vue'
export default {
    props: {
        color: String,
    },
    components: {
        NavBarTemplate, AccordionTemplate, HeaderTemplate, FooterTemplate, SliderTemplate, CardTemplate
    },
    computed: {
        ...mapGetters(['components', 'componentsNames', 'componentCount'])
    },
}
</script>

<style lang="scss" scoped>

</style>