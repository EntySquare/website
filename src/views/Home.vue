<template>
  <div>
    <HomeHeader></HomeHeader>
    <v-main>
      <section class="max-display-width">
        <div class="home">
          <div>{{ $t('message') }}</div>
          <HelloWorld msg="Welcome to Your Vue.js App" />
        </div>
      </section>
    </v-main>
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
