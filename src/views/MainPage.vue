<template>
  <div>
    <MainHeader />
    <MainBody />
    <the-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue'
import MainBody from '@/components/MainBody.vue'
import Footer from '@/layouts/Footer'

export default {
  name: 'MainPage',
  components: {
    MainHeader,
    MainBody,
    TheFooter: Footer,
  },
}
</script>
