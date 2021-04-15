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
                <div style="width: 50px; display: inline-flex; cursor: pointer">
                  <v-menu
                    content-class="rounded-xl"
                    v-model="productMenu"
                    :close-on-content-click="true"
                    :nudge-bottom="20"
                    :nudge-left="60"
                    offset-y
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <p
                        v-bind="attrs"
                        v-on="on"
                        class="titleFont"
                        @click="productMenu = true"
                      >
                        产品
                      </p>
                    </template>
                    <v-card width="174px" height="160px">
                      <div style="padding: 8px">
                        <div
                          class="d-inline-flex"
                          style="width: 158px; height: 48px"
                        >
                          <div
                            style="width: 24px; height: 24px; margin: 12px 10px 12px 8px"
                          >
                            <v-img
                              src="https://investors.oss-cn-beijing.aliyuncs.com/assets/headMenu/product_menu1.png"
                            ></v-img>
                          </div>
                          <router-link to="/investPast">
                            <div
                              style="margin-top: 18px; font-size: 12px; font-weight: 400; color: #000000; line-height: 12px"
                            >
                              investors 投资
                            </div>
                          </router-link>
                        </div>
                        <div
                          class="d-inline-flex"
                          style="width: 158px; height: 48px"
                        >
                          <div
                            style="width: 24px; height: 24px; margin: 12px 10px 12px 8px"
                          >
                            <v-img
                              src="https://investors.oss-cn-beijing.aliyuncs.com/assets/headMenu/product_menu2.png"
                            ></v-img>
                          </div>
                          <router-link to="/financial">
                            <div
                              style="margin-top: 18px; font-size: 12px; font-weight: 400; color: #000000; line-height: 12px"
                            >
                              investors 理财
                            </div>
                          </router-link>
                        </div>
                        <div
                          class="d-inline-flex"
                          style="width: 158px; height: 48px"
                        >
                          <div
                            style="width: 24px; height: 24px; margin: 12px 10px 12px 8px"
                          >
                            <v-img
                              src="https://investors.oss-cn-beijing.aliyuncs.com/assets/headMenu/product_menu3.png"
                            ></v-img>
                          </div>
                          <div
                            style="margin-top: 18px; font-size: 12px; font-weight: 400; color: #000000; line-height: 12px"
                          >
                            investors APP
                          </div>
                        </div>
                      </div>
                    </v-card>
                  </v-menu>
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
                  <v-menu
                    content-class="rounded-xl"
                    v-model="companyMenu"
                    :close-on-content-click="true"
                    :nudge-bottom="20"
                    :nudge-left="60"
                    offset-y
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <p
                        v-bind="attrs"
                        v-on="on"
                        class="titleFont"
                        @click="companyMenu = true"
                      >
                        公司
                      </p>
                    </template>
                    <v-card width="174px" height="208px">
                      <div style="padding: 8px">
                        <div
                          class="d-inline-flex"
                          style="width: 158px; height: 48px"
                        >
                          <div
                            style="width: 24px; height: 24px; margin: 12px 10px 12px 8px"
                          >
                            <v-img
                              src="https://investors.oss-cn-beijing.aliyuncs.com/assets/headMenu/com_select_icon1.png"
                            ></v-img>
                          </div>
                          <router-link to="/company/about">
                            <div
                              style="margin-top: 18px; font-size: 12px; font-weight: 400; color: #000000; line-height: 12px"
                            >
                              关于我们
                            </div>
                          </router-link>
                        </div>
                        <div
                          class="d-inline-flex"
                          style="width: 158px; height: 48px"
                        >
                          <div
                            style="width: 24px; height: 24px; margin: 12px 10px 12px 8px"
                          >
                            <v-img
                              src="https://investors.oss-cn-beijing.aliyuncs.com/assets/headMenu/com_select_icon2.png"
                            ></v-img>
                          </div>
                          <router-link to="/company/cooperation">
                            <div
                              style="margin-top: 18px; font-size: 12px; font-weight: 400; color: #000000; line-height: 12px"
                            >
                              团队与合作
                            </div>
                          </router-link>
                        </div>
                        <div
                          class="d-inline-flex"
                          style="width: 158px; height: 48px"
                        >
                          <div
                            style="width: 24px; height: 24px; margin: 12px 10px 12px 8px"
                          >
                            <v-img
                              src="https://investors.oss-cn-beijing.aliyuncs.com/assets/headMenu/com_select_icon3.png"
                            ></v-img>
                          </div>
                          <router-link to="/company/state">
                            <div
                              style="margin-top: 18px; font-size: 12px; font-weight: 400; color: #000000; line-height: 12px"
                            >
                              企业动态
                            </div>
                          </router-link>
                        </div>
                        <div
                          class="d-inline-flex"
                          style="width: 158px; height: 48px"
                        >
                          <div
                            style="width: 24px; height: 24px; margin: 12px 10px 12px 8px"
                          >
                            <v-img
                              src="https://investors.oss-cn-beijing.aliyuncs.com/assets/headMenu/com_select_icon4.png"
                            ></v-img>
                          </div>
                          <router-link to="/company/contact">
                            <div
                              style="margin-top: 18px; font-size: 12px; font-weight: 400; color: #000000; line-height: 12px"
                            >
                              联系我们
                            </div>
                          </router-link>
                        </div>
                      </div>
                    </v-card>
                  </v-menu>
                </div>
              </v-col>
              <v-col cols="2"></v-col>
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
            <div class="text-center">
              <v-menu
                content-class="rounded-xl"
                v-model="menuWhite"
                :close-on-content-click="false"
                :nudge-bottom="17"
                offset-y
                style="width: 250px; height: 410px;"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    text
                    rounded
                    large
                    color="transparent"
                    class="d-inline-flex align-center"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <div>
                      <v-img
                        src="https://investors.oss-cn-beijing.aliyuncs.com/assets/user_logo.png"
                        width="44px"
                        height="44px"
                      ></v-img>
                    </div>
                    <div style="width: 8px"></div>
                    <div
                      v-text="username"
                      style="font-size: 16px;
                          font-weight: bold;
                          color: #000000;"
                    ></div>
                  </v-btn>
                </template>
                <v-card>
                  <v-list>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-subtitle
                          >总资产折合
                          <v-icon
                            id="eyeIcon"
                            small
                            @click="eyeShow"
                            v-text="eyeFlag"
                            style="margin-bottom: 3px"
                          ></v-icon>
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title>
                        <div
                          class="d-inline-flex"
                          style="font-size: 20px; font-weight: bold"
                        >
                          <div>0.28802000 USDT</div>
                        </div>
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-subtitle>
                        <div>$ 0.28802000</div>
                      </v-list-item-subtitle>
                    </v-list-item>
                    <v-list-item>
                      <router-link to="/wallet">
                        <v-btn
                          text
                          style="width: 100px; height: 48px;
                            box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.04);
                            border-radius: 8px;"
                        >
                          <div class="d-inline-flex">
                            <div style="width: 18px; height: 18px">
                              <v-img
                                src="https://investors.oss-cn-beijing.aliyuncs.com/assets/userCenter/center_down.png"
                              ></v-img>
                            </div>
                            <div style="width: 8px"></div>
                            <div>充值</div>
                          </div>
                        </v-btn>
                      </router-link>
                      <div style="width: 10px"></div>
                      <router-link to="/wallet">
                        <v-btn
                          text
                          style="width: 100px; height: 48px;
                            box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.04);
                            border-radius: 8px;"
                        >
                          <div class="d-inline-flex">
                            <div style="width: 18px; height: 18px">
                              <v-img
                                src="https://investors.oss-cn-beijing.aliyuncs.com/assets/userCenter/center_up.png"
                              ></v-img>
                            </div>
                            <div style="width: 8px"></div>
                            <div>提现</div>
                          </div>
                        </v-btn>
                      </router-link>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-btn
                          text
                          style="width: 210px; height: 80px;
                              background: linear-gradient(30deg, #00DEB8 50%, #5B7ADE 100%, #5F80E8 100%);
                              box-shadow: 0 7px 8px 0 rgba(127, 127, 127, 0.09);
                              border-radius: 4px;"
                        >
                          <div class="text-left" style="margin-right: 120px;">
                            <div
                              style="color: #FFFFFF; font-size: 16px; font-weight: bold"
                            >
                              邀请好友
                            </div>
                            <div
                              style="color: #FFFFFF; font-size: 12px; font-weight: bold"
                            >
                              赚取佣金
                            </div>
                          </div>
                        </v-btn>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <div class="d-inline-flex">
                          <div style="width: 14px; height: 14px">
                            <v-img
                              src="https://investors.oss-cn-beijing.aliyuncs.com/assets/userCenter/center_product_icon.png"
                            >
                            </v-img>
                          </div>
                          <div style="width: 8px"></div>
                          <router-link to="/centerTab">
                            <div style="cursor: pointer">个人中心</div>
                          </router-link>
                        </div>
                        <div style="height: 16px"></div>
                        <div class="d-inline-flex">
                          <div style="width: 14px; height: 14px">
                            <v-img
                              src="https://investors.oss-cn-beijing.aliyuncs.com/assets/userCenter/center_people_icon.png"
                            >
                            </v-img>
                          </div>
                          <div style="width: 8px"></div>
                          <router-link to="/centerTab">
                            <div style="cursor: pointer">安全中心</div>
                          </router-link>
                        </div>
                        <div style="height: 16px"></div>
                        <div class="d-inline-flex">
                          <div style="width: 14px; height: 14px">
                            <v-img
                              src="https://investors.oss-cn-beijing.aliyuncs.com/assets/userCenter/center_logout_icon.png"
                            >
                            </v-img>
                          </div>
                          <div style="width: 8px"></div>
                          <div @click="logout" style="cursor: pointer">
                            退出
                          </div>
                        </div>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-menu>
            </div>
            <!--            <div>-->
            <!--              <v-img-->
            <!--                src="https://investors.oss-cn-beijing.aliyuncs.com/assets/user_logo.png"-->
            <!--                style="height: 44px; width: 44px"-->
            <!--              ></v-img>-->
            <!--            </div>-->
            <!--            <div style="width: 8px"></div>-->
            <!--            <div-->
            <!--              class="d-flex justify-center"-->
            <!--              id="user"-->
            <!--              style="width: 106px;height: 16px;font-size: 16px;font-weight: 600;color: #000000;-->
            <!--              margin-top: 10px"-->
            <!--            >-->
            <!--              &lt;!&ndash;              {{ this.$route.query.name }}&ndash;&gt;-->
            <!--              {{ this.username }}-->
            <!--            </div>-->
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
      productMenu: false,
      companyMenu: false,
      menuWhite: false,
      eyeFlag: 'mdi-eye',
      logoutResult: '',
    }
  },
  mounted: function() {
    this.GetMyData() //需要触发的函数
  },
  methods: {
    GetMyData: function() {
      const token = localStorage.getItem('token')
      this.axios
        .post('/r0/getMyUserData', {}, { headers: { 'access-token': token } })
        .then(response => {
          this.loginVue = false //显示登录代码
          this.username = response.data.UserName
        })
    },
    eyeShow: function() {
      if (this.eyeFlag === 'mdi-eye') {
        this.eyeFlag = 'mdi-eye-off'
      } else {
        this.eyeFlag = 'mdi-eye'
      }
    },
    //退出登录
    logout: function() {
      const token = localStorage.getItem('token')
      const deviceId = 1
      this.axios
        .post(
          '/r0/logout',
          { Device: deviceId },
          { headers: { 'access-token': token } }
        )
        .then(response => {
          this.logoutResult = response.data
          this.$router.go(0)
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
