<template>
   <footer class="footer" id="footer">
      <div class="container footer__container">
         <div class="footer__socials">
            <ul class="footer__socials-list">
               <li 
                  class="footer__socials-item" 
                  v-for="social in socials"
                  :key="social.id"
               >
                  <img
                     v-if="social.iconURL == null"
                     style="display: none;"
                  >
                  <img 
                     v-else
                     class="footer__socials-icon"
                     :src="social.iconURL" 
                     :alt="social.iconName"
                  >
                  <a 
                     :href="social.reference" 
                     class="footer__socials-link"
                  >
                     {{social.name}}
                  </a>
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
   .footer__socials-item:not(:last-child){
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #E4E7F1;
   }
   .footer__socials-item{
      display: flex;
      align-items: center;
   }
   .footer__socials-icon{
      margin-right: 24px;
   }
   .footer__socials-link{
      display: flex;
      flex-direction: column;
      font-weight: 700;
      font-size: 34px;
      line-height: 1;
      color: #142251;
      transition: color 0.2s linear;
   }
   .footer__socials-link::after{
      opacity: 0;
      content: '';
      width: 100%;
      height: 3px;
      background-color: #142251;
      transition: background-color 0.2s linear, opacity 0.1s linear;
   }
   /* Политика */
   .footer__privacy-link{
      font-weight: 600;
      font-size: 20px;
      line-height: 1;
      color: #989EB1;
      border-bottom: 2px solid #989EB1;
      transition: color 0.2s linear, border-color 0.2s linear;
   }
   /* Разработка */
   .footer__development-link{
      font-weight: 600;
      font-size: 20px;
      line-height: 1;
      color: #142251;
      border-bottom: 2px solid #142251;
      transition: color 0.2s linear, border-color 0.2s linear;
   }
   /* Год */
   .footer__year{
      color: #989EB1;
      font-weight: 600;
      font-size: 20px;
      line-height: 1;
   }

   /* hover */
   .footer__socials-link:hover{
      color: #213884;
   }
   .footer__socials-link:hover::after{
      background-color: #213884;
      opacity: 1;
   }
   .footer__privacy-link:hover,
   .footer__development-link:hover{
      color: #213887;
      border-color: #213887;
   }
</style>