<template>
    <v-navigation-drawer v-model="drawer" app color="white" mini-variant mini-variant-width="90">
        <router-link to="/addItem">
            <v-avatar class="d-block text-center mx-auto mt-4" size="40">
                <v-icon color="#704232">fas fa-coffee</v-icon>
            </v-avatar>
        </router-link>
        <v-list flat class="mt-4">
            <v-list-item-group v-model="selectedItem">
                <v-list-item v-for="(item, i) in items" :key="i" active-class="border" :ripple="false" :to="item.link">
                    <v-list-item-content>
                        <v-icon v-text="item.icon"></v-icon>
                        <v-list-item-subtitle align="center" v-text="item.text" class="mt-3 caption">
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        
    </v-navigation-drawer>
</template>

<script>
export default {
    data: () => ({
        selectedItem: 0,
        drawer: null,
        items: [
            { icon: 'fa-solid fa-untensils', text: 'Home', link: "/" },
            { icon: 'fa-pen-to-square', text: 'Form', link: "/itemForm" },
            { icon: 'fa-solid fa-eraser', text: 'Clear', link: "/dishes/clear" },

        ],
    })
}
</script>

<style>
.border {
    margin-left: 8px;
    margin-right: 8px;
    background: #DC143C;
    border-radius: 20px;
    text-decoration: none;
}

.v-list-item-group .v-list-item--active {
    color: white !important;
}

.theme--light.v-list-item--active .v-list-item__subtitle,
.theme--light.v-list-item .v-list-item__action-text {
    color: white !important;
}
</style>