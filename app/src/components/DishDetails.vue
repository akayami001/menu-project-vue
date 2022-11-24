<template>
    <v-container>
    <v-card :loading="loading" class="mx-auto my-12" max-width="400">
        <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
        </template>

        <v-img height="150" :src=$route.params.dish.img></v-img>

        <v-card-title v-text="$route.params.dish.name"></v-card-title>

        <v-card-text>
            <div>
                <p>{{ $route.params.dish.description }}</p>
            </div>
            <v-row align="center" class="my-3">

                <div class="grey--text ms-4">
                    <strong>{{ $route.params.dish.category }}</strong>
                </div>
            </v-row>

            <div class="my-4 text-subtitle-1">
                <strong>{{ $route.params.dish.price }} $</strong>
            </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Availability</v-card-title>

        <v-card-text>
            <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
                <v-chip>{{ $route.params.dish.availableTime }}</v-chip>
                <v-chip>{{ $route.params.dish.prepareTime }} mins</v-chip>
            </v-chip-group>
            <v-switch v-model="active" label="Active"></v-switch>
        </v-card-text>

        <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
                Reserve
            </v-btn>
        </v-card-actions>
    </v-card>


</v-container>
</template>

<script>
//import axios from 'axios';
export default {
props: {
params: Object
},
name: 'DishDetails',
data: () =>({

}),

mounted() {
    console.log(this.$route.params.dish)
},
methods: {
    reserve() {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
    },
},
}
</script>