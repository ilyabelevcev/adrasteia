<template>
   <header class="header" id="header">
      <div class="container header__container">
         <div class="header__logo">
            <img src="../assets/img/logo.svg" alt="Adrasteia" class="header__logo-img">
         </div>
         <nav class="header__nav">
            <ul class="header__nav-list">
               <li class="header__list-item">
                  <a href="#" class="header__item-link" v-scroll-to="'#main'">Главная</a>
               </li>
               <li class="header__list-item">
                  <a href="#" class="header__item-link" v-scroll-to="'#about'">О нас</a>
               </li>
               <li class="header__list-item">
                  <a href="#" class="header__item-link" v-scroll-to="'#services'">Услуги</a>
               </li>
               <li class="header__list-item">
                  <a href="#" class="header__item-link" v-scroll-to="'#working'">Как мы работаем</a>
               </li>
               <li class="header__list-item">
                  <a href="#" class="header__item-link" v-scroll-to="'#clients'">Клиенты</a>
               </li>
               <li class="header__list-item">
                  <a href="#" class="header__item-link" v-scroll-to="'#contacts'">Контакты</a>
               </li>
            </ul>
         </nav>
         <div class="header__request">
            <button class="header__request-btn">
               Оставить заявку
               <span></span>
            </button>
         </div>
      </div>
   </header>
</template>

<script>
   export default {
      
   }
</script>

<style scoped>
   .header{
      padding: 38px 0px 37px 0px;
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
   .header__request{
      /* width: 204px; */
   }
   .header__request-btn{
      font-weight: inherit;
      font-size: inherit;
      color: #213887;
      display: flex;
      align-items: center;
   }
   .header__request-btn span{
      display: inline-block;
      margin-left: 12px;
      border-radius: 50%;
      width: 34px;
      height: 34px;
      background-color: #213887;
   }
</style>