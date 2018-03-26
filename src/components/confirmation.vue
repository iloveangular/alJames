<template>
  <main>
    <div class="container" v-if="activated">
      <h3 style="padding-top:80px;text-align:center;line-height:35px;">Thanks for your Subscribe on our list!<br/>You're activation code is : <strong><u> {{$route.params.confirmationCode}}</u></strong></h3>
    </div>
    <div class="container" v-else>
      <h3 style="color:red;font-weight:bold;padding-top:80px;text-align:center;">WRONG CODE, PLEASE CHECK YOUR E-MAIL AGAIN.</h3>
    </div>
  </main>
</template>
<script>
  import * as config from '@/scripts/main'

  export default {
    data() {
      return {
        activated: '',
      }
    },
    mounted() {
      var vm = this;
      $.ajax({
        url: config.url + 'confirmation',
        type: 'GET',
        data: {
          'code': this.$route.params.confirmationCode,
          'email': this.$route.params.email,
        },
        success: function (data) {
          vm.activated = true;
        },
        error: function (error) {
          vm.activated = false;
        }
      })
    }

  }
</script>
