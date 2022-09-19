<script>
  export default {
    data(){
      return{
        coverImg: '',
        chapterNumber:'',
        chapterName:'',
        genre:'',
        authors:'',
        editorial:'',
      }
    }
  
  }
  </script>

<template>
  <form>
  <label>Cover Image:</label>

  <input type="file" id="comicCoverFileSelection">
  <img id = "coverPreview" >

  <label>Chapter Number: </label>
  <input type="number" required v-model="chapterNumber">

  <label>Chapter Name: </label>
  <input type="text" required v-model="chapterName">

  <label>Genre:</label>
  <select v-model = "genre">
    <option value="superhero">Superhero</option>
    <option value="manga">Manga</option>
    <option value="sci-fi">Science Fiction</option>
    <option value="horror">Horror</option>
    <option value="fantasy">Fantasy</option>

  </select>

  <label>Authors:</label>
  <input type="text" required v-model="authors">

  <label>Editorial name:</label>
  <input type="text" required v-model="editorial">

  <button>Add new comic</button>


  




  </form>
</template>



<style>
  button{
    background-color: violet;
    border: 0;
    padding:10px 20px;
    margin-top: 15px;
    color: White;
    border-radius: 20px;
      

  }
</style>