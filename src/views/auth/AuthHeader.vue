<template>
  <v-container style="padding: 20px;">
    <div class="d-flex align-center justify-space-between">
      <router-link to="/">
        <img
          src="https://investors.oss-cn-beijing.aliyuncs.com/assets/logo_black.png"
          style="width:126px;height:30px;"
        />
      </router-link>
      <div class="d-inline-flex">
        <div style="margin-right: 10px">
          <img
            src="https://investors.oss-cn-beijing.aliyuncs.com/assets/h1.png"
            style="width:142px;height:40px;"
          />
        </div>
        <div>
          <img
            src="https://investors.oss-cn-beijing.aliyuncs.com/assets/h2.png"
            style="width:142px;height:40px;"
          />
        </div>
      </div>
    </div>
    <v-row>
      <v-col cols="12" style="height: 200px"></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AuthHeader',
  components: {},
  data() {
    return {}
  },
}
</script>

<style></style>
