<template>
    <div>
        <div class="container p-3">
            <h3 class="fw-semibold">UI Edit</h3>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="9999999999">
                        <div class="row mt-3">
                            <div class="col-lg-6">
                                <div class="form-floating">
                                    <input type="text" v-model="component.title" id="title" class="form-control">
                                    <label for="title">Title</label>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-floating">
                                    <input type="text" v-model="component.desc" id="desc" class="form-control">
                                    <label for="desc">Description</label>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-lg-6">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-floating">
                                            <input type="text" v-model="component.btn" id="btn" class="form-control">
                                            <label for="btn">Button</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <select class="form-select mt-3" v-model="component.btnTheme">
                                            <option selected>Choose your button theme</option>
                                            <option value="btn-light">Light</option>
                                            <option value="btn-dark">Dark</option>
                                            <option value="btn-primary">Purple</option>
                                            <option value="btn-danger">Red</option>
                                            <option value="btn-warning">Yellow</option>
                                            <option value="btn-success">Green</option>
                                            <option value="btn-info">Blue</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-floating">
                                    <input type="text" v-model="component.btnLink" id="btnlink" class="form-control">
                                    <label for="btnlink">Button Link</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="row">
                                    <div class="col-5">
                                        <input type="file" v-if="component.isImage"
                                            v-on:change="onFileChange" class="mt-3 form-control">
                                    </div>
                                    <div class="col">
                                        <div class="form-check mt-3">
                                            <input class="form-check-input" v-model="component.isImage"
                                                type="checkbox" value="" id="flexCheckDefault">
                                            <label class="form-check-label" for="flexCheckDefault'">
                                                Add Image
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <select class="form-select mt-3" v-model="component.theme">
                                    <option selected>Choose your card background theme</option>
                                    <option value="text-bg-light">Light</option>
                                    <option value="text-bg-dark">Dark</option>
                                    <option value="text-bg-primary">Purple</option>
                                    <option value="text-bg-danger">Red</option>
                                    <option value="text-bg-warning">Yellow</option>
                                    <option value="text-bg-success">Green</option>
                                    <option value="text-bg-info">Blue</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" v-for="i in component.count" data-bs-interval="9999999999999">
                        <div class="row mt-3">
                            <div class="col-lg-6">
                                <div class="form-floating">
                                    <input type="text" v-model="component['title'+i]" id="title" class="form-control">
                                    <label for="title">Title</label>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-floating">
                                    <input type="text" v-model="component['desc'+i]" id="desc" class="form-control">
                                    <label for="desc">Description</label>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-lg-6">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-floating">
                                            <input type="text" v-model="component['btn'+i]" id="btn"
                                                class="form-control">
                                            <label for="btn">Button</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <select class="form-select mt-3" v-model="component['btnTheme'+i]">
                                            <option selected>Choose your card background theme</option>
                                            <option value="btn-light">Light</option>
                                            <option value="btn-dark">Dark</option>
                                            <option value="btn-primary">Purple</option>
                                            <option value="btn-danger">Red</option>
                                            <option value="btn-warning">Yellow</option>
                                            <option value="btn-success">Green</option>
                                            <option value="btn-info">Blue</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-floating">
                                    <input type="text" v-model="component['btnLink'+i]" id="btnlink"
                                        class="form-control">
                                    <label for="btnlink">Button Link</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="row">
                                    <div class="col-5">
                                        <input type="file" v-if="component['isImage'+i]"
                                            v-on:change="onFileChange" class="mt-3 form-control">
                                    </div>
                                    <div class="col">
                                        <div class="form-check mt-3">
                                            <input class="form-check-input" v-model="component['isImage'+i]"
                                                type="checkbox" value="" :id="['flexCheckDefault'+i]">
                                            <label class="form-check-label" :for="['flexCheckDefault'+i]">
                                                Add Image
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <select class="form-select mt-3" v-model="component['theme'+i]">
                                    <option selected>Choose your card background theme</option>
                                    <option value="text-bg-light">Light</option>
                                    <option value="text-bg-dark">Dark</option>
                                    <option value="text-bg-primary">Purple</option>
                                    <option value="text-bg-danger">Red</option>
                                    <option value="text-bg-warning">Yellow</option>
                                    <option value="text-bg-success">Green</option>
                                    <option value="text-bg-info">Blue</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" v-if="component.count !== 0" type="button"
                        data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="bg-dark carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" v-if="component.count !== 0"
                        data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="bg-dark carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <h3 class="mt-5 fw-semibold">Preview</h3>
            <div class="row">
                <div class="col-lg-4">
                    <div class="card mb-3" style="width: 18rem;">
                        <img :src="component.preImages[0]" v-if="component['isImage'] === true" class="card-img-top"
                            alt="...">
                        <div :class="['card-body', component.theme]">
                            <h5 class="card-title">{{ component.title }}</h5>
                            <p class="card-text">{{ component.desc }}</p>
                            <a href="#" :class="['btn', component.btnTheme]">{{ component.btn }}</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4" v-for="i in component.count">
                    <div class="card mb-3" style="width: 18rem;">
                        <img :src="component.preImages[i]" v-if="component['isImage'+i] === true" class="card-img-top"
                            alt="...">
                        <div :class="['card-body', component['theme' + i]]">
                            <h5 class="card-title">{{ component['title' + i] }}</h5>
                            <p class="card-text">{{ component['desc' + i] }}</p>
                            <a href="#" :class="['btn', component['btnTheme' + i]]">{{ component['btn' + i] }}</a>
                        </div>
                    </div>
                </div>
            </div>
            <button @click="addCard" class="btn mt-3 w-25 btn-primary">Add New Card</button>
            <button @click="addComponent" class="btn mt-3 w-25 ms-3 btn-outline-primary">Create Component</button>
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
                "componentName": "CardTemplate",
                count: 0,
                title: null,
                desc: null,
                btn: null,
                btnTheme: null,
                btnLink: null,
                theme: null,
                isImage: false,
                images: [],
                preImages: [],
            }
        }
    },
    methods: {
        addCard() {
            this.component.count = this.component.count + 1
            // this.component['isImage'+this.component.count] = null
        },
        onFileChange(e) {
            var arr = Array.from(e.target.files)
            arr.forEach(file => {
                this.component.images = [...this.component.images, "../../assets/" + file.name]
            })
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        },
        createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = (e) => {
                vm.component.preImages = [...this.component.preImages, e.target.result];
            };
            reader.readAsDataURL(file);
        },
        ...mapActions(['newComponent']),
        addComponent() {
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
