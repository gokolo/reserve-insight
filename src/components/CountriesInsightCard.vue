<template>
  <div class="container">
    <app-card>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia eveniet a soluta, in consequuntur reiciendis necessitatibus aliquam qui laudantium cumque tenetur odio illum nihil suscipit ea distinctio at placeat et?
    </app-card>
  </div>
</template>

<script>
import AppCard from './UI/AppCard.vue'
export default {
  name: 'HelloWorld',
  components: {
    AppCard
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
  /* background: white;
  border-radius: 4px;
  padding: 20px; */
}
</style>
