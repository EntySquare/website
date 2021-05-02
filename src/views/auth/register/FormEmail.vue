<template>
  <v-tab-item class="tabItem">
    <v-form v-model="valid" ref="form" class="mt-4 form">
      <v-text-field
        autocomplete="off"
        v-model="email"
        :rules="emailRules"
        label="请输入邮箱"
        single-line
        filled
        rounded
      ></v-text-field>
      <v-text-field
        autocomplete="off"
        label="请输入验证码"
        v-model="checkCode"
        single-line
        filled
        rounded
      ></v-text-field>
      <span
        style="color: #00CFAC; font-size: 14px; position: absolute; top: 26%; right: 25px; cursor: pointer"
        @click="sendCode()"
        v-show="sendCodeVue"
        >发送验证码
      </span>

      <span
        v-show="!sendCodeVue"
        style="color: #00CFAC; position: absolute; top: 103px; right: 25px; cursor: pointer"
      >
        {{ authTime }} s
      </span>
      <v-text-field
        autocomplete="off"
        v-model="password"
        :rules="passwordRules"
        label="请输入密码"
        single-line
        filled
        rounded
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        @click:append="show1 = !show1"
      >
      </v-text-field>
      <div style="height: 20px"></div>
      <div>
        <v-btn
          style="background: linear-gradient(90deg, #F1F1F2 0%, #B2B2B2 100%); font-size: 16px; height: 56px"
          depressed
          bottom
          rounded
          large
          block
          @click="submit"
        >
          <div style="font-size: 16px; color: #FFFFFF">注册</div>
        </v-btn>
      </div>
    </v-form>
    <v-dialog
      v-model="alert.alertInfo"
      width="300"
      height="400"
      overlay-color="#FFFFF"
    >
      <v-alert
        border="left"
        :color="alert.alertColor"
        text
        :type="alert.alertType"
        style="margin-bottom: 0"
        >{{ alert.alertText }}</v-alert
      >
    </v-dialog>
  </v-tab-item>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      show1: false,
      sendCodeVue: true, // 控制发送验证码按钮显示
      authTime: 0, // 倒计时
      valid: false,
      checkCode: '',
      email: '',
      emailRules: [
        v => !!v || '邮箱必须输入',
        v =>
          /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(v) ||
          '邮箱格式不对',
      ],
      password: '',
      passwordRules: [
        v => !!v || '密码必须输入',
        v => !/^(\s)+$/.test(v) || '密码不能有空格',
        v => /^[\da-zA-Z]{6,12}$/.test(v) || '密码为6-12位',
      ],
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate()
      console.log(this.valid)
      if (this.valid) {
        this.axios
          .post('/r0/register', {
            user_name: this.email,
            email: this.email,
            password: this.password,
            code: this.checkCode,
          })
          .then(response => {
            if (response.data.errcode != null) {
              this.alertTip('error', '邮箱注册失败')
              return
            }
            this.loginByEmail()
          })
      }
    },
    sendCode() {
      this.$refs.form.validate()
      this.axios
        .post('/r0/checkCode', {
          email: this.email,
        })
        .then(response => {
          if (response.data.errcode != null) {
            return
          }
          //成功逻辑
          this.sendCodeVue = false // 控制显示隐藏
          this.authTime = 60
          let timeInt = setInterval(() => {
            this.authTime--
            if (this.authTime <= 0) {
              this.sendCodeVue = true
              window.clearInterval(this.timeInt)
            }
          }, 1000)
        })
    },
    loginByEmail() {
      this.axios
        .post('r0/login', {
          user_name: this.email,
          password: this.password,
          types: 'mailbox',
          equipment: 1, //web
        })
        .then(response => {
          console.log(response)
          if (response.data.errcode != null) {
            this.alertTip('error', '登录失败')
            return
          }
          if (response.status === 200) {
            this.userName = response.data.UserName
            localStorage.setItem('token', response.data.Token)
          }
          this.$router.push('/')
        })
    },
    alertTip: function(type, textString) {
      let color = '#00CFAC'
      if (type === 'success') {
        color = 'green'
      } else if (type === 'error') {
        color = 'red'
      }
      this.alert.alertInfo = true
      this.alert.alertType = type
      this.alert.alertText = textString
      this.alert.alertColor = color
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  height: 400px;
  position: relative;
  font-size: 14px;
}
.card-bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 16px;
}
.tabItem {
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
</style>
