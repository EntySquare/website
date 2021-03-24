<template>
  <div>
    <the-header />
    <router-view />
    <the-footer />
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'Layout',
  components: {
    TheHeader: Header,
    TheFooter: Footer,
  },
}
</script>

<style></style>
