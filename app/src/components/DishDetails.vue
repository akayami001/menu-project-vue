<template>
    <v-container>
    
</v-container>
</template>
<script>
//import axios from 'axios';
export default {

name: 'DishDetails',
data: () =>({

}),


methods: {
    reserve() {
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
    },
},
}
</script>