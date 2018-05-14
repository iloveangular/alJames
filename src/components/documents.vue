<template>
    <main class="documents">
        <section class="document-div">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-xs-12">
                        <h2>Legal & Business Document Templates</h2>
                        <p>
                            We offer quick and affordable access to more than 1000 downloadable and ready-to-complete business forms
                            and legal documents suited for both business and personal use.</p>
                        <p>
                            To find the appropriate document or form, simply type the name or a key word in the search bar and press
                            the <span
                                style="color: #8f101c;">SEARCH</span>
                            button. Alternatively you may also find a document by using our Categories section. You
                            may find several documents of the same general purpose, read through the short description and select the
                            document most appropriate for your specific needs.
                        </p>
                        <p>
                            At Agent Legal we provide documents suited for different jurisdictions, and with a wide range of forms it
                            is sometimes difficult to understand which documents are suitable or whether you filled them out
                            correctly. For a reasonable fee, our
                            highly skilled lawyers and consultants will help you find what you need and assist in the review of your
                            documents making it easier for you.</p>
                        <hr>
                    </div>
                    <div class="col-md-12 col-xs-12">
                        <div class="row search">
                            <div class="col-md-4 col-xs-12">
                                <h2>Search for a document</h2>
                            </div>
                            <div class="col-md-8 col-xs-12">
                                <div class="search-div">
                                    <form id="form-hockey_v1" name="form-hockey_v1">
                                        <div class="typeahead__container">
                                            <div class="typeahead__field">
                                                <span class="typeahead__query">
                                                    <input class="js-typeahead-hockey_v1" name="hockey_v1[query]"
                                                           placeholder="Search" autocomplete="off"
                                                           type="search">
                                                </span>
                                                <span class="typeahead__button">
                                                    <button type="submit">
                                                      <div class="sprite1 magnify_green"></div>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="browse-by-category">
            <div class="container">
                <h3><span>Browse by Category</span></h3>
                <hr>
                <div class="row row-change">
                    <div class="col-xs-12 col-md-3" v-for="vm in documents">
                        <div class="category-block">
                            <a v-bind:href="'/#/documents/' + vm.key" class="category-link">{{vm.name}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
    import axios from 'axios';
    import * as config from '@/scripts/main'

    export default {
        data() {
            return {
                documents: [],
            }
        },
        mounted() {
            var vm = this;
            axios.get(config.url + 'documents')
                .then(function (response) {
                    vm.documents = response.data;
                    console.log(vm.documents);
                })
                .catch(function (error) {
                    console.log(error);
                })

            $.typeahead({
                input: '.js-typeahead-hockey_v1',
                minLength: 2,
                maxItem: 6,
                maxItemPerGroup: 6,
                order: "asc",
                hint: true,
                cache: true,
                display: ["title", "_id",],
                dropdownFilter: [{
                    key: 'title',
                }],
                template: '<span class="division">' + '<a href="/#/document/{{slug}}">({{title}}</a></span>)',
                correlativeTemplate: true,
                source: {
                    url: config.url + "allDocuments"
                }
            });
        },
        methods: {}

    }
</script>
<style>
    .project-jquerytypeahead.page-demo .typeahead__result .name {
        margin: 0 10px;
    }

    .project-jquerytypeahead.page-demo .typeahead__result .division {
        font-size: 12px;
        color: #777;
        font-variant: small-caps;
    }

    .project-jquerytypeahead.page-demo .typeahead__result .team-logo {
        position: absolute;
        top: 0;
        right: 0;
        background-color: #fff;
        padding: 2px 4px 0 10px;
    }

    .document-body .search-div input {
        width: calc(100% - 75px) !important;
        padding: 8px 14px 6px !important;
        height: 38px !important;
    }

    .typeahead__cancel-button {
        right: 80px;
        font-size: 22px;
    }

    .project-jquerytypeahead.page-demo .typeahead__result .team-logo img {
        height: 26px;
    }
</style>
