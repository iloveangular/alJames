<template>
    <main>
        <section class="services-wrap packages">
            <div class="container">
                <div class="section-title-wrap">
                    <h2>Niche Services</h2>
                    <p>
                        While our focus is on company formation and bank account opening, it is clear that this is just one aspect of a business' needs. Therefore we offer other services that, along with a properly built corporate structure, will provide you the tools
                        you need to promote and grow your business.</p>
                </div>
                <div class="row">
                    <div class="col-md-4 col-xs-6 about-block" v-for="vm in services">
                        <div class="package" style="height: 283px;">
                            <div class="img">
                                <img :src="vm.icon.url">
                            </div>
                            <h6>{{vm.name}}</h6>
                            <div class="desc-list" v-html="vm.description">
                            </div>
                            <div class="learn-more"><a v-bind:href="'/#/niche-service/' + vm.key">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
    import axios from 'axios'
    import * as config from '@/scripts/main'

    export default {
        data() {
            return {
                services: []
            }
        },
        mounted() {
            var vm = this;
            axios.get(config.url + 'niche-services')
                .then(function (response) {
                    vm.services = response.data;
                    console.log(vm.services);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

    }
</script>
