<template>
  <div style="background: linear-gradient(136deg, #FFFFFF 0%, #F3F6FA 100%);">
    <v-container>
      <AuthHeader />
      <div
        class="d-flex justify-space-between mt-8"
        style="max-width: 80%; margin:auto"
      >
        <AuthLeft />
        <LoginMod />
      </div>
    </v-container>
  </div>
</template>

<script>
import AuthHeader from './AuthHeader.vue'
import AuthLeft from './AuthLeft.vue'
import LoginMod from './LoginMod.vue'
export default {
  name: 'Login',
  components: {
    AuthHeader,
    AuthLeft,
    LoginMod,
  },
}
</script>

<style></style>
