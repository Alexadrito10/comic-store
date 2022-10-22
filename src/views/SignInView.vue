<script>
import { useAuthenticationStore } from '../stores/authentication'
import {mapStores} from 'pinia'
export default {
    data() { 
        return{
            email: "",
            password: "",
        }
    },
    methods:{
        signIn() {
            this.authenticationsStore.signIn(this.email, this.password)
        }
    },
    computed:{
        ...mapStores(useAuthenticationStore),
    },
    mounted(){
        console.log(this.authenticationsStore.authentication)
    }

}
</script>
<template>
    <section>
    <h1>Inicia sesion</h1>
    <form>
        <label for="email">Email: </label>
        <input type="text" name="email" id="email" v-model="email">
        <label for="password">Password: </label>
        <input type="password" name="password" id="password" v-model="password">
        <button @click.prevent="signIn" class="continue-btn"> Continue </button>
    </form>

    </section>

</template>

<style>

</style>