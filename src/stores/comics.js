import { defineStore } from "pinia";
import { collection, getDocs } from "firebase/firestore";
import {db} from "../firebase/config"
///// OPTIONS STORE
export const useComicsStore = defineStore("comics", {
    state: () => ({
        coverImg:"",
        name:"",
        chapterNumber:0,
        chapterName:"",
        genre:"",
        authors:"",
        editorial:""

        
        //comics: localStorage.getItem("comics") ? localStorage
        //Arreglar estoooooooooo
        
        /* comics: localStorage.getItem("comics") ? JSON.parse(localStorage.getItem("comics")) :[
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

            


            
            
        ],  */
    }),
    getters: {
        getComics: (state) => [...state.comics],
        getFilteredComics: (state) =>{
            const filteredComics = state.comics.filter(comic,()=>{
                return state.selectedFilters.keyword? comic.description.includes(state.selectedFilters.keyword):true
            })
            return filteredComics
        }
    },
    actions: {
        newComic(comic) {
            console.log("JUST HERE!!!!")
            this.comics=[...this.comics, comic];
            console.log("Aqui toy");
            localStorage.setItem('comics', JSON.stringify(this.comics))
        },
        async loadComics() {
            
            //this.localStorageComics = JSON.parse(localStorage.getItem('comics'))

            const querySnapshot = await getDocs(collection(db, "comics"));
            let fbComics =[]
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                const comic = {
                    id: doc.id,
                    coverImg:doc.data().coverImg,
                    name:doc.data().name,
                    chapterNumber:doc.data().chapterNumber,
                    chapterName:doc.data().chapterName,
                    genre:doc.data().genre,
                    authors:doc.data().authors,
                    editorial:doc.data().editorial,
                        
                }
                fbComics.push(comic);
            });
            this.localStorage = fbComics;
            
            
        },
        getComicById(id) {
            const filteredComics = this.comics.filter((comics) => id.toLowerCase() === comics.chapterName.toLowerCase());
            return filteredComics ? {...filteredComics[0] } : null
        },
        applyfilter(key,value){
            this.selectedFilters[key] = value;
        }
    },
});