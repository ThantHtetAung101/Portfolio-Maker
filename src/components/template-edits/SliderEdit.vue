<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-12 col-lg-6" id="imageFormDiv">
                <h3 class="fw-semibold">Upload Your Slider Pictures</h3>
                <span class="text-muted">Pictures file size must not be over 5MB!!</span>
                <div class="row mt-5">
                    <div class="input-group mb-3">
                        <input type="file" class="form-control" v-on:change="onFileChange" id="inputGroupFile02">
                        <label class="input-group-text" for="inputGroupFile02">Upload</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-group mb-3">
                        <input type="file" class="form-control" v-on:change="onFileChange" id="inputGroupFile02">
                        <label class="input-group-text" for="inputGroupFile02">Upload</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-group mb-3">
                        <input type="file" class="form-control" v-on:change="onFileChange" id="inputGroupFile02">
                        <label class="input-group-text" for="inputGroupFile02">Upload</label>
                    </div>
                </div>
                <div v-for="i in component.count">
                    <div class="row">
                        <div class="input-group mb-3">
                            <input type="file" class="form-control" v-on:change="onFileChange" id="inputGroupFile02">
                            <label class="input-group-text" for="inputGroupFile02">Upload</label>
                        </div>
                    </div>
                </div>
                <button class="btn btn-primary" @click="addImage">Add New Image</button>
                <button class="btn btn-outline-primary ms-3" @click="addComponent">Create Component</button>
            </div>
            <div class="col">
                <h3 class="fw-semibold mt-3 mt-lg-1">Preview</h3>
                <div id="carouselExampleInterval" style="overflow: hidden;" class="carousel slide mt-5" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="2000">
                            <img :src="component.preImages[0]" class="d-block w-100">
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img :src="component.preImages[1]" class="d-block w-100">
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img :src="component.preImages[2]" class="d-block w-100">
                        </div>
                        <div v-for="i in component.count">
                            <div class="carousel-item" data-bs-interval="2000">
                                <img :src="component.preImages[i + 2]" class="d-block w-100">
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    el: '#imageFormDiv',
    data() {
        return {
            component: {
                count: 0,
                images: [],
                preImages: [],
            }
        }
    },
    methods: {
        addImage() {
            this.component.count = this.component.count + 1
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
            const rand = Math.floor(Math.random() * 100)
            const data = {
                "component": {
                    id: null,
                    "componentName" : "SliderTemplate",
                    "count" : this.component.count,
                    "image" : this.component.images,
                    "preImages" : this.component.preImages,
                    "rand": rand
                }
            }
            this.newComponent(data)
            this.$router.push({ name: 'live' })
        }
    },
}
</script>

<style lang="scss" scoped>

</style>