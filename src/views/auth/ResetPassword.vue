<template>
  <div
    style="background: linear-gradient(136deg, #FFFFFF 0%, #F3F6FA 100%); height: 100vh"
  >
    <v-container>
      <AuthHeader />
      <div
        class="d-flex justify-space-between mt-8"
        style="max-width: 80%; margin: auto;"
      >
        <AuthLeft />
        <AuthReset />
      </div>
    </v-container>
  </div>
</template>

<script>
import AuthHeader from './AuthHeader.vue'
import AuthLeft from './AuthLeft.vue'
import AuthReset from './AuthReset.vue'

export default {
  name: 'ResetPassword',
  components: {
    AuthHeader,
    AuthLeft,
    AuthReset,
  },
}
</script>

<style></style>
