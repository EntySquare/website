<template>
  <v-app>
    <the-header />
    <v-main>
      <router-view />
    </v-main>
    <v-footer class="black">
      <the-footer />
    </v-footer>
  </v-app>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'CommonLayout',
  components: {
    TheHeader: Header,
    TheFooter: Footer,
  },
}
</script>

<style></style>
