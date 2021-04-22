<template>
  <v-row style="background: #FAFBFC;">
    <v-col cols="3"></v-col>
    <v-col cols="6">
      <v-col cols="12" style="height: 0px;width: 100%;"
        ><!-- 我的钱包 【】【】【】 -->
        <v-row>
          <v-col cols="8" style="height: 0px;width: 100%;">
            <p
              style="font-size: 32px;
                font-family: Nunito-SemiBold, Nunito;
                font-weight: 600;
                color: #000000;
                line-height: 32px;
                margin:98px 22px 23px 0px"
            >
              我的钱包
            </p>
          </v-col>
          <v-col cols="4" style="height: 0px;width: 100%;">
            <v-row>
              <v-col cols="12" style="height: 0px;width: 100%;"></v-col>
              <v-col cols="4" style="height: 64px;width: 64px;">
                <v-btn
                  @click.stop="dialog2 = true"
                  style="background: #FFFFFF;border-radius: 8px;box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.04);"
                  width="64px"
                  height="64px"
                  elevation="0.5"
                  large
                >
                  <img
                    src="https://investors.oss-cn-beijing.aliyuncs.com/assets/bz001.png"
                    style="width: 24px; height:24px;"
                  />
                </v-btn>
                <div style="height: 5px;width: 100%"></div>
                <div style="width: 100%;">
                  <span
                    style="margin: 0px 0px 0px 27px;font-size: 12px;
                              font-family: PingFangSC-Regular, PingFang SC;
                              font-weight: 400;
                              color: #000000;
                              "
                    >充值</span
                  >
                </div>
              </v-col>
              <v-col cols="4" style="height: 64px;width: 64px;">
                <v-btn
                  @click.stop="dialog = true"
                  style="background: #FFFFFF;border-radius: 8px;box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.04);"
                  width="64px"
                  height="64px"
                  elevation="0.5"
                  large
                >
                  <img
                    src="https://investors.oss-cn-beijing.aliyuncs.com/assets/bz002.png"
                    style="width: 24px; height:24px;"
                  />
                </v-btn>
                <div style="height: 5px;width: 100%"></div>
                <div style="width: 100%;">
                  <span
                    style="margin: 0px 0px 0px 27px;font-size: 12px;
                              font-family: PingFangSC-Regular, PingFang SC;
                              font-weight: 400;
                              color: #000000;
                              "
                    >提现</span
                  >
                </div>
              </v-col>
              <v-col cols="4" style="height: 64px;width: 64px;">
                <v-btn
                  @click="dialog3 = true"
                  style="background: #FFFFFF;border-radius: 8px;box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.04);"
                  width="64px"
                  height="64px"
                  elevation="0.5"
                  large
                >
                  <img
                    src="https://investors.oss-cn-beijing.aliyuncs.com/assets/bz003.png"
                    style="width: 24px; height:24px;"
                  />
                </v-btn>
                <div style="height: 5px;width: 100%"></div>
                <div style="width: 100%;">
                  <span
                    style="margin: 0px 0px 0px 27px;font-size: 12px;
                              font-family: PingFangSC-Regular, PingFang SC;
                              font-weight: 400;
                              color: #000000;
                              "
                    >兑换</span
                  >
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" style="height: 130px;width: 100%;"></v-col>

      <v-col cols="12" style="height: 305px;width: 100%;">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide style="height: 300px;">
            <div style="height: 10px"></div>
            <!-- 有图底钱包 -->
            <v-navigation-drawer
              src="https://investors.oss-cn-beijing.aliyuncs.com/assets/qianbaoka1.png"
              style="width: 666px;
              height: 280px;
              border-radius: 20px;
              box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.04);
              "
            >
              <v-row>
                <div
                  class="d-inline-flex"
                  style="width: 100%;padding: 40px 40px 0 40px;
                font-size: 14px; font-weight: 400; color: rgba(255, 255, 255, 0.8);"
                >
                  USDT总资产 ○
                  <div
                    style="background: #00CFAC; margin-left: auto;
                     border-radius: 12px; width: 68px; height: 40px"
                  >
                    <div
                      class="d-flex justify-center"
                      style="color: #FFFFFF; line-height: 24px;
                      font-size: 18px; margin-top: 8px"
                    >
                      USDT
                    </div>
                  </div>
                </div>
                <nobr
                  style="font-size: 23px;font-weight: bold;color: #FFFFFF;line-height: 48px;padding: 0px 0px 0px 40px"
                >
                  $
                </nobr>
                <div style="width: 16px"></div>
                <p
                  style="font-size: 48px;
                            font-family: Nunito-Bold, Nunito;
                            font-weight: bold;
                            color: #FFFFFF;
                            line-height: 48px;"
                >
                  {{ apidata.USDT.num }}
                </p>
                <p
                  style="font-size: 14px;
                  font-family: Nunito-Regular, Nunito;
                  font-weight: 400;
                  color: rgba(255, 255, 255, 0.8);
                 width: 100%;height: 14px;
                  padding: 0px 0px 0px 40px;margin: 0px 0px 11px 0px"
                >
                  可用余额
                </p>
                <p
                  style="font-size: 20px;
                  font-family: Nunito-Regular, Nunito;
                  font-weight: 400;
                  color: rgba(255, 255, 255, 0.8);
                 width: 100%;height: 20px;
padding: 0px 0px 0px 40px"
                >
                  {{ apidata.USDT.numOk }} USDT
                </p>
                <div style="height: 20px;width: 100%"></div>
                <p
                  style="font-size: 14px;
                  font-family: Nunito-Regular, Nunito;
                  font-weight: 400;
                  color: rgba(255, 255, 255, 0.8);
                 width: 100%;height: 20px;
                  padding: 0px 0px 0px 40px;margin: 0px 0px 5px 0px"
                >
                  冻结
                </p>
                <p
                  style="font-size: 14px;
                  font-family: Nunito-Regular, Nunito;
                  font-weight: 400;
                  color: rgba(255, 255, 255, 0.8);
                 width: 100%;height: 20px;
                  padding: 0px 0px 0px 40px"
                >
                  {{ apidata.USDT.numNo }} USDT
                </p>
              </v-row>
            </v-navigation-drawer>
          </swiper-slide>
          <swiper-slide>
            <!-- 白色底钱包 -->
            <div style="height: 10px"></div>
            <v-navigation-drawer
              style="width: 666px;
              height: 280px;
              border-radius: 20px;
              box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.04);
              "
            >
              <v-row>
                <div
                  class="d-inline-flex"
                  style="width: 100%;padding: 40px 40px 0 40px; font-size: 14px;
                  font-weight: 400; color: #808080"
                >
                  HSF总资产 ○
                  <div
                    style="background: linear-gradient(211deg, #00FFBC 0%, #21BAC6 100%); margin-left: auto;
                     border-radius: 12px; width: 68px; height: 40px"
                  >
                    <div
                      class="d-flex justify-center"
                      style="color: #FFFFFF; line-height: 24px;
                      font-size: 18px; margin-top: 8px"
                    >
                      HSF
                    </div>
                  </div>
                </div>
                <nobr
                  style="font-size: 23px;
                            font-weight: bold;
                            color: #000000;
                            line-height: 48px;padding: 0px 0px 0px 40px"
                >
                  $
                </nobr>
                <div style="width: 16px"></div>
                <p
                  style="font-size: 48px;
                            font-weight: bold;
                            color: #000000;
                            line-height: 48px;

                 "
                >
                  {{ apidata.HSF.num }}
                </p>
                <p
                  style="font-size: 14px;
                  font-weight: 400;
                  color: #808080;
                 width: 100%;height: 14px;
                  padding: 0px 0px 0px 40px;margin: 0px 0px 11px 0px"
                >
                  可用余额
                </p>
                <p
                  style="font-size: 20px;
                  font-weight: 400;
                  color: #000000;
                 width: 100%;height: 20px;
padding: 0px 0px 0px 40px"
                >
                  {{ apidata.HSF.numOk }} HSF
                </p>
                <div style="height: 20px;width: 100%"></div>
                <p
                  style="font-size: 14px;
                  font-family: Nunito-Regular, Nunito;
                  font-weight: 400;
                  color: #808080;
                 width: 100%;height: 20px;
                  padding: 0px 0px 0px 40px;margin: 0px 0px 5px 0px"
                >
                  冻结
                </p>
                <p
                  style="font-size: 14px;
                  font-family: Nunito-Regular, Nunito;
                  font-weight: 400;
                  color: #000000;
                 width: 100%;height: 20px;
                  padding: 0px 0px 0px 40px"
                >
                  {{ apidata.HSF.numNo }} HSF
                </p>
              </v-row>
            </v-navigation-drawer>
          </swiper-slide>
        </swiper>
      </v-col>

      <v-col cols="12" style="height: 100px"></v-col>

      <v-col cols="12" style="height: 40px">
        <p
          style="font-size: 32px;
        font-family: PingFang-SC-Semibold, PingFang-SC;
        font-weight: 600;
        color: #000000;
        line-height: 32px;"
        >
          资产记录
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
          <v-col cols="6" class="text-right">
            <router-link to="/assets">
              <span
                style="font-size: 14px;
                          font-family: Nunito-Regular, Nunito;
                          font-weight: 400;
                          color: #1BD7A7;
                          line-height: 19px;"
                >全部记录 ➔</span
              >
            </router-link>
          </v-col>
        </v-row>
        <v-col cols="12" style="height: 40px"></v-col>
        <v-col cols="12">
          <div v-for="v in apidata.list" v-bind:key="v">
            <!--//收账-->
            <div v-if="v.Types == 'enter'">
              <v-row>
                <!-- shoukuan2.png -->
                <v-col cols="1" style="">
                  <v-img :src="v.ToFaceImg" height="50px" width="50px">
                    <img
                      src="https://investors.oss-cn-beijing.aliyuncs.com/assets/shoukuan1.png"
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
                    style="font-size: 18px;font-family: Nunito-Bold, Nunito;font-weight: bold;color: #1BD7A7;line-height: 18px;"
                  >
                    +{{ v.Num }} {{ v.CodeType }}
                  </p>
                </v-col>
                <v-col cols="2" class="text-right" style="">
                  <span
                    style="font-size: 18px;
                          font-family: Nunito-Regular, Nunito;
                          font-weight: 400;
                          color: #7F7F7F;
                          line-height: 18px;"
                    >{{ $moment(v.Times).format('YYYY.MM.DD') }}</span
                  >
                </v-col>
              </v-row>
            </div>

            <!--//出账-->
            <div v-if="v.Types == 'out'">
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
                          line-height: 18px;"
                    >{{ $moment(v.Times).format('YYYY.MM.DD') }}</span
                  >
                </v-col>
              </v-row>
            </div>
          </div>
          <!-- 收账 -->
          <v-row> </v-row>
          <!-- /收账 -->
        </v-col>
      </v-col>

      <v-col cols="12" style="height: 400px"></v-col>
    </v-col>
    <v-col cols="3"></v-col>
    <!-- d1 -->
    <v-dialog
      content-class="rounded-xl"
      v-model="dialog"
      width="400"
      height="640"
    >
      <!-- 站内转账 -->
      <div v-show="t1" style="height: 640px;width: 400px;background: #FFFFFF;">
        <!-- img区域 -->
        <div style="height: 80px;width: 400px;">
          <v-img
            src="https://investors.oss-cn-beijing.aliyuncs.com/assets/w-tou1.png"
          >
            <v-row style="height: 40px"></v-row>
            <v-row class="text-center" style="margin: 0px;width: 100%">
              <v-col
                cols="6"
                @click="t1 = true"
                style="font-size: 20px; font-weight: 600; color: #000000;
                line-height: 20px; cursor: pointer"
                >站内转账</v-col
              >
              <!--              @click="t1 = true"-->
              <v-col
                cols="6"
                style="font-size: 20px;
                  font-weight: 600;
                  color: #808080;
                  cursor: pointer;
                  line-height: 20px;"
              >
                提现地址
              </v-col>
            </v-row>
          </v-img>
        </div>

        <v-row style="height: 60px;width: 100%;margin: 0px">
          <v-col cols="2"></v-col>
          <v-col cols="8">
            <v-menu content-class="rounded-xl" :nudge-bottom="10" offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  style="background: #F7F8FB; color: #000000; width: 236px;
                  height: 72px; border-radius: 175px"
                  depressed
                  bottom
                >
                  <img :src="xiala.imgurl" style="height: 39px; width: 39px;" />
                  <span
                    style="font-size: 20px;
                    font-weight: 600;
                    color: #000000;
                    line-height: 26px;
                    margin: 10px"
                  >
                    {{ xiala.text }}</span
                  >
                </v-btn>
              </template>
              <v-card style="width: 236px; height: 180px;">
                <v-list>
                  <div
                    @click="
                      xiala.text = 'USDT'
                      xiala.imgurl =
                        'https://investors.oss-cn-beijing.aliyuncs.com/assets/usdt_logo.png'
                    "
                  >
                    <div style="padding: 0 8px 8px 8px">
                      <v-btn
                        style="background: #F7F8FB; width: 220px; height: 72px"
                        depressed
                      >
                        <div class="d-inline-flex" style="margin-right: 8px">
                          <img
                            src="https://investors.oss-cn-beijing.aliyuncs.com/assets/usdt_logo.png"
                            style="height: 39px; width: 39px;"
                          />
                          <div style="width: 10px"></div>
                          <div
                            style="font-size: 20px;font-weight: 600;color: #000000;
                            line-height: 26px; margin-top: 8px"
                          >
                            USDT
                          </div>
                        </div>
                      </v-btn>
                    </div>
                  </div>
                  <div
                    @click="
                      xiala.text = 'HSF'
                      xiala.imgurl =
                        'https://investors.oss-cn-beijing.aliyuncs.com/assets/HSF_logo.png'
                    "
                  >
                    <div style="padding: 8px">
                      <div class="d-inline-flex" style="margin-right: 18px">
                        <v-btn
                          depressed
                          text
                          style="width: 220px; height: 72px"
                        >
                          <img
                            src="https://investors.oss-cn-beijing.aliyuncs.com/assets/HSF_logo.png"
                            style="height: 39px; width: 39px; margin-right: 10px"
                          />
                          <div
                            class="d-inline-flex"
                            style="font-size: 20px;font-weight: 600;color: #000000;
                            line-height: 26px; margin-top: 5px; margin-right: 10px"
                          >
                            <div style="margin-right: 10px">HSF</div>
                          </div>
                        </v-btn>
                      </div>
                    </div>
                  </div>
                </v-list>
              </v-card>
            </v-menu>
          </v-col>
          <v-col cols="2"></v-col>
        </v-row>
        <v-row style="height: 30px"></v-row>
        <v-row style="width: 100%;height: 70px; margin: 0;">
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-text-field
              v-show="bool1"
              v-model="znzz_zhanghu"
              background-color="#F7F8FB"
              autocomplete="off"
              label="请输入对方账户"
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
                    @click="
                      bool1 = !bool1
                      znzz_zhanghu = ''
                    "
                    v-else
                    width="24"
                    height="24"
                    src="https://investors.oss-cn-beijing.aliyuncs.com/assets/shouji1.png"
                    alt=""
                  />
                </v-fade-transition>
              </template>
            </v-text-field>
            <div v-show="!bool1">
              <div style="width: 35%;float:left">
                <v-select
                  height="55"
                  v-model="areaCode2"
                  :items="areaCodes2"
                  filled
                  rounded
                  background-color="#F7F8FB"
                ></v-select>
              </div>
              <div style="width: 65%;float:left">
                <v-text-field
                  v-model="znzz_zhanghu"
                  background-color="#F7F8FB"
                  autocomplete="off"
                  label="请输入对方手机号"
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
                        @click="
                          bool1 = !bool1
                          znzz_zhanghu = ''
                        "
                        v-else
                        width="24"
                        height="24"
                        src="https://investors.oss-cn-beijing.aliyuncs.com/assets/zhanghaohon1.png"
                        alt=""
                      />
                    </v-fade-transition>
                  </template>
                </v-text-field>
              </div>
            </div>
          </v-col>
          <v-col cols="1"> </v-col>
        </v-row>
        <v-row style="width: 100%;margin: 0;">
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <span style="font-size: 12px; font-weight: 400;color: #7F7F7F;">
              站内转账，实时到账，零手续费</span
            >
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
        <p style="margin: 20px"></p>
        <v-row style="width: 100%;margin: 0;">
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <span
              style="font-size: 14px; font-weight: 400;color: #7F7F7F;line-height: 14px;"
            >
               <div v-if="xiala.text == 'USDT'">
                ·可用余额:   {{ apidata.USDT.numOk }} USDT
                  </div>
                  <div v-if="xiala.text == 'HSF'">
                ·可用余额:  {{ apidata.HSF.numOk }}  HSF
                  </div>
            </span>
            <p style="margin: 16px"></p>
            <span
              style="font-size: 14px; font-weight: 400;color: #7F7F7F;line-height: 14px;"
            >
              ·手续费:
            </span>
            <span
              style="font-size: 14px; font-weight: 400;color: #5B7ADE;line-height: 14px;"
            >
              0.00000 {{xiala.text}}
            </span>
            <p style="margin: 16px"></p>
            <span
              style="font-size: 14px; font-weight: 400;color: #7F7F7F;line-height: 14px;"
            >
              ·最小提币金额：0.0001 {{xiala.text}}
            </span>

            <p style="margin: 16px"></p>
            <span
              style="font-size: 14px; font-weight: 400;color: #F69D2B;line-height: 14px;"
            >
              ·转账前请务必确认ERC20地址及币种信息无误。一旦转出，不可撤回！
            </span>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
        <div style="width: 100%;height: 44px"></div>
        <v-row style="width: 100%;height: 70px; margin: 0px;">
          <v-col cols="8"></v-col>
          <v-col cols="2">
            <v-btn
              style="background: linear-gradient(90deg, #F1F1F2 0%, #B2B2B2 100%);color: #FFFFFF"
              depressed
              bottom
              rounded
              x-large
              block
              @click="zhanneizhuanzhang"
            >
              下一步
            </v-btn>
          </v-col>
        </v-row>
      </div>

      <!-- 提现地址 -->
      <div v-show="!t1" style="height: 640px;width: 400px;background: #FFFFFF;">
        <!-- img区域 -->
        <div style="height: 80px;width: 400px;">
          <v-img
            src="https://investors.oss-cn-beijing.aliyuncs.com/assets/w-tou2.png"
          >
            <v-row style="height: 40px"></v-row>
            <v-row class="text-center" style="margin: 0px;width: 100%">
              <v-col
                cols="6"
                @click="t1 = true"
                style="font-size: 20px;
                cursor: pointer;
                                  font-weight: 600;
                                  color: #808080;
                                  line-height: 20px;"
                >站内转账</v-col
              >
              <v-col
                cols="6"
                @click="t1 = false"
                style="font-size: 20px;
                  font-family: PingFang-SC-Semibold, PingFang-SC;
                  font-weight: 600;
                  color: #000000;
                  cursor: pointer;
                  line-height: 20px;"
              >
                提现地址
              </v-col>
            </v-row>
          </v-img>
        </div>

        <v-row style="height: 30px;width: 100%;margin: 0px">
          <v-col cols="2"></v-col>
          <v-col cols="8">
            <v-menu content-class="rounded-xl" :nudge-bottom="10" offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  style="background: #F7F8FB; color: #000000; width: 236px;
                  height: 72px; border-radius: 175px"
                  depressed
                  bottom
                >
                  <img :src="xiala.imgurl" style="height: 39px; width: 39px;" />
                  <span
                    style="font-size: 20px;
                    font-weight: 600;
                    color: #000000;
                    line-height: 26px;
                    margin: 10px"
                  >
                    {{ xiala.text }}</span
                  >
                </v-btn>
              </template>
              <v-card style="width: 236px; height: 180px;">
                <v-list>
                  <div
                    @click="
                      xiala.text = 'USDT'
                      xiala.imgurl =
                        'https://investors.oss-cn-beijing.aliyuncs.com/assets/usdt_logo.png'
                    "
                  >
                    <div style="padding: 0 8px 8px 8px">
                      <v-btn
                        style="background: #F7F8FB; width: 220px; height: 72px"
                        depressed
                      >
                        <div class="d-inline-flex" style="margin-right: 8px">
                          <img
                            src="https://investors.oss-cn-beijing.aliyuncs.com/assets/usdt_logo.png"
                            style="height: 39px; width: 39px;"
                          />
                          <div style="width: 10px"></div>
                          <div
                            style="font-size: 20px;font-weight: 600;color: #000000;
                            line-height: 26px; margin-top: 8px"
                          >
                            USDT
                          </div>
                        </div>
                      </v-btn>
                    </div>
                  </div>
                  <div
                    @click="
                      xiala.text = 'HSF'
                      xiala.imgurl =
                        'https://investors.oss-cn-beijing.aliyuncs.com/assets/HSF_logo.png'
                    "
                  >
                    <div style="padding: 8px">
                      <div class="d-inline-flex" style="margin-right: 18px">
                        <v-btn
                          depressed
                          text
                          style="width: 220px; height: 72px"
                        >
                          <img
                            src="https://investors.oss-cn-beijing.aliyuncs.com/assets/HSF_logo.png"
                            style="height: 39px; width: 39px; margin-right: 10px"
                          />
                          <div
                            class="d-inline-flex"
                            style="font-size: 20px;font-weight: 600;color: #000000;
                            line-height: 26px; margin-top: 5px; margin-right: 10px"
                          >
                            <div style="margin-right: 10px">HSF</div>
                          </div>
                        </v-btn>
                      </div>
                    </div>
                  </div>
                </v-list>
              </v-card>
            </v-menu>

            <v-bottom-sheet v-model="sheet" scrollable>
              <v-sheet small class="text-center" height="200px">
                <div class="py-3">
                  This is a bottom sheet using the controlled by v-model instead
                  of activator
                </div>
              </v-sheet>
            </v-bottom-sheet>
          </v-col>
          <v-col cols="2"></v-col>
        </v-row>
        <v-row style="height: 50px"></v-row>

        <v-row style="width: 100%;height: 70px; margin: 0px;">
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-text-field
              v-model="txdz_from"
              background-color="#F7F8FB"
              autocomplete="off"
              label="请输入或粘贴账户"
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
                  <!--                  <img-->
                  <!--                    v-else-->
                  <!--                    width="24"-->
                  <!--                    height="24"-->
                  <!--                    src="https://investors.oss-cn-beijing.aliyuncs.com/assets/dizhi1.png"-->
                  <!--                  />-->
                </v-fade-transition>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="1"> </v-col>
        </v-row>
        <v-row style="width: 100%;height: 70px; margin: 0px;">
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-text-field
              v-model="txdz_code_num"
              background-color="#F7F8FB"
              autocomplete="off"
              label="输入提币数量"
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
                  <div v-if="xiala.text == 'USDT'">
                    <div
                      @click="txdz_code_num = apidata.USDT.numOk"
                      style="font-size: 14px;
                  font-family: PingFang-SC-Semibold, PingFang-SC;
                  font-weight: 600;
                  color: #06D0AE;
                  line-height: 20px;"
                    >
                      全部
                    </div>
                  </div>
                  <div v-if="xiala.text == 'HSF'">
                    <div
                      @click="txdz_code_num = apidata.HSF.numOk"
                      style="font-size: 14px;
                  font-weight: 600;
                  color: #06D0AE;
                  line-height: 20px;"
                    >
                      全部
                    </div>
                  </div>
                </v-fade-transition>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="1"> </v-col>
        </v-row>
        <v-row style="width: 100%;margin: 0px;">
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <span
              style="font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #7F7F7F;line-height: 14px;"
            >

                <div v-if="xiala.text == 'USDT'">
                  ·可用余额: {{ apidata.USDT.numOk }} USDT
                  </div>
                  <div v-if="xiala.text == 'HSF'">
                  ·可用余额:{{ apidata.HSF.numOk }} HSF
                  </div>
            </span>
            <p style="margin: 14px"></p>
            <span
              style="font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #7F7F7F;line-height: 14px;"
            >
              ·手续费:
            </span>
            <span
              style="font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #5B7ADE;line-height: 14px;"
            >
              0.00001 {{xiala.text}}
            </span>
            <p style="margin: 14px"></p>
            <span
              style="font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #7F7F7F;line-height: 14px;"
            >
              ·最小提币金额：0.0001 {{xiala.text}}
            </span>

            <p style="margin: 14px"></p>
            <span
              style="font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #F69D2B;line-height: 14px;"
            >
              ·转账前请务必确认ERC20地址及币种信息无误。一旦转出，不可撤回！
            </span>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
        <v-row style="height: 30px"></v-row>
        <v-row style="width: 100%;height: 70px; margin: 0;">
          <v-col cols="8"></v-col>
          <v-col cols="2">
            <v-btn
              style="background: linear-gradient(90deg, #F1F1F2 0%, #B2B2B2 100%);color: #FFFFFF"
              depressed
              bottom
              rounded
              x-large
              block
              @click="tixiandizhi"
            >
              下一步
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-dialog>

    <!-- d2 充值-->
    <v-dialog
      content-class="rounded-xl"
      v-model="dialog2"
      width="400"
      height="640"
    >
      <div style="height: 640px;width: 400px;background: #FFFFFF;">
        <v-row style="height: 60px;width: 100%;margin: 0px">
          <span
            style="font-size: 24px;margin: 30px 33px 32px 31px ;
            font-weight: 600;
            color: #000000;"
            >充值(ERC20)</span
          >
        </v-row>
        <v-row style="height: 30px"></v-row>
        <v-row style="height: 60px;width: 100%;margin: 0">
          <v-col cols="2"></v-col>
          <v-col cols="8">
            <v-menu content-class="rounded-xl" :nudge-bottom="10" offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  style="background: #F7F8FB; color: #000000; width: 236px;
                  height: 72px; border-radius: 175px"
                  depressed
                  bottom
                >
                  <img :src="xiala.imgurl" style="height: 39px; width: 39px;" />
                  <span
                    style="font-size: 20px;
                    font-weight: 600;
                    color: #000000;
                    line-height: 26px;
                    margin: 10px"
                  >
                    {{ xiala.text }}</span
                  >
                </v-btn>
              </template>
              <v-card style="width: 236px; height: 180px;">
                <v-list>
                  <div
                    @click="
                      xiala.text = 'USDT'
                      xiala.imgurl =
                        'https://investors.oss-cn-beijing.aliyuncs.com/assets/usdt_logo.png'
                    "
                  >
                    <div style="padding: 0 8px 8px 8px">
                      <v-btn
                        style="background: #F7F8FB; width: 220px; height: 72px"
                        depressed
                      >
                        <div class="d-inline-flex" style="margin-right: 8px">
                          <img
                            src="https://investors.oss-cn-beijing.aliyuncs.com/assets/usdt_logo.png"
                            style="height: 39px; width: 39px;"
                          />
                          <div style="width: 10px"></div>
                          <div
                            style="font-size: 20px;font-weight: 600;color: #000000;
                            line-height: 26px; margin-top: 8px"
                          >
                            USDT
                          </div>
                        </div>
                      </v-btn>
                    </div>
                  </div>
                  <div
                    @click="
                      xiala.text = 'HSF'
                      xiala.imgurl =
                        'https://investors.oss-cn-beijing.aliyuncs.com/assets/HSF_logo.png'
                    "
                  >
                    <div style="padding: 8px">
                      <div class="d-inline-flex" style="margin-right: 18px">
                        <v-btn depressed style="width: 220px; height: 72px">
                          <img
                            src="https://investors.oss-cn-beijing.aliyuncs.com/assets/HSF_logo.png"
                            style="height: 39px; width: 39px; margin-right: 10px"
                          />
                          <div
                            class="d-inline-flex"
                            style="font-size: 20px;font-weight: 600;color: #000000;
                            line-height: 26px; margin-top: 5px; margin-right: 10px"
                          >
                            <div style="margin-right: 10px">HSF</div>
                          </div>
                        </v-btn>
                      </div>
                    </div>
                  </div>
                </v-list>
              </v-card>
            </v-menu>
          </v-col>
          <v-col cols="2"></v-col>
        </v-row>
        <v-row>
          <v-col cols="2"></v-col>
          <v-col cols="8">
            <div v-if="xiala.text == 'USDT'">
              <vue-qr
                ref="Qrcode"
                :text="apidata.USDT.address"
                :callback="test"
                qid="testQrId"
                margin="30"
                size="260"
              ></vue-qr>
            </div>
            <div v-if="xiala.text == 'HSF'">
              <vue-qr
                ref="Qrcode"
                :text="apidata.HSF.address"
                :callback="test"
                qid="testQrId"
                margin="30"
                size="260"
              ></vue-qr>
            </div>
          </v-col>
          <v-col cols="2"></v-col>
        </v-row>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <div v-if="xiala.text == 'USDT'">
              <v-text-field
                background-color="#F7F8FB"
                :value="apidata.USDT.address"
                single-line
                filled
                rounded
                readonly
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
            </div>
            <div v-if="xiala.text === 'HSF'">
              <v-text-field
                background-color="#F7F8FB"
                :value="apidata.HSF.address"
                single-line
                filled
                readonly
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
            </div>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
        <span
          style="font-size: 12px;
                      font-weight: 400;
                      color: #F69D2B;
                      margin-left: 50px;"
          >此地址仅用做ERC20 USDT收款，转入其他币种将无法找回</span
        >
        <v-row> </v-row>
      </div>
    </v-dialog>

    <!-- d3兑换 -->
    <v-dialog
      content-class="rounded-xl"
      v-model="dialog3"
      width="400"
      height="580"
    >
      <div style="height: 580px;width: 400px;background: #FFFFFF;">
        <v-row style="height: 60px;width: 100%;margin: 0">
          <span
            style="font-size: 24px;margin: 30px 33px 32px 31px ;
            font-weight: 600;
            color: #000000;"
            >兑换</span
          >
        </v-row>
        <v-row style="height: 20px"></v-row>
        <!-- usdt换 hsf  -->
        <div v-show="!duihuan123">
          <v-row>
            <v-col cols="1"></v-col>
            <v-col
              cols="10"
              class="rounded-lg"
              style="height: 115px;width: 100%;border: 3px solid #F7F8FB;"
            >
              <v-row>
                <v-col cols="1">从</v-col>
                <v-col class="text-right" cols="11"
                  >余额:{{ apidata.USDT.numOk }}</v-col
                >
              </v-row>
              <v-row>
                <v-col cols="6" style=";height: 60px">
                  <v-row>
                    <v-col cols="3" style="padding: 12px 5px 17px 8px">
                      <v-img
                        src="https://investors.oss-cn-beijing.aliyuncs.com/assets/usdt_logo.png"
                        height="30px"
                        width="30px"
                      ></v-img>
                    </v-col>
                    <v-col cols="4" style="margin: 0px;padding: 0px">
                      <span
                        style="font-size: 12px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;margin-bottom: 12px"
                      >
                        Tether
                      </span>
                      <p style="padding: 0px;margin-bottom: 2px"></p>
                      <span
                        style="font-size: 16px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #000000;"
                      >
                        USDT
                      </span>
                    </v-col>
                    <v-col cols="5" style="margin:4px 0px 0px -19px;">
                      <v-btn
                        @click="duihuan_usdt_to_hsf_num = apidata.USDT.numOk"
                        style="font-size: 12px;
                                font-family: Nunito-Regular, Nunito;
                                font-weight: 400;
                                color: #FFFFFF;background: linear-gradient(222deg, #3AEDD3 0%, #1BD7A7 100%);"
                        small
                        color="#3AEDD3"
                        elevation="0"
                      >
                        MAX
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col
                  cols="6"
                  style="height: 60px;padding: 0px 10px 3px 1px"
                  class="text-right"
                >
                  <span
                    style="font-size: 12px;
font-family: Nunito-Regular, Nunito;
font-weight: 400;
color: #808080;margin-bottom: 12px"
                  >
                    ≈ $0.00
                  </span>
                  <p style="padding: 0px;margin-bottom: 2px"></p>
                  <span
                    style="font-size: 16px;
font-family: Nunito-SemiBold, Nunito;
font-weight: 600;
color: #9F9FA4;"
                  >
                    <input
                      v-model="duihuan_usdt_to_hsf_num"
                      style="
                                font-weight: 600;
                                color: #9F9FA4;
                                text-align: right;
                                margin: 0px 0px 0px -25px;
                                border:0;outline:0;"
                      placeholder="0.00"
                    />
                  </span>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="1"></v-col>
          </v-row>
          <v-row style="">
            <v-col cols="5" style="">
              <div
                style="height: 1px;
              border: 1px solid #F7F8FB;margin:31px -21px 10px 28px"
              ></div>
            </v-col>
            <v-col
              cols="2"
              style="height: 87px;width: 100%;padding: 15px 0px 15px 8px"
            >
              <v-btn
                @click="
                  duihuan123 = true
                  duihuan_usdt_to_hsf_num = ''
                  duihuan_hsf_to_usdt_num = ''
                "
                elevation="0"
                outlined
                color="#F7F8FB"
                fab
              >
                <v-img
                  src="https://investors.oss-cn-beijing.aliyuncs.com/assets/qiehuan.png"
                  height="36px"
                  width="36px"
                ></v-img>
              </v-btn>
            </v-col>
            <v-col cols="5">
              <div
                style="height: 1px;
              border: 1px solid #F7F8FB;margin:32px 23px 12px -18px"
              ></div>
            </v-col>
          </v-row>
          <!-- HSF框 -->
          <v-row>
            <v-col cols="1"></v-col>
            <v-col
              cols="10"
              class="rounded-lg"
              style="height: 115px;width: 100%;border: 3px solid #F7F8FB;"
            >
              <v-row>
                <v-col cols="1">到</v-col>
                <v-col class="text-right" cols="11"
                  >余额:{{ apidata.HSF.numOk }}</v-col
                >
              </v-row>
              <v-row>
                <v-col cols="6" style=";height: 60px">
                  <v-row>
                    <v-col cols="3" style="padding: 12px 5px 17px 8px">
                      <v-img
                        src="https://investors.oss-cn-beijing.aliyuncs.com/assets/usdt_logo.png"
                        height="30px"
                        width="30px"
                      ></v-img>
                    </v-col>
                    <v-col cols="4" style="margin: 0px;padding: 0px">
                      <span
                        style="font-size: 12px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;margin-bottom: 12px"
                      >
                        investors
                      </span>
                      <p style="padding: 0px;margin-bottom: 2px"></p>
                      <span
                        style="font-size: 16px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #000000;"
                      >
                        HSF
                      </span>
                    </v-col>
                    <v-col cols="5" style="margin:4px 0px 0px -19px;"> </v-col>
                  </v-row>
                </v-col>
                <v-col
                  cols="6"
                  style="height: 60px;padding: 0px 10px 3px 1px"
                  class="text-right"
                >
                  <span
                    style="font-size: 12px;
font-family: Nunito-Regular, Nunito;
font-weight: 400;
color: #808080;margin-bottom: 12px"
                  >
                    ≈ $0.00
                  </span>
                  <p style="padding: 0px;margin-bottom: 2px"></p>
                  <span
                    style="font-size: 16px;
font-family: Nunito-SemiBold, Nunito;
font-weight: 600;
color: #9F9FA4;"
                  >
                    {{
                      duihuan_usdt_to_hsf_num * duihuan_usdt_to_hsf_num_yunsuan
                    }}
                  </span>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="1"></v-col>
          </v-row>
        </div>

        <!-- hsf 换 usdt  -->
        <div v-show="duihuan123">
          <!-- hsf -->
          <v-row>
            <v-col cols="1"></v-col>
            <v-col
              cols="10"
              class="rounded-lg"
              style="height: 115px;width: 100%;border: 3px solid #F7F8FB;"
            >
              <v-row>
                <v-col cols="1">从</v-col>
                <v-col class="text-right" cols="11"
                  >余额:{{ apidata.HSF.numOk }}</v-col
                >
              </v-row>
              <v-row>
                <v-col cols="6" style=";height: 60px">
                  <v-row>
                    <v-col cols="3" style="padding: 12px 5px 17px 8px">
                      <v-img
                        src="https://investors.oss-cn-beijing.aliyuncs.com/assets/usdt_logo.png"
                        height="30px"
                        width="30px"
                      ></v-img>
                    </v-col>
                    <v-col cols="4" style="margin: 0px;padding: 0px">
                      <span
                        style="font-size: 12px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;margin-bottom: 12px"
                      >
                        investors
                      </span>
                      <p style="padding: 0px;margin-bottom: 2px"></p>
                      <span
                        style="font-size: 16px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #000000;"
                      >
                        HSF
                      </span>
                    </v-col>
                    <v-col cols="5" style="margin:4px 0px 0px -19px;">
                      <v-btn
                        @click="duihuan_hsf_to_usdt_num = apidata.HSF.numOk"
                        style="font-size: 12px;
                                font-family: Nunito-Regular, Nunito;
                                font-weight: 400;
                                color: #FFFFFF;background: linear-gradient(222deg, #3AEDD3 0%, #1BD7A7 100%);"
                        small
                        color="#3AEDD3"
                        elevation="0"
                      >
                        MAX
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col
                  cols="6"
                  style="height: 60px;padding: 0px 10px 3px 1px"
                  class="text-right"
                >
                  <span
                    style="font-size: 12px;
font-weight: 400;
color: #808080;margin-bottom: 12px"
                  >
                    ≈ $0.00
                  </span>
                  <p style="padding: 0px;margin-bottom: 2px"></p>
                  <span
                    style="font-size: 16px;
                              font-family: Nunito-SemiBold, Nunito;
                              font-weight: 600;
                              color: #9F9FA4;"
                  >
                    <input
                      v-model="duihuan_hsf_to_usdt_num"
                      style="
                                font-weight: 600;
                                color: #9F9FA4;
                                text-align: right;
                                margin: 0px 0px 0px -25px;
                                border:0;outline:0;"
                      placeholder="0.00"
                    />
                  </span>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="1"></v-col>
          </v-row>
          <v-row style="">
            <v-col cols="5" style="">
              <div
                style="height: 1px;
              border: 1px solid #F7F8FB;margin:31px -21px 10px 28px"
              ></div>
            </v-col>
            <v-col
              cols="2"
              style="height: 87px;width: 100%;padding: 15px 0px 15px 8px"
            >
              <v-btn
                @click="
                  duihuan123 = false
                  duihuan_usdt_to_hsf_num = ''
                  duihuan_hsf_to_usdt_num = ''
                "
                elevation="0"
                outlined
                color="#F7F8FB"
                fab
              >
                <v-img
                  src="https://investors.oss-cn-beijing.aliyuncs.com/assets/qiehuan.png"
                  height="36px"
                  width="36px"
                ></v-img>
              </v-btn>
            </v-col>
            <v-col cols="5">
              <div
                style="height: 1px;
              border: 1px solid #F7F8FB;margin:32px 23px 12px -18px"
              ></div>
            </v-col>
          </v-row>
          <!-- usdt框 -->
          <v-row>
            <v-col cols="1"></v-col>
            <v-col
              cols="10"
              class="rounded-lg"
              style="height: 115px;width: 100%;border: 3px solid #F7F8FB;"
            >
              <v-row>
                <v-col cols="1">到</v-col>
                <v-col class="text-right" cols="11"
                  >余额:{{ apidata.USDT.numOk }}</v-col
                >
              </v-row>
              <v-row>
                <v-col cols="6" style=";height: 60px">
                  <v-row>
                    <v-col cols="3" style="padding: 12px 5px 17px 8px">
                      <v-img
                        src="https://investors.oss-cn-beijing.aliyuncs.com/assets/usdt_logo.png"
                        height="30px"
                        width="30px"
                      ></v-img>
                    </v-col>
                    <v-col cols="4" style="margin: 0px;padding: 0px">
                      <span
                        style="font-size: 12px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;margin-bottom: 12px"
                      >
                        Tether
                      </span>
                      <p style="padding: 0px;margin-bottom: 2px"></p>
                      <span
                        style="font-size: 16px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #000000;"
                      >
                        USDT
                      </span>
                    </v-col>
                    <v-col cols="5" style="margin:4px 0px 0px -19px;"> </v-col>
                  </v-row>
                </v-col>
                <v-col
                  cols="6"
                  style="height: 60px;padding: 0px 10px 3px 1px"
                  class="text-right"
                >
                  <span
                    style="font-size: 12px; font-weight: 400; color: #808080;margin-bottom: 12px"
                  >
                    ≈ $0.00
                  </span>
                  <p style="padding: 0;margin-bottom: 2px"></p>
                  <span
                    style="font-size: 16px; font-weight: 600; color: #9F9FA4;"
                  >
                    {{
                      duihuan_hsf_to_usdt_num * duihuan_hsf_to_usdt_num_yunsuan
                    }}
                  </span>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="1"></v-col>
          </v-row>
        </div>
        <div style="height: 40px;width: 100%"></div>
        <v-row>
          <v-col cols="1"></v-col>
          <span
            style="font-size: 14px;
          font-weight: 400;
          color: #808080;
          line-height: 32px;"
          >
            汇率：
          </span>
          <span
            style="font-size: 14px;
          font-weight: 400;
          color: #000000;
          line-height: 32px;"
          >
            1USDT≈ 0.005 HSF
          </span>
        </v-row>
        <v-row style="height: 10px"></v-row>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-btn
              style="background: linear-gradient(90deg, #F1F1F2 0%, #B2B2B2 100%);
              color: #FFFFFF; height: 56px"
              depressed
              bottom
              rounded
              large
              block
              @click="dui_huan_code()"
            >
              兑换
            </v-btn>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
      </div>
    </v-dialog>

    <!-- d4 交易确认-->
    <v-dialog
      content-class="rounded-xl"
      v-model="dialog4"
      width="400"
      height="640"
    >
      <div style="height: 640px;width: 400px;background: #FFFFFF;">
        <v-row style="height: 60px;width: 100%;margin: 0px">
          <span
            style="font-size: 24px;margin: 30px 33px 32px 31px ;
            font-family: PingFang-SC-Semibold, PingFang-SC;
            font-weight: 600;
            color: #000000;"
            >确认付款</span
          >
        </v-row>
        <v-row style="height: 30px"></v-row>

        <v-row style="height: 60px;width: 100%;margin: 0px">
          <v-col cols="2"></v-col>
          <v-col cols="8">
            <v-row>
              <v-col cols="2" style=";margin: 7px 5px 0px -5px">
                <img :src="xiala.imgurl" style="height: 39px; width: 39px;" />
              </v-col>
              <v-col cols="8" style=""
                ><span
                  style="font-size: 36px;
                                font-family: Rubik-Regular, Rubik;
                                font-weight: 400;
                                color: #323234;"
                >
                  {{ dialog04.numText }}</span
                ></v-col
              >
            </v-row>
          </v-col>
          <v-col cols="2"></v-col>
        </v-row>
        <div style="height: 60px;width: 100%"></div>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <span
              style="font-size: 14px;padding: 20px;
                          font-family: PingFangSC-Regular, PingFang SC;
                          font-weight: 400;
                          color: #808080;"
              >类型</span
            >

            <span
              style="font-size: 14px;padding: 20px 20px 20px 212px;
                                            font-family: Nunito-Regular, Nunito;
                                            font-weight: 400;
                                            color: #000000;"
              >转账</span
            >
            <div style="height: 20px;width: 100%"></div>
            <div
              style="height: 1px;border: 1px solid #F1F1F2;width: 100%"
            ></div>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
        <div style="height: 50px;width: 100%"></div>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <span
              style="font-size: 14px;padding: 20px;
                          font-family: PingFangSC-Regular, PingFang SC;
                          font-weight: 400;
                          color: #808080;"
              >订单信息</span
            >

            <span
              style="font-size: 14px;padding: 20px 20px 20px 147px;
                                            font-family: Nunito-Regular, Nunito;
                                            font-weight: 400;
                                            color: #000000;"
              >{{ dialog04.codeText }}余额</span
            >
            <div style="height: 20px;width: 100%"></div>
            <div
              style="height: 1px;border: 1px solid #F1F1F2;width: 100%"
            ></div>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
        <div style="height: 200px;width: 100%"></div>
        <v-row>
          <v-col cols="7"></v-col>
          <v-col cols="4">
            <v-btn
              style="background: linear-gradient(90deg, #00CFAC 20%, #5B7ADE 120%);color: #FFFFFF"
              depressed
              bottom
              rounded
              x-large
              block
              @click="querenfukuan"
            >
              下一步
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-dialog>

    <!-- d6 交易确认》如果验证码-->
    <v-dialog
      content-class="rounded-xl"
      v-model="dialog6"
      width="400"
      height="366"
    >
      <div style="height: 366px;width: 400px;background: #FFFFFF;">
        <v-row style="height: 60px;width: 100%;margin: 0px">
          <span
            style="font-size: 24px;margin: 30px 33px 32px 31px ;
            font-family: PingFang-SC-Semibold, PingFang-SC;
            font-weight: 600;
            color: #000000;"
            >支付密码</span
          >
        </v-row>
        <v-row style="height: 60px"></v-row>

        <v-row style="height: 40px;width: 100%;margin: 0px;">
          <span
            class="text-center"
            style="font-size: 24px;margin-left: 116px;
                        font-family: PingFang-SC-Semibold, PingFang-SC;
                        font-weight: 600;
                        color: #000000;"
            >请输入支付密码</span
          >
        </v-row>

        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <!--     验证码 实现 -->
            <div class="row-center captcha_input_wrapper">
              <input
                autocomplete="off"
                v-for="(item, index) in captchas"
                :key="index"
                v-model="item.num"
                :id="'captcha' + index"
                @input="inputFinash(index)"
                @focus="adjust(index)"
                @keydown="inputDirection(index)"
                class="captcha_input_box row-center"
                type="tel"
                maxlength="1"
              />
            </div>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
        <div style="height: 30px"></div>
        <!--        <span-->
        <!--          style="font-size: 14px;margin-left: 164px;-->
        <!--                font-family: PingFangSC-Regular, PingFang SC;-->
        <!--                font-weight: 400;-->
        <!--                color: #00CFAC;-->
        <!--                line-height: 14px;"-->
        <!--        >-->
        <!--          忘记密码?-->
        <!--        </span>-->
      </div>
    </v-dialog>
    <!-- d7 最终支付成功-->
    <v-dialog
      content-class="rounded-xl"
      v-model="dialog7"
      width="400"
      height="568"
    >
      <div style="height: 568px;width: 400px;background: #FFFFFF;">
        <v-row style="height: 60px"></v-row>

        <v-row style="height: 100px" class="justify-center">
          <img
            class="justify-center"
            src="https://investors.oss-cn-beijing.aliyuncs.com/assets/wanchenglogo.png"
            height="80px"
            width="80px"
          />
        </v-row>
        <v-row style="height: 60px" class="justify-center">
          <span
            style="font-size: 24px;
                      font-family: PingFang-SC-Semibold, PingFang-SC;
                      font-weight: 600;
                      color: #000000;"
          >
            支付成功
          </span>
        </v-row>

        <v-row style="height: 30px" class="justify-center">
          <span
            style="font-size: 20px;
                      font-family: Nunito-Bold, Nunito;
                      font-weight: bold;
                      color: #000000;
                      line-height: 20px;"
          >
            {{ dialog04.codeText }}
          </span>
          <span
            style="font-size: 24px;margin-left: 10px;
                      font-family: PingFang-SC-Semibold, PingFang-SC;
                      font-weight: 600;
                      color: #000000;"
          >
            {{ dialog04.numText }}
          </span>
        </v-row>
        <div style="height: 80px"></div>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <span
              style="font-size: 14px;padding: 20px;
                          font-family: PingFangSC-Regular, PingFang SC;
                          font-weight: 400;
                          color: #808080;"
              >付款方式</span
            >

            <span
              class="float-right"
              style="font-size: 14px;padding: 0px 20px 20px 0px;
                                            font-family: Nunito-Regular, Nunito;
                                            font-weight: 400;
                                            color: #000000;"
              >支付币种 ({{ dialog04.codeText }})</span
            >
            <div style="height: 20px;width: 100%"></div>
            <div
              style="height: 1px;border: 1px solid #F1F1F2;width: 100%"
            ></div>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <span
              style="font-size: 14px;padding: 20px;
                          font-family: PingFangSC-Regular, PingFang SC;
                          font-weight: 400;
                          color: #808080;"
              >收款方</span
            >

            <span
              class="float-right"
              style="font-size: 14px;padding: 0px 20px 20px 0px;
                                            font-family: Nunito-Regular, Nunito;
                                            font-weight: 400;
                                            color: #000000;"
              >Owen****sh</span
            >
            <div style="height: 20px;width: 100%"></div>
            <div
              style="height: 1px;border: 1px solid #F1F1F2;width: 100%"
            ></div>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
        <div style="height: 60px"></div>
        <v-row>
          <v-col cols="3"></v-col>
          <v-col cols="6">
            <v-btn
              style="background: #F1F1F2;color: #00CFAC"
              depressed
              bottom
              rounded
              large
              block
              @click="dialog7 = false"
            >
              完成
            </v-btn>
          </v-col>
          <v-col cols="3"></v-col>
        </v-row>
        <v-row style="height: 40px;width: 100%;margin: 0px;"></v-row>
      </div>
    </v-dialog>

    <!-- d8  站内转账下一步 -->
    <v-dialog
      content-class="rounded-xl"
      v-model="dialog8"
      width="400"
      height="640"
    >
      <div style="height: 640px;width: 400px;background: #FFFFFF;">
        <v-row style="height: 60px;width: 100%;margin: 0px">
          <span
            style="font-size: 24px;margin: 30px 33px 32px 31px ;
            font-family: PingFang-SC-Semibold, PingFang-SC;
            font-weight: 600;
            color: #000000;"
            >提现</span
          >
        </v-row>
        <div style="height: 40px"></div>
        <v-row style="height: 60px;width: 100%;margin: 0px">
          <v-col cols="2"></v-col>
          <v-col cols="8">
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
                  height="60"
                >
                  <img :src="xiala.imgurl" style="height: 39px; width: 39px;" />
                  <span
                    style="font-size: 20px;
                    font-family: Nunito-SemiBold, Nunito;
                    font-weight: 600;
                    color: #000000;
                    line-height: 26px;
                    margin: 10px"
                  >
                    {{ xiala.text }}</span
                  >
                </v-btn>
              </template>
            </v-menu>
          </v-col>
          <v-col cols="2"></v-col>
        </v-row>
        <div style="height: 80px;"></div>
        <v-row>
          <v-col cols="2" style=""></v-col>
          <v-col cols="8" style="">
            <v-row>
              <v-col cols="3">
                <v-img :src="dialog08.img" height="48px" width="48px"></v-img>
              </v-col>
              <v-col cols="9">
                <p
                  style="font-size: 20px;
                          font-family: PingFang-SC-Medium, PingFang-SC;
                          font-weight: 500;
                          color: #000000;
                          line-height: 28px;margin: 0px"
                >
                  {{ dialog08.name }}
                </p>
                <p
                  style="font-size: 14px;margin: 0px;
font-family: PingFang-SC-Regular, PingFang-SC;
font-weight: 400;
color: #9F9FA4;
line-height: 28px;"
                >
                  {{ dialog08.address }}
                </p>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="3" style="padding: 13px 2px 2px 8px">
                <div
                  style="font-size: 14px; font-weight: 400; color: #000000; line-height: 20px;"
                >
                  转账金额
                </div>
              </v-col>
              <v-col cols="9">
                <div
                  style="font-size: 14px; font-weight: 400; color: #7F7F7F;
                  line-height: 20px;"
                >
                  <div v-if="xiala.text === 'HSF'">
                    {{ apidata.HSF.numOk }} {{ xiala.text }}
                  </div>
                  <div v-if="xiala.text === 'USDT'">
                    {{ apidata.USDT.numOk }} {{ xiala.text }}
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="2" style=""></v-col>
        </v-row>
        <v-row style="height: 0px"></v-row>
        <v-row style=";padding: 0px 12px 0px 0px">
          <v-col cols="2" style=""></v-col>
          <v-col cols="8" style="">
            <v-text-field
              v-model="dialog08.num"
              :label="xiala.text"
              color="#00CFAC"
              height="50"
              autocomplete="off"
              style="font-size: 30px;padding: 0px 12px 0px 0px;"
            ></v-text-field>
            <input
              v-model="dialog08.beizhu"
              placeholder="添加转账说明（50字内）"
              style="margin: 0px;width: 100%; outline:none;"
            />
          </v-col>
          <v-col cols="2" style=""></v-col>
        </v-row>
        <div style="height: 60px"></div>
        <v-row style="width: 100%;height: 70px; margin: 0px;">
          <v-col cols="7"></v-col>
          <v-col cols="4">
            <v-btn
              style="background: linear-gradient(90deg, #F1F1F2 0%, #B2B2B2 100%);color: #FFFFFF"
              depressed
              bottom
              rounded
              x-large
              block
              @click="zhanneizhuanzhangOK"
            >
              转账
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-dialog>
  </v-row>
</template>

<script>
import VueQr from 'vue-qr'
import vueAppVerify from 'vue-app-verify'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import moment from 'moment'

export default {
  name: 'indexMod',
  components: {
    moment,
    vueAppVerify,
    Swiper,
    SwiperSlide,
    VueQr,
  },
  mounted: function() {
    window.scroll(0, 0) //页面加载置顶
    this.GetData() //需要触发的函数
    // this.synk()
  },
  // created() {
  //   // 实现轮询
  //   this.synk()
  // },
  methods: {
    //synk
    synk() {
      console.log('synk。。。')
      const token = localStorage.getItem('token')
      this.axios
        .post('/t0/synk', {}, { headers: { 'access-token': token } })
        .then(response => {
          //资产数据
          if (response.data.assets != null) {
            for (var i = 0; i < response.data.assets.length; i++) {
              if (this.apidata.list.length >= 5) {
                this.apidata.list.pop()
              }
              this.apidata.list.unshift(response.data.assets[i])
            }
          }
          if (response.data.hsf != null) {
            this.apidata.HSF.num = response.data.hsf.NumAll
            this.apidata.HSF.numOk = response.data.hsf.NumOk
            this.apidata.HSF.numNo = response.data.hsf.NumNo
            this.apidata.HSF.address = response.data.hsf.Address
          }
          if (response.data.usdt != null) {
            this.apidata.USDT.num = response.data.usdt.NumAll
            this.apidata.USDT.numOk = response.data.usdt.NumOk
            this.apidata.USDT.numNo = response.data.usdt.NumNo
            this.apidata.USDT.address = response.data.usdt.Address
          }
          console.log(response)
          this.synk()
          //
          // window.setInterval(() => {
          //   setTimeout(this.synk(), 0)
          // }, 1000)
        })
        .catch(error => {
          console.log('err:' + error)
          // this.synk()
        })
    },
    //兑换币
    dui_huan_code() {
      // this.axios
      //     .post('/t0/wallet/payFarm',
      //         {
      //           CodeCake:code,
      //           To:this.dialog04.toText,
      //           Num:this.dialog04.numText,
      //           CodeTypes:this.dialog04.codeText,
      //           BaiZhu:this.dialog04.beizhu,
      //           PatTypes:this.dialog04.typesText,
      //         },
      //         { headers: { 'access-token': "6d0Z7Kci2ttddg" } })
      //     .then(response => {
      //       console.log(response)
      //       if (response.data.data == "ok"){
      //         this.dialog6 = false
      //         this.dialog7 = true
      //       }else {
      //         alert("验证码有误！")
      //       }
      //     })

      if (
        this.duihuan_usdt_to_hsf_num != '' &&
        this.duihuan_hsf_to_usdt_num == ''
      ) {
        // alert("duihuan_usdt_to_hsf_num")
        const token = localStorage.getItem('token')
        this.axios
          .post(
            '/t0/wallet/exchangeUsdtToHsf',
            {
              Num: this.duihuan_usdt_to_hsf_num,
            },
            { headers: { 'access-token': token } }
          )
          .then(response => {
            console.log(response)
            if (response.data.data == 'ok') {
              alert('操作成功')
            } else {
              alert('操作失败')
            }
          })
      }
      if (
        this.duihuan_hsf_to_usdt_num != '' &&
        this.duihuan_usdt_to_hsf_num == ''
      ) {
        // alert("duihuan_hsf_to_usdt_num")
        const token = localStorage.getItem('token')
        this.axios
          .post(
            '/t0/wallet/exchangeHsfToUsdt',
            {
              Num: this.duihuan_hsf_to_usdt_num,
            },
            { headers: { 'access-token': token } }
          )
          .then(response => {
            console.log(response)
            if (response.data.data == 'ok') {
              alert('操作成功')
            } else {
              alert('操作失败')
            }
          })
      }
      // alert("操作异常！")
    },
    //页面数据渲染
    GetData: function() {
      const token = localStorage.getItem('token')
      this.axios
        .post('/r0/wallet/home', {}, { headers: { 'access-token': token } })
        .then(response => {
          console.log(response)
          this.apidata.USDT.num = response.data.w[0].NumAll
          this.apidata.USDT.numOk = response.data.w[0].NumOk
          this.apidata.USDT.numNo = response.data.w[0].NumNo
          this.apidata.USDT.address = response.data.w[0].Address
          this.apidata.HSF.num = response.data.w[1].NumAll
          this.apidata.HSF.numOk = response.data.w[1].NumOk
          this.apidata.HSF.numNo = response.data.w[1].NumNo
          this.apidata.HSF.address = response.data.w[1].Address
          this.apidata.list = response.data.a
        })
    },
    querenfukuan() {
      //确认付款2
      this.dialog4 = false
      this.dialog6 = true
    },
    tixiandizhi() {
      //提现地址
      // console.log("提现地址：",this)
      console.log('提现币名：', this.xiala.text)
      console.log('提现地址：', this.txdz_from)
      console.log('提现币数量：', this.txdz_code_num)
      this.dialog = false
      this.captchas = [
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' },
      ]
      this.dialog04.codeText = this.xiala.text
      this.dialog04.toText = this.txdz_from
      this.dialog04.numText = this.txdz_code_num
      this.dialog04.typesText = 'txdz'
      this.dialog4 = true
    },
    zhanneizhuanzhangOK() {
      //站内转账 -下一步
      this.dialog8 = false
      this.captchas = [
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' },
      ]
      this.dialog04.codeText = this.xiala.text //币种
      this.dialog04.toText = this.dialog08.userId //用户id
      this.dialog04.numText = this.dialog08.num //转账数量
      this.dialog04.typesText = 'znzz' //转账类型 站内转账
      this.dialog4 = true
    },
    zhanneizhuanzhang() {
      //站内转账
      // console.log("提现地址：",this)
      console.log('转账币名：', this.xiala.text)
      console.log('转账账号：', this.znzz_zhanghu)
      const token = localStorage.getItem('token')
      this.axios
        .post(
          '/r0/wallet/getToUserData',
          {
            Phone: this.znzz_zhanghu, //用户账号 或者 手机号
            CodeType: this.xiala.text,
          },
          { headers: { 'access-token': token } }
        )
        .then(response => {
          console.log(response)
          this.dialog08.name = response.data.Name //渲染dialog8 数据
          this.dialog08.address = response.data.Address
          this.dialog08.img = response.data.ToFaceImg
          this.dialog08.userId = response.data.UserId
          this.dialog = false
          this.dialog8 = true
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
      let val = this.captchas[index].num
      // 回退键处理
      if (event.keyCode == 8 && val == '') {
        // 重新校准
        let dom = document.getElementById('captcha' + (index - 1))
        this.activeInput = index - 1
        if (dom) dom.focus()
      }
      if (event.keyCode != 8 && val != '') {
        let dom = document.getElementById('captcha' + (index + 1))
        this.activeInput = index + 1
        if (dom) dom.focus()
      }
    },
    //验证码函数 输入框相互联动
    inputFinash(index) {
      let val = this.captchas[index].num
      this.activeInput = val ? index + 1 : index - 1
      let dom = document.getElementById('captcha' + this.activeInput)
      if (dom) dom.focus()
      if (index == this.captchas.length - 1) {
        let code = this.captchas.map(x => x.num).join('')
        if (code.length == 6) {
          const token = localStorage.getItem('token')
          this.axios
            .post(
              '/r0/wallet/payFarm',
              {
                CodeCake: code,
                To: this.dialog04.toText,
                Num: this.dialog04.numText,
                CodeTypes: this.dialog04.codeText,
                BaiZhu: this.dialog04.beizhu,
                PatTypes: this.dialog04.typesText,
              },
              { headers: { 'access-token': token } }
            )
            .then(response => {
              console.log(response)
              if (response.data.data == 'ok') {
                this.dialog6 = false
                this.dialog7 = true
              } else {
                alert('操作失败！')
              }
            })
          // this.dialog6 = false
          // this.dialog7 = true
          // console.log("输入6个了：",code)
          // this.$emit("finish", code);
        }
      }
    },
  },
  data() {
    return {
      duihuan_usdt_to_hsf_num: '',
      duihuan_usdt_to_hsf_num_yunsuan: '0.005',
      duihuan_hsf_to_usdt_num: '',
      duihuan_hsf_to_usdt_num_yunsuan: '200',
      dialog08: {
        //数据渲染
        num: '',
        userId: '',
        name: '',
        img: '',
        address: '',
        beizhu: '',
      },
      dialog04: {
        typesText: '', //转账类型
        codeText: '',
        toText: '',
        numText: '',
      },
      apidata: {
        USDT: {
          num: '0',
          numOk: '0',
          numNo: '0',
          address: 'null',
        },
        HSF: {
          num: '0',
          numOk: '0',
          numNo: '0',
          address: 'null',
        },
        list: [],
      },
      znzz_zhanghu: '', //站内转账 》账号
      znzz_shouji: '', //站内转账 》手机号
      txdz_code_num: '',
      txdz_from: '',
      xiala: {
        imgurl:
          'https://investors.oss-cn-beijing.aliyuncs.com/assets/usdt_logo.png',
        text: 'USDT',
      },
      areaCode2: '+86', //手机号前缀
      areaCodes2: ['+86', '+87'], //手机号前缀
      bool1: true, //充值》请输入对方账户（按钮）
      dataObj: {
        //二维码
        text: 'https://blog.csdn.net/weixin_43760328/rss/list',
      },
      sheet: false,
      t1: true, //对话框初始画面
      tab: null,
      areaCode: 'USTD',
      areaCodes: ['USTD', 'SHF'],
      dialog: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog6: false, //支付密码。输入验证码
      dialog7: false, //最终支付成功
      dialog8: false, //站内转账下一步
      duihuan123: false,
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      //验证码数据
      activeInput: 0, //修改密码
      captchas: [
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' },
        { num: '' },
      ],
    }
  },
}
</script>

<style scoped>
/*.v-dialog{*/
/*  $dialog-border-radius: 100px;*/
/*}*/
.swiper-slide {
  width: 65%;
}

.swiper-slide:nth-child(1n) {
  width: 65%;
}

.swiper-slide:nth-child(3n) {
  width: 65%;
}
/*.v-dialog{*/
/*  $dialog-border-radius: 20;*/
/*}*/
</style>

<style lang="scss">
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
