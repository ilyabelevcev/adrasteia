<template>
   <header class="header" id="header">
      <div class="container header__container">
         <div class="header__logo">
            <img src="../assets/img/logo.svg" alt="Adrasteia" class="header__logo-img">
         </div>
         <nav class="header__nav">
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
         <div class="header__request">
            <button class="header__request-btn">
               Оставить заявку
               <span class="header__btn-circle">
                  <svg class="header__btn-plus" height="16px" id="Layer_1" style="enable-background:new 0 0 128 128;" version="1.1" viewBox="0 0 128 128" width="16px" xml:spa0ce="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                     <g>
                        <line style="fill:none;stroke:#fff;stroke-width:12;stroke-miterlimit:10;" x1="13.787" x2="114.213" y1="64.001" y2="64.001"/>
                        <line style="fill:none;stroke:#fff;stroke-width:12;stroke-miterlimit:10;" x1="64" x2="64" y1="13.787" y2="114.213"/>
                     </g>
                  </svg>
               </span>
            </button>
         </div>
      </div>
   </header>
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
   }
   .header__request-btn{
      font-weight: inherit;
      font-size: inherit;
      color: #213887;
      display: flex;
      align-items: center;
   }
   .header__request-btn .header__btn-circle{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 12px;
      border-radius: 50%;
      width: 34px;
      height: 34px;
      background-color: #213887;
   }
</style>