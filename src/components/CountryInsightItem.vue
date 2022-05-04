<template>
  <li>
    <div class="left">
      <div class="country">
        <div class="name">Belgium</div>
        <div class="number">676</div>
      </div>
      <progress-bar :percent="40" />
    </div>
    <div class="right">
      <span class="compare-score green">+ 111</span>
      <span class="compare-text">vs. Last Year</span>
    </div>
  </li>
</template>

<script>
import ProgressBar from './UI/ProgressBar.vue'
export default {
  name: 'CountryInsightItem',
  components: {
    ProgressBar
  }
  // props: {
  //   msg: String
  // }
}
</script>

<style scoped>
li {
  display: flex;
  padding-left: 20px;
  align-items: center;
  height: 70px;
  border-top: 1px solid #e1e5ec;
}
.left {
  width: 80%;
  padding-right: 20px;
}
.right {
  width: 20%;
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
