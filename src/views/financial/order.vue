<template>
  <div>
    <Header />
    <assetsMod />
    <!--    <the-footer />-->
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/layouts/Header.vue'
import assetsMod from '../financial/orderMod.vue'
import Footer from '@/layouts/Footer'

export default {
  name: 'assets',
  components: {
    Header,
    assetsMod,
    TheFooter: Footer,
  },
}
</script>
