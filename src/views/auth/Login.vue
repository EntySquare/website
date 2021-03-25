<template>
  <v-container fill-height fluid class="align-start" style="padding: 0px;">
    <v-row
      style="background: linear-gradient(136deg, #FFFFFF 0%, #F3F6FA 100%);width: 100%;height:1080px;padding: 0px;"
    >
      <v-col class="col-12" style="height: 20px;"> </v-col>
      <v-row>
        <v-col cols="2" style="height: 20px; "></v-col>
        <v-col cols="2" style="height: 20px;">
          <img src="@/assets/logo_black.png" style="width:126px;height:auto;" />
        </v-col>
        <v-col cols="2" style="height: 20px; "></v-col>
        <v-col cols="2" style="height: 20px; "></v-col>
        <v-col cols="2" style="height: 20px; "></v-col>
        <v-col cols="2" style="height: 20px; "></v-col>
      </v-row>

      <v-col class="col-12" style="height: 137px;"> </v-col>

      <v-row>
        <v-col cols="2" style="height: 20px; "></v-col>
        <v-col cols="4" style="height: 157px; ">
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
        <v-col cols="1" style="height: 20px; "></v-col>
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
            <v-col cols="12" style="width:100%">
              <v-tabs v-model="model" slider-size="5" grow color="#00FFBC">
                <v-tab :href="`#tab-1`">
                  手机号
                </v-tab>
                <v-tab :href="`#tab-2`">
                  邮箱
                </v-tab>
              </v-tabs>
              <div
                style="width:100%;height:5px;background:#F7F8FB;margin-top:-1px;"
              ></div>
              <v-tabs-items v-model="model">
                <v-tab-item :value="`tab-1`">
                  <v-row style="height:32px"> </v-row>
                  <v-row>
                    <v-col cols="4" style="height: 80px">
                      <v-text-field
                        label="区号"
                        hint="如中国 +86"
                        single-line
                        filled
                        rounded
                      ></v-text-field>
                    </v-col>
                    <v-col cols="8" style="height: 80px">
                      <v-text-field
                        label="请输入手机号"
                        single-line
                        filled
                        rounded
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" style="height: 70px">
                      <v-text-field
                        label="请输入密码"
                        single-line
                        filled
                        rounded
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row style="">
                    <v-col
                      cols="3"
                      align="left"
                      style="font-size: 14px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #00CFAC;line-height: 20px;margin-left:10px;"
                      >忘记密码？</v-col
                    >
                    <v-col cols="9" style="padding:10px 15px 10px 10px"></v-col>
                  </v-row>
                  <v-row style="height: 40px;"></v-row>
                  <v-row style="width: 100%;height: 56px;margin-left:0.5px;">
                    <v-btn
                      style="border-radius:100px;background: linear-gradient(90deg, #F1F1F2 0%, #B2B2B2 100%);"
                      depressed
                      bottom
                      large
                      block
                    >
                      登录
                    </v-btn>
                  </v-row>

                  <v-row style="">
                    <v-col cols="12" class="text-center">
                      <span style="color: #7F7F7F ;font-size: 14px;"
                        >还未创建账号?</span
                      >
                      <span style="color: #00CFAC ;font-size: 14px;">注册</span>
                    </v-col>
                  </v-row>
                </v-tab-item>

                <v-tab-item :value="`tab-2`">
                  <v-row style="height:32px"> </v-row>
                  <v-row>
                    <v-col cols="12" style="height: 80px">
                      <v-text-field
                        label="请输入邮箱"
                        single-line
                        filled
                        rounded
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" style="height: 70px">
                      <v-text-field
                        label="请输入密码"
                        single-line
                        filled
                        rounded
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row style="">
                    <v-col
                      cols="3"
                      align="left"
                      style="font-size: 14px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #00CFAC;line-height: 20px;margin-left:10px;"
                      >忘记密码？</v-col
                    >
                    <v-col cols="9" style="padding:10px 15px 10px 10px"></v-col>
                  </v-row>
                  <v-row style="height: 40px;"></v-row>
                  <v-row style="width: 100%;height: 56px;margin-left:0.5px;">
                    <v-btn
                      style="border-radius:100px;background: linear-gradient(90deg, #F1F1F2 0%, #B2B2B2 100%);"
                      depressed
                      bottom
                      large
                      block
                    >
                      登录
                    </v-btn>
                  </v-row>

                  <v-row style="">
                    <v-col cols="12" class="text-center">
                      <span style="color: #7F7F7F ;font-size: 14px;"
                        >还未创建账号?</span
                      >
                      <span style="color: #00CFAC ;font-size: 14px;">注册</span>
                    </v-col>
                  </v-row>
                </v-tab-item>
              </v-tabs-items>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2" style="height: 20px; "></v-col>
      </v-row>

      <v-row class="col-12" style="height: 295px;"> </v-row>
    </v-row>
  </v-container>
</template>

<script>
import countryCodeSelector from 'vue-country-code-selector'

export default {
  name: 'Login',
  components: {
    countryCodeSelector,
  },
  data() {
    return {
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      model: 'tab-2',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      value: 86,
    }
  },
}
</script>

<style></style>
