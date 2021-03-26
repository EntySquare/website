<template>
  <v-container style="padding: 0px;">
    <v-row>
      <v-col cols="9">
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
          <img src="@/assets/lgt1.png" style="width:32px;height:auto;" />
          资产配置服务
        </samp>
        <p style="height: 54px;"></p>
        <samp
          style="font-size: 28px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #000000;line-height: 38px;"
        >
          <img src="@/assets/lgt2.png" style="width:32px;height:auto;" />
          轻松兑换资产
        </samp>
        <p style="height: 54px;"></p>
        <samp
          style="font-size: 28px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #000000;line-height: 38px;"
        >
          <img src="@/assets/lgt3.png" style="width:32px;height:auto;" />
          智能安全钱包
        </samp>
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
    }
  },
}
</script>

<style></style>
