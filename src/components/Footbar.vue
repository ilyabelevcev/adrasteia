<template>
   <footer class="footer" id="footer">
      <div class="container footer__container">
         <div class="footer__socials">
            <ul class="footer__socials-list">
               <li 
                  class="footer__socials-item" 
                  :class="classItem"
                  v-for="social in socials"
                  :key="social.id"
                  >
                  <a :href="social.reference" class="footer__socials-link">{{social.name}}</a>
               </li>
            </ul>
         </div>
         <div class="footer__privacy-policy">
            <a href="#" class="footer__privacy-link">Политика конфиденциальности</a>
         </div>
         <div class="footer__development">
            <a href="#" class="footer__development-link">Разработка - IlyaBelevcev</a>
         </div>
         <div class="footer__year">© {{year.getUTCFullYear()}}</div>
      </div>
   </footer>
</template>

<script>
   export default {
      props: {
         socials: {
            type: Array,
         },
         year: {
            type: Number,
         }
      }
   }
</script>

<style scoped>
   .footer{
      padding: 50px 0px;
      border-top: 1px solid #E4E7F1;
   }
   .footer__container{
      display: flex;
      align-items: center;
      justify-content: space-between;
   }
   /* Ссылки */
   .footer__socials{
      border: 1px solid #AFB4C4;
      border-radius: 100px;
      padding: 31px 40px;
   }
   .footer__socials-list{
      display: flex;
      align-items: center;
   }
   .footer__socials-item{}
   .footer__socials-item:not(:last-child){
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #E4E7F1;
   }
   .footer__socials-link{
      font-weight: 700;
      font-size: 34px;
      line-height: 1;
      color: #142251;
   }
   /* Политика */
   .footer__privacy-policy{}
   .footer__privacy-link{}
   /* Разработка */
   .footer__development{}
   .footer__development-link{}
   /* Год */
   .footer__year{}
</style>