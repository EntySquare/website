<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/HomeHeader.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HelloWorld,
  },
}
</script>
