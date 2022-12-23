<template>
    <div class="container mt-5 pb-5 pt-5 mb-5" id="faq">
        <h1 class="fw-semibold">Frequently Asked Questions</h1>
        <div class="bd-example mt-5">
            <div class="row">
                <div class="col-4 d-none d-lg-block">
                    <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
                        <nav class="nav nav-pills flex-column">
                            <a class="nav-link active" href="#item-1">How to use it?</a>
                            <nav class="nav nav-pills flex-column">
                                <a class="nav-link ms-3 my-1" href="#item-1-1">What should I do after finish?</a>
                            </nav>
                            <a class="nav-link" href="#item-2">Can I create multiple pages website?</a>
                            <nav class="nav nav-pills flex-column">
                                <a class="nav-link ms-3 my-1" href="#item-3-1">Can I use icons?</a>
                                <a class="nav-link ms-3 my-1" href="#item-3-2">How much it's customizable?</a>
                            </nav>
                        </nav>
                    </nav>
                </div>
                <div class="col-8">
                    <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true"
                        class="scrollspy-example-2" tabindex="0">
                        <div id="item-1">
                            <h4>How to use it?</h4>
                            <p>It's so simple. Once you click get started button, you will be taken to another page where you will see a blank page. There'll be a plus icon. You can click that and choose what components you like.</p>
                            <p>Keep in mind that we still not support rearranging the orders of the components from top to bottom. Please, think carefully before you do something or you will lose your process on the component that you want to rearrange.</p>
                        </div>
                        <div id="item-1-1">
                            <h5>What should I do after finish?</h5>
                            <p>You can easily download the zip file of your website. You can host your website on Netlify or other webhosting services. Netlify is free and easy to host websites. So, we would like to recommand to use it.</p>
                            <p>Keep in mind that we won't include bootstrap files in the zip. Instead, we will add cdn file for smaller file size and faster loading speed. Your Website won't look correctly if the interent isn't availabled.</p>
                        </div>
                        <div id="item-2">
                            <h4>Can I create multiple pages website?</h4>
                            <p>No. Our main target is to create portfolio websites with a single page. We're sorry that we can't provide you with multiple pages option.</p>
                        </div>
                        <div id="item-3-1">
                            <h5>Can I use icons?</h5>
                            <p>Yes. This is the beta version of our product. So, we still can't provide much icons for your portfolio website.</p>
                            <p>But we added essential icons that you will want for your website.</p>
                        </div>
                        <div id="item-3-2">
                            <h5>How much it's customizable?</h5>
                            <p>You can choose purple, light and dark themes for your portfolio.</p>
                            <p>However, we are still in beta production. So, we still can't provide custom colors for each text, custom font sizes. But we will make sure to bring them in next versions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>