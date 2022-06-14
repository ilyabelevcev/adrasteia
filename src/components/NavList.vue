<template>
   <nav>
      <ul class="header__nav-list">
         <li
            v-for="link in links"
            :key="link.id"
            class="header__list-item"
            >
            <a href="#" class="header__item-link" :v-scroll-to="link.scrollTo">{{link.name}}</a>
         </li>
      </ul>
   </nav>
</template>

<script>
export default {
   props: {
      links: {
         type: Array
      }
   }
}
</script>

<style scoped>
   .header__nav-list{
      display: flex;
      align-items: center;
   }
   .header__list-item:not(:last-child){
      margin-right: 32px;
   }
   .header__item-link{
      color: #142251;
      line-height: 1;
      letter-spacing: -0.03em;
      transition: color 0.2s linear;
   }
   /* hover */
   .header__item-link:hover{
      color: #213887;
      border-bottom: 2px solid #213887;
   }
</style>