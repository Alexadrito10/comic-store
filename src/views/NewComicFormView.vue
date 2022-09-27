<script>
import { useComicsStore } from "../stores/comics";
import { mapStores } from "pinia";

export default {


  data() {
    return {
      coverImg: '',
      name: '',
      chapterNumber: '',
      chapterName: '',
      genre: '',
      authors: '',
      editorial: '',
    }
  }, computed: {
    ...mapStores(useComicsStore),
    allComics() {
      return this.comicsStore.getComics;
    },
  },
  mounted() {
    this.comicsStore.loadComics();
  },
  methods: {
    createNewComic() {
      const newComic = {
        coverImg: this.coverImg,
        name: this.name,
        chapterNumber: this.chapterNumber,
        chapterName: this.chapterName,
        genre: this.genre,
        authors: this.authors,
        editorial: this.editorial,
      };

      this.comicsStore.newComic(newComic);
      this.coverImg = "";
      this.name = "";
      this.chapterNumber = "";
      this.chapterName = "";
      this.genre = "";
      this.authors = "";
      this.editorial = "";
    }
    //image upload and preview methods
    , selectImage() {
      this.$refs.fileInput.click()
    },
    pickFile() {
      let input = this.$refs.fileInput
      let file = input.files
      if (file && file[0]) {
        let reader = new FileReader
        reader.onload = e => {
          this.coverImg = e.target.result
        }
        reader.readAsDataURL(file[0])
        this.$emit('input', file[0])
      }
    }
  },
}


</script>

<template>
  <form @submit.prevent="createNewComic">
    <label>Cover Image:</label>

    <div>
      <input class="form-control" ref="fileInput" type="file" @input="pickFile">
    </div>
    <div class="imagePreviewWrapper" :style="{ 'background-image': `url(${coverImg})` }" @click="selectImage">
    </div>

    <label>Comic Name: </label>
    <input type="text" v-model="name" id="newComName">

    <label>Chapter Number: </label>
    <input type="number" v-model="chapterNumber" id="newChNum">

    <label>Chapter Name: </label>
    <input type="text" v-model="chapterName" id="newChapName">

    <label>Genre:</label>
    <select required v-model="genre" id="newGenre">
      <option value="superhero">Superhero</option>
      <option value="manga">Manga</option>
      <option value="sci-fi">Science Fiction</option>
      <option value="horror">Horror</option>
      <option value="fantasy">Fantasy</option>

    </select>

    <label>Authors:</label>
    <input type="text" v-model="authors" id="newAuthor">

    <label>Editorial name:</label>
    <input type="text" v-model="editorial" id="newEditorial">
    <button class="newComicBtn" @click.prevent="(e) => createNewComic()">Add new comic</button>
  </form>
</template>



<style scoped lang = "scss">
form {
  padding: 40px;
  margin: 30px auto;
  text-align: left;
  max-width: 500px;
}

label {
  display: inline-block;
  color: #A0CFD3;
  margin: 25px 0 15px;
}

input {
  display: block;
}

select {
  display: block;
}

.newComicBtn {
  background-color: violet;
  border: 0;
  padding: 10px 20px;
  margin-top: 15px;
  color: White;
  border-radius: 20px;
}

.imagePreviewWrapper {
  background-repeat: no-repeat;
  width: 250px;
  height: 250px;
  display: block;
  cursor: pointer;
  margin: 0 auto 30px;
  background-size: contain;
  background-position: center center;
}
</style>