<template>
  <v-row
    style="background: cadetblue;width: 100%;height:1080px;background: fuchsia;padding: 0px;"
  >
    <v-col class="col-12" style="height: 20px;"> </v-col>
    <v-row>
      <v-col cols="2" style="height: 20px; background: cornflowerblue;"></v-col>
      <v-col cols="2" style="height: 20px; background: chartreuse;">
        <img src="../assets/logo_black.png" style="width:126px;height:auto;" />
      </v-col>
      <v-col cols="2" style="height: 20px; background: cornflowerblue;"></v-col>
      <v-col cols="2" style="height: 20px; background: chartreuse;"></v-col>
      <v-col cols="2" style="height: 20px; background: cornflowerblue;"></v-col>
      <v-col cols="2" style="height: 20px; background: cadetblue;"></v-col>
    </v-row>

    <v-col class="col-12" style="height: 137px;"> </v-col>

    <v-row>
      <v-col cols="2" style="height: 20px; background: cornflowerblue;"></v-col>
      <v-col cols="4" style="height: 157px; background: chartreuse;">
        <samp
          style="font-size: 56px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #000000;line-height: 78px;"
        >
          加密资产理财
        </samp>
        <p></p>
        <samp
          style="font-size: 56px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #000000;line-height: 78px;"
        >
          马上加入 investor
        </samp>
        <p style="height: 79px;"></p>
        <samp
          style="font-size: 28px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #000000;line-height: 38px;"
        >
          资产配置服务
        </samp>
        <p style="height: 54px;"></p>
        <samp
          style="font-size: 28px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #000000;line-height: 38px;"
        >
          轻松兑换资产
        </samp>
        <p style="height: 54px;"></p>
        <samp
          style="font-size: 28px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #000000;line-height: 38px;"
        >
          智能安全钱包
        </samp>
      </v-col>
      <v-col cols="1" style="height: 20px; background: cornflowerblue;"></v-col>
      <v-col
        cols="3"
        style="height: 600px; background: #FFFFFF;box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.04);border-radius: 16px;padding: 40px 40px 40px 40px;"
      >
        <v-row>
          <v-col
            cols="10"
            style="font-size: 28px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #000000;line-height: 28px;"
          >
            登录您的帐户
            <p style="height: 15px;"></p>
            <p
              style="font-size: 14px;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #808080;line-height: 14px;"
            >
              欢迎来到investors
            </p>
          </v-col>
          <v-col
            cols="2"
            style="font-size: 18px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #00CFAC;line-height: 28px;"
          >
            注册
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" style="padding: 0px;">
            <v-col
              cols="12"
              class="text-center"
              style="width: 100%;font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 600;color: #00CFAC;line-height: 17px;"
            >
              手机号</v-col
            >
            <button
              cols="6"
              id="2021but"
              type="button"
              style="line-height:80px; background: linear-gradient(270deg, #00FFBC 0%, #5B7ADE 100%); height: 4px;font-size: 32px; width:100%;outline: none;"
            ></button>
          </v-col>
          <v-col cols="6" style="padding: 0px;">
            <v-col
              cols="12"
              class="text-center"
              style="width: 100%;font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 600;color: #000000;line-height: 17px;"
            >
              邮箱</v-col
            >
            <button
              cols="12"
              id="2021but"
              type="button"
              style="line-height:80px; background: #F7F8FB; height: 4px;font-size: 32px; width:100%;outline: none;"
            ></button>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="11"></v-col>
          <div
            class="tel-container"
            style=" font-size: 14px;font-family: Nunito-Bold, Nunito; font-weight: bold;color: #000000; line-height: 19px;"
          >
            <country-code-selector :countryCode.sync="value">
            </country-code-selector>
            <!-- <input type="text" v-model="value"> -->
          </div>
          <v-col cols="1"></v-col>
        </v-row>
      </v-col>
      <v-col cols="2" style="height: 20px; background: cadetblue;"></v-col>
    </v-row>

    <v-row class="col-12" style="height: 295px;background: cadetblue;"> </v-row>
  </v-row>
</template>

<script>
import countryCodeSelector from 'vue-country-code-selector'
export default {
  name: 'HomeHeader',
  components: {
    countryCodeSelector,
  },
  data() {
    return {
      value: 86,
    }
  },
}
</script>

<style></style>
