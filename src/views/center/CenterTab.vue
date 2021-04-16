<template>
  <div>
    <v-row>
      <v-col cols="3"></v-col>
      <v-col cols="6">
        <v-tabs
          v-model="model"
          slider-size="5"
          background-color="transparent"
          slider-color="#0AC6B1"
          color="black"
          center-active
        >
          <v-tab :href="`#tab-1`" style="font-size: 16px;">
            个人中心
          </v-tab>
          <div style="width: 50px"></div>
          <v-tab :href="`#tab-2`" style="font-size: 16px">安全中心</v-tab>
          <div style="width: 50px"></div>
          <v-tab disabled style="font-size: 16px">邀请好友</v-tab>
        </v-tabs>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>
    <div style="height: auto; box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.1);">
      <v-tabs-items v-model="model">
        <v-tab-item :value="`tab-1`">
          <v-card
            height="283px"
            width="960px"
            class="mx-auto"
            style="top: 28px; box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.04); border-radius: 24px;"
          >
            <v-card-title style="padding: 32px">
              <div style="font-size: 18px; font-weight: bold; color: #000000">
                我的信息
              </div>
            </v-card-title>
            <div
              class="d-inline-flex"
              style="padding-left: 32px; padding-top: 9px;"
            >
              <div style="padding-right: 31px">
                <v-img
                  style="width: 72px; height: 64px; "
                  src="https://investors.oss-cn-beijing.aliyuncs.com/assets/my_info_head.png"
                >
                </v-img>
              </div>
              <v-list style="padding-top: 0; width: 438px">
                <v-list-item>
                  <v-list-item-content style="padding-top: 0">
                    <v-list-item-title
                      v-text="phoneNum"
                      style="font-size: 20px; font-weight: bold"
                    >
                    </v-list-item-title>
                    <div class="d-inline-flex" style="font-size: 14px;">
                      <p style="margin-top: 2px">UID: {{ userId }}</p>
                      <div style="width: 8px"></div>
                      <div
                        class="text-center"
                        style="width: 74px; height: 18px; background: #999999;padding-top: 0;
                        border-radius: 2px; line-height: 10px; font-size: 10px; color: #FFFFFF"
                      >
                        <div style="margin-top: 4px">
                          KYC 认证
                        </div>
                      </div>
                      <div style="width: 8px"></div>
                      <div
                        class="text-center"
                        style="width: 52px; height: 18px; background: #5CBE52;padding-top: 0;
                        border-radius: 2px; line-height: 10px; font-size: 10px; color: #FFFFFF"
                      >
                        <div style="margin-top: 4px">
                          安全
                        </div>
                      </div>
                    </div>
                    <v-list-item-subtitle
                      style="font-size: 12px; color: #808080"
                    >
                      上次登录时间: {{ lastLoginTime | formatDate }}
                    </v-list-item-subtitle>
                    <v-list-item-subtitle
                      v-text="lastLoginIp"
                      style="font-size: 12px; color: #808080"
                    >
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-action>
                      <div class="d-inline-flex">
                        <div style="margin-top: 4px">我同意订阅企业动态</div>
                        <div style="width: 12px"></div>
                        <v-switch
                          v-model="infoSwitch"
                          color="#5CBE52"
                        ></v-switch>
                      </div>
                    </v-list-item-action>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-list style="padding-top: 0">
                <div class="d-inline-flex">
                  <div>
                    <v-img
                      src="https://investors.oss-cn-beijing.aliyuncs.com/assets/center_diamond1.png"
                      style="width: 20px; height: 20px;"
                    ></v-img>
                  </div>

                  <div style="width: 7px"></div>
                  <p
                    style="width: 31px;
                           height: 16px; padding-top: 0; margin-top: 2px;
                           font-size: 16px;font-weight: 600;color: #00CFAC;line-height: 16px;"
                  >
                    Lv.1
                  </p>
                </div>
                <div
                  style="
                      width: 73px;
                      height: 12px;
                      font-size: 12px;
                      font-weight: 400;
                      color: #808080;
                      line-height: 12px;"
                >
                  24h 提现额度
                </div>
                <div style="height: 12px"></div>
                <div
                  style="
                      width: 72px;
                      height: 12px;
                      font-size: 12px;
                      font-weight: 600;
                      color: #00CFAC;
                      line-height: 12px;"
                >
                  10000 USDT
                </div>
              </v-list>
              <div style="width: 120px">
                <v-divider
                  style="width: 60px; height: 2px; transform: rotate(90deg); margin-left: 25px; margin-top: 30px;
                         background: #1B212F;
                         opacity: 0.07;"
                ></v-divider>
              </div>
              <v-list style="padding-top: 0">
                <div class="d-inline-flex">
                  <div>
                    <v-img
                      src="https://investors.oss-cn-beijing.aliyuncs.com/assets/center_diamond2.png"
                      style="width: 20px; height: 20px;"
                    ></v-img>
                  </div>

                  <div style="width: 7px"></div>
                  <p
                    style="width: 31px;
                           height: 16px; padding-top: 0; margin-top: 2px;
                           font-size: 16px;font-weight: 600;color: #666666;line-height: 16px;"
                  >
                    Lv.2
                  </p>
                </div>
                <div
                  style="
                      width: 73px;
                      height: 12px;
                      font-size: 12px;
                      font-weight: 400;
                      color: #808080;
                      line-height: 12px;"
                >
                  24h 提现额度
                </div>
                <div style="height: 12px"></div>
                <div
                  style="
                      width: 72px;
                      height: 12px;
                      font-size: 12px;
                      font-weight: 600;
                      color: #808080;
                      line-height: 12px;"
                >
                  无限制
                </div>
              </v-list>
            </div>
          </v-card>
          <div style="height: 72px"></div>
          <v-card
            height="217px"
            width="960px"
            class="mx-auto"
            style="top: 28px; box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.04); border-radius: 24px;"
          >
            <div class="d-inline-flex">
              <div>
                <v-card-title
                  style="padding-top: 32px; padding-left: 32px; font-size: 16px"
                >
                  <div
                    style="font-size: 18px; font-weight: bold; color: #000000"
                  >
                    UID账号
                  </div>
                </v-card-title>
                <v-card-subtitle style="padding-left: 32px; font-size: 14px">
                  INVESTORS号是账号的唯一凭证，只能设置一次
                </v-card-subtitle>
              </div>
              <div style="width: 395px"></div>
              <div style="padding-top: 44px">UID:{{ userId }}</div>
              <div style="width: 20px"></div>
              <v-btn
                @click="user_up2 = true"
                text
                style="width: 76px; height: 30px; margin-top: 39px; background: #F7F8FB;
                       border-radius: 15px; color: #00CFAC; font-size: 14px; font-weight: 600;"
                >修改
              </v-btn>
            </div>
            <v-divider
              style="width: 896px; color: #F5F5F5; margin-left: 30px"
            ></v-divider>
            <div class="d-inline-flex">
              <div>
                <v-card-title style="padding-left: 32px">
                  <div
                    style="font-size: 18px; font-weight: bold; color: #000000"
                  >
                    实名认证
                  </div>
                </v-card-title>
                <v-card-subtitle
                  style="padding-left: 32px; padding-bottom: 32px"
                >
                  完成实名认证之后即可获得更高的日提现额度
                </v-card-subtitle>
              </div>
              <div style="width: 455px"></div>
              <div style="padding-top: 44px">未认证</div>
              <div style="width: 20px"></div>
              <router-link to="/realName">
                <v-btn
                  text
                  outlined
                  style="width: 76px; height: 30px; margin-top: 39px; background: #F7F8FB;
                       border-radius: 15px; color: #00CFAC; border: 1px solid #00CFAC; font-size: 14px; font-weight: 600"
                  >认证
                </v-btn>
              </router-link>
            </div>
          </v-card>
          <div style="height: 72px"></div>
          <v-card
            height="390px"
            width="960px"
            class="mx-auto"
            style="top: 28px; box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.04); border-radius: 24px;"
          >
            <div class="d-inline-flex">
              <v-card-title style="padding-top: 32px; padding-left: 32px">
                <div style="font-size: 18px; font-weight: bold; color: #000000">
                  钱包地址
                </div>
              </v-card-title>

              <div style="width: 700px"></div>
              <div style="margin-left: 32px; padding-top: 32px">
                <v-btn
                  @click="addqianbao1 = true"
                  text
                  outlined
                  style="width: 76px; height: 30px; background: #F7F8FB;
                       border-radius: 15px; color: #00CFAC; border: 1px solid #00CFAC; font-size: 14px; font-weight: 600"
                >
                  添加
                </v-btn>
              </div>
            </div>
            <v-row style="padding-left: 32px; padding-top: 32px">
              <v-col cols="2">
                <div
                  style="width: 28px; height: 20px; font-size: 14px; font-weight: 400; color: #8A8A8A; line-height: 20px;"
                >
                  币种
                </div>
              </v-col>
              <v-col cols="2">
                <div
                  style="width: 28px; height: 20px; font-size: 14px; font-weight: 400; color: #8A8A8A; line-height: 20px;"
                >
                  备注
                </div>
              </v-col>
              <v-col cols="2">
                <div
                  style="width: 28px; height: 20px; font-size: 14px; font-weight: 400; color: #8A8A8A;
                  line-height: 20px; white-space: nowrap"
                >
                  钱包地址
                </div>
              </v-col>
              <v-col cols="2" class="offset-4">
                <div
                  style="width: 28px; height: 20px; font-size: 14px; font-weight: 400;
                  color: #8A8A8A; line-height: 20px; margin-left: 70px"
                >
                  操作
                </div>
              </v-col>
            </v-row>
            <v-divider
              style="width: 896px; color: #F5F5F5; margin-left: 30px; margin-top: 20px;"
            ></v-divider>
            <div v-for="data in list" v-bind:key="data">
              <v-row style="padding-left: 32px; padding-top: 32px">
                <v-col cols="2">
                  <div
                    style="width: 48px; height: 20px; font-size: 14px; font-weight: 600; color: #000000; line-height: 20px;"
                  >
                    {{ data.CoinType }}
                  </div>
                </v-col>
                <v-col cols="2">
                  <div
                    style="width: 28px; height: 20px; font-size: 14px; font-weight: 600; color: #000000;
                  line-height: 20px; white-space: nowrap"
                  >
                    {{ data.Remark }}
                  </div>
                </v-col>
                <v-col cols="2">
                  <div
                    style="width: 28px; height: 20px; font-size: 14px; font-weight: 600; color: #000000;
                  line-height: 20px; white-space: nowrap"
                  >
                    {{ data.Address }}
                  </div>
                </v-col>
                <v-col cols="2" class="offset-4">
                  <div style="margin-left: 75px">
                    <v-img
                      style="width: 20px; height: 20px; cursor: pointer"
                      src="https://investors.oss-cn-beijing.aliyuncs.com/assets/cancel.png"
                      @click="delWalletAddress(data.Address)"
                    ></v-img>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-card>
          <div style="height: 120px"></div>
        </v-tab-item>
        <v-tab-item :value="`tab-2`">
          <v-card
            height="498px"
            width="960px"
            class="mx-auto"
            style="top: 28px; box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.04); border-radius: 24px;"
          >
            <v-card-title
              style="padding-left: 32px; padding-top: 32px; padding-bottom: 10px"
            >
              <div style="font-size: 18px; font-weight: bold; color: #000000">
                账户信息
              </div>
            </v-card-title>
            <v-row>
              <v-col cols="6">
                <div>
                  <v-card-title style="padding-left: 32px">
                    <div
                      style="font-size: 16px; font-weight: bold; color: #000000"
                    >
                      邮箱号
                    </div>
                  </v-card-title>
                  <v-card-subtitle
                    style="padding-left: 32px; font-size: 14px; white-space: nowrap"
                  >
                    用于登录，找回密码以及收取短信验证码
                  </v-card-subtitle>
                </div>
              </v-col>
              <v-col cols="3" offset="3">
                <div
                  class="d-inline-flex"
                  style="float: right; padding-right: 32px"
                >
                  <div style="padding-top: 24px; font-size: 14px">
                    {{ emailBindState }}
                  </div>
                  <div style="width: 20px"></div>
                  <v-btn
                    text
                    style="width: 76px; height: 30px; margin-top: 20px; background: #F7F8FB;
                       border-radius: 15px; color: #00CFAC; font-size: 14px; font-weight: 600;"
                    @click="bindEmailFlag = true"
                    >{{ bindEmailBtnState }}
                  </v-btn>
                  <v-dialog
                    content-class="rounded-xl"
                    v-model="bindEmailFlag"
                    width="400"
                    height="544"
                  >
                    <div
                      style="height: 544px;width: 400px;background: #FFFFFF; padding: 30px"
                    >
                      <div
                        style="width: 120px; height: 24px; font-size: 24px;
                        font-weight: 600; color: #000000; line-height: 24px;"
                      >
                        绑定邮箱号
                      </div>
                      <div style="height: 56px"></div>
                      <v-text-field
                        autocomplete="off"
                        v-model="bindEmailNum"
                        :rules="emailRules"
                        label="请输入邮箱"
                        single-line
                        filled
                        dense
                        rounded
                      ></v-text-field>
                      <v-text-field
                        autocomplete="off"
                        label="请输入验证码"
                        v-model="emailCheckCode"
                        single-line
                        filled
                        dense
                        rounded
                      >
                      </v-text-field>
                      <span
                        style="color: #00CFAC;width: 100%; position: absolute; margin-top: -55px;
                        margin-left: 240px; font-size: 14px; font-weight: 600; cursor: pointer"
                        @click="sendCode"
                        v-show="sendCodeVue"
                        >发送验证码
                      </span>
                      <span
                        v-show="!sendCodeVue"
                        style="color: #00CFAC; position: absolute; margin-top: -57px;
                        margin-left: 240px; cursor: pointer"
                      >
                        <p>{{ authTime }} S</p>
                      </span>
                      <div style="height: 196px"></div>
                      <v-btn
                        width="340px"
                        height="56px"
                        text
                        rounded
                        @click="bindEmail(bindEmailNum, emailCheckCode)"
                        style="color: #FFFFFF; background: linear-gradient(90deg, #F1F1F2 0%, #B2B2B2 100%);"
                        >确定</v-btn
                      >
                    </div>
                  </v-dialog>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <div>
                  <v-card-title style="padding-left: 32px">
                    <div
                      style="font-size: 16px; font-weight: bold; color: #000000"
                    >
                      支付密码
                    </div>
                  </v-card-title>
                  <v-card-subtitle
                    style="padding-left: 32px; font-size: 14px; white-space: nowrap"
                  >
                    支付密码是保障您资产安全的重要凭证，请妥善保管
                  </v-card-subtitle>
                </div>
              </v-col>
              <v-col cols="3" offset="3">
                <div
                  class="d-inline-flex"
                  style="float: right; padding-right: 32px"
                >
                  <div style="padding-top: 24px; font-size: 14px">
                    {{ payPwdState }}
                  </div>
                  <div style="width: 20px"></div>
                  <v-btn
                    v-show="setPayPwd"
                    text
                    style="width: 76px; height: 30px; margin-top: 20px; background: #F7F8FB;
                       border-radius: 15px; color: #00CFAC; font-size: 14px; font-weight: 600;"
                    @click="payPwdFlag = true"
                    >设置
                  </v-btn>
                  <v-btn
                    v-show="updatePayPwd"
                    text
                    style="width: 76px; height: 30px; margin-top: 20px; background: #F7F8FB;
                       border-radius: 15px; color: #00CFAC; font-size: 14px; font-weight: 600;"
                    @click="payPwdUpdateFlag = true"
                    >修改
                  </v-btn>
                  <v-dialog
                    content-class="rounded-xl"
                    v-model="payPwdFlag"
                    width="400"
                    height="544"
                  >
                    <div
                      style="height: 544px;width: 400px;background: #FFFFFF; padding: 30px"
                    >
                      <v-img
                        class="mx-auto"
                        width="80px"
                        height="80px"
                        src="https://investors.oss-cn-beijing.aliyuncs.com/assets/userCenter/dun.png"
                        style="margin-top: 42px"
                      ></v-img>

                      <div style="height: 28px"></div>
                      <div
                        class="mx-auto"
                        style="width: 144px; height: 24px; font-size: 24px; font-weight: 600; color: #000000; line-height: 24px;"
                      >
                        设置支付密码
                      </div>
                      <div style="height: 28px"></div>
                      <div
                        class="mx-auto text-center"
                        style="width: 266px; height: 22px; font-size: 14px; font-weight: 400; color: #808080; line-height: 22px;"
                      >
                        支付密码是保障您资产安全的重要凭证，请妥善保管。
                      </div>
                      <div style="height: 40px"></div>
                      <div class="row-center captcha_input_wrapper">
                        <input
                          autocomplete="off"
                          v-for="(item, index) in setCaptchas"
                          :key="index"
                          v-model="item.num"
                          :id="'captcha' + index"
                          @input="inputFinish(index)"
                          @focus="adjust(index)"
                          @keydown="inputDirection(index)"
                          class="captcha_input_box row-center"
                          type="tel"
                          maxlength="1"
                        />
                      </div>
                    </div>
                  </v-dialog>
                  <v-dialog
                    content-class="rounded-xl"
                    v-model="payPwdAffFlag"
                    width="400"
                    height="544"
                  >
                    <div
                      style="height: 544px;width: 400px;background: #FFFFFF; padding: 30px"
                    >
                      <v-img
                        class="mx-auto"
                        width="80px"
                        height="80px"
                        src="https://investors.oss-cn-beijing.aliyuncs.com/assets/userCenter/dun.png"
                        style="margin-top: 42px"
                      ></v-img>

                      <div style="height: 28px"></div>
                      <div
                        class="mx-auto text-center"
                        style="width: 144px; height: 24px; font-size: 24px; font-weight: 600; color: #000000; line-height: 24px;"
                      >
                        请再一次输入
                      </div>
                      <div style="height: 28px"></div>
                      <div
                        class="mx-auto text-center"
                        style="width: 266px; height: 22px; font-size: 14px; font-weight: 400; color: #808080; line-height: 22px;"
                      >
                        支付密码是保障您资产安全的重要凭证，请妥善保管。
                      </div>
                      <div style="height: 40px"></div>
                      <div class="row-center captcha_input_wrapper">
                        <input
                          autocomplete="off"
                          v-for="(item, index) in affCaptchas"
                          :key="index"
                          v-model="item.num"
                          :id="'affCaptcha' + index"
                          @input="inputFinishAff(index)"
                          @focus="adjustAff(index)"
                          @keydown="inputDirectionAff(index)"
                          class="captcha_input_box row-center"
                          type="tel"
                          maxlength="1"
                        />
                      </div>
                    </div>
                  </v-dialog>
                  <v-dialog
                    content-class="rounded-xl"
                    v-model="payPwdUpdateFlag"
                    width="400"
                    height="544"
                  >
                    <div
                      style="height: 544px;width: 400px;background: #FFFFFF; padding: 30px"
                    >
                      <v-img
                        class="mx-auto"
                        width="80px"
                        height="80px"
                        src="https://investors.oss-cn-beijing.aliyuncs.com/assets/userCenter/dun.png"
                        style="margin-top: 42px"
                      ></v-img>

                      <div style="height: 28px"></div>
                      <div
                        class="mx-auto text-center"
                        style="width: 144px; height: 24px; font-size: 24px; font-weight: 600; color: #000000; line-height: 24px;"
                      >
                        修改支付密码
                      </div>
                      <div style="height: 28px"></div>
                      <div
                        class="mx-auto text-center"
                        style="width: 196px; height: 22px; font-size: 14px; font-weight: 400; color: #808080; line-height: 22px;"
                      >
                        请输入原支付密码，以验证身份
                      </div>
                      <div style="height: 40px"></div>
                      <div class="row-center captcha_input_wrapper">
                        <input
                          autocomplete="off"
                          v-for="(item, index) in updateCaptchas"
                          :key="index"
                          v-model="item.num"
                          :id="'updateCaptcha' + index"
                          @input="inputFinishUpdate(index)"
                          @focus="adjustUpdate(index)"
                          @keydown="inputDirectionUpdate(index)"
                          class="captcha_input_box row-center"
                          type="tel"
                          maxlength="1"
                        />
                      </div>
                      <div style="height: 28px"></div>
                      <div
                        class="text-center"
                        style="width: 100%;height: 14px;font-size: 14px;font-weight: 400;color: #00CFAC;
                        line-height: 14px; cursor: pointer"
                        @click="
                          payPwdUpdateFlag = false
                          forgetPayPwdFlag = true
                        "
                      >
                        忘记密码？
                      </div>
                    </div>
                  </v-dialog>
                  <v-dialog
                    content-class="rounded-xl"
                    v-model="payPwdNewFlag"
                    width="400"
                    height="544"
                  >
                    <div
                      style="height: 544px;width: 400px;background: #FFFFFF; padding: 30px"
                    >
                      <v-img
                        class="mx-auto"
                        width="80px"
                        height="80px"
                        src="https://investors.oss-cn-beijing.aliyuncs.com/assets/userCenter/dun.png"
                        style="margin-top: 42px"
                      ></v-img>

                      <div style="height: 28px"></div>
                      <div
                        class="mx-auto text-center"
                        style="width: 168px; height: 24px; font-size: 24px; font-weight: 600; color: #000000; line-height: 24px;"
                      >
                        设置新支付密码
                      </div>
                      <div style="height: 28px"></div>
                      <div
                        class="mx-auto text-center"
                        style="width: 266px; height: 22px; font-size: 14px; font-weight: 400; color: #808080; line-height: 22px;"
                      >
                        支付密码是保障您资产安全的重要凭证，请妥善保管。
                      </div>
                      <div style="height: 40px"></div>
                      <div class="row-center captcha_input_wrapper">
                        <input
                          autocomplete="off"
                          v-for="(item, index) in newCaptchas"
                          :key="index"
                          v-model="item.num"
                          :id="'newCaptcha' + index"
                          @input="inputFinishNew(index)"
                          @focus="adjustNew(index)"
                          @keydown="inputDirectionNew(index)"
                          class="captcha_input_box row-center"
                          type="tel"
                          maxlength="1"
                        />
                      </div>
                    </div>
                  </v-dialog>
                  <v-dialog
                    content-class="rounded-xl"
                    v-model="forgetPayPwdFlag"
                    width="400"
                    height="544"
                  >
                    <div
                      style="height: 544px;width: 400px;background: #FFFFFF; padding: 48px 30px 40px 30px"
                    >
                      <div
                        class="text-center"
                        style="width: 100%; height: 24px; font-size: 24px;
                        font-weight: 600; color: #000000; line-height: 24px;"
                      >
                        找回支付密码
                      </div>
                      <div style="height: 56px"></div>
                      <v-text-field
                        autocomplete="off"
                        v-model="forgetPayLoginPwd"
                        label="输入登录密码"
                        single-line
                        filled
                        dense
                        rounded
                      ></v-text-field>
                      <v-text-field
                        autocomplete="off"
                        label="输入手机验证码"
                        v-model="forgetPayCheckCode"
                        single-line
                        filled
                        dense
                        rounded
                      >
                      </v-text-field>
                      <span
                        style="color: #00CFAC;width: 100%; position: absolute; margin-top: -55px;
                        margin-left: 240px; font-size: 14px; font-weight: 600; cursor: pointer"
                        @click="sendCode()"
                        v-show="sendCodeVue"
                        >发送验证码
                      </span>
                      <span
                        v-show="!sendCodeVue"
                        style="color: #00CFAC; position: absolute; margin-top: -57px;
                        margin-left: 240px; cursor: pointer"
                      >
                        <p>{{ authTime }} S</p>
                      </span>
                      <v-text-field
                        v-model="payGoogleCheckCode"
                        autocomplete="off"
                        label="输入谷歌验证码"
                        single-line
                        filled
                        dense
                        rounded
                      >
                      </v-text-field>
                      <div style="height: 122px"></div>
                      <v-btn
                        width="340px"
                        height="56px"
                        text
                        rounded
                        @click="
                          forgetPaymentPwd(
                            forgetPayLoginPwd,
                            forgetPayCheckCode,
                            payGoogleCheckCode
                          )
                        "
                        style="color: #FFFFFF; background: linear-gradient(90deg, #F1F1F2 0%, #B2B2B2 100%);"
                        >确定</v-btn
                      >
                    </div>
                  </v-dialog>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <div>
                  <v-card-title style="padding-left: 32px;">
                    <div
                      style="font-size: 16px; font-weight: bold; color: #000000"
                    >
                      登录密码
                    </div>
                  </v-card-title>
                  <v-card-subtitle
                    style="padding-left: 32px; font-size: 14px; white-space: nowrap"
                  >
                    登录密码是保障您资产安全的重要凭证，请妥善保管。
                  </v-card-subtitle>
                </div>
              </v-col>
              <v-col cols="3" offset="3">
                <div
                  class="d-inline-flex"
                  style="float: right; padding-right: 32px"
                >
                  <v-btn
                    text
                    style="width: 76px; height: 30px; margin-top: 20px; background: #F7F8FB;
                       border-radius: 15px; color: #00CFAC; font-size: 14px; font-weight: 600;"
                    @click="updatePwdFlag = true"
                    >修改
                  </v-btn>
                  <v-dialog
                    content-class="rounded-xl"
                    v-model="updatePwdFlag"
                    width="400"
                    height="544"
                  >
                    <div
                      style="height: 544px;width: 400px;background: #FFFFFF; padding: 30px"
                    >
                      <div
                        style="width: 96px; height: 24px; font-size: 24px;
                        font-weight: 600; color: #000000; line-height: 24px;"
                      >
                        修改密码
                      </div>
                      <div style="height: 20px"></div>
                      <div
                        style="width: 195px; height: 12px; font-size: 12px; font-weight: 400; color: #E82268;line-height: 12px;"
                      >
                        安全设置更改后，24小时内无法提现
                      </div>
                      <div style="height: 30px"></div>
                      <div
                        style="width: 318px;height: 24px;font-size: 18px;font-weight: 600;color: #000000;line-height: 24px;"
                      >
                        {{ userName }}
                      </div>
                      <div style="height: 32px"></div>
                      <v-text-field
                        autocomplete="off"
                        label="请输入验证码"
                        v-model="updLoginPwdCheckCode"
                        single-line
                        filled
                        dense
                        rounded
                      >
                      </v-text-field>
                      <span
                        style="color: #00CFAC;width: 100%; position: absolute; margin-top: -55px;
                        margin-left: 240px; font-size: 14px; font-weight: 600; cursor: pointer"
                        @click="sendCode()"
                        v-show="sendCodeVue"
                        >发送验证码
                      </span>
                      <span
                        v-show="!sendCodeVue"
                        style="color: #00CFAC; position: absolute; margin-top: -57px;
                        margin-left: 240px; cursor: pointer"
                      >
                        <p>{{ authTime }} S</p>
                      </span>
                      <v-text-field
                        autocomplete="off"
                        label="请输入新密码"
                        v-model="updNewLoginPwd"
                        single-line
                        filled
                        dense
                        rounded
                      >
                      </v-text-field>
                      <v-btn
                        width="340px"
                        height="56px"
                        text
                        rounded
                        @click="
                          UpdateLoginPwd(updLoginPwdCheckCode, updNewLoginPwd)
                        "
                        style="color: #FFFFFF; background: linear-gradient(90deg, #F1F1F2 0%, #B2B2B2 100%);"
                        >确定</v-btn
                      >
                    </div>
                  </v-dialog>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <div>
                  <v-card-title style="padding-left: 32px;">
                    <div
                      style="font-size: 16px; font-weight: bold; color: #000000"
                    >
                      UID账号
                    </div>
                  </v-card-title>
                  <v-card-subtitle
                    style="padding-left: 32px; font-size: 14px; white-space: nowrap"
                  >
                    INVESTORS号是账号的唯一凭证，只能设置一次
                  </v-card-subtitle>
                </div>
              </v-col>
              <v-col cols="3" offset="3">
                <div
                  class="d-inline-flex"
                  style="float: right; padding-right: 32px"
                >
                  <div style="padding-top: 24px; font-size: 14px">
                    UID: {{ userId }}
                  </div>
                  <div style="width: 20px"></div>
                  <v-btn
                    v-clipboard:copy="this.userId"
                    v-clipboard:success="onCopy"
                    v-clipboard:error="onError"
                    text
                    style="width: 76px; height: 30px; margin-top: 20px; background: #F7F8FB;
                       border-radius: 15px; color: #00CFAC; font-size: 14px; font-weight: 600;"
                    >复制
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
          <div style="height: 72px"></div>
          <v-card
            height="390px"
            width="960px"
            class="mx-auto"
            style="top: 28px; box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.04); border-radius: 24px;"
          >
            <v-card-title
              style="padding-left: 32px; padding-top: 32px; padding-bottom: 10px"
            >
              <div style="font-size: 18px; font-weight: bold; color: #000000">
                安全验证
              </div>
            </v-card-title>
            <v-row>
              <v-col cols="6">
                <div>
                  <v-card-title style="padding-left: 32px">
                    <div
                      style="font-size: 16px; font-weight: bold; color: #000000"
                    >
                      谷歌认证
                    </div>
                  </v-card-title>
                  <v-card-subtitle
                    style="padding-left: 32px; font-size: 14px; white-space: nowrap"
                  >
                    登錄、修改密碼、提現等安全驗證時用以收取短信驗證。
                  </v-card-subtitle>
                </div>
              </v-col>
              <v-col cols="3" offset="3">
                <div
                  class="d-inline-flex"
                  style="float: right; padding-right: 32px"
                >
                  <div style="padding-top: 24px; font-size: 14px">
                    未绑定
                  </div>
                  <div style="width: 20px"></div>
                  <v-btn
                    @click.stop="googleyz1 = true"
                    text
                    style="width: 76px; height: 30px; margin-top: 20px; background: #F7F8FB;
                       border-radius: 15px; color: #00CFAC; font-size: 14px; font-weight: 600;"
                    >绑定
                  </v-btn>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <div>
                  <v-card-title style="padding-left: 32px">
                    <div
                      style="font-size: 16px; font-weight: bold; color: #000000"
                    >
                      手机/邮箱验证
                    </div>
                  </v-card-title>
                  <v-card-subtitle
                    style="padding-left: 32px; font-size: 14px; white-space: nowrap"
                  >
                    登录、修改密码等安全验证时用以收取短信验证
                  </v-card-subtitle>
                </div>
              </v-col>
              <v-col cols="3" offset="3">
                <div
                  class="d-inline-flex"
                  style="float: right; padding-right: 32px"
                >
                  <v-switch
                    v-model="verSwitch"
                    style="width: 44px; height: 24px;"
                    color="#00CFAC"
                    @click="CheckSwitch(verSwitch)"
                  ></v-switch>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <div>
                  <v-card-title style="padding-left: 32px;">
                    <div
                      style="font-size: 16px; font-weight: bold; color: #000000"
                    >
                      防钓鱼码
                    </div>
                  </v-card-title>
                  <v-card-subtitle
                    style="padding-left: 32px; font-size: 14px; white-space: nowrap"
                  >
                    通过设置防钓鱼码，您收到的每一封官方邮件都会标注您设置的数字，可防范假冒的邮件或网站
                  </v-card-subtitle>
                </div>
              </v-col>
              <v-col cols="3" offset="3">
                <div
                  class="d-inline-flex"
                  style="float: right; padding-right: 32px"
                >
                  <div style="padding-top: 24px; font-size: 14px">
                    未设置
                  </div>
                  <div style="width: 20px"></div>
                  <v-btn
                    text
                    style="width: 76px; height: 30px; margin-top: 20px; background: #F7F8FB;
                       border-radius: 15px; color: #00CFAC; font-size: 14px; font-weight: 600;"
                    @click="fishDialog = true"
                    >设置
                  </v-btn>
                  <v-dialog
                    content-class="rounded-xl"
                    v-model="fishDialog"
                    width="400"
                    height="350"
                  >
                    <div
                      style="height: 350px;width: 400px;background: #FFFFFF; padding: 30px"
                    >
                      <div
                        style="width: 144px; height: 24px; font-size: 24px;
                        font-weight: 600; color: #000000; line-height: 24px;"
                      >
                        设置钓鱼码防
                      </div>
                      <div style="height: 20px"></div>
                      <div
                        style="width: 324px; height: 12px; font-size: 12px; font-weight: 400; color: #E82268;line-height: 12px;"
                      >
                        官方邮件都会标注您设置的数字，可防范假冒的邮件或网站。
                      </div>
                      <div style="height: 55px"></div>
                      <v-text-field
                        autocomplete="off"
                        v-model="fishCode"
                        label="输入0-9之间的4位数字"
                        single-line
                        filled
                        dense
                        rounded
                      ></v-text-field>
                      <div style="height: 60px"></div>
                      <v-btn
                        width="340px"
                        height="56px"
                        text
                        rounded
                        @click="SetFishCode(fishCode)"
                        style="color: #FFFFFF; background: linear-gradient(90deg, #F1F1F2 0%, #B2B2B2 100%);"
                        >确定</v-btn
                      >
                    </div>
                  </v-dialog>
                </div>
              </v-col>
            </v-row>
          </v-card>
          <div style="height: 72px"></div>
          <v-card
            height="390px"
            width="960px"
            class="mx-auto"
            style="top: 28px; box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.04);
            border-radius: 24px;"
          >
            <div class="d-inline-flex">
              <v-card-title style="padding-top: 32px; padding-left: 32px">
                <div style="font-size: 18px; font-weight: bold; color: #000000">
                  登录历史
                </div>
              </v-card-title>
            </div>
            <v-row style="padding-left: 32px; padding-top: 32px">
              <v-col cols="3">
                <div
                  style="width: 28px; height: 20px; font-size: 14px; font-weight: 400; color: #8A8A8A; line-height: 20px;"
                >
                  时间
                </div>
              </v-col>
              <v-col cols="3">
                <div
                  style="width: 28px; height: 20px; font-size: 14px; font-weight: 400; color: #8A8A8A;
                  line-height: 20px; white-space: nowrap"
                >
                  IP地址
                </div>
              </v-col>
              <v-col cols="3">
                <div
                  style="width: 28px; height: 20px; font-size: 14px; font-weight: 400; color: #8A8A8A;
                  line-height: 20px;"
                >
                  位置
                </div>
              </v-col>
              <v-col cols="3">
                <div
                  style="width: 28px; height: 20px; font-size: 14px; font-weight: 400;
                  color: #8A8A8A; line-height: 20px;"
                >
                  设备
                </div>
              </v-col>
            </v-row>
            <v-divider
              style="width: 896px; color: #F5F5F5; margin-left: 30px; margin-top: 20px;"
            ></v-divider>
            <div v-for="hisData in hisList" v-bind:key="hisData">
              <v-row style="padding-left: 32px; padding-top: 32px">
                <v-col cols="3">
                  <div
                    style="font-size: 14px; font-weight: 400; color: #8A8A8A;
                  line-height: 20px; white-space: nowrap"
                  >
                    {{ hisData.CreatedTime | formatDate }}
                  </div>
                </v-col>
                <v-col cols="3">
                  <div
                    style="font-size: 14px; font-weight: 400; color: #8A8A8A;
                  line-height: 20px; white-space: nowrap"
                  >
                    {{ hisData.LastIp }}
                  </div>
                </v-col>
                <v-col cols="3">
                  <div
                    style="font-size: 14px; font-weight: 400; color: #8A8A8A;
                  line-height: 20px; white-space: nowrap"
                  >
                    {{ hisData.LastArea }}
                  </div>
                </v-col>
                <v-col cols="3">
                  <div
                    style="font-size: 14px; font-weight: 400; color: #8A8A8A;
                  line-height: 20px;"
                  >
                    {{ hisData.Device }}
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-card>
          <div style="height: 120px"></div>
        </v-tab-item>
      </v-tabs-items>
    </div>
    <!-- 谷歌验证页1 -->
    <v-dialog
      content-class="rounded-xl"
      v-model="googleyz1"
      width="450"
      height="544"
    >
      <div style="height: 544px;width: 450px;background: #FFFFFF;">
        <v-row style="height: 60px;width: 100%;margin: 0px">
          <span
            style="font-size: 24px;margin: 30px 33px 32px 45px ;
            font-weight: 600;
            color: #000000;"
            >绑定谷歌验证器</span
          >
        </v-row>
        <v-row style="height: 20px"></v-row>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <span
              style="font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 600;color: #000000;"
            >
              <p style="padding: 0px;margin: 0px">
                下载并安装谷歌验证器（Google Authenticator)
              </p>
              <p style="padding: 0px;margin: 0px">
                若成功，请跳转到下一步
              </p>
            </span>
            <div style="width: 100%;height: 30px"></div>
            <v-row>
              <v-col slot="6">
                <img
                  src="https://investors.oss-cn-beijing.aliyuncs.com/assets/heiseshanjiao1.png"
                  style="height: 48px; width: 168px;"
                />
              </v-col>
              <v-col slot="6">
                <img
                  src="https://investors.oss-cn-beijing.aliyuncs.com/assets/heisepingguo1.png"
                  style="height: 48px; width: 168px;"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col slot="6">
                <vue-qr
                  ref="Qrcode"
                  :text="dataObj.gugeurl1"
                  :callback="test"
                  qid="testQrId"
                  margin="15"
                  size="170"
                ></vue-qr>
              </v-col>
              <v-col slot="6">
                <vue-qr
                  ref="Qrcode"
                  :text="dataObj.gugeurl2"
                  :callback="test"
                  qid="testQrId"
                  margin="15"
                  size="170"
                ></vue-qr>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-btn
              style="background: linear-gradient(90deg, #00CFAC 0%, #5B7ADE 100%);color: #FFFFFF"
              depressed
              bottom
              rounded
              large
              block
              @click="gugeApi1"
            >
              下一步
            </v-btn>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
      </div>
    </v-dialog>
    <!-- 谷歌验证页2 googleyz2 -->
    <v-dialog
      content-class="rounded-xl"
      v-model="googleyz2"
      width="450"
      height="544"
    >
      <div style="height: 544px;width: 450px;background: #FFFFFF;">
        <v-row style="height: 60px;width: 100%;margin: 0px">
          <span
            style="font-size: 24px;margin: 30px 33px 32px 45px ;
            font-family: PingFang-SC-Semibold, PingFang-SC;
            font-weight: 600;
            color: #000000;"
            >复制密钥</span
          >
        </v-row>
        <v-row style="height: 20px"></v-row>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <span
              style="font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 500;color: #000000;"
            >
              使用谷歌验证器扫描屏幕中的二维码，或复制粘贴密钥到谷歌验证器中。若已完成，请跳转到下一步
            </span>
            <div style="width: 100%;height: 30px"></div>

            <v-row style="padding: 0px 0px 0px 100px;">
              <vue-qr
                ref="Qrcode"
                :text="dataObj.gugeurl3"
                :callback="test"
                qid="testQrId"
                margin="15"
                size="190"
              ></vue-qr>
            </v-row>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
        <v-row style="height: 100px;width: 100%">
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-text-field
              background-color="#F7F8FB"
              autocomplete="off"
              value="0x852915c9b371833c93eeaeeb2b7f6bb5557eaa41"
              single-line
              filled
              rounded
              height="50"
            >
              <template v-slot:append>
                <v-fade-transition leave-absolute>
                  <v-progress-circular
                    v-if="loading"
                    size="24"
                    color="info"
                    indeterminate
                  ></v-progress-circular>
                  <img
                    v-else
                    width="15"
                    height="15"
                    src="https://investors.oss-cn-beijing.aliyuncs.com/assets/fuzhi.png"
                    alt=""
                  />
                </v-fade-transition>
              </template>
            </v-text-field>
            <div
              style="position:relative;
                        left:106px;
                        bottom:26px;"
            >
              <samp style="font-size: 12px;font-weight: 500;color: #E82268;">
                为防止密钥丢失，请及时备份
              </samp>
            </div>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-btn
              style="background: linear-gradient(90deg, #00CFAC 0%, #5B7ADE 100%);color: #FFFFFF"
              depressed
              bottom
              rounded
              large
              block
              @click="gugeApi2"
            >
              下一步
            </v-btn>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
      </div>
    </v-dialog>
    <!-- 谷歌验证页3 googleyz3 -->
    <v-dialog
      content-class="rounded-xl"
      v-model="googleyz3"
      width="450"
      height="544"
    >
      <div style="height: 544px;width: 450px;background: #FFFFFF;">
        <v-row style="height: 60px;width: 100%;margin: 0px">
          <span
            style="font-size: 24px;margin: 30px 33px 32px 38px ;
            font-weight: 600;
            color: #000000;"
            >启用谷歌认证</span
          >
        </v-row>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <span
              style="font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 500;color: #000000;"
            >
              {{ userName }}
            </span>
            <div style="width: 100%;height: 70px"></div>

            <v-row style="padding: 10px;height: 50px">
              <v-text-field
                autocomplete="off"
                label="请输入验证码"
                v-model="bindGoogleCheckCode"
                single-line
                filled
                dense
                rounded
              ></v-text-field>
            </v-row>
            <span
              style="color: #00CFAC; position:relative;
                        left:276px;
                        bottom:20px;font-weight: 600;"
              @click="sendCode2()"
              v-show="sendCodeVue2"
              ><p>发送验证码</p>
            </span>
            <span
              v-show="!sendCodeVue2"
              style="color: #00CFAC; position:relative;
                        left:319px;
                        bottom:20px;font-weight: 600;"
            >
              <p>{{ authTime }} S</p>
            </span>
            <v-row style="padding: 10px">
              <v-text-field
                autocomplete="off"
                label="输入谷歌验证码"
                v-model="googleVerCode"
                single-line
                filled
                dense
                rounded
              ></v-text-field>
            </v-row>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <samp
              style="font-size: 12px; font-weight: 400;color: #A9A9A9;line-height: 16px;position:relative;left:4px;bottom:45px;"
            >
              谷歌验证码每30秒变化一次，请您注意输入最新验证码
            </samp>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
        <div style="height: 100px;width: 100%"></div>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-btn
              style="background: linear-gradient(90deg, #F1F1F2 0%, #B2B2B2 100%);color: #FFFFFF"
              depressed
              bottom
              rounded
              large
              block
              @click="BindGoogleCode(bindGoogleCheckCode, googleVerCode)"
            >
              绑定
            </v-btn>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
      </div>
    </v-dialog>
    <!-- 设置INVESTORS帐号 user_up2 -->
    <v-dialog
      content-class="rounded-xl"
      v-model="user_up2"
      width="450"
      height="544"
    >
      <div style="height: 544px;width: 450px;background: #FFFFFF;">
        <v-row style="height: 60px;width: 100%;margin: 0">
          <span
            style="font-size: 24px;margin: 30px 33px 32px 45px ;
            font-weight: 600;
            color: #000000;"
            >设置INVESTORS帐号</span
          >
        </v-row>
        <v-row style="height: 20px"></v-row>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-row>
              <v-col cols="2">
                <img
                  src="https://investors.oss-cn-beijing.aliyuncs.com/assets/usertou9912.png"
                  style="height: 64px; width: 64px;"
                />
              </v-col>
              <v-col cols="10">
                <p
                  style="font-size: 18px;padding: 0;margin: 8px 3px 5px 8px;
                  font-weight: 600;
                  color: #000000;"
                >
                  Cami Ho
                </p>
                <p
                  style="font-size: 16px;padding: 0;margin:  1px 2px 3px 8px;
                          font-weight: 400;
                          color: #808080;
                          line-height: 16px;"
                >
                  帐号：
                </p>
              </v-col>
            </v-row>
            <v-row style="padding: 10px">
              <v-text-field
                autocomplete="off"
                label="输入你的帐号"
                v-model="updateUidValue"
                single-line
                filled
                dense
                rounded
              ></v-text-field>
            </v-row>
            <v-row style="padding: 0 15px 0 15px">
              <span style="font-size: 12px;font-weight: 400;color: #6D6D72;">
                ·INVESTORS号是账号的唯一凭证，只能设置一次。
                <p style="padding: 0">
                  ·如果没有设置过INVESTORS号，INVESTORS好友会看到你在系统自动生成的INVESTORS号，但是不能通过系统生成的INVESTORS号找到你。
                </p>
              </span>
            </v-row>
            <v-row style="height: 90px"></v-row>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-btn
              style="background: linear-gradient(90deg, #F1F1F2 0%, #B2B2B2 100%);color: #FFFFFF"
              depressed
              bottom
              rounded
              large
              block
              @click="UpdateUid(updateUidValue)"
            >
              确认
            </v-btn>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
      </div>
    </v-dialog>
    <v-dialog
      content-class="rounded-xl"
      v-model="addqianbao1"
      width="450"
      height="544"
    >
      <div style="height: 544px;width: 450px;background: #FFFFFF;">
        <v-row style="height: 60px;width: 100%;margin: 0px">
          <span
            style="font-size: 24px;margin: 30px 33px 32px 38px ;
            font-weight: 600;
            color: #000000;"
            >添加地址</span
          >
        </v-row>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <div style="width: 100%;height: 70px"></div>
            <v-row style="padding: 10px;height: 50px">
              <v-select
                v-model="addCoinType"
                label="币种"
                :items="addCoinTypes"
                single-line
                filled
                dense
                rounded
              ></v-select>
            </v-row>
            <v-row style="height: 20px"></v-row>
            <v-row style="padding: 10px;height: 50px">
              <v-text-field
                autocomplete="off"
                label="请输入钱包地址"
                v-model="addWalletAdd"
                single-line
                filled
                dense
                rounded
              ></v-text-field>
            </v-row>
            <v-row style="height: 20px"></v-row>
            <v-row style="height: 20px;">
              <span
                style="margin: 0 0 1px 16px;font-weight: 600;color: #000000;"
              >
                备注
              </span>
            </v-row>
            <v-row style="padding: 10px">
              <v-text-field
                autocomplete="off"
                label="请输入备注"
                v-model="addRemark"
                single-line
                filled
                dense
                rounded
              ></v-text-field>
            </v-row>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
        <div style="height: 100px;width: 100%"></div>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-btn
              style="background: linear-gradient(90deg, #F1F1F2 0%, #B2B2B2 100%);color: #FFFFFF"
              depressed
              bottom
              rounded
              large
              block
              @click="addWalletAddress(addCoinType, addWalletAdd, addRemark)"
            >
              添加
            </v-btn>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import VueQr from 'vue-qr'
import VueClipboard from 'vue-clipboard2'
export default {
  name: 'CenterTab',
  components: {
    VueQr,
    VueClipboard,
  },
  data() {
    return {
      model: null,
      text: '1111',
      infoSwitch: true,
      verSwitch: true,
      bindEmailFlag: false,
      checkCode: '',
      email: '',
      emailRules: [
        v => !!v || '邮箱必须输入',
        v =>
          /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(v) ||
          '邮箱格式不对',
      ],
      emailCheckCode: '',
      sendCodeVue: true, // 控制发送验证码按钮显示
      authTime: 0, // 倒计时
      fishDialog: false,
      fishCode: '',
      updatePwdFlag: false,
      payPwdFlag: false,
      payPwdAffFlag: false,
      payPwdUpdateFlag: false,
      payPwdNewFlag: false,
      forgetPayPwdFlag: false,
      //验证码数据
      activeInput: 0,
      setCaptchas: [
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' },
      ],
      affCaptchas: [
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' },
      ],
      updateCaptchas: [
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' },
      ],
      newCaptchas: [
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' },
      ],
      setPayPwd: true,
      updatePayPwd: false,
      googleyz1: false, //谷歌验证页面1
      googleyz2: false, //谷歌验证页面1
      googleyz3: false, //谷歌验证页面1
      user_up2: false, //设置INVESTORS帐号
      addqianbao1: false, //添加钱包地址
      sendCodeVue2: true, // 控制发送验证码按钮显示
      dataObj: {
        //二维码
        gugeurl1: 'https://blog.csdn.net/weixin_43760328/rss/list', //谷歌提示页面1 二维码数据1
        gugeurl2: 'https://1323123131223', //谷歌提示页面1 二维码数据2
        gugeurl3: 'https://132123123131223', //绑定谷歌验证 二维码
        text: 'https://blog.csdn.net/weixin_43760328/rss/list',
      },
      userName: '',
      phoneNum: '',
      userId: '',
      certifyNum: '',
      certifyFront: '',
      certifyBack: '',
      list: '',
      addCoinType: '',
      addCoinTypes: ['HSF', 'USDT'], //下拉多选
      addWalletAdd: '',
      addRemark: '',
      addWalletResult: '',
      delWalletResult: '',
      updateUidValue: '',
      updateUidResult: '',
      lastLoginTime: '',
      lastLoginIp: '',
      lastLoginArea: '',
      lastLoginDevice: '',
      bindEmailNum: '',
      bindEmailResult: '',
      emailBindState: '',
      bindEmailBtnState: '',
      setPayPwdResult: '',
      verPayPwdResult: '',
      updatePayPwdResult: '',
      forgetPayLoginPwd: '',
      forgetPayCheckCode: '',
      payGoogleCheckCode: '',
      forgetPayPwdResult: '',
      updLoginPwdCheckCode: '',
      updNewLoginPwd: '',
      updLoginPwdResult: '',
      bindGoogleCheckCode: '',
      googleVerCode: '',
      googleBindResult: '',
      fishCodeResult: '',
      hisList: '',
      realName: '',
      payPwdState: '',
      payPwdBtnState: '',
    }
  },
  filters: {
    formatDate(time) {
      const date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd hh:mm')
    },
  },
  mounted: function() {
    this.GetPresenceData()
    this.GetMyData() //需要触发的函数
    this.GetWalletAddInfo()
  },
  methods: {
    sendCode2() {
      //成功逻辑
      this.sendCodeVue2 = false // 控制显示隐藏
      this.authTime = 60
      let timeInt = setInterval(() => {
        this.authTime--
        if (this.authTime <= 0) {
          this.sendCodeVue2 = true
          window.clearInterval(this.timeInt)
        }
      }, 1000)
    },
    gugeApi1() {
      //谷歌验证 第一步下一步渲染谷歌页面
      this.googleyz1 = false
      this.googleyz2 = true
    },
    gugeApi2() {
      //谷歌验证2 第一步下一步输入验证码页面
      this.googleyz2 = false
      this.googleyz3 = true
    },
    addWalletAddress: function(addCoinType, addWalletAdd, addRemark) {
      const token = localStorage.getItem('token')
      this.axios
        .post(
          '/t0/addWalletAddInfo',
          { coinType: addCoinType, walletAdd: addWalletAdd, remark: addRemark },
          { headers: { 'access-token': token } }
        )
        .then(response => {
          this.addWalletResult = response.data
        })
      alert(this.addWalletResult)
    },
    delWalletAddress: function(add) {
      const token = localStorage.getItem('token')
      this.axios
        .post(
          '/t0/delWalletAddInfo',
          { walletAdd: add },
          { headers: { 'access-token': token } }
        )
        .then(response => {
          this.delWalletResult = response.data
        })
      alert(this.delWalletResult)
    },
    sendCode() {
      this.axios
        .post('/r0/checkCode', {
          email: this.bindEmailNum,
        })
        .then(response => {
          if (response.status !== 200) {
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
    //验证码函数 自动校准输入顺序
    adjustAff(index) {
      let dom = document.getElementById('affCaptcha' + this.activeInput)
      if (index !== this.activeInput && dom) {
        dom.focus()
      }
    },
    //验证码函数 控制前后方向
    inputDirectionAff(index) {
      let val = this.affCaptchas[index].num
      // 回退键处理
      if (event.keyCode === 8 && val === '') {
        // 重新校准
        let dom = document.getElementById('affCaptcha' + (index - 1))
        this.activeInput = index - 1
        if (dom) dom.focus()
      }
      if (event.keyCode !== 8 && val !== '') {
        let dom = document.getElementById('affCaptcha' + (index + 1))
        this.activeInput = index + 1
        if (dom) dom.focus()
      }
    },
    //验证码函数 输入框相互联动
    inputFinishAff(index) {
      let val = this.affCaptchas[index].num
      this.activeInput = val ? index + 1 : index - 1
      let dom = document.getElementById('affCaptcha' + this.activeInput)
      if (dom) dom.focus()
      if (index === this.affCaptchas.length - 1) {
        let code = this.affCaptchas.map(x => x.num).join('')
        if (code.length === 6) {
          this.payPwdAffFlag = false
          this.setPayPwd = false
          this.updatePayPwd = true
          this.SetPaymentPwd(code)
        }
      }
    },

    //验证码函数 自动校准输入顺序
    adjustUpdate(index) {
      let dom = document.getElementById('updateCaptcha' + this.activeInput)
      if (index !== this.activeInput && dom) {
        dom.focus()
      }
    },
    //验证码函数 控制前后方向
    inputDirectionUpdate(index) {
      let val = this.updateCaptchas[index].num
      // 回退键处理
      if (event.keyCode === 8 && val === '') {
        // 重新校准
        let dom = document.getElementById('updateCaptcha' + (index - 1))
        this.activeInput = index - 1
        if (dom) dom.focus()
      }
      if (event.keyCode !== 8 && val !== '') {
        let dom = document.getElementById('updateCaptcha' + (index + 1))
        this.activeInput = index + 1
        if (dom) dom.focus()
      }
    },
    //验证码函数 输入框相互联动
    inputFinishUpdate(index) {
      let val = this.updateCaptchas[index].num
      this.activeInput = val ? index + 1 : index - 1
      let dom = document.getElementById('updateCaptcha' + this.activeInput)
      if (dom) dom.focus()
      if (index === this.updateCaptchas.length - 1) {
        let code = this.updateCaptchas.map(x => x.num).join('')
        if (code.length === 6) {
          this.payPwdUpdateFlag = false
          this.verifyPayPwd(code)
        }
      }
    },

    //验证码函数 自动校准输入顺序
    adjustNew(index) {
      let dom = document.getElementById('newCaptcha' + this.activeInput)
      if (index !== this.activeInput && dom) {
        dom.focus()
      }
    },
    //验证码函数 控制前后方向
    inputDirectionNew(index) {
      let val = this.newCaptchas[index].num
      // 回退键处理
      if (event.keyCode === 8 && val === '') {
        // 重新校准
        let dom = document.getElementById('newCaptcha' + (index - 1))
        this.activeInput = index - 1
        if (dom) dom.focus()
      }
      if (event.keyCode !== 8 && val !== '') {
        let dom = document.getElementById('newCaptcha' + (index + 1))
        this.activeInput = index + 1
        if (dom) dom.focus()
      }
    },
    //验证码函数 输入框相互联动
    inputFinishNew(index) {
      let val = this.newCaptchas[index].num
      this.activeInput = val ? index + 1 : index - 1
      let dom = document.getElementById('newCaptcha' + this.activeInput)
      if (dom) dom.focus()
      if (index === this.newCaptchas.length - 1) {
        let code = this.newCaptchas.map(x => x.num).join('')
        if (code.length === 6) {
          this.payPwdNewFlag = false
          this.updatePaymentPwd(code)
        }
      }
    },
    //查询个人数据
    GetMyData: function() {
      const token = localStorage.getItem('token')
      if (token === null || token === '') {
        return
      }
      this.axios
        .post('/r0/getMyUserData', {}, { headers: { 'access-token': token } })
        .then(response => {
          this.loginVue = false //显示登录代码
          this.userId = response.data.Uid
          this.userName = response.data.UserName
          this.phoneNum = response.data.PhoneNumber
          this.email = response.data.Email
          this.bindEmailStateShow(response.data.Email)
          this.payPwdStateShow(response.data.PayPwdFlag)
        })
    },
    //查询状态数据
    GetPresenceData: function() {
      const token = localStorage.getItem('token')
      this.axios
        .post('/t0/getPresenceData', {}, { headers: { 'access-token': token } })
        .then(response => {
          let resp = response.data
          this.lastLoginIp = '上次登陆IP地址:' + resp[resp.length - 1].LastIp
          this.lastLoginTime = resp[resp.length - 1].CreatedTime
          this.hisList = resp
          for (let i = 0; i < resp.length; i++) {
            if (resp[i].Device === 1) {
              resp[i].Device = 'web'
            } else if (response.data[i].Device === 2) {
              resp[i].Device = 'app'
            }
          }
        })
    },
    //钱包地址信息
    GetWalletAddInfo: function() {
      const token = localStorage.getItem('token')
      this.axios
        .post(
          '/t0/getWalletAddInfo',
          {},
          { headers: { 'access-token': token } }
        )
        .then(response => {
          this.list = response.data
        })
    },
    //修改Uid
    UpdateUid: function(updateUidValue) {
      const token = localStorage.getItem('token')
      this.axios
        .post(
          '/r0/modifyUid',
          { Uid: updateUidValue },
          { headers: { 'access-token': token } }
        )
        .then(response => {
          this.updateUidResult = response.data
          alert(this.updateUidResult)
          this.user_up2 = false
        })
    },
    //绑定邮箱
    bindEmail: function(bindEmailNum, emailCheckCode) {
      const token = localStorage.getItem('token')
      this.axios
        .post(
          '/r0/bindEmail',
          { Email: bindEmailNum, CheckCode: emailCheckCode },
          { headers: { 'access-token': token } }
        )
        .then(response => {
          this.bindEmailResult = response.data
          alert(this.bindEmailResult)
          this.bindEmailFlag = false
        })
    },
    //设置支付密码
    SetPaymentPwd: function(password) {
      const token = localStorage.getItem('token')
      this.axios
        .post(
          '/r0/center/setPayPassword',
          { payPwd: password },
          { headers: { 'access-token': token } }
        )
        .then(response => {
          this.setPayPwdResult = response.data
          alert(this.setPayPwdResult)
        })
    },
    //原支付密码验证身份
    verifyPayPwd: function(password) {
      const token = localStorage.getItem('token')
      this.axios
        .post(
          '/r0/center/verPayPassword',
          { payPwd: password },
          { headers: { 'access-token': token } }
        )
        .then(response => {
          this.verPayPwdResult = response.data
          alert(this.verPayPwdResult)
          if (response.data !== 'success') {
            return
          }
          this.payPwdNewFlag = true
        })
    },
    //修改支付密码
    updatePaymentPwd: function(password) {
      const token = localStorage.getItem('token')
      this.axios
        .post(
          '/r0/center/newPayPassword',
          { payPwd: password },
          { headers: { 'access-token': token } }
        )
        .then(response => {
          this.updatePayPwdResult = response.data
          alert(this.updatePayPwdResult)
        })
    },
    //忘记支付密码
    forgetPaymentPwd: function(
      forgetPayLoginPwd,
      forgetPayCheckCode,
      payGoogleCheckCode
    ) {
      const token = localStorage.getItem('token')
      this.axios
        .post(
          '/r0/center/forgetPayPwd',
          {
            Password: forgetPayLoginPwd,
            CheckCode: forgetPayCheckCode,
            GoogleKey: payGoogleCheckCode,
          },
          { headers: { 'access-token': token } }
        )
        .then(response => {
          this.forgetPayPwdResult = response.data
          if (response.data !== 'success') {
            this.forgetPayPwdFlag = false
            alert(response.data)
            return
          }
          alert(this.forgetPayPwdResult)
          this.forgetPayPwdFlag = false
          this.payPwdNewFlag = true
        })
    },
    //修改登录密码
    UpdateLoginPwd: function(updLoginPwdCheckCode, updNewLoginPwd) {
      const token = localStorage.getItem('token')
      this.axios
        .post(
          '/r0/center/updateLoginPwd',
          {
            Password: updNewLoginPwd,
            CheckCode: updLoginPwdCheckCode,
          },
          { headers: { 'access-token': token } }
        )
        .then(response => {
          this.updLoginPwdResult = response.data
          alert(this.updLoginPwdResult)
          this.updatePwdFlag = false
        })
    },
    //绑定谷歌验证码
    BindGoogleCode: function(bindGoogleCheckCode, googleVerCode) {
      const token = localStorage.getItem('token')
      this.axios
        .post(
          '/t0/googleSwitch',
          {
            checkCode: bindGoogleCheckCode,
            verCode: googleVerCode,
            googleVerFlag: 1,
          },
          { headers: { 'access-token': token } }
        )
        .then(response => {
          this.googleBindResult = response.data
          alert(this.googleBindResult)
          this.googleyz3 = false
        })
    },
    //手机、邮箱验证开关
    CheckSwitch: function(verSwitch) {
      const token = localStorage.getItem('token')
      let phoneVerFlag
      let emailVerFlag
      switch (verSwitch) {
        case true:
          phoneVerFlag = 1
          emailVerFlag = 1
          break
        case false:
          phoneVerFlag = 0
          emailVerFlag = 0
          break
        default:
          break
      }
      this.axios
        .post(
          '/r0/phoneEmailCheckSwitch',
          { PhoneVerFlag: phoneVerFlag, MailVerFlag: emailVerFlag },
          { headers: { 'access-token': token } }
        )
        .then(response => {
          this.googleBindResult = response.data
          alert(this.googleBindResult)
        })
    },
    //设置钓鱼码
    SetFishCode: function(fishCode) {
      const token = localStorage.getItem('token')
      this.axios
        .post(
          '/r0/center/setFishCode',
          {
            FishVerFlag: 1,
            FishCode: fishCode,
          },
          { headers: { 'access-token': token } }
        )
        .then(response => {
          this.fishCodeResult = response.data
          alert(this.fishCodeResult)
          this.fishDialog = false
        })
    },
    //邮箱绑定状态
    bindEmailStateShow: function(email) {
      if (email === '' || email === undefined || email === null) {
        this.emailBindState = '未绑定'
        this.bindEmailBtnState = '绑定'
      } else {
        this.emailBindState = '已绑定'
        this.bindEmailBtnState = '修改'
      }
    },
    //支付密码状态
    payPwdStateShow: function(flag) {
      if (flag === 1) {
        this.payPwdState = '已设置'
        this.setPayPwd = false
        this.updatePayPwd = true
      } else {
        this.payPwdState = '未设置'
        this.setPayPwd = true
        this.updatePayPwd = false
      }
    },
    // 复制成功
    onCopy(e) {
      console.log(e)
    },
    // 复制失败
    onError(e) {
      alert('失败')
    },
  },
}
//时间戳转化时间
function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      )
    }
  }
  return fmt
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}
</script>

<style lang="scss" scoped>
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
  width: 45px;
  height: 45px;
  margin-right: 12px;
  background: #f7f8fb;
  border-radius: 6px;
  text-align: center;
  color: rgb(27, 215, 167);
  border: none;
  outline: medium;
}
</style>
