<template>
  <main>
    <h1 style="padding-top:300px;">Hello there</h1>
  </main>
</template>
<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        items: [],
        username: ''
      }
    },
    mounted() {
      var vm = this;
      // Checking for items in storage
      var hey = this.$route.params.confirmationCode;
      console.log(hey);
      function getParameterByName(name, url) {
        if (!url) url = hey;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
      }
      var key = getParameterByName('key');
      console.log(key);
    }

  }
</script>
