<template>
    <div class="text-center my-10">
        <v-sheet class="px-7 pt-7 pb-4 mx-auto text-center d-inline-block" color="blue darken-3" dark>
            <div class="grey--text text--lighten-5 text-body-2 mb-4">
                Are you sure you want to delete all the Dishes in the Menu?
            </div>

            <v-btn :disabled="loading" class="ma-1" color="white" plain>
                Cancel
            </v-btn>

            <v-btn :loading="loading" class="ma-1" color="error" plain @click="deleteDishesAll">
                Delete
            </v-btn>
        </v-sheet>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'DishClear',
    data: () => ({ loading: false }),
    methods: {
        async deleteDishesAll() {
            let result = await axios.get('http://localhost:3000/dishes')
            console.log(result.status)
            if (result.status == 200) {
                this.loadData()
                this.loading = true

                await new Promise(resolve => setTimeout(resolve, 3000))

                this.loading = false

            }
        },
        async loadData() {
            let user = localStorage.getItem('user-info')
            this.name = JSON.parse(user).name
            if (!user) {
                this.$router.push({ name: 'SignUp' })
            }
            let result = await axios.get('http://localhost:3000/dishes')
            result.data = []
            this.dishes = result.data
            console.log(result)
            console.log(this.dishes)
        },

    },
    async mounted() {
        this.loadData()
    },
}



</script>

<style lang="scss" scoped>

</style>