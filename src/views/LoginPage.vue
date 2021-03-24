<template>
  <div>
    <div>
      <LoginBody></LoginBody>
    </div>
    <!-- <v-footer absolute  style="padding: 0px;"> -->
    <LoginBottom />
    <!-- </v-footer> -->
  </div>
</template>

<script>
// @ is an alias to /src
import LoginBody from '@/components/LoginBody.vue'
import LoginBottom from '@/components/LoginBottom.vue'

export default {
  name: 'LoginPage',
  components: {
    LoginBody,
    LoginBottom,
  },
}
</script>
