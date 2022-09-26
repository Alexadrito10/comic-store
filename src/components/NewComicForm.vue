<script>
import { useComicsStore } from "../stores/comics";
import { mapStores } from "pinia";
      
    export default {
    

      data(){
        return{
          coverImg: '',
          name:'',
          chapterNumber:'',
          chapterName:'',
          genre:'',
          authors:'',
          editorial:'',
          img:'',
          
        
        }
      },
      methods: {
        createNewComic() {
            const newComic = {
                coverImg:this.coverImg,
                name:this.name,
                chapterNumber:this.chapterNumber,
                chapterName:this.chapterName,
                genre: this.genre,
                authors: this.authors,
                editorial: this.editorial,
            };

            this.useComicsStore.newComic(newComic);
            this.coverImg="";
            this.name="";
            this.chapterNumber="";
            this.chapterName="";
            this.genre="";
            this.authors="";
            this.editorial="";

        }
     }
     
  
      
    
    }
    

  </script>

<template>
  <form>
  <label>Cover Image:</label>

  <input type="file" id="comicCoverFileSelection">
  <img id = "coverPreview" src ="" alt="Preview">

  <label>Chapter Number: </label>
  <input type="number" required v-model="chapterNumber" id="newChNum">

  <label>Comic Name: </label>
  <input type="text" required v-model="name" id="newComName">

  <label>Chapter Name: </label>
  <input type="text" required v-model="chapterName" id="newChapName">

  <label>Genre:</label>
  <select required v-model = "genre" id="newGenre">
    <option value="superhero">Superhero</option>
    <option value="manga">Manga</option>
    <option value="sci-fi">Science Fiction</option>
    <option value="horror">Horror</option>
    <option value="fantasy">Fantasy</option>

  </select>

  <label>Authors:</label>
  <input type="text" required v-model="authors" id="newAuthor">

  <label>Editorial name:</label>
  <input type="text" required v-model="editorial" id="newEditorial">

  <router-link to="/FerLexComicCollection" class-active="">
    <button class = "newComicBtn" @click="(e) => createNewComic()">Add new comic</button>
  </router-link>

  




  </form>
</template>



<style scoped lang = "scss">
  form {
    padding: 40px;
    margin: 30px auto;
    text-align: left;
    max-width:500px;
  }

  label{
    display: inline-block;
    margin:25px 0 15px;
  }

  input{
    display:block;
  }

  select{
    display:block;
  }

  .newComicBtn {
    background-color: violet;
    border: 0;
    padding:10px 20px;
    margin-top: 15px;
    color: White;
    border-radius: 20px;
      

  }
</style>