<template>
    <section class="packages first packages-page">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="title">
                        <h2><span>Start-Up Packs</span></h2>
                        <p>
                            If you are just starting your business and looking for suitable and affordable corporate solutions, we are here to help! Agent Legal offers time and money saving services as well as expert advice to help start your international business.
                            Our Start-Up Packs have been tailored to specific business activities and include all the services that most businesses need to get up and running.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 col-xs-6 packages-mobile" v-for="vm in packages">
                    <div class="package">
                        <div class="img"><img src="src/assets/images/doc2.png"></div>
                        <h6>{{vm.name}}</h6>
                        <div v-html="vm.features">
                        </div>
                        <h5>${{vm.price}} <span>VALUE ${{vm.value}}</span></h5>
                        <a class="btn btn-green" v-bind:href="'/#/package/' + vm.key">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                packages: []
            }
        },
        mounted() {
            var vm = this;
            axios.get('https://milosrest.herokuapp.com/api/packages')
                .then(function (response) {
                    vm.packages = response.data;
                    console.log(vm.packages);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

    }
</script>