<template>
  <div>
    <HeadBar />
    <the-footer />
  </div>
</template>

<script>
import Footer from '@/layouts/Footer'
import HeadBar from '@/views/home/HeadBar'
export default {
  name: 'HomeResource',
  components: {
    HeadBar,
    TheFooter: Footer,
  },
}
</script>

<style scoped></style>
