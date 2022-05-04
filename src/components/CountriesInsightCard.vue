<template>
  <div class="container">
    <app-card>
      <div class="header">Guest Country</div>
      <ul>
        <CountryInsightItem />
      </ul>
      <ul>
        <CountryInsightItem />
      </ul>
      <ul>
        <CountryInsightItem />
      </ul>
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
    msg: String
  }
}
</script>

<style scoped>
.container {
  height: 500px;
  width: 500px;
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
</style>
