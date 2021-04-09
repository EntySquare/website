<template>
  <v-container fluid class="align-start" style="padding: 0;">
    <v-img
      src="https://investors.oss-cn-beijing.aliyuncs.com/assets/invest/background_black.png"
      style="height: 343px"
    >
      <v-row>
        <v-col cols="12" style="height: 81px;"></v-col>
        <v-col cols="6" offset="3">
          <div>
            <div class="d-inline-flex">
              <div>
                <router-link to="/centerTab">
                  <v-img
                    width="32px"
                    height="32px"
                    src="https://investors.oss-cn-beijing.aliyuncs.com/assets/invest/arrow_green_dark.png"
                  ></v-img>
                </router-link>
              </div>
              <div style="width: 16px"></div>
              <div
                style="width: 96px;height: 32px;font-size: 32px;font-weight: 600;color: #FFFFFF;line-height: 32px;"
              >
                盈利宝
              </div>
            </div>
            <div style="height: 105px"></div>
            <div
              style="width: 93px;height: 28px;font-size: 20px;font-weight: 500;color: #FFFFFF;line-height: 28px;"
            >
              R3中风险
            </div>
            <div style="height: 42px"></div>
            <div>
              <span
                style="width: 64px;height: 16px;font-size: 16px;font-weight: 400;color: rgba(255, 255, 255, 0.8);line-height: 16px;"
                >投资期限</span
              >
              <div class="d-inline-flex" style="width: 12px;"></div>
              <span
                style="width: 40px;height: 16px;font-size: 16px;font-weight: 600;color: #FFFFFF;line-height: 16px;"
                >10天</span
              >
              <div class="d-inline-flex" style="width: 34px;"></div>
              <span
                style="width: 64px;height: 16px;font-size: 16px;font-weight: 400;color: rgba(255, 255, 255, 0.8);line-height: 16px;"
                >最低投入</span
              >
              <div class="d-inline-flex" style="width: 12px;"></div>
              <span
                style="width: 40px;height: 16px;font-size: 16px;font-weight: 600;color: #FFFFFF;line-height: 16px;"
                >100 USDT</span
              >
            </div>
          </div>
        </v-col>
      </v-row>
    </v-img>
    <v-row>
      <v-col cols="6" offset="3">
        <v-tabs
          height="78px"
          v-model="tab"
          slider-size="5"
          slider-color="black"
          color="black"
          center-active
        >
          <v-tab :href="`#tab-1`" class="tabTitle">项目介绍</v-tab>
          <div style="width: 42px"></div>
          <v-tab :href="`#tab-2`" class="tabTitle">交易规则</v-tab>
          <div style="width: 42px"></div>
          <v-tab :href="`#tab-3`" class="tabTitle">产品档案</v-tab>
          <div style="width: 42px"></div>
          <v-tab :href="`#tab-4`" class="tabTitle">常见问题</v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <div style="height: 3px"></div>
    <div style="height: auto; box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.1);">
      <v-tabs-items v-model="tab">
        <v-tab-item :value="`tab-1`">
          <div style="height: 100vh"></div>
        </v-tab-item>
        <v-tab-item :value="`tab-2`">
          <div style="height: 1811px">
            <v-col
              cols="6"
              offset="3"
              style="margin-top: 36px; background: #FAFBFC;"
            >
              <v-tabs
                height="78px"
                v-model="tabTrans"
                color="transparent"
                center-active
                background-color="#FAFBFC"
              >
                <v-tab :href="`#tab-2-1`" class="tabSubTitle">买入</v-tab>
                <div style="width: 82px"></div>
                <v-tab :href="`#tab-2-2`" class="tabSubTitle">撤销</v-tab>
                <div style="width: 82px"></div>
                <v-tab :href="`#tab-2-3`" class="tabSubTitle">收益</v-tab>
              </v-tabs>
            </v-col>
            <v-tabs-items v-model="tabTrans">
              <v-tab-item :value="`tab-2-1`">
                <v-col cols="6" offset="3" style="background: #FAFBFC;">
                  <div
                    style="width: 100%; height: 1582px; padding: 24px; background: #FFFFFF;"
                  >
                    <div style="padding: 42px 24px 42px 24px;">
                      <div
                        class="transRulesText"
                        style="width: 72px;height: 18px"
                      >
                        交易规则
                      </div>
                      <div style="height: 38px"></div>
                      <div
                        class="transRulesText"
                        style="width: 72px; color: #808080;"
                      >
                        本期买入
                      </div>
                      <div style="height: 18px"></div>
                      <div class="transRulesText">
                        2021-02-25 10:00:00至2021-03-03 17:00:00
                      </div>
                      <div style="height: 56px"></div>
                      <div class="transRulesText" style="color: #808080;">
                        最低投入
                      </div>
                      <div style="height: 18px"></div>
                      <div class="transRulesText">
                        100 USDT
                      </div>
                      <div style="height: 56px"></div>
                      <div class="transRulesText" style="color: #808080;">
                        投资期限
                      </div>
                      <div style="height: 18px"></div>
                      <div class="transRulesText">
                        10天
                      </div>
                      <div style="height: 56px"></div>
                      <div class="transRulesText" style="color: #808080;">
                        风险等级
                      </div>
                      <div style="height: 18px"></div>
                      <div class="transRulesText">
                        R3 中风险
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-tab-item>
              <v-tab-item :value="`tab-2-2`">
                <v-col cols="6" offset="3" style="background: #FAFBFC;">
                  <div
                    style="width: 100%; height: 1582px; padding: 24px; background: #FFFFFF;"
                  >
                    <div style="padding: 42px 24px 42px 24px;">
                      <div
                        class="transRulesText"
                        style="width: 72px;height: 18px"
                      >
                        撤销规则
                      </div>
                      <div style="height: 38px"></div>
                      <div
                        class="transRulesText"
                        style="width: 72px; color: #808080;"
                      >
                        赎回时间
                      </div>
                      <div style="height: 18px"></div>
                      <div class="transRulesText">
                        任意时间赎回
                      </div>
                      <div style="height: 56px"></div>
                      <div class="transRulesText" style="color: #808080;">
                        赎回费率
                      </div>
                      <div style="height: 18px"></div>
                      <div class="transRulesText">
                        不收取
                      </div>
                      <div style="height: 56px"></div>
                      <div class="transRulesText" style="color: #808080;">
                        到账时间
                      </div>
                      <div style="height: 18px"></div>
                      <div class="transRulesText">
                        撤销后将收到您的回款。回款将直接转入您的钱包账户，不需要手动操作。
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-tab-item>
              <v-tab-item :value="`tab-2-3`">
                <v-col cols="6" offset="3" style="background: #FAFBFC;">
                  <div
                    style="width: 100%; height: 1582px; padding: 24px; background: #FFFFFF;"
                  >
                    <div style="padding: 42px 24px 42px 24px;">
                      <div
                        class="transRulesText"
                        style="width: 72px;height: 18px"
                      >
                        收益规则
                      </div>
                      <div style="height: 38px"></div>
                      <div
                        class="transRulesText"
                        style="width: 72px; color: #808080;"
                      >
                        赎回时间
                      </div>
                      <div style="height: 18px"></div>
                      <div class="transRulesText">
                        任意时间赎回
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-tab-item>
            </v-tabs-items>
          </div>
        </v-tab-item>
        <v-tab-item :value="`tab-3`">
          <div style="height: 100vh">
            <v-col
              cols="6"
              offset="3"
              style="margin-top: 36px; background: #FAFBFC;"
            >
              <v-tabs
                height="78px"
                v-model="tabProduct"
                color="transparent"
                center-active
                background-color="#FAFBFC"
              >
                <v-tab :href="`#tab-3-1`" class="tabSubTitle">产品类型</v-tab>
                <div style="width: 40px"></div>
                <v-tab :href="`#tab-3-2`" class="tabSubTitle">产品特点</v-tab>
                <div style="width: 40px"></div>
                <v-tab :href="`#tab-3-3`" class="tabSubTitle">项目方介绍</v-tab>
                <div style="width: 40px"></div>
                <v-tab :href="`#tab-3-4`" class="tabSubTitle">资金投向</v-tab>
                <div style="width: 40px"></div>
                <v-tab :href="`#tab-3-5`" class="tabSubTitle">相关协议</v-tab>
              </v-tabs>
            </v-col>
            <v-tabs-items v-model="tabProduct">
              <v-tab-item :value="`tab-3-1`">
                <v-col cols="6" offset="3" style="background: #FAFBFC;">
                  <div
                    style="width: 100%; height: 1582px; padding: 24px; background: #FFFFFF;"
                  >
                    <div style="padding: 42px 24px 42px 24px;">
                      <div
                        class="transRulesText"
                        style="width: 72px;height: 18px"
                      >
                        产品类型
                      </div>
                      <div style="height: 38px"></div>
                      <div
                        class="transRulesText"
                        style="width: 72px; color: #808080;"
                      >
                        XXX
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-tab-item>
              <v-tab-item :value="`tab-3-2`">
                <v-col cols="6" offset="3" style="background: #FAFBFC;">
                  <div
                    style="width: 100%; height: 1582px; padding: 24px; background: #FFFFFF;"
                  >
                    <div style="padding: 42px 24px 42px 24px;">
                      <div
                        class="transRulesText"
                        style="width: 72px;height: 18px"
                      >
                        产品特点
                      </div>
                      <div style="height: 38px"></div>
                      <div
                        class="transRulesText"
                        style="width: 72px; color: #808080;"
                      >
                        XXX
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-tab-item>
              <v-tab-item :value="`tab-3-3`">
                <v-col cols="6" offset="3" style="background: #FAFBFC;">
                  <div
                    style="width: 100%; height: 1582px; padding: 24px; background: #FFFFFF;"
                  >
                    <div style="padding: 42px 24px 42px 24px;">
                      <div
                        class="transRulesText"
                        style="width: 100px;height: 18px"
                      >
                        项目方介绍
                      </div>
                      <div style="height: 38px"></div>
                      <div
                        class="transRulesText"
                        style="width: 72px; color: #808080;"
                      >
                        XXX
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-tab-item>
              <v-tab-item :value="`tab-3-4`">
                <v-col cols="6" offset="3" style="background: #FAFBFC;">
                  <div
                    style="width: 100%; height: 1582px; padding: 24px; background: #FFFFFF;"
                  >
                    <div style="padding: 42px 24px 42px 24px;">
                      <div
                        class="transRulesText"
                        style="width: 72px;height: 18px"
                      >
                        资金投向
                      </div>
                      <div style="height: 38px"></div>
                      <div
                        class="transRulesText"
                        style="width: 72px; color: #808080;"
                      >
                        XXX
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-tab-item>
              <v-tab-item :value="`tab-3-5`">
                <v-col cols="6" offset="3" style="background: #FAFBFC;">
                  <div
                    style="width: 100%; height: 1582px; padding: 24px; background: #FFFFFF;"
                  >
                    <div style="padding: 42px 24px 42px 24px;">
                      <div
                        class="transRulesText"
                        style="width: 72px;height: 18px"
                      >
                        相关协议
                      </div>
                      <div style="height: 38px"></div>
                      <div
                        class="transRulesText"
                        style="width: 72px; color: #808080;"
                      >
                        XXX
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-tab-item>
            </v-tabs-items>
          </div>
        </v-tab-item>
        <v-tab-item :value="`tab-4`">
          <div style="height: 100vh"></div>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'InvestTab',
  data() {
    return {
      tab: null,
      tabTrans: null,
      tabProduct: null,
    }
  },
}
</script>

<style lang="scss" scoped>
.allFont {
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
.tabTitle {
  font-size: 18px;
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: 600;
  color: #000000;
}
.tabSubTitle {
  font-size: 18px;
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: 600;
  color: #808080;
}
.transRulesText {
  font-size: 18px;
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: 500;
  color: #000000;
}
</style>
