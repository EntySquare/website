<style>
.titleFont {
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 16px;
  color: #ffffff;
}
</style>
<template>
  <!--  <v-app-bar app color="#00CFAC" absolute>-->
  <!--    style=" width: 100%; height:800px; background: linear-gradient(92deg, #00CFAC 0%, #5B7ADE 100%);"-->
  <div :style="bgImg" style="height: 100vh">
    <v-col class="col-12" style="height: 30px"></v-col>
    <v-col cols="12">
      <section>
        <v-row>
          <v-col cols="2">
            <div align="center">
              <router-link to="/">
                <v-img src="@/assets/logo.svg" width="152px" height="36px" />
              </router-link>
            </div>
          </v-col>
          <v-col cols="7">
            <div align="center" style="margin-top: 18px">
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
              </v-row>
            </div>
          </v-col>
          <v-col cols="3">
            <!-- 已登录显示 -->
            <div
              v-show="!loginVue"
              class="d-inline-flex justify-space-around align-center"
            >
              <div style="display: inline-block;">
                <router-link to="/login">
                  <div
                    style="color: #FFFFFF; font-size:16px; font-family: Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
                    "
                    @click="setIsLogin(true)"
                  >
                    订单
                  </div>
                </router-link>
              </div>
              <div style="margin-left: 50px"></div>
              <div style="display: inline-block;">
                <router-link to="/login">
                  <div
                    style="color: #FFFFFF; font-size:16px; font-family: Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
                    "
                    @click="setIsLogin(true)"
                  >
                    资金
                  </div>
                </router-link>
              </div>
              <div style="margin-left: 50px"></div>
              <div class="d-inline-flex justify-space-around align-center">
                <div>
                  <v-img
                    src="@/assets/loginTou.png"
                    width="44px"
                    height="44px"
                  ></v-img>
                </div>
                <div style="margin-left: 10px"></div>
                <div
                  id="user"
                  class="align-center"
                  style="font-size: 16px;
                        font-family: Nunito-SemiBold, Nunito;
                        font-weight: 600;
                        color: #FFFFFF;
                        line-height: 0px;
                       "
                >
                  {{ this.username }}
                </div>
              </div>
              <div style="margin-left: 50px"></div>
              <div style="display: inline-flex;">
                <v-img src="@/assets/download.svg" style="width: 20px;" />
              </div>
              <div style="margin-left: 50px"></div>
              <div style="display: inline-flex;">
                <v-img src="@/assets/global.svg" style="width: 20px" />
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
                <v-img src="@/assets/download.svg" style="width: 20px;" />
              </div>
              <div style="display: inline-flex; margin-left: 50px">
                <v-img src="@/assets/global.svg" style="width: 20px" />
              </div>
            </div>
            <!-- 未登录显示 -->
          </v-col>
        </v-row>
      </section>
    </v-col>
    <v-col class="col-12">
      <div style="height: 210px;">&nbsp;</div>
    </v-col>
    <div class="text-center" style="align-items: center">
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="7">
          <div class="text-left">
            <p
              style="color: #FFFFFF; font-size: 78px; font-weight: bold; font-family: Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif"
            >
              区块链组织的商业智能。
            </p>
          </div>
        </v-col>
        <v-col cols="3"></v-col>
      </v-row>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="7">
          <div class="text-left" style="height: 100px;">
            <p style="color: #FFFFFF; font-size: 36px">
              investors使区块链生态系统能够发挥其全部潜力。
            </p>
          </div>
        </v-col>
        <v-col cols="3"></v-col>
      </v-row>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="7">
          <div style="display: inline-flex; float: left">
            <!-- 未登录 按钮显示 -->
            <v-btn
              v-show="loginVue"
              text
              rounded
              class="white"
              style="text-align: center;
            border-radius: 175px 175px 175px 175px;
            width: 200px;
            height: 70px;
            margin-right: 8%"
            >
              <router-link to="/register">
                <div style="color: #00CFAC; font-size: 16px">立即注册</div>
              </router-link>
            </v-btn>
            <!-- 未登录 按钮显示 -->

            <!-- 已登录 按钮显示 -->
            <v-btn
              v-show="!loginVue"
              text
              rounded
              class="white"
              style="text-align: center;
            border-radius: 175px 175px 175px 175px;
            width: 200px;
            height: 70px;
            margin-right: 8%"
            >
              <router-link to="/register">
                <div style="color: #00CFAC; font-size: 16px">理财</div>
              </router-link>
            </v-btn>
            <!-- 已登录 按钮显示 -->

            <v-btn
              style="background: transparent;
            border:4px white solid;
            border-radius: 175px 175px 175px 175px;
            width: 200px;
            height: 70px;
            margin-right: 10%;
            box-shadow: none;
            text-align: center"
            >
              <router-link to="/login">
                <div style="color: #FFFFFF; font-size: 16px">白皮书</div>
              </router-link>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="3"></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" style="position: absolute; top: 93vh;">
          <div
            style="display: inline-flex;"
            @click="scrollAnimation()"
            align="center"
          >
            <v-img
              src="@/assets/arrow_down_white.png"
              style="width: 28px;"
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
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
      bgImg: {
        backgroundImage: 'url(' + imgUrl + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      },
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
      var token = localStorage.getItem('token')
      this.axios
        .post('/r0/getMyUserData', {}, { headers: { access_token: token } })
        .then(response => {
          // alert('已登录提示！,userid:' + response.data.UserId)
          this.loginVue = false //显示登录代码
          this.username = response.data.UserName
          // console.log(response)
        })
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

<style></style>
