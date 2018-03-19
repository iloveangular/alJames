<template>
    <div class="document-body">
        <main class="documents-page">
            <section class="document-div">
                <div class="container">
                    <div style="padding: 0; border-bottom: 1px dashed #dddddd;" class="col-xs-12">
                        <h1>Legal & Business Document Templates</h1>
                        <p>
                            We offer quick and affordable access to more than 1000 downloadable and ready-to-complete business forms and legal documents suited for both business and personal use.</p>
                        <p>
                            To find the appropriate document or form, simply type the name or a key word in the search bar and press the <span
                                style="color: #8f101c;">SEARCH</span>
                            button. Alternatively you may also find a document by using our Categories section. You
                            may find several documents of the same general purpose, read through the short description and select the document most appropriate for your specific needs.
                        </p>
                        <p>
                            At Agent Legal we provide documents suited for different jurisdictions, and with a wide range of forms it is sometimes difficult to understand which documents are suitable or whether you filled them out correctly. For a reasonable fee, our
                            highly skilled lawyers and consultants will help you find what you need and assist in the review of your documents making it easier for you.</p>
                        <p></p>
                    </div>
                    <div class="search-text-bg">
                        <div class="col-sm-4 search-text">
                            <h1>Search for a document</h1>
                        </div>
                        <div class="col-sm-8 pull-right padding-remove">
                            <div class="search-div">
                                <form id="form" method="post">
                                    <input type="hidden" name="action" value="search">
                                    <input id="query" type="text" name="searchRequest" placeholder="" class="typeahead no-margin">
                                    <button id="search_doc" type="submit" name="submit" style="height:37px;" class="button green no-brd pad-tb-2-lr-15">
                                        <div class="sprite1 magnify_green"></div>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="browse-by-category">
                <div class="container">
                    <h4 class="category-title text-center"><span>Browse by Category</span></h4>
                    <div class="row row-change">
                        <div class="col-xs-6 col-md-3 category-block" v-for="vm in documents">
                            <a v-bind:href="'/#/documents/' + vm.key" class="category-link">{{vm.name}}</a>
                        </div>
                    </div>
                    <!--{{#each rows as |row|}}-->
                    <!--<div class="row row-change">-->
                    <!--{{#each row as |category|}}-->
                    <!--<div class="col-xs-6 col-md-3 category-block"><a href="/documents/{{category.key}}" class="category-link">{{category.name}}</a></div>-->
                    <!--{{/each}}-->
                    <!--</div>-->
                    <!--{{/each}}-->
                </div>
            </section>
        </main>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                documents: []
            }
        },
        mounted() {
            var vm = this;
            axios.get('https://milosrest.herokuapp.com/api/documents')
                .then(function (response) {
                    vm.documents = response.data;
                    console.log(vm.documents);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

    }
</script>
