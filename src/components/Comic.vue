<template>
    <div class="container">
        <ul>
            <li v-for="comic in allComics" :key="comic.chapterName">
                <div class="comic">
                    <div class="comic-image">
                        <router-link to="/book">
                            <img :src="comic.coverImg" :alt="comic.name">
                        </router-link>
                    </div>
                    <div class="comic-content">
                        <h3>{{comic.chapterName}}</h3>
                        <p>{{comic.authors}}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>

</template>

<script>
import { mapStores } from "pinia";
import { useComicsStore } from "../stores/comics";

export default {
    components: {
    },
    data(){
        return{
            comic:[
                {
                    coverImg:"",
                    name:"",
                    chapterNumber:"",
                    chapterName:"",
                    genre:"",
                    authors:"",
                    editorial:"",



                }
            ]
        }
    },computed: {
        ...mapStores(useComicsStore),
        allComics() {
            return this.comicsStore.getComics;
        },
    }, methods: {
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

            this.comicsStore.newComic(newComic);
            this.coverImg="";
            this.name="";
            this.chapterNumber="";
            this.chapterName="";
            this.genre="";
            this.authors="";
            this.editorial="";

        }
    },
     mounted() {
        this.comicsStore.loadComics();
    }

}
</script>

<style>
    .container {
    padding: 50px 0px 0px 14px;
    display: flex;
    }

    ul>li {
        display: inline-block;
        margin: 16px 8px;
    }


</style>