<template>
  <div>
    <the-header></the-header>
    <v-main>
      <section class="max-display-width">
        <router-view></router-view>
      </section>
    </v-main>
  </div>
</template>

<script>
import Header from './Header'
export default {
  name: 'Layout',
  components: {
    TheHeader: Header,
  },
}
</script>

<style></style>
