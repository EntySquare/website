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
              R3 中风险
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
    <div style="height: auto; box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.1);">
      <v-tabs-items v-model="tab">
        <v-tab-item :value="`tab-1`">
          <div style="height: 100vh"></div>
        </v-tab-item>
        <v-tab-item :value="`tab-2`">
          <div style="height: 100vh"></div>
        </v-tab-item>
        <v-tab-item :value="`tab-3`">
          <div style="height: 100vh"></div>
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
    }
  },
}
</script>

<style scoped>
.tabTitle {
  font-size: 18px;
  font-family: PingFang-SC-Semibold, PingFang-SC;
  font-weight: 600;
  color: #000000;
}
</style>
