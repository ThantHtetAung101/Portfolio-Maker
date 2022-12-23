<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-6 col-12">
                <h3 class="fw-semibold">For UI</h3>
                <div class="form-floating mb-3">
                    <input type="text" v-model="component.heading" class="form-control" id="floatingInput0"
                        placeholder="name@example.com">
                    <label for="floatingInput0">Heading</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" v-model="component.title" class="form-control" id="floatingInput"
                        placeholder="name@example.com">
                    <label for="floatingInput">Title</label>
                </div>
                <div class="form-floating">
                    <textarea class="form-control" v-model="component.desc" placeholder="Type your description here"
                        id="floatingTextarea2" style="height: 100px"></textarea>
                    <label for="floatingTextarea2">Description</label>
                </div>
                <div v-for="i in count">
                    <div class="form-floating mb-3 mt-3">
                        <input type="text" v-model="component['title' + i]" class="form-control" id="floatingInput"
                            placeholder="name@example.com">
                        <label for="floatingInput">Title</label>
                    </div>
                    <div class="form-floating">
                        <textarea class="form-control" v-model="component['desc' + i]"
                            placeholder="Type your description here" id="floatingTextarea2"
                            style="height: 100px"></textarea>
                        <label for="floatingTextarea2">Description</label>
                    </div>
                </div>
                <h3 class="fw-semibold mt-3">Accordion Theme</h3>
                <h5 class="fw-normal mb-3">Select A Theme For Your Accordion</h5>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" @change="themeChange" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                        value="bg-light">
                    <label class="form-check-label" for="inlineRadio1">Light</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" @change="themeChange" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                        value="text-white link-light bg-dark">
                    <label class="form-check-label" for="inlineRadio2">Dark</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" @change="themeChange" type="radio" name="inlineRadioOptions" id="inlineRadio3"
                        value="bg-primary text-white">
                    <label class="form-check-label" for="inlineRadio3">Purple</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" @change="themeChange" type="radio" name="inlineRadioOptions" id="inlineRadio4"
                        value="bg-danger text-white">
                    <label class="form-check-label" for="inlineRadio4">Red</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" @change="themeChange" type="radio" name="inlineRadioOptions" id="inlineRadio5"
                        value="bg-success text-white">
                    <label class="form-check-label" for="inlineRadio5">Green</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" @change="themeChange" type="radio" name="inlineRadioOptions" id="inlineRadio6"
                        value="bg-warning">
                    <label class="form-check-label" for="inlineRadio6">Yellow</label>
                </div>
                <button @click="addAccordion" class="btn btn-outline-primary mt-3">Add new accordion</button>
                <button @click="createComponent" class="btn btn-primary mt-3 ms-3">Create Component</button>
            </div>
            <div class="col-lg-6 col-12">
                <h3 class="fw-semibold">Preview</h3>
                <h3 class="fw-semibold">{{ component.heading }}</h3>
                <div class="accordion mt-3" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button :class="['accordion-button',component.theme.find(i => i.includes('bg') && i.includes('link'))]" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                {{ component.title }}
                            </button>
                        </h2>
                        <div id="collapseOne" :class="['accordion-collapse collapse show', component.theme.find(i => i.includes('bg'))]" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p :class="[component.theme.find(i => i.includes('text'))]">{{ component.desc }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" v-for="i in count">
                        <h2 class="accordion-header">
                            <button :class="['accordion-button',component.theme.find(i => i.includes('bg') && i.includes('link'))]" type="button" data-bs-toggle="collapse"
                                :data-bs-target="(hashId[i - 1])" aria-expanded="true" :aria-controls="id[i - 1]">
                                {{ component['title' + i] }}
                            </button>
                        </h2>
                        <div :id="id[i - 1]" :class="['accordion-collapse collapse show', component.theme.find(i => i.includes('bg'))]" :aria-labelledby="id[i - 1]"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p :class="[component.theme.find(i => i.includes('text'))]">{{ component['desc' + i] }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            count: 0,
            id: [],
            hashId: [],
            component: {
                id: null,
                componentName: "AccordionTemplate",
                heading: null,
                title: null,
                desc: null,
                theme: [],
                id: [],
                hashId: [],
                nameId: [],
                componentCount: 1,
            }
        }
    },
    methods: {
        themeChange(event) {
            this.component.theme = event.target.value.split(" ");
        },
        addAccordion() {
            this.count = this.count + 1
            let newTitle = "title" + this.count
            let newDesc = "desc" + this.count
            let titleObj = {}
            let descObj = {}
            titleObj[newTitle] = null
            descObj[newDesc] = null
            this.component.titleObj
            this.component.descObj
            let idItem = "heading" + this.count
            let hashIdItem = "#heading" + this.count
            this.component.nameId = [...this.component.nameId, idItem]
            this.component.id = [...this.component.id, idItem]
            this.component.hashId = [...this.component.hashId, hashIdItem]
            this.id.push(idItem)
            this.hashId.push(hashIdItem)
            this.component.componentCount++
        },
        ...mapActions(['newComponent']),
        createComponent() {
            const data = {
                component: this.component
            }
            this.newComponent(data)
            this.$router.push({ name: 'live' })
        }
    },
}
</script>

<style lang="scss" scoped>

</style>