<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <v-footer class="black">
      <the-footer />
    </v-footer>
  </v-app>
</template>

<script>
import Footer from './Footer'

export default {
  name: 'AuthLayout',
  components: {
    TheFooter: Footer,
  },
}
</script>

<style></style>
