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
    data(){

    },

    components:{
      Comic
    }

}
</script>

<style>
    nav{
        display:flex;
        justify-content:space-around
    }
    


</style>