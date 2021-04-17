<template>
  <v-row style='background: #FAFBFC;'>
    <v-col cols='3'></v-col>
    <v-col cols='6'>

      <v-col cols='12' style='height: 10px;width: 100%;'></v-col>


      <v-col cols="12" style="height: 40px">
        <p
          style="font-size: 32px;
        font-family: PingFang-SC-Semibold, PingFang-SC;
        font-weight: 600;
        color: #000000;
        line-height: 32px;"
        >
          全部记录
        </p>
      </v-col>

      <v-col cols="12" style="height: 50px;"> </v-col>
      <v-col
        cols="12"
        style="width: 100%;background: #FFFFFF;
                              box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.04);
                              border-radius: 24px;
                              padding:40px 40px 40px 40px"
      >
        <v-row>
          <v-col cols="6">
            <span
              style="font-size: 18px;
                        font-family: Nunito-SemiBold, Nunito;
                        font-weight: 600;
                        color: #000000;
                        "
              >资产记录</span
            >
          </v-col>
          <v-col cols="6">
            <v-row>
              <v-col cols="3"></v-col>
              <v-col cols="3">
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      style="background: #F7F8FB;color: #000000"
                      depressed
                      bottom
                      rounded
                      height="28"
                      width="106"
                    >
                      <span
                        style="font-size: 12px;
                          font-family: PingFangSC-Regular, PingFang SC;
                          font-weight: 400;
                          color: #1BD7A7;"
                      >
                        {{ choice.CodeTypeText }}</span
                      >
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="onClick">
                      <v-list-item-title>
                        <v-btn
                          @click="
                            choice.CodeType = 'all'
                            choice.CodeTypeText = '全部币种'
                          "
                          class="rounded-lg"
                          style="background: #FFFFFF;color: #000000"
                          depressed
                          bottom
                          rounded
                          block
                          height="48"
                        >
                          <span
                            style="font-size: 14px;
                              font-family: Nunito-SemiBold, Nunito;
                              font-weight: 600;
                              color: #000000;"
                          >
                            全部</span
                          >
                        </v-btn>
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="onClick">
                      <v-list-item-title>
                        <v-btn
                          @click="
                            choice.CodeType = 'USDT'
                            choice.CodeTypeText = 'USDT'
                          "
                          class="rounded-lg"
                          style="background: #FFFFFF;color: #000000"
                          depressed
                          bottom
                          rounded
                          block
                          height="48"
                        >
                          <span
                            style="font-size: 14px;
                              font-family: Nunito-SemiBold, Nunito;
                              font-weight: 600;
                              color: #000000;"
                          >
                            USDT</span
                          >
                        </v-btn>
                      </v-list-item-title>
                    </v-list-item>

                    <v-list-item @click="onClick">
                      <v-list-item-title>
                        <v-btn
                          @click="
                            choice.CodeType = 'HSF'
                            choice.CodeTypeText = 'HSF'
                          "
                          class="rounded-lg"
                          style="background: #FFFFFF;color: #000000"
                          depressed
                          bottom
                          rounded
                          block
                          height="48"
                        >
                          <span
                            style="font-size: 14px;
                              font-family: Nunito-SemiBold, Nunito;
                              font-weight: 600;
                              color: #000000;"
                          >
                            HSF</span
                          >
                        </v-btn>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>

                <v-bottom-sheet v-model="sheet" scrollable>
                  <v-sheet small class="text-center" height="200px">
                    <div class="py-3">
                      This is a bottom sheet using the controlled by v-model
                      instead of activator
                    </div>
                  </v-sheet>
                </v-bottom-sheet>
              </v-col>
              <v-col cols="3">
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      style="background: #F7F8FB;color: #000000"
                      depressed
                      bottom
                      rounded
                      height="28"
                      width="106"
                    >
                      <span
                        style="font-size: 12px;
                          font-family: PingFangSC-Regular, PingFang SC;
                          font-weight: 400;
                          color: #1BD7A7;"
                      >
                        {{ choice.PayTypeText }}</span
                      >
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="onClick">
                      <v-list-item-title>
                        <v-btn
                          @click="
                            choice.PayType = 'all'
                            choice.PayTypeText = '全部类型'
                          "
                          class="rounded-lg"
                          style="background: #FFFFFF;color: #000000"
                          depressed
                          bottom
                          rounded
                          block
                          height="48"
                        >
                          <span
                            style="font-size: 14px;
                              font-family: Nunito-SemiBold, Nunito;
                              font-weight: 600;
                              color: #000000;"
                          >
                            全部</span
                          >
                        </v-btn>
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="onClick">
                      <v-list-item-title>
                        <v-btn
                          @click="
                            choice.PayType = 'cztx'
                            choice.PayTypeText = '充值提现'
                          "
                          class="rounded-lg"
                          style="background: #FFFFFF;color: #000000"
                          depressed
                          bottom
                          rounded
                          block
                          height="48"
                        >
                          <span
                            style="font-size: 14px;
                              font-family: Nunito-SemiBold, Nunito;
                              font-weight: 600;
                              color: #000000;"
                          >
                            充值提现</span
                          >
                        </v-btn>
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="onClick">
                      <v-list-item-title>
                        <v-btn
                          @click="
                            choice.PayType = 'znzz'
                            choice.PayTypeText = '站内转账'
                          "
                          class="rounded-lg"
                          style="background: #FFFFFF;color: #000000"
                          depressed
                          bottom
                          rounded
                          block
                          height="48"
                        >
                          <span
                            style="font-size: 14px;
                              font-family: Nunito-SemiBold, Nunito;
                              font-weight: 600;
                              color: #000000;"
                          >
                            站内转账</span
                          >
                        </v-btn>
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="onClick">
                      <v-list-item-title>
                        <v-btn
                          @click="
                            choice.PayType = 'dh'
                            choice.PayTypeText = '兑换'
                          "
                          class="rounded-lg"
                          style="background: #FFFFFF;color: #000000"
                          depressed
                          bottom
                          rounded
                          block
                          height="48"
                        >
                          <span
                            style="font-size: 14px;
                              font-family: Nunito-SemiBold, Nunito;
                              font-weight: 600;
                              color: #000000;"
                          >
                            兑换</span
                          >
                        </v-btn>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>

                <v-bottom-sheet v-model="sheet" scrollable>
                  <v-sheet small class="text-center" height="200px">
                    <div class="py-3">
                      This is a bottom sheet using the controlled by v-model
                      instead of activator
                    </div>
                  </v-sheet>
                </v-bottom-sheet>
              </v-col>
              <v-col cols="3">
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      style="background: #F7F8FB;color: #000000"
                      depressed
                      bottom
                      rounded
                      height="28"
                      width="106"
                    >
                      <span
                        style="font-size: 12px;
                          font-family: PingFangSC-Regular, PingFang SC;
                          font-weight: 400;
                          color: #1BD7A7;"
                      >
                        {{ choice.TimesText }}</span
                      >
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="onClick">
                      <v-list-item-title>
                        <v-btn
                          @click="
                            choice.Times = '30t'
                            choice.TimesText = '30天内'
                            GetData()
                          "
                          class="rounded-lg"
                          style="background: #FFFFFF;color: #000000"
                          depressed
                          bottom
                          rounded
                          block
                          height="48"
                        >
                          <span
                            style="font-size: 14px;
                              font-family: Nunito-SemiBold, Nunito;
                              font-weight: 600;
                              color: #000000;"
                          >
                            30天内</span
                          >
                        </v-btn>
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="onClick">
                      <v-list-item-title>
                        <v-btn
                          @click="
                            choice.Times = '180t'
                            choice.TimesText = '半年内'
                            GetData()
                          "
                          class="rounded-lg"
                          style="background: #FFFFFF;color: #000000"
                          depressed
                          bottom
                          rounded
                          block
                          height="48"
                        >
                          <span
                            style="font-size: 14px;
                              font-family: Nunito-SemiBold, Nunito;
                              font-weight: 600;
                              color: #000000;"
                          >
                            半年内</span
                          >
                        </v-btn>
                      </v-list-item-title>
                    </v-list-item>

                    <v-list-item @click="onClick">
                      <v-list-item-title>
                        <v-btn
                          @click="
                            choice.Times = 'all'
                            choice.TimesText = '全部时间'
                            GetData()
                          "
                          class="rounded-lg"
                          style="background: #FFFFFF;color: #000000"
                          depressed
                          bottom
                          rounded
                          block
                          height="48"
                        >
                          <span
                            style="font-size: 14px;
                              font-family: Nunito-SemiBold, Nunito;
                              font-weight: 600;
                              color: #000000;"
                          >
                            全部</span
                          >
                        </v-btn>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>

                <v-bottom-sheet v-model="sheet" scrollable>
                  <v-sheet small class="text-center" height="200px">
                    <div class="py-3">
                      This is a bottom sheet using the controlled by v-model
                      instead of activator
                    </div>
                  </v-sheet>
                </v-bottom-sheet>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-col cols='12' style='height: 40px'></v-col>
        <v-col cols='12'>
          <div v-for="v in choice.list" v-bind:key='v'>
            <!--//收账-->
            <div v-if="v.Types == 'enter'">
              <v-row>
                <v-expansion-panels flat>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      <v-row>
                        <!-- shoukuan2.png -->
                        <v-col cols='1' style=''>
                          <v-img :src="v.ToFaceImg" height='48px' width='48px'>
                            <img src='https://investors.oss-cn-beijing.aliyuncs.com/assets/shoukuan1.png' height='18px' width='18px' style='margin:30px 0px 0px 30px'>
                          </v-img>
                        </v-col>
                        <v-col cols='9' style=''>
                          <p style='font-size: 18px;font-family: Nunito-Bold, Nunito;font-weight: bold;color: #0C0C0C;line-height: 18px;margin-bottom: 8px'>
                            {{ v.ToUserName }}</p>
                          <p style='font-size: 18px;font-family: Nunito-Bold, Nunito;font-weight: bold;color: #1BD7A7;line-height: 18px;'>
                            +{{ v.Num }} {{ v.CodeType }}</p>
                        </v-col>
                        <v-col cols='2' class="text-right" style=''>
              <span style='font-size: 18px;
                          font-family: Nunito-Regular, Nunito;
                          font-weight: 400;
                          color: #7F7F7F;
                          line-height: 60px;'>{{$moment(v.Times).format('YYYY.MM.DD')}}</span>
                        </v-col>
                      </v-row>

                    </v-expansion-panel-header>
                    <v-expansion-panel-content style='padding: 0px;'>
                      <v-row style='background: #F7F8FB;height: 96px;width: 100%;border-radius: 10px;margin: 0px'>
                        <v-col cols='6' style='font-size: 12px;
                                          font-family: PingFangSC-Regular, PingFang SC;
                                          font-weight: 400;
                                          color: #808080;
                                         '>
                          充值类型：{{ v.TypesText }}
                        </v-col>
                        <v-col cols='6' style='font-size: 12px;
                                        font-family: PingFangSC-Regular, PingFang SC;
                                        font-weight: 400;
                                        color: #808080;
                                       '>
                          手续费:{{ v.ServiceCharge }} {{ v.CodeType }}</v-col>

                        <v-col cols='6'>
                    <span style='font-size: 12px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #808080;
                                '>
                      充值地址：
                    </span>
                          <span style='font-size: 12px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #1BD7A7;
                                '>
                     {{ v.To }}
                    </span>
                        </v-col>
                        <v-col cols='6'>
                    <span style='font-size: 12px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #808080;
                                '>
                      交易id：
                    </span>
                          <span style='font-size: 12px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #1BD7A7;
                               '>
                    {{ v.Hash }}
                    </span>
                        </v-col>
                      </v-row>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-row>
            </div>

          <!--//出账-->
          <div v-if="v.Types == 'out'">
            <v-row>
              <v-expansion-panels flat>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <v-row>
                      <!-- shoukuan2.png -->
                      <v-col cols="1" style="">
                        <v-img :src="v.ToFaceImg" height="48px" width="48px">
                          <img
                            src="https://investors.oss-cn-beijing.aliyuncs.com/assets/shoukuan2.png"
                            height="18px"
                            width="18px"
                            style="margin:30px 0px 0px 30px"
                          />
                        </v-img>
                      </v-col>
                      <v-col cols="9" style="">
                        <p
                          style="font-size: 18px;font-family: Nunito-Bold, Nunito;font-weight: bold;color: #0C0C0C;line-height: 18px;margin-bottom: 8px"
                        >
                          {{ v.ToUserName }}
                        </p>
                        <p
                          style="font-size: 18px;font-family: Nunito-Bold, Nunito;font-weight: bold;color: #E82268;line-height: 18px;"
                        >
                          -{{ v.Num }} {{ v.CodeType }}
                        </p>
                      </v-col>
                      <v-col cols="2" class="text-right" style="">
                        <span
                          style="font-size: 18px;
                          font-family: Nunito-Regular, Nunito;
                          font-weight: 400;
                          color: #7F7F7F;
                          line-height: 60px;"
                          >{{ $moment(v.Times).format('YYYY.MM.DD') }}</span
                        >
                      </v-col>
                    </v-row>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content style="padding: 0px;">
                    <v-row
                      style="background: #F7F8FB;height: 96px;width: 100%;border-radius: 10px;margin: 0px"
                    >
                      <v-col
                        cols="6"
                        style="font-size: 12px;
                                          font-family: PingFangSC-Regular, PingFang SC;
                                          font-weight: 400;
                                          color: #808080;
                                         "
                      >
                        充值类型：{{ v.TypesText }}
                      </v-col>
                      <v-col
                        cols="6"
                        style="font-size: 12px;
                                        font-family: PingFangSC-Regular, PingFang SC;
                                        font-weight: 400;
                                        color: #808080;
                                       "
                      >
                        手续费:{{ v.ServiceCharge }} {{ v.CodeType }}</v-col
                      >

                        <v-col cols='6'>
                    <span style='font-size: 12px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #808080;
                                '>
                      充值地址：
                    </span>
                          <span style='font-size: 12px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #1BD7A7;
                                '>
                     {{ v.To }}
                    </span>
                        </v-col>
                        <v-col cols='6'>
                    <span style='font-size: 12px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #808080;
                                '>
                      交易id：
                    </span>
                          <span style='font-size: 12px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #1BD7A7;
                               '>
                    {{ v.Hash }}
                    </span>
                        </v-col>
                      </v-row>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-row>
            </div>

          </div>

        </v-col>

      </v-col>

      <v-col cols='12' style='height: 400px'></v-col>
    </v-col>
    <v-col cols="3"></v-col>
    <!-- d1 -->
  </v-row>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'indexMod',
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted: function() {

    this.GetData() //需要触发的函数
    window.scroll(0, 0);//页面加载置顶
  },
  methods: {
    //页面数据渲染
    GetData: function() {
      const token = localStorage.getItem('token')
      this.axios
        .post(
          '/t0/wallet/txhistory',
          {
            CodeType: this.choice.CodeType,
            PayType: this.choice.PayType,
            Times: this.choice.Times,
          },
          { headers: { 'access-token': token } })
        .then(response => {
          console.log('/t0/wallet/txhistory api 。。。。')
          this.choice.list = response.data.list
        })
    },
  },
  data() {
    return {
      choice: {
        CodeType: 'all',
        CodeTypeText: '全部币种',

        PayType: 'all',
        PayTypeText: '全部类型',

        Times: 'all',
        TimesText: '全部时间',

        list: '',
      },
      sheet: false,
      t1: true, //对话框初始画面
      tab: null,
      areaCode: 'USTD',
      areaCodes: ['USTD', 'SHF'],
      dialog: false,
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.v-dialog {
  $dialog-border-radius: 100px;
}
.swiper-slide {
  width: 65%;
}

.swiper-slide:nth-child(1n) {
  width: 65%;
}

.swiper-slide:nth-child(3n) {
  width: 65%;
}
.v-dialog {
  $dialog-border-radius: 20;
}
</style>