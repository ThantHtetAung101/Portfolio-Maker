<template>
    <div class="ms-3 w-50">
        <h3 class="fw-semibold mt-5" :style="{ color: color === '#ffffff' ? '#000000' : '#ffffff' }">{{ component.heading }}</h3>
        <div class="accordion mt-3" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button
                        :class="['accordion-button', component.theme.find(i => i.includes('bg') && i.includes('link'))]"
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                        aria-controls="collapseOne">
                        {{ component.title }}
                    </button>
                </h2>
                <div id="collapseOne"
                    :class="['accordion-collapse collapse show', component.theme.find(i => i.includes('bg'))]"
                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p :class="[component.theme.find(i => i.includes('text'))]">{{ component.desc }}</p>
                    </div>
                </div>
            </div>
            <div v-for="i in component.componentCount - 1">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            :data-bs-target="(component.hashId[i - 1])" aria-expanded="false"
                            :aria-controls="component.nameId[i - 1]">
                            {{ this.component['title' + i] }}
                        </button>
                    </h2>
                    <div :id="component.nameId[i - 1]"
                        :class="['accordion-collapse collapse show', component.theme.find(i => i.includes('bg'))]"
                        :aria-labelledby="component.id[i - 1]" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p :class="[component.theme.find(i => i.includes('text'))]">{{ component['desc' + i] }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        color: String,
        component: {
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
