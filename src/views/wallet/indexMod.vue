<template>
  <v-row style='background: #FAFBFC;'>
    <v-col cols='3'></v-col>
    <v-col cols='6'>
      <v-col cols='12' style='height: 0px;width: 100%;'><!-- 我的钱包 【】【】【】 -->
        <v-row>
          <v-col cols='8' style='height: 0px;width: 100%;'>

          <p style='font-size: 32px;
                font-family: Nunito-SemiBold, Nunito;
                font-weight: 600;
                color: #000000;
                line-height: 32px;
                margin:98px 22px 23px 0px'>
                      我的钱包
          </p>
          </v-col>
          <v-col cols='4' style='height: 0px;width: 100%;'>
            <v-row>
              <v-col cols='12' style='height: 0px;width: 100%;'></v-col>
              <v-col cols='4' style='height: 64px;width: 64px;'>
                <v-btn
                  @click.stop="dialog2 = true"
                  style='background: #FFFFFF;border-radius: 8px;box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.04);'
                  width='64px'
                  height='64px'
                  elevation='0.5'
                  large
                >
                  <img
                    src='https://investors.oss-cn-beijing.aliyuncs.com/assets/bz001.png'
                    style='width: 24px; height:24px;'
                  />
                </v-btn>
                <div style='height: 5px;width: 100%'></div>
                <div style='width: 100%;'>
                  <span style='margin: 0px 0px 0px 27px;font-size: 12px;
                              font-family: PingFangSC-Regular, PingFang SC;
                              font-weight: 400;
                              color: #000000;
                              '>充值</span>
                </div>
              </v-col>
              <v-col cols='4' style='height: 64px;width: 64px;'>
                <v-btn
                  @click.stop="dialog = true"
                  style='background: #FFFFFF;border-radius: 8px;box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.04);'
                  width='64px'
                  height='64px'
                  elevation='0.5'
                  large
                >
                  <img
                    src='https://investors.oss-cn-beijing.aliyuncs.com/assets/bz002.png'
                    style='width: 24px; height:24px;'
                  />
                </v-btn>
                <div style='height: 5px;width: 100%'></div>
                <div style='width: 100%;'>
                  <span style='margin: 0px 0px 0px 27px;font-size: 12px;
                              font-family: PingFangSC-Regular, PingFang SC;
                              font-weight: 400;
                              color: #000000;
                              '>提现</span>
                </div>
              </v-col>
              <v-col cols='4' style='height: 64px;width: 64px;'>
                <v-btn
                  @click.stop="dialog3 = true"
                  style='background: #FFFFFF;border-radius: 8px;box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.04);'
                  width='64px'
                  height='64px'
                  elevation='0.5'
                  large
                >
                  <img
                    src='https://investors.oss-cn-beijing.aliyuncs.com/assets/bz003.png'
                    style='width: 24px; height:24px;'
                  />
                </v-btn>
                <div style='height: 5px;width: 100%'></div>
                <div style='width: 100%;'>
                  <span style='margin: 0px 0px 0px 27px;font-size: 12px;
                              font-family: PingFangSC-Regular, PingFang SC;
                              font-weight: 400;
                              color: #000000;
                              '>兑换</span>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>


      </v-col>

      <v-col cols='12' style='height: 130px;width: 100%;'></v-col>

      <v-col cols='12' style='height: 305px;width: 100%;'>
        <swiper class='swiper' :options='swiperOption' >
          <swiper-slide style='height: 300px;'>
            <div style='height: 10px'></div>
            <!-- 有图底钱包 -->
            <v-navigation-drawer

              src='https://investors.oss-cn-beijing.aliyuncs.com/assets/qianbaoka1.png'
              style='width: 666px;
              height: 280px;
              border-radius: 20px;
              box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.04);
              '>
              <v-row>
                <div style='width: 100%;padding: 40px 0px 0px 40px'>
                  <p style='font-size: 14px;
                  font-family: Nunito-Regular, Nunito;
                  font-weight: 400;
                  color: rgba(255, 255, 255, 0.8);
                 '>
                    USDT总资产 ○
                  </p>
                </div>
                <nobr style='font-size: 23px;
                            font-family: Nunito-Bold, Nunito;
                            font-weight: bold;
                            color: #FFFFFF;
                            line-height: 48px;padding: 0px 0px 0px 40px'>
                  $
                </nobr>
                <div style='width: 16px'></div>
                <p style='font-size: 48px;
                            font-family: Nunito-Bold, Nunito;
                            font-weight: bold;
                            color: #FFFFFF;
                            line-height: 48px;

                 '>
                  6,288.0206
                </p>
                <p style='font-size: 14px;
                  font-family: Nunito-Regular, Nunito;
                  font-weight: 400;
                  color: rgba(255, 255, 255, 0.8);
                 width: 100%;height: 14px;
                  padding: 0px 0px 0px 40px;margin: 0px 0px 11px 0px'>
                  可用余额
                </p>
                <p style='font-size: 20px;
                  font-family: Nunito-Regular, Nunito;
                  font-weight: 400;
                  color: rgba(255, 255, 255, 0.8);
                 width: 100%;height: 20px;
padding: 0px 0px 0px 40px'>
                  6,288.02 USDT
                </p>
                <div style='height: 20px;width: 100%'></div>
                <p style='font-size: 14px;
                  font-family: Nunito-Regular, Nunito;
                  font-weight: 400;
                  color: rgba(255, 255, 255, 0.8);
                 width: 100%;height: 20px;
                  padding: 0px 0px 0px 40px;margin: 0px 0px 5px 0px'>
                  冻结
                </p>
                <p style='font-size: 14px;
                  font-family: Nunito-Regular, Nunito;
                  font-weight: 400;
                  color: rgba(255, 255, 255, 0.8);
                 width: 100%;height: 20px;
                  padding: 0px 0px 0px 40px'>
                  0.008 USDT
                </p>
              </v-row>
            </v-navigation-drawer>
          </swiper-slide>
          <swiper-slide>
            <!-- 白色底钱包 -->
            <div style='height: 10px'></div>
            <v-navigation-drawer

              style='width: 666px;
              height: 280px;
              border-radius: 20px;
              box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.04);
              '>
              <v-row>
                <div style='width: 100%;padding: 40px 0px 0px 40px'>
                  <p style='font-size: 14px;
                  font-family: Nunito-Regular, Nunito;
                  font-weight: 400;
                  color: #808080;
                 '>
                    USDT总资产 ○
                  </p>
                </div>
                <nobr style='font-size: 23px;
                            font-family: Nunito-Bold, Nunito;
                            font-weight: bold;
                            color: #000000;
                            line-height: 48px;padding: 0px 0px 0px 40px'>
                  $
                </nobr>
                <div style='width: 16px'></div>
                <p style='font-size: 48px;
                            font-family: Nunito-Bold, Nunito;
                            font-weight: bold;
                            color: #000000;
                            line-height: 48px;

                 '>
                  6,288.0206
                </p>
                <p style='font-size: 14px;
                  font-family: Nunito-Regular, Nunito;
                  font-weight: 400;
                  color: #808080;
                 width: 100%;height: 14px;
                  padding: 0px 0px 0px 40px;margin: 0px 0px 11px 0px'>
                  可用余额
                </p>
                <p style='font-size: 20px;
                  font-family: Nunito-Regular, Nunito;
                  font-weight: 400;
                  color: #000000;
                 width: 100%;height: 20px;
padding: 0px 0px 0px 40px'>
                  6,288.02 USDT
                </p>
                <div style='height: 20px;width: 100%'></div>
                <p style='font-size: 14px;
                  font-family: Nunito-Regular, Nunito;
                  font-weight: 400;
                  color: #808080;
                 width: 100%;height: 20px;
                  padding: 0px 0px 0px 40px;margin: 0px 0px 5px 0px'>
                  冻结
                </p>
                <p style='font-size: 14px;
                  font-family: Nunito-Regular, Nunito;
                  font-weight: 400;
                  color: #000000;
                 width: 100%;height: 20px;
                  padding: 0px 0px 0px 40px'>
                  0.008 USDT
                </p>
              </v-row>
            </v-navigation-drawer>
          </swiper-slide>
          <!--          <div class='swiper-pagination' slot='pagination'></div>-->
          <swiper-slide>
            <!-- 有图底钱包 -->
            <div style='height: 10px'></div>
            <v-navigation-drawer

              src='https://investors.oss-cn-beijing.aliyuncs.com/assets/qianbaoka1.png'
              style='width: 666px;
              height: 280px;
              border-radius: 20px;
              box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.04);
              '>
              <v-row>
                <div style='width: 100%;padding: 40px 0px 0px 40px'>
                  <p style='font-size: 14px;
                  font-family: Nunito-Regular, Nunito;
                  font-weight: 400;
                  color: rgba(255, 255, 255, 0.8);
                 '>
                    USDT总资产 ○
                  </p>
                </div>
                <nobr style='font-size: 23px;
                            font-family: Nunito-Bold, Nunito;
                            font-weight: bold;
                            color: #FFFFFF;
                            line-height: 48px;padding: 0px 0px 0px 40px'>
                  $
                </nobr>
                <div style='width: 16px'></div>
                <p style='font-size: 48px;
                            font-family: Nunito-Bold, Nunito;
                            font-weight: bold;
                            color: #FFFFFF;
                            line-height: 48px;

                 '>
                  6,288.0206
                </p>
                <p style='font-size: 14px;
                  font-family: Nunito-Regular, Nunito;
                  font-weight: 400;
                  color: rgba(255, 255, 255, 0.8);
                 width: 100%;height: 14px;
                  padding: 0px 0px 0px 40px;margin: 0px 0px 11px 0px'>
                  可用余额
                </p>
                <p style='font-size: 20px;
                  font-family: Nunito-Regular, Nunito;
                  font-weight: 400;
                  color: rgba(255, 255, 255, 0.8);
                 width: 100%;height: 20px;
padding: 0px 0px 0px 40px'>
                  6,288.02 USDT
                </p>
                <div style='height: 20px;width: 100%'></div>
                <p style='font-size: 14px;
                  font-family: Nunito-Regular, Nunito;
                  font-weight: 400;
                  color: rgba(255, 255, 255, 0.8);
                 width: 100%;height: 20px;
                  padding: 0px 0px 0px 40px;margin: 0px 0px 5px 0px'>
                  冻结
                </p>
                <p style='font-size: 14px;
                  font-family: Nunito-Regular, Nunito;
                  font-weight: 400;
                  color: rgba(255, 255, 255, 0.8);
                 width: 100%;height: 20px;
                  padding: 0px 0px 0px 40px'>
                  0.008 USDT
                </p>
              </v-row>
            </v-navigation-drawer>
          </swiper-slide>
        </swiper>

      </v-col>

      <v-col cols='12' style='height: 0px'></v-col>

      <v-col cols='12' style='height: 40px'>
        <p style='font-size: 32px;
        font-family: PingFang-SC-Semibold, PingFang-SC;
        font-weight: 600;
        color: #000000;
        line-height: 32px;'>
          资产记录
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
          <v-col cols='6' class="text-right">
             <span style="font-size: 14px;
                          font-family: Nunito-Regular, Nunito;
                          font-weight: 400;
                          color: #1BD7A7;
                          line-height: 19px;">全部记录 ➔</span>
          </v-col>
        </v-row>
        <v-col cols='12' style='height: 40px'></v-col>
        <v-col cols='12'>
          <!-- 收账 -->
          <v-row>
            <!-- shoukuan2.png -->
            <v-col cols='1' style=''>
              <v-img src='https://investors.oss-cn-beijing.aliyuncs.com/assets/usertou1.png' height='48px' width='48px'>
                <img src='https://investors.oss-cn-beijing.aliyuncs.com/assets/shoukuan1.png' height='18px' width='18px' style='margin:30px 0px 0px 30px'>
              </v-img>
            </v-col>
            <v-col cols='9' style=''>
              <p style='font-size: 18px;font-family: Nunito-Bold, Nunito;font-weight: bold;color: #0C0C0C;line-height: 18px;margin-bottom: 8px'>
                abcc</p>
              <p style='font-size: 18px;font-family: Nunito-Bold, Nunito;font-weight: bold;color: #1BD7A7;line-height: 18px;'>
                +1,224.92 USDT</p>
            </v-col>
            <v-col cols='2' class="text-right" style=''>
              <span style='font-size: 18px;
                          font-family: Nunito-Regular, Nunito;
                          font-weight: 400;
                          color: #7F7F7F;
                          line-height: 18px;'>2021.03.01</span>
            </v-col>
          </v-row>
          <!-- /收账 -->

          <!-- 出账 -->
          <v-row>
            <!-- shoukuan2.png -->
            <v-col cols='1' style=''>
              <v-img src='https://investors.oss-cn-beijing.aliyuncs.com/assets/usertou2.png' height='48px' width='48px'>
                <img src='https://investors.oss-cn-beijing.aliyuncs.com/assets/shoukuan2.png' height='18px' width='18px' style='margin:30px 0px 0px 30px'>
              </v-img>
            </v-col>
            <v-col cols='9' style=''>
              <p style='font-size: 18px;font-family: Nunito-Bold, Nunito;font-weight: bold;color: #0C0C0C;line-height: 18px;margin-bottom: 8px'>
                abcc</p>
              <p style='font-size: 18px;font-family: Nunito-Bold, Nunito;font-weight: bold;color: #E82268;line-height: 18px;'>
                +1,224.92 USDT</p>
            </v-col>
            <v-col cols='2' class="text-right" style=''>
              <span style='font-size: 18px;
                          font-family: Nunito-Regular, Nunito;
                          font-weight: 400;
                          color: #7F7F7F;
                          line-height: 18px;'>2021.03.01</span>
            </v-col>
          </v-row>
          <!-- /出账 -->

          <!-- 收账 -->
          <v-row>
            <!-- shoukuan2.png -->
            <v-col cols='1' style=''>
              <v-img src='https://investors.oss-cn-beijing.aliyuncs.com/assets/usertou3.png' height='48px' width='48px'>
                <img src='https://investors.oss-cn-beijing.aliyuncs.com/assets/shoukuan1.png' height='18px' width='18px' style='margin:30px 0px 0px 30px'>
              </v-img>
            </v-col>
            <v-col cols='9' style=''>
              <p style='font-size: 18px;font-family: Nunito-Bold, Nunito;font-weight: bold;color: #0C0C0C;line-height: 18px;margin-bottom: 8px'>
                abcc</p>
              <p style='font-size: 18px;font-family: Nunito-Bold, Nunito;font-weight: bold;color: #1BD7A7;line-height: 18px;'>
                +1,224.92 USDT</p>
            </v-col>
            <v-col cols='2' class="text-right" style=''>
              <span style='font-size: 18px;
                          font-family: Nunito-Regular, Nunito;
                          font-weight: 400;
                          color: #7F7F7F;
                          line-height: 18px;'>2021.03.01</span>
            </v-col>
          </v-row>
          <!-- /收账 -->
        </v-col>

      </v-col>

      <v-col cols='12' style='height: 400px'></v-col>
    </v-col>
    <v-col cols='3'></v-col>
  <!-- d1 -->
    <v-dialog
      content-class='rounded-xl'
      v-model="dialog"
      width="400"
      height='640'
    >

    <div
      v-show="t1"
      style='height: 640px;width: 400px;background: #FFFFFF;'>
      <!-- img区域 -->
      <div style='height: 80px;width: 400px;'>
      <v-img src="https://investors.oss-cn-beijing.aliyuncs.com/assets/w-tou1.png">
        <v-row style='height: 40px'></v-row>
          <v-row class="text-center" style='margin: 0px;width: 100%'>
            <v-col cols='6'
                   @click="t1 =true"
                   style='font-size: 20px;
                                  font-family: PingFang-SC-Semibold, PingFang-SC;
                                  font-weight: 600;
                                  color: #000000;
                                  line-height: 20px;'>站内转账</v-col>
            <v-col cols='6'
            @click="t1 =false"
            style='font-size: 20px;
                  font-family: PingFang-SC-Semibold, PingFang-SC;
                  font-weight: 600;
                  color: #808080;
                  line-height: 20px;'>
                                提现地址
            </v-col>
          </v-row>
      </v-img>

      </div>


      <v-row style='height: 60px;width: 100%;margin: 0px'>
        <v-col cols='2'></v-col>
        <v-col cols='8'>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                style="background: #F7F8FB;color: #000000"
                dark
                depressed
                bottom
                rounded
                block
                height='60'
              >
                <img src="https://investors.oss-cn-beijing.aliyuncs.com/assets/usdt_logo.png"  style="height: 39px; width: 39px;">
                <span style='font-size: 20px;
                    font-family: Nunito-SemiBold, Nunito;
                    font-weight: 600;
                    color: #000000;
                    line-height: 26px;
                    margin: 10px'>
         USDT</span>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="onClick">
                <v-list-item-title>
                  <v-btn
                    style="background: #F7F8FB;color: #000000"
                    dark
                    depressed
                    bottom
                    rounded
                    block
                    height='60'
                  >
                    <img src="https://investors.oss-cn-beijing.aliyuncs.com/assets/usdt_logo.png"  style="height: 39px; width: 39px;">
                    <span style='font-size: 20px;
                    font-family: Nunito-SemiBold, Nunito;
                    font-weight: 600;
                    color: #000000;
                    line-height: 26px;
                    margin: 10px'>
         USDT2</span>
                  </v-btn>
                </v-list-item-title>
              </v-list-item>
              <v-list-item @click="onClick">
                <v-list-item-title>
                  <v-btn
                    style="background: #F7F8FB;color: #000000"
                    dark
                    depressed
                    bottom
                    rounded
                    block
                    height='60'
                  >
                    <img src="https://investors.oss-cn-beijing.aliyuncs.com/assets/usdt_logo.png"  style="height: 39px; width: 39px;">
                    <span style='font-size: 20px;
                    font-family: Nunito-SemiBold, Nunito;
                    font-weight: 600;
                    color: #000000;
                    line-height: 26px;
                    margin: 10px'>
         USDT3</span>
                  </v-btn>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        <v-col cols='2'></v-col>
      </v-row>
      <v-row style='height: 30px'></v-row>

      <v-row style='width: 100%;height: 70px; margin: 0px;'>
        <v-col cols='1'></v-col>
        <v-col cols='10'>
          <v-text-field
            background-color='#F7F8FB'
            autocomplete="off"
            label="请输入对方账户"
            single-line
            filled
            rounded
            height='50'
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
                  width="24"
                  height="24"
                  src="https://investors.oss-cn-beijing.aliyuncs.com/assets/shouji1.png"
                  alt=""
                >
              </v-fade-transition>
            </template>

          </v-text-field>
        </v-col>
        <v-col cols='1'>
        </v-col>
      </v-row>
      <v-row style='width: 100%;margin: 0px;'>
        <v-col cols='1'></v-col>
        <v-col cols='10'>
          <span style='font-size: 12px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #7F7F7F;'>
            站内转账，实时到账，零手续费。备份</span>
        </v-col>
        <v-col cols='1'></v-col>
      </v-row>
      <p style='margin: 20px'></p>
      <v-row style='width: 100%;margin: 0px;'>
        <v-col cols='1'></v-col>
        <v-col cols='10'>
          <span style='font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #7F7F7F;line-height: 14px;'>
            ·可用余额 0.03005498 USD
          </span>
          <p style='margin: 16px'></p>
          <span style='font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #7F7F7F;line-height: 14px;'>
            ·手续费:
          </span>
          <span style='font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #5B7ADE;line-height: 14px;'>
                    0.00001 USDT
          </span>
          <p style='margin: 16px'></p>
          <span style='font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #7F7F7F;line-height: 14px;'>
            ·最小提币金额：0.0001 USDT
          </span>

          <p style='margin: 16px'></p>
          <span style='font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #F69D2B;line-height: 14px;'>
            ·转账前请务必确认地址及币种信息无误。一旦转出，不可测回！
          </span>
        </v-col>
        <v-col cols='1'></v-col>
      </v-row>
      <div style='width: 100%;height: 44px'></div>
        <v-row  style='width: 100%;height: 70px; margin: 0px;'>
          <v-col cols='8'></v-col>
          <v-col cols='2'>
            <v-btn
              style="background: linear-gradient(90deg, #F1F1F2 0%, #B2B2B2 100%);color: #FFFFFF"
              depressed
              bottom
              rounded
              x-large
              block
              @click="submit"
            >
              下一步
            </v-btn>
          </v-col>

        </v-row>

    </div>

      <!-- 站内转账 -->
      <div
        v-show="!t1"
        style='height: 640px;width: 400px;background: #FFFFFF;'>
        <!-- img区域 -->
        <div style='height: 80px;width: 400px;'>
          <v-img src="https://investors.oss-cn-beijing.aliyuncs.com/assets/w-tou2.png">
            <v-row style='height: 40px'></v-row>
            <v-row class="text-center" style='margin: 0px;width: 100%'>
              <v-col cols='6'
                     @click="t1 = true"
                     style='font-size: 20px;
                                  font-family: PingFang-SC-Semibold, PingFang-SC;
                                  font-weight: 600;
                                  color: #808080;
                                  line-height: 20px;'>站内转账</v-col>
              <v-col cols='6'
                     @click="t1 =false"
                     style='font-size: 20px;
                  font-family: PingFang-SC-Semibold, PingFang-SC;
                  font-weight: 600;
                  color: #000000;
                  line-height: 20px;'>
                提现地址
              </v-col>
            </v-row>
          </v-img>

        </div>


        <v-row style='height: 30px;width: 100%;margin: 0px'>
          <v-col cols='2'></v-col>
          <v-col cols='8'>

<!--            <img slot="prepend-inner" src="https://investors.oss-cn-beijing.aliyuncs.com/assets/usdt_logo.png"  style="height: 25px; width: 25px">-->
            <v-menu offset-y >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  style="background: #F7F8FB;color: #000000"
                  dark
                  depressed
                  bottom
                  rounded
                  block
                  height='60'
                >
      <img src="https://investors.oss-cn-beijing.aliyuncs.com/assets/usdt_logo.png"  style="height: 39px; width: 39px;">
       <span style='font-size: 20px;
                    font-family: Nunito-SemiBold, Nunito;
                    font-weight: 600;
                    color: #000000;
                    line-height: 26px;
                    margin: 10px'>
         USDT</span>
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
                      height='60'
                    >
                      <img src="https://investors.oss-cn-beijing.aliyuncs.com/assets/usdt_logo.png"  style="height: 39px; width: 39px;">
                      <span style='font-size: 20px;
                    font-family: Nunito-SemiBold, Nunito;
                    font-weight: 600;
                    color: #000000;
                    line-height: 26px;
                    margin: 10px'>
         USDT2</span>
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
                      height='60'
                    >
                      <img src="https://investors.oss-cn-beijing.aliyuncs.com/assets/usdt_logo.png"  style="height: 39px; width: 39px;">
                      <span style='font-size: 20px;
                    font-family: Nunito-SemiBold, Nunito;
                    font-weight: 600;
                    color: #000000;
                    line-height: 26px;
                    margin: 10px'>
         USDT2</span>
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
          <v-col cols='2'></v-col>
        </v-row>
        <v-row style='height: 50px'></v-row>

        <v-row style='width: 100%;height: 70px; margin: 0px;'>
          <v-col cols='1'></v-col>
          <v-col cols='10'>
            <v-text-field
              background-color='#F7F8FB'
              autocomplete="off"
              label="请输入或粘贴账户"
              single-line
              filled
              rounded
              height='50'
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
                    width="24"
                    height="24"
                    src="https://investors.oss-cn-beijing.aliyuncs.com/assets/dizhi1.png"
                    alt=""
                  >
                </v-fade-transition>
              </template>

            </v-text-field>
          </v-col>
          <v-col cols='1'>
          </v-col>
        </v-row>
        <v-row style='width: 100%;height: 70px; margin: 0px;'>
          <v-col cols='1'></v-col>
          <v-col cols='10'>
            <v-text-field
              background-color='#F7F8FB'
              autocomplete="off"
              label="输入提币数量"
              single-line
              filled
              rounded
              height='50'
            >
              <template v-slot:append>
                <v-fade-transition leave-absolute>
                  <v-progress-circular
                    v-if="loading"
                    size="24"
                    color="info"
                    indeterminate
                  ></v-progress-circular>
                  <div style='font-size: 14px;
font-family: PingFang-SC-Semibold, PingFang-SC;
font-weight: 600;
color: #06D0AE;
line-height: 20px;'>全部</div>
                </v-fade-transition>
              </template>

            </v-text-field>
          </v-col>
          <v-col cols='1'>
          </v-col>
        </v-row>
        <v-row style='width: 100%;margin: 0px;'>
          <v-col cols='1'></v-col>
          <v-col cols='10'>
          <span style='font-size: 12px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #7F7F7F;'>
            站内转账，实时到账，零手续费。备份</span>
          </v-col>
          <v-col cols='1'></v-col>
        </v-row>
<!--        <p style='margin: 20px'></p>-->
        <v-row style='width: 100%;margin: 0px;'>
          <v-col cols='1'></v-col>
          <v-col cols='10'>
          <span style='font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #7F7F7F;line-height: 14px;'>
            ·可用余额 0.03005498 USD
          </span>
            <p style='margin: 14px'></p>
            <span style='font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #7F7F7F;line-height: 14px;'>
            ·手续费:
          </span>
            <span style='font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #5B7ADE;line-height: 14px;'>
                    0.00001 USDT
          </span>
            <p style='margin: 14px'></p>
            <span style='font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #7F7F7F;line-height: 14px;'>
            ·最小提币金额：0.0001 USDT
          </span>

            <p style='margin: 14px'></p>
            <span style='font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #F69D2B;line-height: 14px;'>
            ·转账前请务必确认地址及币种信息无误。一旦转出，不可测回！
          </span>
          </v-col>
          <v-col cols='1'></v-col>
        </v-row>

        <v-row  style='width: 100%;height: 70px; margin: 0px;'>
          <v-col cols='8'></v-col>
          <v-col cols='2'>
            <v-btn
              style="background: linear-gradient(90deg, #F1F1F2 0%, #B2B2B2 100%);color: #FFFFFF"
              depressed
              bottom
              rounded
              x-large
              block
              @click="submit"
            >
              下一步
            </v-btn>
          </v-col>

        </v-row>

      </div>
    </v-dialog>

    <!-- d2 -->
    <v-dialog
      content-class='rounded-xl'
      v-model="dialog2"
      width="400"
      height='640'
    >
      <div
        style='height: 640px;width: 400px;background: #FFFFFF;'>
        <v-row style='height: 60px;width: 100%;margin: 0px'>
          <span style='font-size: 24px;margin: 30px 33px 32px 31px ;
            font-family: PingFang-SC-Semibold, PingFang-SC;
            font-weight: 600;
            color: #000000;'>充值(ERC20)</span>
        </v-row>
        <v-row style='height: 30px'></v-row>

        <v-row style='height: 60px;width: 100%;margin: 0px'>
          <v-col cols='2'></v-col>
          <v-col cols='8'>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  style="background: #F7F8FB;color: #000000"
                  dark
                  depressed
                  bottom
                  rounded
                  block
                  height='60'
                >
                  <img src="https://investors.oss-cn-beijing.aliyuncs.com/assets/usdt_logo.png"  style="height: 39px; width: 39px;">
                  <span style='font-size: 20px;
                    font-family: Nunito-SemiBold, Nunito;
                    font-weight: 600;
                    color: #000000;
                    line-height: 26px;
                    margin: 10px'>
         USDT</span>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="onClick">
                  <v-list-item-title>
                    <v-btn
                      style="background: #F7F8FB;color: #000000"
                      dark
                      depressed
                      bottom
                      rounded
                      block
                      height='60'
                    >
                      <img src="https://investors.oss-cn-beijing.aliyuncs.com/assets/usdt_logo.png"  style="height: 39px; width: 39px;">
                      <span style='font-size: 20px;
                    font-family: Nunito-SemiBold, Nunito;
                    font-weight: 600;
                    color: #000000;
                    line-height: 26px;
                    margin: 10px'>
         USDT2</span>
                    </v-btn>
                  </v-list-item-title>
                </v-list-item>
                <v-list-item @click="onClick">
                  <v-list-item-title>
                    <v-btn
                      style="background: #F7F8FB;color: #000000"
                      dark
                      depressed
                      bottom
                      rounded
                      block
                      height='60'
                    >
                      <img src="https://investors.oss-cn-beijing.aliyuncs.com/assets/usdt_logo.png"  style="height: 39px; width: 39px;">
                      <span style='font-size: 20px;
                    font-family: Nunito-SemiBold, Nunito;
                    font-weight: 600;
                    color: #000000;
                    line-height: 26px;
                    margin: 10px'>
         USDT3</span>
                    </v-btn>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
          <v-col cols='2'></v-col>
        </v-row>
        <v-row>
          <v-col cols='2'></v-col>
          <v-col cols='8' >
            <vue-qr ref="Qrcode"
                    :text="dataObj.text"
                    :callback="test" qid="testQrId"
                    margin="30"
            size='260'></vue-qr>
          </v-col>
          <v-col cols='2'></v-col>
        </v-row>
        <v-row>
          <v-col cols='1'></v-col>
          <v-col cols='10'>
            <v-text-field
              background-color='#F7F8FB'
              autocomplete="off"
              value='0x852915c9b371833c93eeaeeb2b7f6bb5557eaa41'
              single-line
              filled
              rounded
              height='50'
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
                  >
                </v-fade-transition>
              </template>

            </v-text-field>
          </v-col>
          <v-col cols='1'></v-col>
        </v-row>
        <span style='font-size: 12px;
                      font-family: PingFang-SC-Regular, PingFang-SC;
                      font-weight: 400;
                      color: #E67100;
                      margin-left: 65px;'>此地址仅用做USDT收款，转入其他币种将无法找回</span>
        <v-row>
        </v-row>
      </div>
    </v-dialog>

    <!-- d3兑换 -->
    <v-dialog
      content-class='rounded-xl'
      v-model="dialog3"
      width="400"
      height='540'
    >
      <div
        style='height: 540px;width: 400px;background: #FFFFFF;'>
        <v-row style='height: 60px;width: 100%;margin: 0px'>
          <span style='font-size: 24px;margin: 30px 33px 32px 31px ;
            font-family: PingFang-SC-Semibold, PingFang-SC;
            font-weight: 600;
            color: #000000;'>兑换</span>
        </v-row>
        <v-row style='height: 20px'></v-row>
        <v-row>
          <v-col cols='1'></v-col>
          <v-col cols='10'  class='rounded-lg' style='height: 115px;width: 100%;border: 3px solid #F7F8FB;'>
            <v-row>
              <v-col cols='1'>从</v-col>
              <v-col class="text-right" cols='11'>余额:100</v-col>
            </v-row>
            <v-row>
              <v-col cols='6' style=';height: 60px'>
                <v-row>
                  <v-col cols='3' style='padding: 12px 5px 17px 8px'>
                    <v-img src='https://investors.oss-cn-beijing.aliyuncs.com/assets/usdt_logo.png' height='30px' width='30px'></v-img>
                  </v-col>
                  <v-col cols='4' style='margin: 0px;padding: 0px'>
                     <span style='font-size: 12px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;margin-bottom: 12px'>
                  Tether
                </span>
                    <p style='padding: 0px;margin-bottom: 2px'></p>
                    <span style='font-size: 16px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #000000;'>
                  USDT
                </span>
                  </v-col>
                  <v-col cols='5' style='margin:4px 0px 0px -19px;'>
                    <v-btn
                      style="font-size: 12px;
font-family: Nunito-Regular, Nunito;
font-weight: 400;
color: #FFFFFF;background: linear-gradient(222deg, #3AEDD3 0%, #1BD7A7 100%);"
                      small
                      color='#3AEDD3'
                      elevation='0'
                    >
                      MAX
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols='6' style='height: 60px;padding: 0px 10px 3px 1px' class="text-right">
                <span style='font-size: 12px;
font-family: Nunito-Regular, Nunito;
font-weight: 400;
color: #808080;margin-bottom: 12px'>
                  ≈ $0.00
                </span>
                <p style='padding: 0px;margin-bottom: 2px'></p>
                <span style='font-size: 16px;
font-family: Nunito-SemiBold, Nunito;
font-weight: 600;
color: #9F9FA4;'>
                  0.00
                </span>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols='1'></v-col>
        </v-row>

          <v-row style=''>
            <v-col cols='5' style=''>
               <div style='height: 1px;
              border: 1px solid #F7F8FB;margin:31px -21px 10px 28px'></div>
            </v-col>
            <v-col cols='2' style='height: 87px;width: 100%;padding: 15px 0px 15px 8px'>
              <v-btn
                elevation='0'
                outlined
                color='#F7F8FB'
                fab>
                <v-img src='https://investors.oss-cn-beijing.aliyuncs.com/assets/qiehuan.png' height='36px' width='36px'></v-img>
              </v-btn>
            </v-col>
            <v-col cols='5'>
              <div style='height: 1px;
              border: 1px solid #F7F8FB;margin:32px 23px 12px -18px'></div>

            </v-col>

          </v-row>

        <v-row>
          <v-col cols='1'></v-col>
          <v-col cols='10'  class='rounded-lg' style='height: 115px;width: 100%;border: 3px solid #F7F8FB;'>
            <v-row>
              <v-col cols='1'>到</v-col>
              <v-col class="text-right" cols='11'>余额:100</v-col>
            </v-row>
            <v-row>
              <v-col cols='6' style=';height: 60px'>
                <v-row>
                  <v-col cols='3' style='padding: 12px 5px 17px 8px'>
                    <v-img src='https://investors.oss-cn-beijing.aliyuncs.com/assets/usdt_logo.png' height='30px' width='30px'></v-img>
                  </v-col>
                  <v-col cols='4' style='margin: 0px;padding: 0px'>
                     <span style='font-size: 12px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;margin-bottom: 12px'>
                  INVESTORS
                </span>
                    <p style='padding: 0px;margin-bottom: 2px'></p>
                    <span style='font-size: 16px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #000000;'>
                  HSF
                </span>
                  </v-col>
                  <v-col cols='5' style='margin:4px 0px 0px -19px;'>

                  </v-col>
                </v-row>
              </v-col>
              <v-col cols='6' style='height: 60px;padding: 0px 10px 3px 1px' class="text-right">
                <span style='font-size: 12px;
font-family: Nunito-Regular, Nunito;
font-weight: 400;
color: #808080;margin-bottom: 12px'>
                  ≈ $0.00
                </span>
                <p style='padding: 0px;margin-bottom: 2px'></p>
                <span style='font-size: 16px;
font-family: Nunito-SemiBold, Nunito;
font-weight: 600;
color: #9F9FA4;'>
                  0.00
                </span>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols='1'></v-col>
        </v-row>

        <v-row>
          <v-col cols='1'></v-col>
          <span style='font-size: 14px;
          font-family: Nunito-Regular, Nunito;
          font-weight: 400;
          color: #808080;
          line-height: 32px;'>
                            汇率：
                  </span>

                    <span style='font-size: 14px;
          font-family: Nunito-Regular, Nunito;
          font-weight: 400;
          color: #000000;
          line-height: 32px;'>
            1USDT≈ 0.005 HSF
          </span>
        </v-row>
        <v-row style='height: 10px'></v-row>
        <v-row>
          <v-col cols='1'></v-col>
          <v-col cols='10'>
            <v-btn
              style="background: linear-gradient(90deg, #F1F1F2 0%, #B2B2B2 100%);color: #FFFFFF"
              depressed
              bottom
              rounded
              large
              block
              @click="submit"
            >
              兑换
            </v-btn>
          </v-col>
          <v-col cols='1'></v-col>
        </v-row>
      </div>
    </v-dialog>
  </v-row>



</template>




<script>
import VueQr from 'vue-qr'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'indexMod',
  components: {
    Swiper,
    SwiperSlide,
    VueQr,
  },
  data() {
    return {
      // bool1 :true, //充值》
      dataObj: {//二维码
        text: 'https://blog.csdn.net/weixin_43760328/rss/list',
      },
      sheet:false,
      t1: true, //对话框初始画面
      tab:null,
      areaCode: 'USTD',
      areaCodes: ['USTD', 'SHF'],
      dialog: false,
      dialog2: false,
      dialog3: false,
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