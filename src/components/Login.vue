<template>
    <div class="login">
        <h2>Login</h2>
        <form @submit.prevent="login">
            <input type="email" v-model="email" placeholder="Email" required />
            <input type="password" v-model="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
        <p v-if="error" class="error">{{ error }}</p>

    </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            error: ''
        };
    },
    methods: {
        // async login() {
        //   try {
        //     await auth.signInWithEmailAndPassword(this.email, this.password);
        //     this.$router.push('/dashboard');
        //   } catch (err) {
        //     this.error = err.message;
        //   }
        // }
        async login() {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    this.$router.push('/dashboard');
                    // ...
                })
                .catch((err) => {
                    this.handleError(err);
                });
        },
        handleError(err) {
            switch (err.code) {
                case 'auth/invalid-email':
                    this.error = 'Invalid email address.';
                    break;
                case 'auth/user-disabled':
                    this.error = 'User account is disabled.';
                    break;
                case 'auth/user-not-found':
                    this.error = 'No user found with this email.';
                    break;
                case 'auth/wrong-password':
                    this.error = 'Incorrect password.';
                    break;
                default:
                    this.error = 'An error occurred. Please try again.';
            }
        }
    }
};
</script>

<style>
.error {
    color: red;
    margin-top: 10px;
}
</style>