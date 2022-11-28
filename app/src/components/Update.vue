<template>
  <v-row>
      <v-card class="d-flex align-center mx-auto " max-width="400" outlined tile>
          <div class="mx-5 py-3">
              <h1>Let`s Update The Dish</h1>
              <v-form ref="form" v-model="valid" @submit.prevent="updateDish" lazy-validation method="PUT">
                  <v-text-field v-model="dishes.name" :counter="20" :rules="nameRules" label="Dish Name" required>
                  </v-text-field>
                  <v-text-field v-model="dishes.description" :counter="100" :rules="descRules"
                      label="Dish Description" required></v-text-field>
                  <v-text-field v-model="dishes.price" type="number" label="Price" required></v-text-field>
                  <v-text-field v-model="dishes.prepareTime" type="number" label="Preparation Time" required>
                  </v-text-field>
                  <v-select v-model="dishes.category" :items="categories"
                      :rules="[v => !!v || 'Category is required']" label="Category" required></v-select>
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
                          Edit Dish
                      </v-btn>
                      <v-btn color="error" class="m-4" @click="reset">
                          Reset Form
                      </v-btn>
                  </div>
              </v-form>
          </div>
      </v-card>
      <v-card  class="mx-auto my-12" max-width="400">
          <template slot="progress">
              <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
          </template>
          <v-img height="150" src="https://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg"></v-img>
          <v-card-title v-text="dishes.name"></v-card-title>
          <v-card-text>
              <div>
                  <p>{{ dishes.description }}</p>
              </div>
              <v-row align="center" class="my-3">

                  <div class="grey--text ms-4">
                      <strong>{{ dishes.category }}</strong>
                  </div>
              </v-row>
              <div class="my-4 text-subtitle-1">
                  <strong>{{ dishes.price }} $</strong>
              </div>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-title>Availability</v-card-title>
          <v-card-text>
              <v-chip-group  active-class="deep-purple accent-4 white--text" column>
                  <v-chip>{{ dishes.availableTime }}</v-chip>
                  <v-chip>{{ dishes.prepareTime }} mins</v-chip>
              </v-chip-group>
              <v-switch v-model="dishes.isActive" label="Currently Available"></v-switch>
          </v-card-text>
      </v-card>
  </v-row>
</template>

<script>
import axios from 'axios';
export default {
  props: {
      params: Object
  },
  name: 'Update',
  components: {
  },
  data() {
      return {
          dishes: {
              name: "",

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
          availableTimes: [
              'Breakfast',
              'Lunch',
              'Dinner',
              'Weekends',
              'Weekdays',
              'Always',
          ],
          availableTime: [],
          checkbox: false,
      }
  },
  methods: {
      async updateDish() {
          console.log(this.dishes)
          const result = await axios.put('http://localhost:3000/dishes/' + this.$route.params.id, {
              name: this.dishes.name,
              description: this.dishes.description,
              price: this.dishes.price,
              prepareTime: this.dishes.prepareTime,
              availableTime: this.dishes.availableTime,
              category: this.dishes.category,
              isActive: this.dishes.isActive,
          })
          if (result.status == 200) {
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
  async mounted() {
      console.log(this.$route.params.dish)
      let user = localStorage.getItem('user-info')
      if (!user) {
          this.$router.push({ name: 'SignUp' })
      }
      const result = await axios.get('http://localhost:3000/dishes/' + this.$route.params.id)
      if (result.status == 201) {
          this.$router.push({ name: 'Home' })
      }
      console.log('result', result.data)
      this.dishes = result.data
  }
}
</script>

<style lang="scss" scoped>

</style>