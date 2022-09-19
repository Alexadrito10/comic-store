<template>
  <header>

</header>
<div id="app">
  <main>
    <div class="welcome-wrap">

      <div class="comic-welcome">Welcome to FerLex M&C, space where u can enjoy as much as your imagination want.</div>
      
      <div class="intro">Press the button when you feel ready 👌 </div>
      <router-link to="/FerLexComicCollection" class-active="">
            <button class="continue-btn"> Continue </button>
        </router-link>
    </div>
  </main>
</div>
</template>

<script>
    
export default {


}
</script>

<style scoped lang ="scss">
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;


  }
  body{
    font-family:monserrat,sans-serif;
    
  }




  #app{
    background-image: url('../assets/HorizonteCalm.jpg');
    background-size: cover;
    background-position: bottom;
    transition : 0.4s;

  }
  main{
    min-height:100vh;
    padding: 25px;

    background-image: linear-gradient(to bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.75));

  } 
  .welcome-wrap{
    display: inline block;
    top: 500px;
    widows: 100%;
    margin-bottom:30px;

    background-color:rgba(255,255,255,0.15);
    border-radius: 0px 16px 0px 16px;
    font-size: 32px;

  }
  .comic-welcome .intro{
    display: block;
    width: 100%;
    padding: 15px;

    color: #313131;
    font-size:20px;

    appearance: none;
    border: none;
    outline: none;
    background: none;

    background-color: rgba(255,255,255,0.5);
    
  }

  .continue-btn{
    border: none;
    display: block;
    margin: 0 auto;
    font-size: 32px;
  }
</style>