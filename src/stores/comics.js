import { defineStore } from "pinia";
///// OPTIONS STORE
export const useComicsStore = defineStore("comics", {
    state: () => ({
        
        comics: localStorage.getItem("comics") ? JSON.parse(localStorage.getItem("comics")) :[
            {
            coverImg:"../src/assets/comic-cover/Invaders.jpg",
            name:"Invaders",
            chapterNumber:20,
            chapterName:"Incursion",
            genre:"Hero",
            authors:"Marvel Comics Group",
            editorial:"Marvel", },
            {
            coverImg:"../src/assets/comic-cover/BlackPanther.jpg",
            name:"Black Panther",
            chapterNumber:23,
            chapterName:"Wakanda politics",
            genre:"Hero",
            authors:"Marvel Comics Group",
            editorial:"Marvel", },
            {
            coverImg:"../src/assets/comic-cover/Superman36.jpg",
            name:"Superman",
            chapterNumber:36,
            chapterName:"Kryptonite Nevermore",
            genre:"Hero",
            authors:"Gleason,Tomasi,Mahnke",
            editorial:"DC Universe", },
            {
            coverImg:"../src/assets/comic-cover/BongouCap1.jpeg",
            name:"Bungou Stray Dogs",
            chapterNumber:1,
            chapterName:"Beast",
            genre:"Manga",
            authors:"Kafka Asagiri",
            editorial:"Norma", },
            {
            coverImg:"../src/assets/comic-cover/doraemon1.jpg",
            name:"Doraemon",
            chapterNumber:1,
            chapterName:"From the future",
            genre:"Manga",
            authors:"Fujiko Fujio",
            editorial:"Planeta Comic", },
            {
            coverImg:"../src/assets/comic-cover/Kenshin.jpg",
            name:"Rurouni Kenshin",
            chapterNumber:1,
            chapterName:"Kenshin Himura Battosai",
            genre:"Manga",
            authors:"Nobuhiro Watsuki",
            editorial:"Shueisha", },
            {
            coverImg:"../src/assets/comic-cover/ShumatsuNoValkiryeCap1.jpg",
            name:"Shuumatsu No Valkyrie",
            chapterNumber:1,
            chapterName:"The final conflict",
            genre:"Manga",
            authors:"Takumi Fukui",
            editorial:"Gekkan Comic Zenon", },
              {
            coverImg:"../src/assets/comic-cover/ShumatsuNoValkiryeCap2.jpg",
            name:"Shuumatsu No Valkyrie",
            chapterNumber:5,
            chapterName:"Coup de Grace",
            genre:"Manga",
            authors:"Takumi Fukui",
            editorial:"Gekkan Comic Zenon", },

            


            
            
        ], 
    }),
    getters: {
        getComics: (state) => [...state.comics],
    },
    actions: {
        newComic(comic) {
            console.log("JUST HERE!!!!")
            this.comics=[...this.comics, comic];
            console.log("Aqui toy");
            localStorage.setItem('comics', JSON.stringify(this.comics))
        },
        loadComics() {
            this.localStorageComics = JSON.parse(localStorage.getItem('comics'))
        },
        getComicById(id) {
            const filteredComics = this.comics.filter((comics) => id.toLowerCase() === comics.chapterName.toLowerCase());
            return filteredComics ? {...filteredComics[0] } : null
        },
    },
});