<template>
  <header>
    <nav>
        <router-link :to="{name:'newComic'}">Add new comic</router-link>
        <router-link :to="{name:'comic-collection'}">Comic collection</router-link>

    </nav>

  </header>
</template>

<script>
export default {

}
</script>

<style>
    nav{
        display:flex;
        justify-content:space-around
    }


</style>