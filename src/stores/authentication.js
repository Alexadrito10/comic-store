import { defineStore } from 'pinia'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config"
export const useAuthenticationStore = defineStore('authentications', {
    state: () => ({
    }),
    actions: {
        signIn(email, password) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log("usuario logeado", user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });

        }
    }
})