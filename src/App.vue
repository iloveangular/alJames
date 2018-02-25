<template>
  <div id="app">
    <main-header></main-header>
    <router-view/>
    <footer-part></footer-part>
    <!--{{msgtwo}}-->
  </div>
</template>
<script>
    import mainHeader from '@/directives/mainHeader'
    import footerPart from '@/directives/footerPart'
    export default {
        data() {
            return {
            }
        },
        components : {
            mainHeader,
            footerPart
        }
    }
</script>
