<template>
  <div>
    <v-card class="wrap">
      <div class="d-flex justify-space-between" style="padding-bottom: 15px">
        <div>
          <div class="title">
            {{ title }}
          </div>
          <div style="height: 5px"></div>
          <div style="font-size: 14px">
            欢迎来到investors
          </div>
        </div>
        <div class="action" @click="setIsLogin(!isLogin)">
          {{ action }}
        </div>
      </div>
      <template v-if="isLogin">
        <v-tabs
          v-model="tab"
          slider-size="5"
          background-color="transparent"
          slider-color="#00CFAC"
          grow
          style="padding-bottom: 20px"
        >
          <v-tab style="color: #00CFAC">
            手机号
          </v-tab>
          <v-tab style="color: grey">
            邮箱
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <LoginFormPhone />
          <LoginFormEmail />
        </v-tabs-items>
      </template>
      <template v-else>
        <v-tabs
          v-model="tab"
          slider-size="5"
          background-color="transparent"
          slider-color="#00CFAC"
          grow
          style="padding-bottom: 20px"
        >
          <v-tab style="color: #00CFAC">
            手机号
          </v-tab>
          <v-tab style="color: grey">
            邮箱
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <RegisterFormPhone />
          <RegisterFormEmail />
        </v-tabs-items>
      </template>
    </v-card>
    <!--    <v-card class="wrap">-->
    <!--      <div class="d-flex justify-center">-->
    <!--        <div style="width: 80px; height: 80px">-->
    <!--          <v-img-->
    <!--            src="https://investors.oss-cn-beijing.aliyuncs.com/assets/phone_check.png"-->
    <!--          ></v-img>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div style="height: 28px"></div>-->
    <!--      <div class="d-flex justify-center">-->
    <!--        <div-->
    <!--          style="width: 112px; height: 28px; font-size: 28px; color: #00CFAC"-->
    <!--        >-->
    <!--          安全验证-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div style="height: 24px"></div>-->
    <!--      <div class="d-flex justify-center text-center">-->
    <!--        <div-->
    <!--          style="width: 280px; height: 40px; font-size: 14px; color: #808080"-->
    <!--        >-->
    <!--          我们向您电子邮箱发送了一个验证码，请输入 邮箱验证码-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div style="height: 56px"></div>-->
    <!--      <div class="row-center captcha_input_wrapper">-->
    <!--        <input-->
    <!--          autocomplete="off"-->
    <!--          v-for="(item, index) in setCaptchas"-->
    <!--          :key="index"-->
    <!--          v-model="item.num"-->
    <!--          :id="'captcha' + index"-->
    <!--          @input="inputFinish(index)"-->
    <!--          @focus="adjust(index)"-->
    <!--          @keydown="inputDirection(index)"-->
    <!--          class="captcha_input_box row-center"-->
    <!--          type="tel"-->
    <!--          maxlength="1"-->
    <!--        />-->
    <!--      </div>-->
    <!--      <div style="height: 16px"></div>-->
    <!--      <div v-show="phoneCheckFlag">-->
    <!--        <div-->
    <!--          @click="sendCodePhone"-->
    <!--          style="font-size: 14px; color: #00CFAC; float: right; cursor: pointer"-->
    <!--        >-->
    <!--          发送验证码-->
    <!--        </div>-->
    <!--        <div-->
    <!--          v-show="!phoneSendCode"-->
    <!--          style="font-size: 14px; color: #00CFAC; float: right"-->
    <!--        >-->
    <!--          {{ authTime }} s-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div v-show="sendAgain">-->
    <!--        <div>未收到验证码？</div>-->
    <!--        <div>重新发送</div>-->
    <!--      </div>-->
    <!--    </v-card>-->
  </div>
</template>

<script>
import LoginFormPhone from './Login/FormPhone'
import LoginFormEmail from './Login/FormEmail'
import RegisterFormPhone from './register/FormPhone'
import RegisterFormEmail from './register/FormEmail'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'AuthForm',
  components: {
    LoginFormPhone,
    LoginFormEmail,
    RegisterFormPhone,
    RegisterFormEmail,
  },
  data() {
    return {
      tab: null,
      phoneCheck: false,
      sendAgain: false,
      authTime: 0, // 倒计时
      setCaptchas: [
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' },
      ],
    }
  },
  computed: {
    ...mapGetters(['isLogin']),
    title() {
      if (this.isLogin) {
        return '登录您的账户'
      } else {
        return '注册您的账户'
      }
    },
    action() {
      if (this.isLogin) {
        return '注册'
      } else {
        return '登录'
      }
    },
  },
  methods: {
    ...mapMutations(['setIsLogin']),
    //验证码函数 自动校准输入顺序
    adjust(index) {
      let dom = document.getElementById('captcha' + this.activeInput)
      if (index !== this.activeInput && dom) {
        dom.focus()
      }
    },
    //验证码函数 控制前后方向
    inputDirection(index) {
      let val = this.setCaptchas[index].num
      // 回退键处理
      if (event.keyCode === 8 && val === '') {
        // 重新校准
        let dom = document.getElementById('captcha' + (index - 1))
        this.activeInput = index - 1
        if (dom) dom.focus()
      }
      if (event.keyCode !== 8 && val !== '') {
        let dom = document.getElementById('captcha' + (index + 1))
        this.activeInput = index + 1
        if (dom) dom.focus()
      }
    },
    //验证码函数 输入框相互联动
    inputFinish(index) {
      let val = this.setCaptchas[index].num
      this.activeInput = val ? index + 1 : index - 1
      let dom = document.getElementById('captcha' + this.activeInput)
      if (dom) dom.focus()
      if (index === this.setCaptchas.length - 1) {
        let code = this.setCaptchas.map(x => x.num).join('')
        if (code.length === 6) {
          this.payPwdFlag = false
          this.payPwdAffFlag = true
        }
      }
    },
    sendCodePhone() {
      this.axios
        .post('/r0/checkCode', {
          phone_num: LoginFormPhone.data().phone,
        })
        .then(response => {
          //成功逻辑
          this.sendCodeVer = false // 控制显示隐藏
          this.authTime = 60
          let timeInt = setInterval(() => {
            this.authTime--
            if (this.authTime <= 0) {
              this.sendCodeVer = true
              window.clearInterval(this.timeInt)
            }
          }, 1000)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 480px;
  height: 600px;
  background: #ffffff;
  box-shadow: 14px 10px 40px 0 rgba(15, 15, 15, 0.1);
  border-radius: 16px !important;
  padding: 40px 40px 40px 40px;
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

.title {
  font-size: 28px;
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: 600;
  color: #000000;
  line-height: 28px;
}

.action {
  font-size: 18px;
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: Bold;
  color: #00cfac;
  line-height: 28px;
  cursor: pointer;
}

.tabs-after {
  position: relative;
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  &::after {
    content: '';
    height: 5px;
    background-color: #f7f8fb;
  }
}
.row-center {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.captcha_input_wrapper {
  width: 100%;
}
.captcha_input_box {
  width: 54px;
  height: 60px;
  margin-right: 12px;
  background: #f7f8fb;
  border-radius: 6px;
  text-align: center;
  color: rgb(27, 215, 167);
  border: none;
  outline: medium;
}
</style>
