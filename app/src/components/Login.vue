<template>
    <div>
        <div>
            <h1>Login</h1>
        </div>
        <div class="login">
            <input type="text" v-model="email" placeholder="Enter Email" id="">
            <input type="password" v-model="password" placeholder="Enter Password" id="">
            <button @click="login">Login</button>
            <router-link to="/signup" class="mx-5"><button >Sign Up</button></router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        async login() {
            let result = await axios.get(`http://localhost:3000/user?email=${this.email}&${this.password}`)

            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({ name: 'Home' })
            }
        },

    }
}
</script>

<style lang="scss" scoped>

</style>