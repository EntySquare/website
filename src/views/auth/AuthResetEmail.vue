<template>
  <v-card class="wrap">
    <v-row style="height: 30px;"> </v-row>
    <div
      class="d-flex justify-lg-center"
      style="font-size: 28px;
font-weight: 600;
color: #000000;
line-height: 28px;"
    >
      重置密码
    </div>
    <v-row style="height: 30px;"> </v-row>
    <v-form v-model="valid" ref="form" class="mt-4 form">
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="请输入邮箱"
            single-line
            filled
            rounded
          ></v-text-field>
        </v-col>
      </v-row>
      <v-text-field
        label="请输入验证码"
        v-model="checkCode"
        single-line
        filled
        rounded
      ></v-text-field>
      <span
        style="color: #00CFAC; position: absolute; top: 210px; right: 60px; cursor: pointer"
        @click="sendCode()"
        v-show="sendCodeVue"
        ><p>发送验证码</p>
      </span>

      <span
        v-show="!sendCodeVue"
        style="color: #00CFAC; position: absolute; top: 210px; right: 60px; cursor: pointer"
      >
        <p>{{ authTime }} S</p>
      </span>
      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="请输入密码"
        single-line
        filled
        rounded
      ></v-text-field>
      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="请再次输入密码"
        single-line
        filled
        rounded
      ></v-text-field>

      <div class="card-bottom">
        <v-btn
          style="background: linear-gradient(90deg, #F1F1F2 0%, #B2B2B2 100%); height: 56px; color: #FFFFFF"
          depressed
          bottom
          rounded
          large
          block
          @click="submit"
        >
          重置密码
        </v-btn>

        <div class="text-center mt-1">
          <!-- <span style="color: #7F7F7F ;font-size: 14px; margin-right:0.5em">
            还未创建账号?
          </span>
          <span style="color: #00CFAC ;font-size: 14px;">
            注册
          </span> -->
        </div>
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
  </v-card>
</template>

<script>
export default {
  name: 'AuthReset',
  data() {
    return {
      alert: {
        alertInfo: false,
        alertType: 'info',
        alertText: '',
        alertColor: '#00CFAC',
      },
      sendCodeVue: true, // 控制发送验证码按钮显示
      authTime: 0, // 倒计时
      checkCode: '',
      valid: false,
      areaCode: '+86',
      areaCodes: ['+86', '+87'],
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
          .post('/r0/resetMatch', {
            password: this.password,
            email: this.email,
            code: this.checkCode,
          })
          .then(response => {
            if (response.data.errcode != null) {
              this.alertTip('error', '修改失败')
              return
            }
            this.alertTip('success', '修改成功')
            this.$router.push('/')
            console.log(response)
          })
      }
    },
    sendCode() {
      this.$refs.form.validate()
      this.axios
        .post('/r0/resetSetCheckCode', {
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
.wrap {
  width: 480px;
  background: #ffffff;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.04);
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
</style>
