<template>
    <div class="container">
        <ul>
            <li v-for="comic in allComics" :key="comic.id" :to="`/comic/${comic.chapterName}`">
                <div class="comic">
                    <div class="comic-image">
                        <router-link :to="`/comic/${comic.chapterName}`">
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
    data() {
        return {
            coverImg: "",
            name: "",
            chapterNumber: "",
            chapterName: "",
            genre: "",
            authors: "",
            editorial: "",
        }
    }, computed: {
        ...mapStores(useComicsStore),
        allComics() {
            return this.comicsStore.getComics;
        },
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

.comic{
    width: 200px;
    height: 200px;
}

.comic .comic-image img{
    width: 100%;
    border-radius: 40px 5px 40px 5px;
}

.comic-content{
    display: inline block;
    width: max-content;
    background-color:rgba(255,255,255,0.15);
    border-radius: 0px 16px 0px 16px;
    color: white;
}

.comic-content h3{
    font-size: 22px;
}

.comic-content p{
    font-size: 16px;
}

</style>