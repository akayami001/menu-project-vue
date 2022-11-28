<template>
    <div class="ma-3 pa-3">
        <v-app-bar color="teal" class="flex-grow-0" app dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-title>Coding Beauty</v-app-bar-title>
        </v-app-bar>
        <v-card>
            <v-navigation-drawer app v-model="drawer" bottom>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="text-h6"> Learning Vuetify</v-list-item-title>
                        <v-list-item-subtitle> Using Navigation drawers</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list dense nav>
                    <v-list-item v-for="item in items" :key="item.title" link>
                        <router-link :to="{name: item.path}">
                            <v-list-item-icon>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-icon>
                        </router-link>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    
                </v-list>
            </v-navigation-drawer>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data: () => ({
        drawer: false,
        items: [
            { title: 'Home', icon: 'mdi-home', path: "Home" },
            { title: 'Menu', icon: 'mdi-noodles', path: "ItemCard" },
            { title: 'Add Dishes', icon: 'mdi-hamburger-plus', path: "Add" },
             { title: 'Clear Menu', icon: 'mdi-eraser', path: "DishClear" }, 
        ],
        group: null,
    }),
    methods: {
        logout() {
            localStorage.clear()
            this.$router.push({ name: 'Login' })
        }
    },
    watch: {
        group() {
            this.drawer = false
        },
    },
}
</script>

<style lang="scss" scoped>

</style>