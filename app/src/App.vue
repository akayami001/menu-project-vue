<template>
  <v-app id="app">
    <v-main>
      <Header />
      <router-view />
      <Footer/>
    </v-main>
  </v-app>
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
}


</script>

<style>
body {
  padding: 0;
  margin: 0;
  font-family: Roboto, sans-serif;
}



</style>
