<template>
    <div>
        <div>
            <h1>SignUp</h1>
        </div>
        <div class="register">
            <input type="text" v-model="name" placeholder="Enter Name" id="">
            <input type="text" v-model="email" placeholder="Enter Email" id="">
            <input type="password" v-model="password" placeholder="Enter Password" id="">
            <button @click="signUp">Sign Up</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: '',
        }
    },
    methods: {
        async signUp() {
            let result = await axios.post("http://localhost:3000/user", {
                email: this.email,
                password: this.password,
                name: this.name,
            })
            console.log(result)
            if (result.status == 201) {
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({name: 'Home'})
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>