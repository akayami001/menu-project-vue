<template>
  <v-card class="d-flex align-center mx-auto " max-width="400" outlined tile>
    <div class="mx-5 py-3">


      <v-form ref="form" v-model="valid" @submit.prevent="submitForm" lazy-validation method="PUT">
        <v-text-field v-model="dishes.name" :counter="20" :rules="nameRules" label="Dish Name" required></v-text-field>

        <v-text-field v-model="dishes.description" :counter="100" :rules="descRules" label="Dish Description" required></v-text-field>
        <v-text-field v-model="dishes.price" type="number" label="Price" required></v-text-field>
        <v-text-field v-model="dishes.prepareTime" type="number" label="Preparation Time" required></v-text-field>

        <v-select v-model="dishes.category" :items="categories" :rules="[v => !!v || 'Category is required']"
          label="Category" required></v-select>


        <v-container fluid>
          <p>Serving Times</p>
          <v-row>
            <v-col cols="12" sm="4" md="4">
              <v-checkbox v-model="servingTime" label="Breakfast" color="red" value="red" hide-details></v-checkbox>
              <v-checkbox v-model="servingTime" label="Lunch" color="red darken-3" value="red darken-3" hide-details>
              </v-checkbox>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-checkbox v-model="servingTime" label="Dinner" color="indigo" value="indigo" hide-details></v-checkbox>
              <v-checkbox v-model="servingTime" :rules="[v => !!v || 'You must agree to continue!']" label="Always"
                color="indigo darken-3" value="indigo darken-3" hide-details></v-checkbox>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-checkbox v-model="servingTime" label="Weekends" color="orange" value="orange" hide-details>
              </v-checkbox>
              <v-checkbox v-model="servingTime" label="Weekdays" color="orange darken-3" value="orange darken-3"
                hide-details></v-checkbox>
            </v-col>
          </v-row>
        </v-container>
        <p>---</p>
        <v-checkbox v-model="dishes.isActive" label="Currently Available" required>
        </v-checkbox>
        <div class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height">
          <v-btn :disabled="!valid" color="success" class="m-4" type="submit">
            Add | Edit Dish
          </v-btn>

          <v-btn color="error" class="m-4" @click="reset">
            Reset Form
          </v-btn>
        </div>
      </v-form>
    </div>
  </v-card>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    dishes: {
      name: "",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg",
      description: "",
      price: 0,
      category: "",
      availableTime: "",
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
    servingTime: [],
    checkbox: false,
  }),

  methods: {
    async submitForm(e) {
      console.log(this.dishes.category);
      e.preventDefault();
      const result = await axios.put('http://localhost:5000/dishes',
        { data: this.dishes })
        .then(response => {
          console.log(response.data);
        }).catch((err) => console.log(err.message))
      console.log("result", result)
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
}
</script>