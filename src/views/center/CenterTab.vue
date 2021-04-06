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
          <v-tab style="font-size: 16px">邀请好友</v-tab>
        </v-tabs>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>
    <div style="height: 100vh">
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
              <div style="width: 120px"></div>
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
                >修改</v-btn
              >
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
              <v-btn
                text
                outlined
                style="width: 76px; height: 30px; margin-top: 39px; background: #F7F8FB;
                       border-radius: 15px; color: #00CFAC; border: 1px solid #00CFAC; font-size: 14px; font-weight: 600"
                >认证</v-btn
              >
            </div>
          </v-card>
          <div style="height: 72px"></div>
          <v-card
            height="390px"
            width="960px"
            class="mx-auto"
            style="top: 28px; box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.04); border-radius: 24px;"
          >
            <v-card-title style="padding-top: 32px; padding-left: 32px">
              <div style="font-size: 18px; font-weight: bold; color: #000000">
                钱包地址
              </div>
            </v-card-title>
          </v-card>
        </v-tab-item>
        <v-tab-item :value="`tab-2`">
          <v-card flat>
            <v-card-text v-text="22222"></v-card-text>
          </v-card>
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
    }
  },
}
</script>

<style scoped></style>
