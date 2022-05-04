<template>
  <div id="app">
    <CountriesInsightCard msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import CountriesInsightCard from './components/CountriesInsightCard.vue'

export default {
  name: 'App',
  components: {
    CountriesInsightCard
  }
}
</script>

<style>
body {
  background: #E5E5E5;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -250px;
  margin-left: -250px;
}
</style>
