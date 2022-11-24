<template>
    <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
        <SideBar />
        <ItemCard/>
    </v-app>
</template>

<script>
import SideBar from '../components/SideBar.vue';
import ItemCard from './ItemCard.vue';


export default {
    name: 'Home',
    components: {
    SideBar,
    ItemCard
},
    
    
}
</script>
<style>
.v-card.borderme {
    border: 2px solid #704232 !important;
}

.v-card.borderout {
    border: 1px solid #BCAAA4 !important;
}
</style>