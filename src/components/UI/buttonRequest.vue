<template>
   <button class="header__request-btn">
      Оформить заявку
      <span class="header__btn-circle">
         <svg class="header__btn-plus" height="16px" id="Layer_1" style="enable-background:new 0 0 128 128;" version="1.1" viewBox="0 0 128 128" width="16px" xml:spa0ce="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g>
               <line style="fill:none;stroke:#fff;stroke-width:12;stroke-miterlimit:10;" x1="13.787" x2="114.213" y1="64.001" y2="64.001"/>
               <line style="fill:none;stroke:#fff;stroke-width:12;stroke-miterlimit:10;" x1="64" x2="64" y1="13.787" y2="114.213"/>
            </g>
         </svg>
      </span>
   </button>
</template>

<script>
export default {
   name: 'button-request',
}
</script>

<style scoped>
   .header__request-btn{
      font-weight: inherit;
      font-size: inherit;
      color: #213887;
      display: flex;
      align-items: center;
      transition: color 0.2s linear;
   }
   .header__request-btn:hover{
      color: #142251;
   }
   .header__request-btn:hover .header__btn-circle{
      background-color: transparent;
   }
   .header__btn-circle{
      transition: background-color 0.2s linear;
   }
   .header__btn-plus g line{
      transition: stroke 0.2s linear;
   }
   .header__request-btn:hover .header__btn-plus g line{
      stroke: #142251 !important;
   }
   .header__btn-circle{
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