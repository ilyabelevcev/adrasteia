<template>
   <header class="header" id="header">
      <div class="container header__container">
         <logo 
            class="header__logo"/>
         <nav-list 
            class="header__nav"
            :links="links"/>
         <button-request 
            class="btn"/>
      </div>
   </header>
</template>

<script>
   import Logo from '@/components/Logo.vue'
   import NavList from '@/components/NavList.vue'
   export default {
      components: {
         Logo,
         NavList
      },
      props: {
         links: {
            type: Array
         }
      }
   }
</script>

<style scoped>
   .header{
      padding: 38px 0px 37px 0px;
      margin-bottom: 70px;
      border-bottom: 1px solid #142251;
   }
   .header__container{
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 600;
      font-size: 20px;
   }
</style>