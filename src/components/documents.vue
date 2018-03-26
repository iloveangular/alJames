<template>
  <div class="document-body">
    <main class="documents-page">
      <section class="document-div">
        <div class="container">
          <div style="padding: 0; border-bottom: 1px dashed #dddddd;" class="col-xs-12">
            <h1>Legal & Business Document Templates</h1>
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
            <p></p>
          </div>
          <div class="search-text-bg">
            <div class="col-sm-4 search-text">
              <h1>Search for a document</h1>
            </div>
            <div class="col-sm-8 pull-right padding-remove">
              <div class="search-div">
                <!--<form id="form" method="post">-->
                <!--<input type="hidden" name="action" value="search">-->
                <!--<input id="query" type="text" name="searchRequest" placeholder="" class="typeahead no-margin">-->
                <!--<button id="search_doc" type="submit" name="submit" style="height:37px;" class="button green no-brd pad-tb-2-lr-15">-->
                <!--<div class="sprite1 magnify_green"></div>-->
                <!--</button>-->
                <!--</form>-->
                <form id="form-hockey_v1" name="form-hockey_v1">
                  <div class="typeahead__container">
                    <div class="typeahead__field">

            <span class="typeahead__query">
                <input class="js-typeahead-hockey_v1" name="hockey_v1[query]" placeholder="Search" autocomplete="off"
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
