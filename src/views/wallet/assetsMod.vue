<template>
  <v-row style='background: #FAFBFC;'>
    <v-col cols='3'></v-col>
    <v-col cols='6'>

      <v-col cols='12' style='height: 10px;width: 100%;'></v-col>


      <v-col cols='12' style='height: 0px'></v-col>

      <v-col cols='12' style='height: 40px'>
        <p style='font-size: 32px;
        font-family: PingFang-SC-Semibold, PingFang-SC;
        font-weight: 600;
        color: #000000;
        line-height: 32px;'>
          全部记录
        </p>
      </v-col>

      <v-col cols='12' style='height: 50px;'> </v-col>
      <v-col cols='12' style='width: 100%;background: #FFFFFF;
                              box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.04);
                              border-radius: 24px;
                              padding:40px 40px 40px 40px'>

        <v-row>
          <v-col cols='6'>
            <span style="font-size: 18px;
                        font-family: Nunito-SemiBold, Nunito;
                        font-weight: 600;
                        color: #000000;
                        ">资产记录</span>
          </v-col>
          <v-col cols='6'>
            <v-row>
              <v-col cols='3'></v-col>
            <v-col cols='3'>

              <v-menu offset-y >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-bind="attrs"
                    v-on="on"
                    style="background: #F7F8FB;color: #000000"
                    depressed
                    bottom
                    rounded
                    height='28'
                    width='106'
                  >
                    <span style='font-size: 12px;
                          font-family: PingFangSC-Regular, PingFang SC;
                          font-weight: 400;
                          color: #1BD7A7;'>
                    全部币种</span>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="onClick">
                    <v-list-item-title>
                      <v-btn
                        class='rounded-lg'
                        style="background: #FFFFFF;color: #000000"
                        depressed
                        bottom
                        rounded
                        block
                        height='48'
                      >
                        <span style='font-size: 14px;
                              font-family: Nunito-SemiBold, Nunito;
                              font-weight: 600;
                              color: #000000;'>
                        全部</span>
                      </v-btn>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="onClick">
                    <v-list-item-title>
                      <v-btn
                        class='rounded-lg'
                        style="background: #FFFFFF;color: #000000"
                        depressed
                        bottom
                        rounded
                        block
                        height='48'
                      >
                        <span style='font-size: 14px;
                              font-family: Nunito-SemiBold, Nunito;
                              font-weight: 600;
                              color: #000000;'>
                        USDT</span>
                      </v-btn>
                    </v-list-item-title>
                  </v-list-item>

                  <v-list-item @click="onClick">
                    <v-list-item-title>
                      <v-btn
                        class='rounded-lg'
                        style="background: #FFFFFF;color: #000000"
                        depressed
                        bottom
                        rounded
                        block
                        height='48'
                      >
                        <span style='font-size: 14px;
                              font-family: Nunito-SemiBold, Nunito;
                              font-weight: 600;
                              color: #000000;'>
                          HSF</span>
                      </v-btn>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>

              <v-bottom-sheet v-model="sheet" scrollable>
                <v-sheet
                  small
                  class="text-center"
                  height="200px"
                >
                  <div class="py-3">
                    This is a bottom sheet using the controlled by v-model instead of activator
                  </div>
                </v-sheet>
              </v-bottom-sheet>

            </v-col>
            <v-col cols='3'>
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-bind="attrs"
                    v-on="on"
                    style="background: #F7F8FB;color: #000000"
                    depressed
                    bottom
                    rounded
                    height='28'
                    width='106'
                  >
                    <span style='font-size: 12px;
                          font-family: PingFangSC-Regular, PingFang SC;
                          font-weight: 400;
                          color: #1BD7A7;'>
                    全部类型</span>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="onClick">
                    <v-list-item-title>
                      <v-btn
                        class='rounded-lg'
                        style="background: #FFFFFF;color: #000000"
                        depressed
                        bottom
                        rounded
                        block
                        height='48'
                      >
                        <span style='font-size: 14px;
                              font-family: Nunito-SemiBold, Nunito;
                              font-weight: 600;
                              color: #000000;'>
                        全部</span>
                      </v-btn>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="onClick">
                    <v-list-item-title>
                      <v-btn
                        class='rounded-lg'
                        style="background: #FFFFFF;color: #000000"
                        depressed
                        bottom
                        rounded
                        block
                        height='48'
                      >
                        <span style='font-size: 14px;
                              font-family: Nunito-SemiBold, Nunito;
                              font-weight: 600;
                              color: #000000;'>
                        充值提现</span>
                      </v-btn>
                    </v-list-item-title>
                  </v-list-item>

                  <v-list-item @click="onClick">
                    <v-list-item-title>
                      <v-btn
                        class='rounded-lg'
                        style="background: #FFFFFF;color: #000000"
                        depressed
                        bottom
                        rounded
                        block
                        height='48'
                      >
                        <span style='font-size: 14px;
                              font-family: Nunito-SemiBold, Nunito;
                              font-weight: 600;
                              color: #000000;'>
                          站内转账</span>
                      </v-btn>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="onClick">
                    <v-list-item-title>
                      <v-btn
                        class='rounded-lg'
                        style="background: #FFFFFF;color: #000000"
                        depressed
                        bottom
                        rounded
                        block
                        height='48'
                      >
                        <span style='font-size: 14px;
                              font-family: Nunito-SemiBold, Nunito;
                              font-weight: 600;
                              color: #000000;'>
                          兑换</span>
                      </v-btn>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>

              <v-bottom-sheet v-model="sheet" scrollable>
                <v-sheet
                  small
                  class="text-center"
                  height="200px"
                >
                  <div class="py-3">
                    This is a bottom sheet using the controlled by v-model instead of activator
                  </div>
                </v-sheet>
              </v-bottom-sheet>

            </v-col>
              <v-col cols='3'>
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      style="background: #F7F8FB;color: #000000"
                      depressed
                      bottom
                      rounded
                      height='28'
                      width='106'
                    >
                    <span style='font-size: 12px;
                          font-family: PingFangSC-Regular, PingFang SC;
                          font-weight: 400;
                          color: #1BD7A7;'>
                    7天内</span>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="onClick">
                      <v-list-item-title>
                        <v-btn
                          class='rounded-lg'
                          style="background: #FFFFFF;color: #000000"
                          depressed
                          bottom
                          rounded
                          block
                          height='48'
                        >
                        <span style='font-size: 14px;
                              font-family: Nunito-SemiBold, Nunito;
                              font-weight: 600;
                              color: #000000;'>
                        30天内</span>
                        </v-btn>
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="onClick">
                      <v-list-item-title>
                        <v-btn
                          class='rounded-lg'
                          style="background: #FFFFFF;color: #000000"
                          depressed
                          bottom
                          rounded
                          block
                          height='48'
                        >
                        <span style='font-size: 14px;
                              font-family: Nunito-SemiBold, Nunito;
                              font-weight: 600;
                              color: #000000;'>
                        半年内</span>
                        </v-btn>
                      </v-list-item-title>
                    </v-list-item>

                    <v-list-item @click="onClick">
                      <v-list-item-title>
                        <v-btn
                          class='rounded-lg'
                          style="background: #FFFFFF;color: #000000"
                          depressed
                          bottom
                          rounded
                          block
                          height='48'
                        >
                        <span style='font-size: 14px;
                              font-family: Nunito-SemiBold, Nunito;
                              font-weight: 600;
                              color: #000000;'>
                          全部</span>
                        </v-btn>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>

                <v-bottom-sheet v-model="sheet" scrollable>
                  <v-sheet
                    small
                    class="text-center"
                    height="200px"
                  >
                    <div class="py-3">
                      This is a bottom sheet using the controlled by v-model instead of activator
                    </div>
                  </v-sheet>
                </v-bottom-sheet>

              </v-col>
              </v-row>
          </v-col>
        </v-row>
        <v-col cols='12' style='height: 40px'></v-col>
        <v-col cols='12'>
          <!-- 收账 -->
          <v-row>
            <v-expansion-panels flat>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <v-row>
                    <!-- shoukuan2.png -->
                    <v-col cols='1' style=''>
                      <v-img src='https://investors.oss-cn-beijing.aliyuncs.com/assets/usertou3.png' height='48px' width='48px'>
                        <img src='https://investors.oss-cn-beijing.aliyuncs.com/assets/shoukuan1.png' height='18px' width='18px' style='margin:30px 0px 0px 30px'>
                      </v-img>
                    </v-col>
                    <v-col cols='9' style=''>
                      <p style='font-size: 18px;font-family: Nunito-Bold, Nunito;font-weight: bold;color: #0C0C0C;line-height: 18px;margin-bottom: 8px'>
                        abcc1</p>
                      <p style='font-size: 18px;font-family: Nunito-Bold, Nunito;font-weight: bold;color: #1BD7A7;line-height: 18px;'>
                        +1,224.92 USDT</p>
                    </v-col>
                    <v-col cols='2' class="text-right" style=''>
              <span style='font-size: 18px;
                          font-family: Nunito-Regular, Nunito;
                          font-weight: 400;
                          color: #7F7F7F;
                          line-height: 60px;'>2021.03.01</span>
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
                      充值类型：普通充值
                    </v-col>
                    <v-col cols='6' style='font-size: 12px;
                                        font-family: PingFangSC-Regular, PingFang SC;
                                        font-weight: 400;
                                        color: #808080;
                                       '>
                      手续费:0.0001 HSF</v-col>

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
                    0x1eff42ace4f4bdasldasjdkqljdqwl
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
                    0x1eff42ac213123e4fdwicw9w98djw9jdkqljdqwl
                    </span>
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-row>

          <!-- /收账 -->

          <!-- 出账 -->
          <v-row>
            <v-expansion-panels flat>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <v-row>
                    <!-- shoukuan2.png -->
                    <v-col cols='1' style=''>
                      <v-img src='https://investors.oss-cn-beijing.aliyuncs.com/assets/usertou3.png' height='48px' width='48px'>
                        <img src='https://investors.oss-cn-beijing.aliyuncs.com/assets/shoukuan1.png' height='18px' width='18px' style='margin:30px 0px 0px 30px'>
                      </v-img>
                    </v-col>
                    <v-col cols='9' style=''>
                      <p style='font-size: 18px;font-family: Nunito-Bold, Nunito;font-weight: bold;color: #0C0C0C;line-height: 18px;margin-bottom: 8px'>
                        abcc1</p>
                      <p style='font-size: 18px;font-family: Nunito-Bold, Nunito;font-weight: bold;color: #1BD7A7;line-height: 18px;'>
                        +1,224.92 USDT</p>
                    </v-col>
                    <v-col cols='2' class="text-right" style=''>
              <span style='font-size: 18px;
                          font-family: Nunito-Regular, Nunito;
                          font-weight: 400;
                          color: #7F7F7F;
                          line-height: 60px;'>2021.03.01</span>
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
                      充值类型：普通充值
                    </v-col>
                    <v-col cols='6' style='font-size: 12px;
                                        font-family: PingFangSC-Regular, PingFang SC;
                                        font-weight: 400;
                                        color: #808080;
                                       '>
                      手续费:0.0001 HSF</v-col>

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
                    0x1eff42ace4f4bdasldasjdkqljdqwl
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
                    0x1eff42ac213123e4fdwicw9w98djw9jdkqljdqwl
                    </span>
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-row>

          <!-- /出账 -->

          <!-- 收账 -->
          <v-row>
            <v-expansion-panels flat>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <v-row>
                    <!-- shoukuan2.png -->
                    <v-col cols='1' style=''>
                      <v-img src='https://investors.oss-cn-beijing.aliyuncs.com/assets/usertou3.png' height='48px' width='48px'>
                        <img src='https://investors.oss-cn-beijing.aliyuncs.com/assets/shoukuan1.png' height='18px' width='18px' style='margin:30px 0px 0px 30px'>
                      </v-img>
                    </v-col>
                    <v-col cols='9' style=''>
                      <p style='font-size: 18px;font-family: Nunito-Bold, Nunito;font-weight: bold;color: #0C0C0C;line-height: 18px;margin-bottom: 8px'>
                        abcc1</p>
                      <p style='font-size: 18px;font-family: Nunito-Bold, Nunito;font-weight: bold;color: #1BD7A7;line-height: 18px;'>
                        +1,224.92 USDT</p>
                    </v-col>
                    <v-col cols='2' class="text-right" style=''>
              <span style='font-size: 18px;
                          font-family: Nunito-Regular, Nunito;
                          font-weight: 400;
                          color: #7F7F7F;
                          line-height: 60px;'>2021.03.01</span>
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
                      充值类型：普通充值
                    </v-col>
                    <v-col cols='6' style='font-size: 12px;
                                        font-family: PingFangSC-Regular, PingFang SC;
                                        font-weight: 400;
                                        color: #808080;
                                       '>
                      手续费:0.0001 HSF</v-col>

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
                    0x1eff42ace4f4bdasldasjdkqljdqwl
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
                    0x1eff42ac213123e4fdwicw9w98djw9jdkqljdqwl
                    </span>
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-row>

          <!-- /收账 -->
<!--完成 -->
  <v-row>
          <v-expansion-panels flat>
            <v-expansion-panel>
              <v-expansion-panel-header>
                <v-row>
                  <!-- shoukuan2.png -->
                  <v-col cols='1' style=''>
                    <v-img src='https://investors.oss-cn-beijing.aliyuncs.com/assets/usertou3.png' height='48px' width='48px'>
                      <img src='https://investors.oss-cn-beijing.aliyuncs.com/assets/shoukuan1.png' height='18px' width='18px' style='margin:30px 0px 0px 30px'>
                    </v-img>
                  </v-col>
                  <v-col cols='9' style=''>
                    <p style='font-size: 18px;font-family: Nunito-Bold, Nunito;font-weight: bold;color: #0C0C0C;line-height: 18px;margin-bottom: 8px'>
                      abcc1</p>
                    <p style='font-size: 18px;font-family: Nunito-Bold, Nunito;font-weight: bold;color: #1BD7A7;line-height: 18px;'>
                      +1,224.92 USDT</p>
                  </v-col>
             <v-col cols='2' class="text-right" style=''>
              <span style='font-size: 18px;
                          font-family: Nunito-Regular, Nunito;
                          font-weight: 400;
                          color: #7F7F7F;
                          line-height: 60px;'>2021.03.01</span>
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
                    充值类型：普通充值
                  </v-col>
                  <v-col cols='6' style='font-size: 12px;
                                        font-family: PingFangSC-Regular, PingFang SC;
                                        font-weight: 400;
                                        color: #808080;
                                       '>
                    手续费:0.0001 HSF</v-col>

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
                    0x1eff42ace4f4bdasldasjdkqljdqwl
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
                    0x1eff42ac213123e4fdwicw9w98djw9jdkqljdqwl
                    </span>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
  </v-row>

        </v-col>

      </v-col>

      <v-col cols='12' style='height: 400px'></v-col>
    </v-col>
    <v-col cols='3'></v-col>
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
  data() {
    return {
      sheet:false,
      t1: true, //对话框初始画面
      tab:null,
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


<style lang='scss' scoped>
.v-dialog{
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
.v-dialog{
  $dialog-border-radius: 20;
}
</style>