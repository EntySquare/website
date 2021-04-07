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
    <div style="height: auto">
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
                      style="font-size: 20px; font-weight: bold"
                    >
                      183****739
                    </v-list-item-title>
                    <div class="d-inline-flex" style="font-size: 14px;">
                      <p style="margin-top: 2px">UID:10086</p>
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
                      上次登陆时间：2020-04-08 10:02:06
                    </v-list-item-subtitle>
                    <v-list-item-subtitle
                      style="font-size: 12px; color: #808080"
                    >
                      上次登陆IP地址：40.83.126.105
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
                          inset
                          style="width: 44px; height: 24px;"
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
              <div style="width: 411px"></div>
              <div style="padding-top: 44px">UID:10086</div>
              <div style="width: 20px"></div>
              <v-btn
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
            <v-row style="padding-left: 32px; padding-top: 32px">
              <v-col cols="2">
                <div
                  style="width: 28px; height: 20px; font-size: 14px; font-weight: 600; color: #000000; line-height: 20px;"
                >
                  HSF
                </div>
              </v-col>
              <v-col cols="2">
                <div
                  style="width: 28px; height: 20px; font-size: 14px; font-weight: 600; color: #000000;
                  line-height: 20px; white-space: nowrap"
                >
                  alan的HSF
                </div>
              </v-col>
              <v-col cols="2">
                <div
                  style="width: 28px; height: 20px; font-size: 14px; font-weight: 600; color: #000000;
                  line-height: 20px; white-space: nowrap"
                >
                  3NQjuCBN9jA5fgJ6NAyi
                </div>
              </v-col>
              <v-col cols="2" class="offset-4">
                <div style="margin-left: 75px">
                  <v-img
                    style="width: 20px; height: 20px; cursor: pointer"
                    src="https://investors.oss-cn-beijing.aliyuncs.com/assets/cancel.png"
                    @click="deleteWallet()"
                  ></v-img>
                </div>
              </v-col>
            </v-row>
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
                    未绑定
                  </div>
                  <div style="width: 20px"></div>
                  <v-btn
                    text
                    style="width: 76px; height: 30px; margin-top: 20px; background: #F7F8FB;
                       border-radius: 15px; color: #00CFAC; font-size: 14px; font-weight: 600;"
                    @click="bindFlag = true"
                    >绑定
                  </v-btn>
                  <v-dialog
                    content-class="rounded-xl"
                    v-model="bindFlag"
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
                        v-model="email"
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
                        v-model="checkCode"
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
                      <div style="height: 196px"></div>
                      <v-btn
                        width="340px"
                        height="56px"
                        text
                        rounded
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
                    未设置
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
                        label="输入登录密码"
                        single-line
                        filled
                        dense
                        rounded
                      ></v-text-field>
                      <v-text-field
                        autocomplete="off"
                        label="输入手机验证码"
                        v-model="checkCode"
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
                        183166***739
                      </div>
                      <div style="height: 32px"></div>
                      <v-text-field
                        autocomplete="off"
                        label="请输入验证码"
                        v-model="checkCode"
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
                      <div style="height: 60px"></div>
                      <v-btn
                        width="340px"
                        height="56px"
                        text
                        rounded
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
                    UID:10086
                  </div>
                  <div style="width: 20px"></div>
                  <v-btn
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
                    v-model="checkSwitch"
                    inset
                    style="width: 44px; height: 24px;"
                    color="#5CBE52"
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
                    @click="fishFlag = true"
                    >设置
                  </v-btn>
                  <v-dialog
                    content-class="rounded-xl"
                    v-model="fishFlag"
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
            <v-row style="padding-left: 32px; padding-top: 32px">
              <v-col cols="3">
                <div
                  style="font-size: 14px; font-weight: 400; color: #8A8A8A;
                  line-height: 20px; white-space: nowrap"
                >
                  2021-03-09 17:53:32
                </div>
              </v-col>
              <v-col cols="3">
                <div
                  style="font-size: 14px; font-weight: 400; color: #8A8A8A;
                  line-height: 20px; white-space: nowrap"
                >
                  103.35.74.89
                </div>
              </v-col>
              <v-col cols="3">
                <div
                  style="font-size: 14px; font-weight: 400; color: #8A8A8A;
                  line-height: 20px; white-space: nowrap"
                >
                  Hongkong
                </div>
              </v-col>
              <v-col cols="3">
                <div
                  style="font-size: 14px; font-weight: 400; color: #8A8A8A;
                  line-height: 20px;"
                >
                  web
                </div>
              </v-col>
            </v-row>
          </v-card>
          <div style="height: 120px"></div>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CenterTab',
  data() {
    return {
      model: null,
      text: '1111',
      infoSwitch: true,
      checkSwitch: false,
      bindFlag: false,
      checkCode: '',
      email: '',
      emailRules: [
        v => !!v || '邮箱必须输入',
        v =>
          /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(v) ||
          '邮箱格式不对',
      ],
      sendCodeVue: true, // 控制发送验证码按钮显示
      authTime: 0, // 倒计时
      fishFlag: false,
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
    }
  },
  methods: {
    deleteWallet: function() {
      alert('删除钱包地址')
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
          this.payPwdNewFlag = true
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
        }
      }
    },
  },
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
