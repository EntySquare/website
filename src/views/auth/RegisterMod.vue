<template>
  <v-container style="padding: 0px;">
    <v-row>
      <v-col
        cols="12"
        style="height: 705px; background: #FFFFFF;box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.04);border-radius: 16px;padding: 40px 40px 40px 40px;"
      >
        <v-row>
          <v-col
            cols="10"
            style="font-size: 28px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #000000;line-height: 28px;"
          >
            注册您的帐户
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
            登录
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
                  <div
                    style="float:right;top:142px; right:23px;position:absolute;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #00CFAC;line-height: 19px;"
                  >
                    发送验证码
                  </div>
                </v-row>
                <v-row>
                  <v-col cols="12" style="height: 80px">
                    <v-text-field
                      label="请输入验证码"
                      single-line
                      filled
                      rounded
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-expansion-panels flat>
                    <v-expansion-panel :key="1">
                      <v-expansion-panel-header>
                        邀请码（选填）
                      </v-expansion-panel-header>
                      <v-expansion-panel-content style="padding:0px;">
                        <v-row style="padding:0px;">
                          <v-col cols="12" style="height: 80px">
                            <v-text-field
                              label="请输入邀请码"
                              single-line
                              filled
                              rounded
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-row>

                <v-row style="">
                  <!-- <v-col cols="3" align="left" style="font-size: 14px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #00CFAC;line-height: 20px;margin-left:10px;">忘记密码？</v-col> -->
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
                    注册
                  </v-btn>
                </v-row>

                <v-row style="">
                  <v-col cols="12" class="text-center">
                    <label
                      ><input name="Fruit" type="checkbox" value="2" />
                    </label>
                    &#32;
                    <span style="color: #7F7F7F ;font-size: 14px;"
                      >我已阅读并同意</span
                    >
                    <span style="color: #00CFAC ;font-size: 14px;"
                      >隐私条款</span
                    >
                    和
                    <span style="color: #00CFAC ;font-size: 14px;"
                      >服务协议</span
                    >
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
                  <v-col cols="12" style="height: 80px">
                    <v-text-field
                      label="请输入验证码"
                      single-line
                      filled
                      rounded
                    >
                    </v-text-field>
                    <div
                      style="float:right;top:142px; right:23px;position:absolute;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #00CFAC;line-height: 19px;"
                    >
                      发送验证码
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" style="height: 80px">
                    <v-text-field
                      v-model="password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      counter
                      @click:append="show1 = !show1"
                      label="请输入密码"
                      single-line
                      filled
                      rounded
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-expansion-panels flat>
                    <v-expansion-panel :key="1">
                      <v-expansion-panel-header>
                        邀请码（选填）
                      </v-expansion-panel-header>
                      <v-expansion-panel-content style="padding:0px;">
                        <v-row style="padding:0px;">
                          <v-col cols="12" style="height: 80px">
                            <v-text-field
                              label="请输入邀请码"
                              single-line
                              filled
                              rounded
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-row>

                <v-row style="height: 10px;"></v-row>
                <v-row style="width: 100%;height: 56px;margin-left:0.5px;">
                  <v-btn
                    style="border-radius:100px;background: linear-gradient(90deg, #F1F1F2 0%, #B2B2B2 100%);"
                    depressed
                    bottom
                    large
                    block
                  >
                    注册
                  </v-btn>
                </v-row>

                <v-row style="">
                  <v-col cols="12" class="text-center">
                    <label
                      ><input name="Fruit" type="checkbox" value="2" />
                    </label>
                    &#32;
                    <span style="color: #7F7F7F ;font-size: 14px;"
                      >我已阅读并同意</span
                    >
                    <span style="color: #00CFAC ;font-size: 14px;"
                      >隐私条款</span
                    >
                    和
                    <span style="color: #00CFAC ;font-size: 14px;"
                      >服务协议</span
                    >
                  </v-col>
                </v-row>
              </v-tab-item>
            </v-tabs-items>
          </v-col>
        </v-row>
      </v-col>
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
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: '',
      rules: {
        // required: value => !!value || 'Required.',
        // min: v => v.length >= 8 || 'Min 8 characters',
        // emailMatch: () => (`The email and password you entered don't match`),
      },
    }
  },
}
</script>

<style></style>
