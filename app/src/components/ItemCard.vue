<template>
    <v-container>
        <v-row>
            <v-col v-for="dish in dishes" :key="dish.id" cols=4>
                <v-card :loading="loading" class="mx-auto my-12" max-width="200">

                    <v-img height="150" :src="dish.img"></v-img>

                    <v-card-title v-text="dish.name"></v-card-title>
                    <v-card-subtitle v-text="dish.category"></v-card-subtitle>
                    <v-card-actions>
                        <router-link :to="`/dishes/` + dish.id">
                            <v-btn color="orange lighten-2" text>
                                Explore
                            </v-btn>
                        </router-link>
                        <v-spacer></v-spacer>

                        <v-btn icon @click="show = !show">
                            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>
                    <v-expand-transition>
                        <div v-show="show">
                            <v-divider></v-divider>
                            <v-card-text v-text="dish.description"></v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
import axios from 'axios';
export default {
    props: {
        params: Object
    },
    name: 'ItemCard',
    data: () => ({
        show: false,
        dishes: [],
        loading: false,
        selection: 1,
    }),
    // mounted() {
    //     axios
    //         .get("http://localhost:5000/dishes")
    //         .then((response) => {
    //             //this.products = response.data.products;
    //             let oldArray = [...this.dishes]
    //             console.log(response.data.data)
    //             this.dishes = oldArray.concat(JSON.parse(JSON.stringify(response.data.data)))
    //             console.log("dishes", this.dishes)

    //         })
    //         .catch((error => console.log(error)))

    // },
    

    methods: {
        reserve() {
            this.loading = true

            setTimeout(() => (this.loading = false), 2000)
        },
        async getDishes() {
            await axios
            .get("http://localhost:3000/dishes")
            .then((response) => {
                //this.products = response.data.products;
                let oldArray = [...this.dishes]
                console.log(response.data)
                this.dishes = oldArray.concat(JSON.parse(JSON.stringify(response.data)))
                console.log("dishes", this.dishes)
            })
            .catch((error => console.log(error)))
        },
    },
    created(){
        this.getDishes()
    }
}
</script>