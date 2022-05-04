<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppCard'
}
</script>

<style scoped>
.card {
  background: white;
  border-radius: 4px;
  /* padding: 5px; */
  height: 100%;
  width: 100%;
}
</style>
