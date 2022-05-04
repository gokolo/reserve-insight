<template>
  <div class="bar">
    <div class="progress-bar" :style="{ width: percent + '%' }"></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    percent: Number
  }
}
</script>

<style scoped>
.bar {
  width: 100%;
  background: #E1E5EC;
  overflow: hidden;
  border-radius: 6px;
}
.progress-bar {
  float: left;
  height: 12px;
  background:  #035086;
  border-radius: 4px 0px 0px 4px;
}
</style>
