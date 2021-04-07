<template>
  <v-container fluid class="align-start" style="padding: 10px;">
    <section>
      <v-row style="box-shadow: 14px 10px 40px 0 rgba(15, 15, 15, 0.1);">
        <v-col cols="3">
          <div class="d-flex justify-center">
            <router-link to="/">
              <v-img
                src="https://investors.oss-cn-beijing.aliyuncs.com/assets/logo_black.png"
                width="150px"
              />
            </router-link>
          </div>
        </v-col>
        <v-col cols="6">
          <div style="margin-top: 18px">
            <v-row>
              <v-col cols="2">
                <div style="width: 50px; display: inline-flex">
                  <router-link to="/">
                    <p class="titleFont">首页</p>
                  </router-link>
                </div>
              </v-col>
              <v-col cols="2">
                <div style="width: 50px; display: inline-flex">
                  <router-link to="/product">
                    <p class="titleFont">产品</p>
                  </router-link>
                </div>
              </v-col>
              <v-col cols="2">
                <div
                  style="width: 50px; display: inline-flex; white-space: nowrap"
                >
                  <router-link to="/product">
                    <p class="titleFont">获取HSF</p>
                  </router-link>
                </div>
              </v-col>
              <v-col cols="2">
                <div
                  style="width: 50px; display: inline-flex; margin-left: 30px"
                >
                  <router-link to="/product">
                    <p class="titleFont">资源</p>
                  </router-link>
                </div>
              </v-col>
              <v-col cols="2">
                <div
                  style="width: 50px; display: inline-flex; margin-left: 20px"
                >
                  <router-link to="/product">
                    <p class="titleFont">公司</p>
                  </router-link>
                </div>
              </v-col>
              <v-col cols="2">
                <div
                  class="d-flex justify-space-around"
                  style="margin-left: 20px"
                >
                  <router-link to="/">
                    <p class="titleFont" style="display: inline-flex">订单</p>
                  </router-link>
                  <router-link to="/">
                    <p class="titleFont" style="display: inline-flex">资金</p>
                  </router-link>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col cols="3">
          <div
            class="d-inline-flex justify-space-around align-center"
            style="margin-top: 10px"
          >
            <div>
              <v-img
                src="https://investors.oss-cn-beijing.aliyuncs.com/assets/user_logo.png"
              ></v-img>
            </div>
            <div id="user" class="align-center"></div>
            <!--            <div-->
            <!--              style="display: inline-flex; margin-left: 50px; border-radius: 26px; color: #00CFAC"-->
            <!--            >-->
            <!--              <v-img src="https://investors.oss-cn-beijing.aliyuncs.com/assets/download.svg" style="width: 20px;" />-->
            <!--            </div>-->
            <!--            <div style="display: inline-flex; margin-left: 50px">-->
            <!--              <v-img src="https://investors.oss-cn-beijing.aliyuncs.com/assets/global.svg" style="width: 20px" />-->
            <!--            </div>-->
          </div>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script>
export default {
  name: 'HeadBar',
}
//document.getElementById('user').innerText = this.$route.params.userName
</script>

<style lang="scss" scoped>
.titleFont {
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 16px;
  color: black;
}
</style>
