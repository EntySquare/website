<template>
  <v-container>
    <v-row>
      <v-col cols="6" offset="3">
        <div
          class="d-inline-flex mx-auto"
          style="height: auto; min-height: 100vh"
        >
          <v-card
            height="714px"
            width="514px"
            style="top: 36px; box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.04); border-radius: 24px;"
          >
            <div>
              <div>
                <div
                  class="d-inline-flex justify-space-between"
                  style="padding-top: 32px; padding-left: 32px;"
                >
                  <div
                    style="font-size: 18px; font-weight: 600; color: #000000"
                  >
                    KYC Lv2
                  </div>
                  <div
                    style="margin-left:50px; font-size: 18px; font-weight: 600; color: #E82268;"
                  >
                    审核中
                  </div>
                </div>
                <v-card-subtitle
                  style="padding-left: 32px; font-size: 12px; white-space: nowrap;
                         font-weight: 500; color: #F69D2B;"
                >
                  每日提币限额为10000USDT，通过身份验证后提现将无限制
                </v-card-subtitle>
              </div>
              <div style="padding-top: 44px">UID:10086</div>
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
              <router-link to="/realName">
                <v-btn
                  text
                  outlined
                  style="width: 76px; height: 30px; margin-top: 39px; background: #F7F8FB;
                       border-radius: 15px; color: #00CFAC; border: 1px solid #00CFAC; font-size: 14px; font-weight: 600"
                  >认证</v-btn
                >
              </router-link>
            </div>
          </v-card>
          <div style="width: 32px"></div>
          <v-card
            height="217px"
            width="414px"
            style="top: 28px; box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.04); border-radius: 24px;"
          >
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'RealName',
}
</script>

<style scoped></style>
