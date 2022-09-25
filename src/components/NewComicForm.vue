<script>

  /** 

  document.querySelector("#comicCoverFileSelection").addEventListener( "change", function () {

    const reader = new FileReader();

    //reader.addEventListener("load", () =>{
    // localStorage.setItem("recent-cover",reader.result);
    //});

    reader.readAsDataURL(this.files[0]);


  });

  /** 
  document.addEventListener("DOMContentLoaded", () =>{
  const recentCoverDataUrl = localStorage.getItem("recent-cover");

  if(recentCoverDataUrl){
  document.querySelector("#coverPreview").setAttribute("src",recentCoverDataUrl);
  }
  });
  */
  
  
    
      
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
      }
  
      
    
    }
    

  </script>

<template>
  <form>
  <label>Cover Image:</label>

  <input type="file" id="comicCoverFileSelection">
  <img id = "coverPreview" src ="" alt="Preview">

  <label>Chapter Number: </label>
  <input type="number" required v-model="chapterNumber">

  <label>Comic Name: </label>
  <input type="text" required v-model="name">

  <label>Chapter Name: </label>
  <input type="text" required v-model="chapterName">

  <label>Genre:</label>
  <select required v-model = "genre">
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

  <button class = "newComicBtn">Add new comic</button>


  




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