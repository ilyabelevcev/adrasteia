<template>
   <div class="content-wrapper">
      <headbar/>
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
   *,*::before,*::after{
   -moz-box-sizing: border-box;
   -webkit-box-sizing: border-box;
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   border: 0;
   list-style: none;
   text-decoration: none;
   }
   *:focus, *:active{
      outline: none;
   }
   header,footer,nav,aside{
      display: block;
   }
   html,body,#content{
      font-family: 'Gilroy';
      line-height: 1.5;
      width: 100%;
      min-width: 320px;
      display: block;
   }
   input,button,textarea{
      font-family: inherit;
   }
   input:-ms-clear{
      display: none;
   }
   button{
      cursor: pointer;
      background-color: transparent;
   }
   button::-moz-focus-inner{
      padding: 0;
      bottom: 0;
   }
   a,a:active,a:focus,a:hover,a:visited{
      text-decoration: none;
   }
   img{
      vertical-align: top;
   }
   h1,h2,h3,h4,h5,h6{
      margin: 0;
      /* font-size: inherit; */
      /* font-weight: 700; */
   }
   .container{
      max-width: 1820px;
      padding: 0px 10px;
      margin: 0 auto;
   }
</style>
