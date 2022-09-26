import { defineStore } from "pinia";
///// OPTIONS STORE
export const useComicsStore = defineStore("comics", {
    state: () => ({
        
        comics: localStorage.getItem("comics") ? JSON.parse(localStorage.getItem("comics")) :[
            {
            coverImg:"../src/assets/comic-cover/Invaders.jpg",
            name:"Invaders",
            chapterNumber:20,
            chapterName:"El retorno de alex",
            genre:"Horror",
            authors:"Marvel Comics Group",
            editorial:"Marvel", },
            {
            coverImg:"../src/assets/comic-cover/BlackPanther.jpg",
            name:"Black Panther",
            chapterNumber:23,
            chapterName:"Wakanda foreva",
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