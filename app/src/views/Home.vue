<template>
    <v-app class="home">
      <Header />
      <h1>Hello {{ name }}, Welcome to Home Page</h1>
      <v-data-table :headers="headers" :items="dishes" class="elevation-1">
        <template v-slot:header.name="{ header }">
          {{ header.text.toUpperCase() }}
        </template>
        <template v-slot:item.action1="{ item }">
          <router-link :to="`/dishes/` + item.id">
            <v-icon small class="mr-2">
              mdi-pencil
            </v-icon>
          </router-link>
  
        </template>
        <template v-slot:item.action2="{ item }">
          <v-icon small class="mr-2" color="red">
            mdi-close-octagon
          </v-icon>
          <v-icon small @click="deleteDish(item.id)">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-app>
  </template>
  
  <script>
  import Header from '@/components/Header.vue';
  import axios from 'axios';
  export default {
    name: 'Home',
    data() {
      return {
        name: 'Home',
        dishes: [],
        headers: [
          {
            text: 'Dish Name',
            align: 'start',
            value: 'name',
          },
          { text: 'Price (Euro)', value: 'price' },
          { text: 'Category', value: 'category' },
          { text: 'Prepare Time (m)', value: 'prepareTime' },
          { text: 'Available Time', value: 'availableTime' },
          { text: 'Service Ready', value: 'isActive' },
          { text: 'Update', value: 'action1', sortable: false },
          { text: 'Delete', value: 'action2', sortable: false },
        ],
        editedIndex: -1,
      }
    },
    watch: {
      dialogDelete(val) {
        val || this.closeDelete()
      },
    },
    components: {
      Header,
    },
    methods: {
      async deleteDish(id) {
        alert('Dish Deleted')
        let result = await axios.delete('http://localhost:3000/dishes/' + id)
        console.log(result.status)
        this.dialogDelete = true
        if (result.status == 200) {
          this.loadData()
        }
      },
      deleteItemConfirm() {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },
      closeDelete() {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      async loadData() {
        let user = localStorage.getItem('user-info')
        this.name = JSON.parse(user).name
        if (!user) {
          this.$router.push({ name: 'SignUp' })
        }
        let result = await axios.get('http://localhost:3000/dishes')
        this.dishes = result.data
      },
    },
    async mounted() {
      this.loadData()
    },
    
  }
  </script>
  
  
  <style>
  td {
    width: 160px;
    height: 40px;
  }
  </style>