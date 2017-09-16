<!--
 Created by root on 2017/7/27.
-->
<template>
  <div class="page-index" id="pageIndex">
    <topbar></topbar>
    <h1>sjk </h1>
  </div>
</template>

<script>
  // cps
  import topbar from 'cps/header/topbar'
  //ajax&&api
  import API from 'assets/config/API'
  const api = new API()
  export default{
    components:{
      topbar
    },
    data() {
      return {

      }
    },
    created(){

    },
    mounted(){

    },
    methods:{

    }
  }
</script>

<style lang="scss" rel='stylesheet/scss' scoped>
  @import 'src/assets/scss/style.scss';

</style>
