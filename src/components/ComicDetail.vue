<script>
import Comic from '../components/Comic.vue'
import { useComicsStore } from "../stores/comics";
import { mapStores } from "pinia";

export default {
  data() {
    return {
      currentComic: {

      }
    };
  },
  computed: {
    ...mapStores(useComicsStore),
  },

  mounted() {
    this.currentComic = this.comicsStore.getComicById(this.$route.params.comicName);
  },

}
</script>
  
<template>
  <div class="detail-container">
    <div class="comic-details">
      <div class="cover-details">
        <img :src="currentComic.coverImg" :alt="currentComic.name">
      </div>
      <div class="content-description">
        <h1>Chapter name: {{currentComic.chapterName}}</h1>
        <p>Chapter Number: {{currentComic.chapterNumber}}</p>
        <p>Comic Name: {{currentComic.name}}</p>
        <p>Authors: {{currentComic.authors}}</p>
        <p>Genre: {{currentComic.genre}}</p>
        <p>Editorial: {{currentComic.editorial}}</p>
      </div>
      <div class="button">
        <router-link to="/FerLexComicCollection" class-active="">
        <button class="newComicBtn"> Continue </button>
      </router-link>
      </div>
      
    </div>
  </div>
</template>
  
  
  
<style scoped lang = "scss">
body {
  width: max-content;
  height: max-content;
  background: grey;
}

.detail-container {
  padding-top: 20px;
  display: flex;
  justify-content: center;
}

.comic-details {
  width: 300px;
  height: 300px;
}

.cover-details {
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  height: 300px;
}

.comic-details .cover-details img {
  width: 100%;
  border-radius: 40px 5px 40px 5px;
}

.content-description {
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  margin-top: 160px;
}

.button{
  display: flex;
  justify-content: center;
}
.newComicBtn {
  background-color: violet;
  border: 0;
  padding: 10px 20px;
  margin-top: 15px;
  color: White;
  border-radius: 20px;
  cursor: pointer;
}
</style>