<template>
  <header>
    <nav>
        <router-link :to="{name:'newComic'}">Add new comic</router-link>
        <router-link :to="{name:'comic-collection'}">Comic collection</router-link>

    </nav>

  </header>
  <main><Comic/></main>
</template>

<script>
import Comic from '../components/Comic.vue'

export default {
    components:{
      Comic
    }

}
</script>

<style>
    nav{
        background-color: white;
        display:flex;
        justify-content:space-around
    }
    
    main{
      background-image: linear-gradient(rgba(153, 123, 123, 0.5), rgba(136, 41, 41, 0.5)), url('../assets/HorizonteCalm.jpg');
      background-size: cover;
      background-position: bottom;
      transition : 0.4s;
    }

</style>