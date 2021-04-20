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
    <v-row style="height: 60px;"> </v-row>
    <v-form v-model="valid" ref="form" class="mt-4 form">
      <v-row>
        <v-col cols="4">
          <v-select
            v-model="areaCode"
            label="区号"
            hint="如中国 +86"
            :items="areaCodes"
            single-line
            filled
            rounded
          ></v-select>
        </v-col>
        <v-col cols="8">
          <v-text-field
            v-model="phone"
            :rules="phoneRules"
            label="请输入手机号"
            single-line
            filled
            rounded
          ></v-text-field>
        </v-col>
      </v-row>
      <v-text-field
        autocomplete="off"
        label="请输入验证码"
        v-model="checkCode"
        single-line
        filled
        rounded
      ></v-text-field>
      <span
        style="color: #00CFAC; position: absolute; top: 42%; right: 60px; cursor: pointer"
        @click="sendCode()"
        v-show="sendCodeVue"
        ><p>发送验证码</p>
      </span>

      <span
        v-show="!sendCodeVue"
        style="color: #00CFAC; position: absolute; top: 42%; right: 60px; cursor: pointer"
      >
        <p>{{ authTime }} s</p>
      </span>
      <v-text-field
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        @click:append="show1 = !show1"
        :rules="passwordRules"
        label="请输入密码"
        single-line
        filled
        rounded
      ></v-text-field>
      <v-text-field
        v-model="passwordAff"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        @click:append="show1 = !show1"
        :rules="passwordRules"
        label="请再次输入密码"
        single-line
        filled
        rounded
      ></v-text-field>

      <div class="card-bottom">
        <v-btn
          style="background: linear-gradient(90deg, #F1F1F2 0%, #B2B2B2 100%); height: 56px"
          depressed
          bottom
          rounded
          large
          block
          @click="submit"
        >
          <div style="color: #FFFFFF">重置密码</div>
        </v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: 'AuthReset',
  data() {
    return {
      show1: true,
      sendCodeVue: true, // 控制发送验证码按钮显示
      authTime: 0, // 倒计时
      checkCode: '',
      valid: false,
      areaCode: '+86',
      areaCodes: ['+86', '+87'],
      phone: '',
      phoneRules: [
        v => !!v || '手机号必须输入',
        v => /^(\d)+$/.test(v) || '手机号是数字',
        v => /^(\d){11}$/.test(v) || '手机号是11位',
      ],
      password: '',
      passwordAff: '',
      passwordRules: [
        v => !!v || '密码必须输入',
        v => !/^(\s)+$/.test(v) || '密码不能有空格',
        v => /^[\da-zA-Z]{6,12}$/.test(v) || '密码为6-12位',
      ],
    }
  },
  methods: {
    submit() {
      if (this.password !== this.passwordAff) {
        alert('密码不一致！')
        return
      }
      if (this.valid) {
        this.axios
          .post('/r0/resetMatch', {
            phoneNum: this.phone,
            password: this.passwordAff,
            email: '',
            code: this.checkCode,
          })
          .then(response => {
            if (response.data.errcode != null) {
              alert('修改失败！')
              return
            }
            alert('修改成功！,userid:' + response.data.UserId)
            this.$router.push('/')
            console.log(response)
          })
      }
    },
    sendCode() {
      this.$refs.form.validate()
      this.axios
        .post('/r0/resetSetCheckCode', {
          phone_num: this.phone,
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
