import { defineStore } from "pinia";
///// OPTIONS STORE
export const useComicsStore = defineStore("comics", {
    state: () => ({
        comics: [
            
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
        localStorageComics: []
    }),
    getters: {
        getComics: (state) => [...state.comics],
    },
    actions: {
        newComic(comic) {
            this.localStorageComics.push(comic)
            this.comics.push(comic);
            localStorage.setItem('comics', JSON.stringify(this.localStorageComics))
        },
        loadComics() {
            this.localStorageComics = JSON.parse(localStorage.getItem('comics'))
            if(localStorageComics){
            this.comics = this.comics.concat([...this.localStorageComics])
            }
        },
        getComicById(id) {
            const filteredComics = this.comics.filter((comics) => id.toLowerCase() === comics.chapterName.toLowerCase());
            return filteredComics ? {...filteredComics[0] } : null
        },
    },
});