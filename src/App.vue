<script>
import TheHeader from './components/TheHeader.vue';

export default {
  name:"home",
  components: { TheHeader },

}
</script>

<template>
  <TheHeader></TheHeader>
  <router-view></router-view>
</template>

<style lang="scss">
@use "./styles/main.scss"
</style>
