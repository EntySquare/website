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
        <AuthForm />
      </div>
    </v-container>
  </div>
</template>

<script>
import AuthHeader from './AuthHeader.vue'
import AuthLeft from './AuthLeft.vue'
import AuthForm from './AuthForm.vue'

export default {
  name: 'LoginRegister',
  components: {
    AuthHeader,
    AuthLeft,
    AuthForm,
  },
}
</script>

<style></style>
