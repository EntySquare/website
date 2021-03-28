<template>
  <v-card class="wrap">
    <div class="sub-title">
      重置密码
    </div>
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
        v-model="password"
        :rules="passwordRules"
        label="请输入密码"
        single-line
        filled
        dense
        rounded
      ></v-text-field>
      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="请再次输入密码"
        single-line
        filled
        dense
        rounded
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
  </v-card>
</template>

<script>
export default {
  name: 'AuthReset',
  data() {
    return {
      tab: null,
    }
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
