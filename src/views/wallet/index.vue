<template>
  <div>
    <Header />
    <indexMod />
<!--    <the-footer />-->
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/layouts/Header.vue'
import indexMod from '../wallet/indexMod.vue'
import Footer from '@/layouts/Footer'

export default {
  name: 'MainPage',
  components: {
    Header,
    indexMod,
    TheFooter: Footer,
  },
}
</script>
