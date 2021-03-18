<template>
  <div>
    <MainHeader></MainHeader>
    <v-main>
      <section class="max-display-width">
        <div class="home">
          <div>{{ $t('message') }}</div>
          <MainBody msg="Welcome to Your Vue.js App" />
        </div>
      </section>
    </v-main>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue'
import MainBody from '@/components/MainBody.vue'

export default {
  name: 'MainPage',
  components: {
    MainHeader,
    MainBody,
  },
}
</script>
