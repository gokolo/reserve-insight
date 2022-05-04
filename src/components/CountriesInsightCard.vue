<template>
  <div class="container">
    <app-card>
      <div class="header">Guest Country {{ maxReservations }}</div>
      <div class="insights">
        <ul>
          <CountryInsightItem
            v-for="countryInsight in countriesInsights"
            :key="countryInsight.id"
            :countryInsight="countryInsight"
            :maxReservations="maxReservations"
          />
        </ul>
      </div>
    </app-card>
  </div>
</template>

<script>
import AppCard from './UI/AppCard.vue'
import CountryInsightItem from './CountryInsightItem.vue'
export default {
  name: 'HelloWorld',
  components: {
    AppCard,
    CountryInsightItem
  },
  props: {
    countriesInsights: Array
  },
  computed: {
    maxReservations () {
      return Math.max(
        ...this.countriesInsights.map((el) => el.value.nr_of_rooms)
      )
    }
  }
}
</script>

<style scoped>
.container {
  height: 450px;
  width: 800px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.header {
  font-weight: 700;
  font-size: 16px;
  color: #2a3a48;
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.insights {
  overflow-y: auto;
  height: 355px;
}
</style>
