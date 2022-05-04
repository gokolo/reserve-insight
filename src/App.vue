<template>
  <div id="app">
    <CountriesInsightCard
      :countriesInsights="countriesInsights"
      msg="Welcome to Your Vue.js App"
    />
  </div>
</template>

<script>
import CountriesInsightCard from './components/CountriesInsightCard.vue'
import { getCountriesInsights } from './api'
export default {
  name: 'App',
  components: {
    CountriesInsightCard
  },
  data () {
    return {
      countriesInsights: []
    }
  },
  async created () {
    const result = await getCountriesInsights()
    console.log('resp', result.data.guest_country)
    this.countriesInsights = result.data.guest_country.sort(function (a, b) {
      const aReservationChange =
        a.value.nr_of_rooms - a.reference_value.nr_of_rooms
      const bReservationChange =
        b.value.nr_of_rooms - b.reference_value.nr_of_rooms

      return (
        b.value.nr_of_rooms - a.value.nr_of_rooms || bReservationChange - aReservationChange
      )
    })
  }
}
</script>

<style>
body {
  background: #e5e5e5;
}
#app {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -250px;
  margin-left: -400px;
}
</style>
