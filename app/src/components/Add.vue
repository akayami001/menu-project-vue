<template>
    <div>
      <v-card class="d-flex align-center mx-auto " max-width="400" outlined tile>
        <div class="mx-5 py-3">
          <h1>Hello User welcome</h1>
          <v-form ref="form" v-model="valid" @submit.prevent="addDish" lazy-validation method="PUT">
            <v-text-field v-model="dishes.name" :counter="20" :rules="nameRules" label="Dish Name" required>
            </v-text-field>
  
            <v-text-field v-model="dishes.description" :counter="100" :rules="descRules" label="Dish Description"
              required></v-text-field>
            <v-text-field v-model="dishes.price" type="number" label="Price" required></v-text-field>
            <v-text-field v-model="dishes.prepareTime" type="number" label="Preparation Time" required></v-text-field>
  
            <v-select v-model="dishes.category" :items="categories" :rules="[v => !!v || 'Category is required']"
              label="Category" required></v-select>
  
  
            <v-container fluid>
              <p>Serving Times</p>
  
              <v-select v-model="dishes.availableTime" :items="availableTimes"
                :rules="[v => !!v || 'Category is required']" label="Available Time" required></v-select>
            </v-container>
            <p>---</p>
            <v-checkbox v-model="dishes.isActive" label="Currently Available" required>
            </v-checkbox>
            <div class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height">
              <v-btn :disabled="!valid" color="success" class="m-4" type="submit">
                Add Dish
              </v-btn>
  
              <v-btn color="error" class="m-4" @click="reset">
                Reset Form
              </v-btn>
            </div>
  
          </v-form>
        </div>
      </v-card>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'Add',
    components: {
    },
    data() {
      return {
        dishes: {
          name: "",
          img: "https://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg",
          description: "",
          price: 0,
          availableTime: '',
          category: "",
          isActive: false,
          prepareTime: 0,
        },
        valid: true,
        nameRules: [
          v => !!v || 'Dish Name is required',
          v => (v && v.length > 3) || 'Name must be more than 3 characters',
        ],
        descRules: [
          v => !!v || 'Description is required',
          v => (v && v.length > 5) || 'A short Desc must be more than 5 characters',
        ],
        select: null,
        categories: [
          'Breakfast',
          'Lunch',
          'Starter',
          'Main Course',
          'Dessert',
          'Beverage',
        ],
        availableTimes: [
          'Breakfast',
          'Lunch',
          'Dinner',
          'Weekends',
          'Weekdays',
          'Always',
        ],
        checkbox: false,
      }
    },
    methods: {
      async addDish() {
        console.log(this.dishes)
        const result = await axios.post('http://localhost:3000/dishes', {
          name: this.dishes.name,
          description: this.dishes.description,
          img: "https://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg",
          price: this.dishes.price,
          prepareTime: this.dishes.prepareTime,
          availableTime: this.dishes.availableTime,
          category: this.dishes.category,
          isActive: this.dishes.isActive,
  
        })
        if (result.status == 201) {
          this.$router.push({ name: 'Home' })
        }
        console.log('result', result)
      },
      validate() {
        this.$refs.form.$el.submit()
      },
      reset() {
        this.$refs.form.reset()
      },
      resetValidation() {
        this.$refs.form.resetValidation()
      },
    },
    mounted() {
      let user = localStorage.getItem('user-info')
      if (!user) {
        this.$router.push({ name: 'SignUp' })
      }
  
    }
  }
  </script>
  
  <style lang="scss" scoped>
  
  </style>