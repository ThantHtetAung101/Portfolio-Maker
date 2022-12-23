<template>
    <div class="overflow-auto">
        <div class="container mt-5">
            <div class="row">
                <div class="col-5">
                    <img :src="preImage" v-on:change="checkAnimation"
                        :class="[component.isRounded ? 'rounded-pill' : '', component.animation ? 'profile_animate' : '']"
                        id="imagePreview">
                </div>
                <div class="col">
                    <div :class="['container pt-5', `mt-${component.margin}`]">
                        <h1 class="fw-bold">{{ component.title }}</h1>
                        <div class="text-warp mt-3" style="width: 33rem;">
                            <p class="fw-light">
                                {{ component.bio }}
                            </p>
                        </div>
                    </div>
                    <button :class="['btn ms-3', component.btnTheme]">{{ component.button }}</button>
                </div>
            </div>
        </div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-5">
                    <h3 class="fw-semibold ms-3">For UI</h3>
                    <div class="container">
                        <span class="text-muted fs-6">The text color will change depends on your website background theme</span>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" v-model="component.title" id="floatingInput"
                                placeholder="I'm a web developer!">
                            <label for="floatingInput">Title</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" v-model="component.bio" id="floatingInput2"
                                placeholder="Something here">
                            <label for="floatingInput2">Biography</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="number" class="form-control" v-model="component.margin" id="floatingInput3"
                                placeholder="Something here">
                            <label for="floatingInput3">Spacing (type 1-5)</label>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <h3 class="fw-semibold mt-2 mb-3">Photo & Button <br>
                        <span class="text-muted fs-6">
                            (note! you can only choose animation or shape. you can't choose both)
                        </span>
                    </h3>
                    <input type="file" v-on:change="onFileChange" id="imgForm" class="form-control">
                    <div class="row">
                        <div class="col-4">
                            <div class="form-floating mt-4">
                                <input type="text" class="form-control" v-model="component.button" id="floatingInput3"
                                    placeholder="Something here">
                                <label for="floatingInput3">Button</label>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-check pt-4">
                                <input class="form-check-input" v-on:change="rounded" type="checkbox"
                                    v-model="component.isRounded" id="flexCheckDefault9">
                                <label class="form-check-label" for="flexCheckDefault9">
                                    Circle
                                </label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-check form-check-inline mt-4 pt-1">
                                <input class="form-check-input" value="btn-primary" v-model="component.btnTheme"
                                    checked="checked" type="radio" name="inlineRadioOptions2" id="inlineRadio3">
                                <label class="form-check-label" for="inlineRadio3">Purple</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" value="btn-dark" v-model="component.btnTheme"
                                    type="radio" name="inlineRadioOptions2" id="inlineRadio4">
                                <label class="form-check-label" for="inlineRadio4">Dark</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" value="btn-light" v-model="component.btnTheme"
                                    type="radio" name="inlineRadioOptions2" id="inlineRadio5">
                                <label class="form-check-label" for="inlineRadio5">Light</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" value="btn-danger" v-model="component.btnTheme"
                                    type="radio" name="inlineRadioOptions" id="inlineRadio5">
                                <label class="form-check-label" for="inlineRadio6">Red</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" value="btn-success" v-model="component.btnTheme"
                                    type="radio" name="inlineRadioOptions2" id="inlineRadio7">
                                <label class="form-check-label" for="inlineRadio7">Green</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" value="btn-warning" v-model="component.btnTheme"
                                    type="radio" name="inlineRadioOptions2" id="inlineRadio8">
                                <label class="form-check-label" for="inlineRadio8">Yellow</label>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-4">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" v-model="component.btnLink"
                                        id="floatingInput4" placeholder="www.google.com">
                                    <label for="floatingInput4">Button Link</label>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-check">
                                    <input class="form-check-input" v-on:change="animation" type="checkbox"
                                        v-model="component.animation" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Add Animation
                                    </label>
                                </div>
                            </div>
                            <div class="col">
                                <button class="btn py-3 btn-primary" @click="createComponent">Create Component</button>
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
            component: [
                { title: "Web Developer" },
                { bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid illum eum iusto. Architecto atque eos veritatis alias, inventore nobis quasi quaerat? Nesciunt veritatis consequuntur autem nisi cumque sequi" },
                { button: null },
                { image: '' },
                { isRounded: false },
                { btnTheme: null },
                { btnLink: null },
                { animation: false },
                { margin: null },
            ],
            preImage: '',
        }
    },
    methods: {
        onFileChange(e) {
            var arr = Array.from(e.target.files)
            arr.forEach(file => {
                this.component.image = "../../assets/" + file.name
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
                vm.preImage = e.target.result;
                var img = document.querySelector("#imagePreview")
                img.style.width = "100%"
            };
            reader.readAsDataURL(file);
        },
        rounded() {
            this.isRounded = !this.isRounded
        },
        animation() {
            this.animation = !this.animation
        },
        ...mapActions(['newComponent']),
        createComponent() {
            const rand = Math.floor(Math.random() * 100000)
            const data = {
                component: {
                    "id": null,
                    "componentName": "HeaderTemplate",
                    "title": this.component.title,
                    "bio": this.component.bio,
                    "button": this.component.button,
                    "isRounded": this.component.isRounded,
                    "btnTheme": this.component.btnTheme,
                    "btnLink": this.component.btnLink,
                    "animation": this.component.animation,
                    "margin": this.component.margin,
                    "preImage": this.preImage,
                    "rand": rand,
                }
            }
            this.newComponent(data)
            this.$router.push({ name: 'live' })
        },
    }
}
</script>

<style lang="scss" scoped>

</style>