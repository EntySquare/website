<template>
  <v-app style="background: linear-gradient(136deg, #FFFFFF 0%, #F3F6FA 100%);">
    <!--应用程序导航条-->
    <v-col cols="12">
      <AuthHeader />
    </v-col>
    <v-row dense="true"></v-row>
    <!--左侧菜单导航-->
    <v-row>
      <v-col cols="2"> </v-col>
      <v-col cols="5">
        <AuthLeft />
      </v-col>
      <v-col cols="3">
        <LoginMod />
      </v-col>
    </v-row>
  </v-app>
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
