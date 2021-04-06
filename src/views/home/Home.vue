<template>
  <div>
    <main>
    <MainHeader />
    <MainBody />
    <the-footer />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from './MainHeader.vue'
import MainBody from './MainBody.vue'
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
