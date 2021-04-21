<template>
  <div>
    <v-col class="col-12" style="height: 30px"></v-col>
    <v-col cols="12">
      <section>
        <v-row>
          <v-col cols="2">
            <div align="center">
              <router-link to="/">
                <v-img
                  src="https://investors.oss-cn-beijing.aliyuncs.com/assets/logo.svg"
                  width="152px"
                  height="36px"
                />
              </router-link>
            </div>
          </v-col>
          <v-col cols="7">
            <div class="headMenu" align="center" style="margin-top: 18px">
              <v-row>
                <v-col cols="1">
                  <div style="width: 50px; display: inline-flex">
                    <router-link to="/">
                      <p class="titleFont">首页</p>
                    </router-link>
                  </div>
                </v-col>
                <v-col cols="1">
                  <div
                    style="width: 50px; display: inline-flex; cursor: pointer"
                  >
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
                    style="width: 50px; display: inline-flex; white-space: nowrap; cursor: pointer"
                    @click="getHsfInfo"
                  >
                    <p class="titleFont">获取HSF</p>
                  </div>
                  <v-dialog
                    content-class="rounded-xl"
                    v-model="hsfDialogShow"
                    width="600"
                    height="432"
                  >
                    <div
                      style="height: 432px;width: 600px;background: #FFFFFF;padding: 50px 67px 50px 67px"
                    >
                      <div class="d-inline-flex">
                        <div
                          style="width: 56px; height: 56px;margin-left: 210px "
                        >
                          <v-img
                            src="https://investors.oss-cn-beijing.aliyuncs.com/assets/hsf_logo.png"
                          ></v-img>
                        </div>
                        <div
                          style="width: 20px; height: 20px; margin-left: 200px; cursor: pointer"
                          @click="closeHsfDialog"
                        >
                          <v-img
                            src="https://investors.oss-cn-beijing.aliyuncs.com/assets/close_icon.png"
                          ></v-img>
                        </div>
                      </div>
                      <div style="height: 16px"></div>
                      <div class="d-flex justify-center">HSF合约地址</div>
                      <div style="height: 8px"></div>
                      <div class="d-flex justify-center">
                        0xe4815ae53b124e7263f08dcdbbb757d41ed658c6
                      </div>
                      <div style="height: 6px"></div>
                      <div
                        style="height: 124px; width: 466px; background: #FAFAFA; border-radius: 4px;"
                      >
                        <div style="padding: 20px; font-size: 12px;">
                          <div style="height: 12px">
                            <div class="d-inline">HSF价格</div>
                            <div class="d-inline" style="float: right">
                              $1000,00
                            </div>
                          </div>
                          <div style="height: 12px"></div>
                          <div style="height: 12px">
                            <div class="d-inline">HSF流通量</div>
                            <div class="d-inline" style="float: right">
                              206,550.000
                            </div>
                          </div>
                          <div style="height: 12px"></div>
                          <div style="height: 12px">
                            <div class="d-inline">HSF总量</div>
                            <div class="d-inline" style="float: right">
                              1,000.000,00
                            </div>
                          </div>
                          <div style="height: 12px"></div>
                          <div style="height: 12px">
                            <div class="d-inline">HSF流通市值</div>
                            <div class="d-inline" style="float: right">
                              $557,385.985
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style="height: 32px"></div>
                      <div style="margin-left: 65px; height: 40px">
                        <a
                          href="https://www.binance.com/zh-CN/trade/BTC_USDT?layout=basic"
                        >
                          <v-btn
                            text
                            rounded
                            style="
                        width: 152px; height: 40px; background: #00CFAC; border-radius: 20px;"
                          >
                            <div style="color: #FFFFFF; font-size: 16px">
                              币安
                            </div>
                          </v-btn>
                        </a>
                        <router-link to="/wallet">
                          <v-btn
                            text
                            rounded
                            style="width: 152px; height: 40px; border-radius: 20px; border: 1px solid #00CFAC;
                          margin-left: 32px"
                          >
                            <div style="color: #00CFAC; font-size: 16px">
                              兑换
                            </div>
                          </v-btn>
                        </router-link>
                      </div>
                    </div>
                  </v-dialog>
                </v-col>
                <v-col cols="1">
                  <div
                    style="width: 50px; display: inline-flex; margin-left: 30px"
                  >
                    <p class="titleFont">公告</p>
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
                            <router-link to="/AboutUs">
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
                            <router-link to="/Community">
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
                            <router-link to="/EnterpriseNews">
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
                            <router-link to="/JoinCommunity">
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
              </v-row>
            </div>
          </v-col>
          <v-col cols="3">
            <!-- 已登录显示 -->
            <div v-show="!loginVue">
              <div class="d-inline-flex justify-space-around align-center">
                <div class="d-flex">
                  <router-link to="/investList">
                    <div
                      class="titleFont"
                      style="font-size:16px;"
                      @click="setIsLogin(true)"
                    >
                      订单
                    </div>
                  </router-link>
                  <div style="width: 50px"></div>
                  <router-link to="/wallet">
                    <div
                      class="titleFont"
                      style="font-size:16px;"
                      @click="setIsLogin(true)"
                    >
                      资金
                    </div>
                  </router-link>
                </div>
                <div style="width: 50px"></div>

                <div class="text-center">
                  <v-menu
                    content-class="rounded-xl"
                    v-model="menu"
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
                            src="https://investors.oss-cn-beijing.aliyuncs.com/assets/loginTou.png"
                            width="44px"
                            height="44px"
                          ></v-img>
                        </div>
                        <div style="width: 8px"></div>
                        <div
                          v-text="username"
                          style="font-size: 16px;
                          font-weight: bold;
                          color: #FFFFFF;"
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
                              <div
                                class="text-left"
                                style="margin-right: 120px;"
                              >
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
                <div style="width: 50px"></div>
                <div style="display: inline-flex;">
                  <v-img
                    src="https://investors.oss-cn-beijing.aliyuncs.com/assets/download.svg"
                    style="width: 20px;"
                  />
                </div>
                <div style="margin-left: 50px"></div>
                <div style="display: inline-flex;">
                  <v-img
                    src="https://investors.oss-cn-beijing.aliyuncs.com/assets/global.svg"
                    style="width: 20px"
                  />
                </div>
              </div>
            </div>
            <!-- 已登录显示 -->
            <!-- 未登录显示 -->
            <div v-show="loginVue">
              <div style="display: inline-block;">
                <router-link to="/login">
                  <div
                    style="color: #FFFFFF; font-size:16px; font-family: Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif; margin-right: 50px"
                    @click="setIsLogin(true)"
                  >
                    登录
                  </div>
                </router-link>
              </div>
              <div style="display: inline-flex;">
                <v-btn
                  style="background-color: #FFFFFF;
                font-family: Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
                width: 144px;
                height: 56px;
                box-shadow: none;
                border-radius: 175px 175px 175px 175px"
                >
                  <router-link to="/login">
                    <div
                      style="color: #00CFAC; font-size:16px"
                      @click="setIsLogin(false)"
                    >
                      注册
                    </div>
                  </router-link>
                </v-btn>
              </div>
              <div style="display: inline-flex; margin-left: 50px;">
                <v-img
                  src="https://investors.oss-cn-beijing.aliyuncs.com/assets/download.svg"
                  style="width: 20px;"
                />
              </div>
              <div style="display: inline-flex; margin-left: 50px">
                <v-img
                  src="https://investors.oss-cn-beijing.aliyuncs.com/assets/global.svg"
                  style="width: 20px"
                />
              </div>
            </div>
            <!-- 未登录显示 -->
          </v-col>
        </v-row>
      </section>
    </v-col>
  </div>
  <!--  </div>-->
</template>

<script>
const imgUrl = require('@/assets/background.png')
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'MainHeader',
  data() {
    return {
      loginVue: true, //登录or未登录显示控制
      username: '',
      bgImg: {
        backgroundImage: 'url(' + imgUrl + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      },
      fav: true,
      menu: false,
      message: false,
      hints: true,
      eyeFlag: 'mdi-eye',
      productMenu: false,
      companyMenu: false,
      logoutResult: '',
      hsfDialogShow: '',
    }
  },
  mounted: function() {
    this.GetMyData() //需要触发的函数
  },
  methods: {
    ...mapMutations(['setIsLogin']),
    scrollAnimation: function() {
      const currentY =
        document.documentElement.scrollTop || document.body.scrollTop
      scrollAnimation(currentY, window.innerHeight)
    },
    GetMyData: function() {
      const token = localStorage.getItem('token')
      if (token === null || token === '') {
        return
      }
      this.axios
        .post('/r0/getMyUserData', {}, { headers: { 'access-token': token } })
        .then(response => {
          // alert('已登录提示！,userid:' + response.data.UserId)
          this.loginVue = false //显示登录代码
          this.username = response.data.UserName
          // console.log(response)
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
          localStorage.removeItem('token')
          this.$router.go(0)
        })
    },
    //获取HSF
    getHsfInfo() {
      this.hsfDialogShow = true
    },
    //关闭获取HSF弹框
    closeHsfDialog() {
      this.hsfDialogShow = false
    },
  },
}

function scrollAnimation(currentY, targetY) {
  // 获取当前位置方法
  // const currentY = document.documentElement.scrollTop || document.body.scrollTop
  // 计算需要移动的距离
  let needScrollTop = targetY - currentY
  let _currentY = currentY
  setTimeout(() => {
    // 一次调用滑动帧数，每次调用会不一样
    const dist = Math.ceil(needScrollTop / 40)
    _currentY += dist
    window.scrollTo(_currentY, currentY)
    // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
    if (needScrollTop > 1 || needScrollTop < -1) {
      scrollAnimation(_currentY, targetY)
    } else {
      window.scrollTo(_currentY, targetY)
    }
  }, 1)
}
</script>

<style lang="scss" scoped>
.titleFont {
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 16px;
  color: #ffffff;
}

.headMenu {
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 16px;
}
</style>
