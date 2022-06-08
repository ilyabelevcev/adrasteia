<template>
   <div class="wrapper-content">
      <headbar/>
      <router-view/>
      <footbar/>
   </div>
</template>

<script>
   import Headbar from './components/Headbar.vue'
   import Footbar from './components/Footbar.vue'
   export default {
      components: {
         Headbar,
         Footbar,
      }
   }
</script>

<style>

</style>
