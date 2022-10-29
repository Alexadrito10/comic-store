<script>
import { useAuthenticationStore } from '../stores/authentication'
import { mapStores } from "pinia";
import { auth } from "../firebase/config"
export default {
    data() {
        return {
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    methods: {
        newUser(e) {
            e.preventDefault()
            if (this.password === this.confirmPassword) {
                this.authenticationStore.newUserAwait(this.email, this.password)
                console.log('no te voy a esperar')
            }
            else alert('Passwords no coinciden')
        }
    },
    computed: {
        ...mapStores(useAuthenticationStore)
    },
    mounted() {
        console.log(auth.currentUser)
    }
}
</script>
<template>
    <section>
        <h1>Crear Una Cuenta</h1>
        <form>
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" v-model="email">
            <br>
            <label for="password">Password:</label>
            <input type="password" name="password" id="password" v-model="password">
            <br>
            <label for="cpassword">Confirm Password:</label>
            <input type="password" name="cpassword" id="cpassword" v-model="confirmPassword">
            <button @click="newUser">Crear cuenta</button>
            <router-link to="/SignIn" class-active="">
            <button class="continue-btn"> Let's go to SignIn </button>
    </router-link>
        </form>
    </section>
</template>  
<style>
</style>