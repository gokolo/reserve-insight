<template>
  <li>
    <div class="left">
      <div class="country">
        <div class="name">
          {{ COUNTRY_CODE_MAPPING[countryInsight.display_code] }}
        </div>
        <div class="number">{{ countryInsight.value.nr_of_rooms }}</div>
      </div>
      <progress-bar :percent="countryPercentage" />
    </div>
    <div class="right">
      <span
        class="compare-score"
        :class="{ green: reservationChange, red: reservationChange < 0 }"
        >
          <span v-if="reservationChange >= 0">
            +
          </span>
          {{ reservationChange }}
        </span
      >
      <span class="compare-text">vs. Last Year</span>
    </div>
  </li>
</template>

<script>
import ProgressBar from './UI/ProgressBar.vue'
import { COUNTRY_CODE_MAPPING } from '@/resources/country-mapping'
export default {
  name: 'CountryInsightItem',
  components: {
    ProgressBar
  },
  props: {
    countryInsight: Object,
    maxReservations: Number
  },
  data () {
    return {
      COUNTRY_CODE_MAPPING: COUNTRY_CODE_MAPPING
    }
  },
  computed: {
    countryPercentage () {
      return (this.countryInsight.value.nr_of_rooms / this.maxReservations) * 100
    },
    reservationChange () {
      return this.countryInsight.value.nr_of_rooms - this.countryInsight.reference_value.nr_of_rooms
    }
  }
}
</script>

<style scoped>
li {
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  height: 70px;
  border-top: 2px solid #e1e5ec;
}
.left {
  width: 80%;
  padding-right: 20px;
}
.right {
  width: auto;
  display: flex;
  flex-direction: column;
}
.country {
  display: flex;
  justify-content: space-between;
}
.country > div {
  font-weight: 400;
  font-size: 16px;
  color: #4E6477;
  line-height: 20px;
  margin-bottom: 10px;
}

.compare-score{
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #4E6477;
}

.green {
  color: #049D01;
}
.red {
  color: #EB2C35;
}

.compare-text{
  font-weight: 400;
  font-size: 12px;
  margin-top: 5px;
  color: #60778B;
}
</style>
