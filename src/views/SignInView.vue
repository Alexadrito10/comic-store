<script>
import {useAuthenticationStore} from '../stores/authentication'
import { mapStores } from "pinia";
import {auth} from "../firebase/config"
    export default{
        data() {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            signIn(e) {
                e.preventDefault()
                this.authenticationStore.signIn(this.email, this.password)
            },
            logOut(e) {
                e.preventDefault()
                this.authenticationStore.logOut()
            }
        },
        computed: {
            ...mapStores(useAuthenticationStore),
            userIsLogged(){
                return this.authenticationStore.user !== null
            }
        },
        mounted(){
            console.log(auth.currentUser)
        },
    }
</script>
<template>
    <section v-if="!userIsLogged">
    <h1>Inicia Sesion</h1>
    <form>
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" v-model="email">
        <br>
        <label for="password">Password:</label>
        <input type="password" name="password" id="password" v-model="password">
        <button @click="signIn">Iniciar sesion</button>
    </form>
   </section>
   <section v-else>
    <h1>El usuario ya esta loggeado</h1>
    <button @click="logOut">cerrar sesion</button>
    <router-link to="/FerLexComicCollection" class-active="">
            <button class="continue-btn"> Continue </button>
    </router-link>
   </section>
</template>  
<style></style>