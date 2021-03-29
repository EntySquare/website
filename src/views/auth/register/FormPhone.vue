<template>
  <v-tab-item>
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
            dense
            rounded
          ></v-select>
        </v-col>
        <v-col cols="8">
          <v-text-field
          autocomplete="off"
            v-model="phone"
            :rules="phoneRules"
            label="请输入手机号"
            single-line
            filled
            dense
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
        dense
        rounded
      ></v-text-field>
      <span
        style="color: #00CFAC; position: absolute; top: 21%; right: 19px; cursor: pointer"
        @click="sendCode()"
        v-show="sendCodeVue"
        ><p>发送验证码</p>
      </span>

      <span
        v-show="!sendCodeVue"
        style="color: #00CFAC; position: absolute; top: 21%; right: 19px; cursor: pointer"
      >
        <p>{{ authTime }} S</p>
      </span>
      <v-text-field
      autocomplete="off"
        v-model="password"
        :rules="passwordRules"
        label="请输入密码"
        single-line
        filled
        dense
        rounded
         :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        @click:append="show1 = !show1"
      ></v-text-field>
      <v-text-field
      autocomplete="off"
        v-model="password"
        :rules="passwordRules"
        label="请再次输入密码"
        single-line
        filled
        dense
        rounded
         :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        @click:append="show1 = !show1"
      ></v-text-field>

      <div class="card-bottom">
        <v-btn
          style="background: linear-gradient(90deg, #F1F1F2 0%, #B2B2B2 100%);"
          depressed
          bottom
          rounded
          large
          block
          @click="submit"
        >
          注册
        </v-btn>

        <div class="text-center mt-1">
          <span style="color: #7F7F7F ;font-size: 14px; margin-right:0.5em">
            还未创建账号?
          </span>
          <span style="color: #00CFAC ;font-size: 14px;">
            注册
          </span>
        </div>
      </div>
    </v-form>
  </v-tab-item>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      show1:false,
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
      if (this.valid) {
        this.axios
          .post('/r0/register', {
            user_name: this.phone,
            phone_num: this.phone,
            password: this.password,
            code: this.checkCode,
          })
          .then(response => {
            if(response.data.errcode != null){
                alert("邮箱注册失败！");
                return
              }
            alert('注册成功！跳转到登录页,userid:' + response.data.UserId)
            this.$router.push('/login')
            console.log(response)
          })
      }
    },
    sendCode() {
      
      this.$refs.form.validate()
      this.axios
        .post('/r0/checkCode', {
          phone_num: this.phone,
        })
        .then(response => {
           if(response.data.errcode != null){
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
.form {
  height: 400px;
  position: relative;
}
.card-bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
