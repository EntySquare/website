<template>
  <v-container fluid class="align-start" style="padding-top: 20px;">
    <section>
      <v-row style="height: 78px;">
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
              <v-col cols="1">
                <div style="width: 50px; display: inline-flex">
                  <router-link to="/">
                    <p class="titleFont">首页</p>
                  </router-link>
                </div>
              </v-col>
              <v-col cols="1">
                <div style="width: 50px; display: inline-flex">
                  <router-link to="/product">
                    <p class="titleFont">产品</p>
                  </router-link>
                </div>
              </v-col>
              <v-col cols="1">
                <div
                  style="width: 50px; display: inline-flex; white-space: nowrap"
                >
                  <router-link to="/product">
                    <p class="titleFont">获取HSF</p>
                  </router-link>
                </div>
              </v-col>
              <v-col cols="1">
                <div
                  style="width: 50px; display: inline-flex; margin-left: 30px"
                >
                  <router-link to="/product">
                    <p class="titleFont">资源</p>
                  </router-link>
                </div>
              </v-col>
              <v-col cols="1">
                <div
                  style="width: 50px; display: inline-flex; margin-left: 20px"
                >
                  <router-link to="/product">
                    <p class="titleFont">公司</p>
                  </router-link>
                </div>
              </v-col>
              <v-col cols="2"> </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col cols="3">
          <div class="d-inline-flex" style="margin-top: 10px">
            <div class="d-inline-flex" style="margin-top: 10px">
              <router-link to="/investList">
                <div>订单</div>
              </router-link>
              <div style="width: 40px"></div>
              <router-link to="/wallet">
                <div>资金</div>
              </router-link>
            </div>
            <div style="width: 40px"></div>
            <div>
              <v-img
                src="https://investors.oss-cn-beijing.aliyuncs.com/assets/user_logo.png"
                style="height: 44px; width: 44px"
              ></v-img>
            </div>
            <div style="width: 8px"></div>
            <div
              class="d-flex justify-center"
              id="user"
              style="width: 106px;height: 16px;font-size: 16px;font-weight: 600;color: #000000;
              margin-top: 10px"
            >
              <!--              {{ this.$route.query.name }}-->
              {{ this.username }}
            </div>
            <div>
              <v-img
                src="https://investors.oss-cn-beijing.aliyuncs.com/assets/download.svg"
                style="width: 20px;"
              ></v-img>
            </div>
            <div>
              <v-img
                src="https://investors.oss-cn-beijing.aliyuncs.com/assets/global.svg"
                style="width: 20px"
              ></v-img>
            </div>
          </div>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      username: '',
      items: [
        {
          title: 'Foo',
          path: 'foo',
        },
        {
          title: 'Bar',
          path: 'bar',
        },
      ],
    }
  },
  mounted: function() {
    this.GetMyData() //需要触发的函数
  },
  methods: {
    GetMyData: function() {
      const token = localStorage.getItem('token')
      this.axios
        .post('/r0/getMyUserData', {}, { headers: { access_token: token } })
        .then(response => {
          this.loginVue = false //显示登录代码
          this.username = response.data.UserName
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.titleFont {
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 16px;
  color: black;
}
</style>
