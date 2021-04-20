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
            rounded
          ></v-text-field>
        </v-col>
      </v-row>
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
      ></v-text-field>
      <router-link to="/resetPwd">
        <div
          style="font-size: 14px;font-weight: bold;color: #00CFAC;line-height: 20px;margin-left:10px;
          margin-top:-10px; cursor: pointer"
        >
          忘记密码？
        </div>
      </router-link>
      <div class="card-bottom">
        <v-btn
          style="background: linear-gradient(90deg, #F1F1F2 0%, #B2B2B2 100%); height: 56px; margin-bottom: 20px"
          depressed
          bottom
          rounded
          large
          block
          @click="loginByPhone"
        >
          <div style="font-size: 16px; color: #FFFFFF">登录</div>
        </v-btn>
      </div>
    </v-form>
  </v-tab-item>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      show1: false,
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
      userName: '未登录',
    }
  },
  methods: {
    loginByPhone() {
      this.$refs.form.validate()
      console.log(this.valid)
      if (this.valid) {
        return new Promise((resolve, reject) => {
          this.axios
            .post('r0/login', {
              user_name: this.phone,
              password: this.password,
              types: 'phone',
              equipment: 1,
            })
            .then(response => {
              console.log(response)
              if (response.data.errcode != null) {
                alert('登录失败！')
                return
              }
              if (response.status === 200) {
                this.userName = response.data.UserName
                localStorage.setItem('token', response.data.Token)
              }
              this.$router.push({
                path: '/',
                query: {
                  name: this.userName,
                },
              })
              //this.userName = this.$route.params.userName
            })
            .catch(error => {
              reject(error)
            })
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  height: 400px;
  position: relative;
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
.card-bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
