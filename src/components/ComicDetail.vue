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
      <div class="container">
                <div class="comic">
                    <div class="comic-image">
                            <img :src="currentComic.coverImg" :alt="currentComic.name">
                    </div>
                    <div class="comic-content">
                        <h3>{{currentComic.chapterName}}</h3>
                        <p>{{currentComic.authors}}</p>
                    </div>
                </div>
    </div>
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
</style>