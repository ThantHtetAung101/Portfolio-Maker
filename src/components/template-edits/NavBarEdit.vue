<template>
    <div class="container">
        <form @submit.prevent="addComponent" id="navForm">
            <div class="row mt-5">
                <div class="col">
                    <div class="row">
                        <div class="col">
                            <h3 class="fw-semibold">For UI</h3>
                        </div>
                        <div class="col">
                            <h3 class="fw-semibold">Actual Links</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-floating mb-3">
                                <input type="text" v-model="NavBarTemplate.brandName" class="form-control"
                                    id="floatingInput">
                                <label for="floatingInput">Your Brand Name</label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-floating mb-3">
                                <input type="text" v-model="NavBarTemplate.brandLink" class="form-control"
                                    id="floatingInput1">
                                <label for="floatingInput1">Link For This</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-floating mb-3">
                                <input type="text" v-model="NavBarTemplate.LinkOneName" class="form-control"
                                    id="floatingInput2">
                                <label for="floatingInput2">Navigate Link</label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-floating mb-3">
                                <input type="text" v-model="NavBarTemplate.LinkOne" class="form-control"
                                    id="floatingInput3">
                                <label for="floatingInput3">Link For This</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-floating mb-3">
                                <input type="text" v-model="NavBarTemplate.LinkTwoName" class="form-control"
                                    id="floatingInput4">
                                <label for="floatingInput4">More Navigate Link 2(Optional)</label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-floating mb-3">
                                <input type="text" v-model="NavBarTemplate.LinkTwo" class="form-control"
                                    id="floatingInput5">
                                <label for="floatingInput5">Link For This</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-floating mb-3">
                                <input type="text" v-model="NavBarTemplate.LinkThreeName" class="form-control"
                                    id="floatingInput6">
                                <label for="floatingInput6">More Navigate Link 3(Optional)</label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-floating mb-3">
                                <input type="text" v-model="NavBarTemplate.LinkThree" class="form-control"
                                    id="floatingInput7">
                                <label for="floatingInput7">Link For This</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col d-lg-block d-none">
                    <h3 class="fw-semibold">Preview</h3>
                    <nav :class="['navbar navbar-expand-lg', NavBarTemplate.theme]">
                        <div class="container-fluid">
                            <a class="navbar-brand">{{ NavBarTemplate.brandName }}</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul :class="['navbar-nav', NavBarTemplate.position]">
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">{{ NavBarTemplate.LinkOneName }}</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">{{ NavBarTemplate.LinkTwoName }}</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">{{ NavBarTemplate.LinkThreeName }}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-lg-6 col-12">
                    <h3 class="fw-semibold">Navbar Theme</h3>
                    <h5 class="fw-normal mb-3">Select A Theme For Your Navbar</h5>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="theme" id="inlineRadio1" value="bg-light"
                            v-model="NavBarTemplate.theme">
                        <label class="form-check-label" for="inlineRadio1">Light</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="theme" id="inlineRadio2"
                            value="navbar-dark bg-dark" v-model="NavBarTemplate.theme">
                        <label class="form-check-label" for="inlineRadio2">Dark</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="theme" id="inlineRadio3"
                            value="navbar-dark bg-primary" v-model="NavBarTemplate.theme">
                        <label class="form-check-label" for="inlineRadio3">Purple</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="theme" id="inlineRadio4"
                            value="navbar-dark bg-danger" v-model="NavBarTemplate.theme">
                        <label class="form-check-label" for="inlineRadio4">Red</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="theme" id="inlineRadio5"
                            value="navbar-dark bg-success" v-model="NavBarTemplate.theme">
                        <label class="form-check-label" for="inlineRadio5">Green</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="theme" id="inlineRadio6"
                            value="navbar-light bg-warning" v-model="NavBarTemplate.theme">
                        <label class="form-check-label" for="inlineRadio6">Yellow</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" checked type="radio" name="position" id="inlineRadio7" value=""
                            v-model="NavBarTemplate.position">
                        <label class="form-check-label" for="inlineRadio7">Left</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="position" id="inlineRadio8" value="ms-auto"
                            v-model="NavBarTemplate.position">
                        <label class="form-check-label" for="inlineRadio8">Right</label>
                    </div>
                    <h6 class="fw-normal mt-3">
                        After creating a component, you can't edit. You also can't rearrange the components. Keep in
                        mind that before click the create button.
                    </h6>
                    <button @click="addComponent" class="btn float-end mt-3 btn-primary">Create
                        Component</button>
                </div>
                <div class="col"></div>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            NavBarTemplate: [
                { brandName: null },
                { brandLink: null },
                { LinkOneName: null },
                { LinkOne: null },
                { LinkTwoName: null },
                { LinkTwo: null },
                { LinkThreeName: null },
                { LinkThree: null },
                { theme: null },
                { position: null },
            ]
        }
    },
    methods: {
        submitForm: (formElement) => {
            let form = document.querySelector(formElement)
            form.submit()
            form.addEventListen('submit', el => {
                el.preventDefault()
            })
        },
        ...mapActions(['newComponent']),
        addComponent() {
            const data = {
                component: {
                    "id": null,
                    "componentName": "NavBarTemplate",
                    "brandName": this.NavBarTemplate.brandName,
                    "brandLink": this.NavBarTemplate.brandLink,
                    "LinkOneName": this.NavBarTemplate.LinkOneName,
                    "LinkOne": this.NavBarTemplate.LinkOne,
                    "LinkTwoName": this.NavBarTemplate.LinkTwoName,
                    "LinkTwo": this.NavBarTemplate.LinkTwo,
                    "LinkThreeName": this.NavBarTemplate.LinkThreeName,
                    "LinkThree": this.NavBarTemplate.LinkThree,
                    "theme": this.NavBarTemplate.theme,
                    "position": this.NavBarTemplate.position,
                }
            }
            this.newComponent(data)
            this.$router.push({ name: 'live' })
        },
    },
}
</script>

<style lang="scss" scoped>

</style>