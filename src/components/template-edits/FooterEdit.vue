<template>
    <div>
        <h3 class="fw-semibold p-3">Preview</h3>
        <div :class="['container-fluid text-center p-3', component.theme]">
            <div class="d-flex justify-content-center align-items-center mb-2">
                <i v-for="icon in component.icons" :class="['bi fs-3 me-3', `bi-${icon}`]"></i>
            </div>
            <span>@{{ component.year }} Copyright reserved to {{ component.name }}</span>
        </div>

        <h3 class="fw-semibold p-3">UI Edit</h3>
        <div class="container-fluid p-3">
            <div class="row">
                <div class="col">
                    <div class="form-floating">
                        <input type="text" pattern="\d*" maxlength="4" v-model="component.year" class="form-control">
                        <label for="">Year</label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-floating">
                        <input type="text" v-model="component.name" class="form-control">
                        <label for="">Name</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-2">
                    <div class="form-check p-3 ms-4">
                        <input class="form-check-input" type="checkbox" v-on:change="checked" v-model="component.icons"
                            value="facebook" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Facebook Icon
                        </label>
                    </div>
                    <div class="ms-3 form-floating" v-if="component.icons.includes('facebook')">
                        <input type="text" v-model="component.icons[0]['facebook']" class="form-control">
                        <label for="">Facebook Link</label>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="form-check p-3 ms-4">
                        <input class="form-check-input" type="checkbox" v-on:change="checked" v-model="component.icons"
                            value="github" id="flexCheckDefault1">
                        <label class="form-check-label" for="flexCheckDefault1">
                            Github Icon
                        </label>
                    </div>
                    <div class="ms-3 form-floating" v-if="component.icons.includes('github')">
                        <input type="text" v-model="component.icons[0]['github']" class="form-control">
                        <label for="">Github Link</label>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="form-check p-3 ms-4">
                        <input class="form-check-input" type="checkbox" v-on:change="checked" v-model="component.icons"
                            value="linkedin" id="flexCheckDefault2">
                        <label class="form-check-label" for="flexCheckDefault2">
                            Linkedin Icon
                        </label>
                    </div>
                    <div class="ms-3 form-floating" v-if="component.icons.includes('linkedin')">
                        <input type="text" v-model="component.icons[0]['linkedin']" class="form-control">
                        <label for="">Linkedin Link</label>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="form-check p-3 ms-4">
                        <input class="form-check-input" type="checkbox" v-on:change="checked" v-model="component.icons"
                            value="discord" id="flexCheckDefault3">
                        <label class="form-check-label" for="flexCheckDefault3">
                            Discord Icon
                        </label>
                    </div>
                    <div class="ms-3 form-floating" v-if="component.icons.includes('discord')">
                        <input type="text" v-model="component.icons[0]['discord']" class="form-control">
                        <label for="">Discord Link</label>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="form-check p-3 ms-4">
                        <input class="form-check-input" type="checkbox" v-on:change="checked" v-model="component.icons"
                            value="instagram" id="flexCheckDefault4">
                        <label class="form-check-label" for="flexCheckDefault4">
                            Instagram Icon
                        </label>
                    </div>
                    <div class="ms-3 form-floating" v-if="component.icons.includes('instagram')">
                        <input type="text" v-model="component.icons[0]['instagram']" class="form-control">
                        <label for="">Instagram Link</label>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="form-check p-3 ms-4">
                        <input class="form-check-input" type="checkbox" v-on:change="checked" v-model="component.icons"
                            value="youtube" id="flexCheckDefault5">
                        <label class="form-check-label" for="flexCheckDefault5">
                            Youtube Icon
                        </label>
                    </div>
                    <div class="ms-3 form-floating" v-if="component.icons.includes('youtube')">
                        <input type="text" v-model="component.icons[0]['youtube']" class="form-control">
                        <label for="">Youtube Link</label>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="form-check p-3 ms-4">
                        <input class="form-check-input" type="checkbox" v-on:change="checked" v-model="component.icons"
                            value="twitter" id="flexCheckDefault6">
                        <label class="form-check-label" for="flexCheckDefault6">
                            Twitter Icon
                        </label>
                    </div>
                    <div class="ms-3 form-floating" v-if="component.icons.includes('twitter')">
                        <input type="text" v-model="component.icons[0]['twitter']" class="form-control">
                        <label for="">Twitter Link</label>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="form-check p-3 ms-4">
                        <input class="form-check-input" type="checkbox" v-on:change="checked" v-model="component.icons"
                            value="whatsapp" id="flexCheckDefault7">
                        <label class="form-check-label" for="flexCheckDefault7">
                            Whatsapp Icon
                        </label>
                    </div>
                    <div class="ms-3 form-floating" v-if="component.icons.includes('whatsapp')">
                        <input type="text" v-model="component.icons[0]['whatsapp']" class="form-control">
                        <label for="">Whatsapp Link</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-12">
                    <select class="form-select mt-3" v-model="component.theme">
                        <option selected>Choose your footer background theme</option>
                        <option value="bg-light link-dark">Light</option>
                        <option value="bg-dark link-light text-white">Dark</option>
                        <option value="bg-primary link-light text-white">Purple</option>
                        <option value="bg-danger link-light text-white">Red</option>
                        <option value="bg-warning link-dark">Yellow</option>
                        <option value="bg-success link-light text-white">Green</option>
                        <option value="bg-info link-light text-white">Blue</option>
                    </select>
                </div>
                <div class="col-md-6 col-12">
                    <button class="btn btn-primary mt-3 w-100" @click="addComponent">Create Component</button>
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
            component: {
                id: null,
                componentName: "FooterTemplate",
                year: null,
                name: null,
                icons: [{}],
                theme: null,
            }
        }
    },
    methods: {
        ...mapActions(['newComponent']),
        checked(event) {
            var name = event.target.value
            this.component.icons[0][name] = null
        },
        addComponent() {
            const data = { component: this.component }
            this.newComponent(data)
            this.$router.push({ name: 'live' })
        }
    },
}
</script>

<style lang="scss" scoped>

</style>