<template>
  <v-container fluid class="align-start" style="padding: 0;">
    <v-col
      cols="3"
      offset="7"
      style="position: absolute; z-index: 99; top: 60px"
    >
      <div>
        <v-card
          width="420px"
          height="428px"
          style="background: #FFFFFF;box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.04);border-radius: 24px;"
        >
          <div style="padding: 39px 40px 49px 40px">
            <div class="d-inline-flex">
              <div
                style="font-size: 48px; font-weight: 800;color: #00CFAC;line-height: 48px;"
              >
                {{ annualValue }}%
              </div>
              <div style="width: 12px"></div>
              <div
                style="margin-top:18px; font-size: 14px;font-weight: 400;color: #B2B2B2;line-height: 24px;"
              >
                年化收益
              </div>
            </div>
            <div style="height: 41px"></div>
            <div class="d-inline-flex">
              <div>
                <div
                  style="font-size: 16px;font-weight: 400;color: #333333;line-height: 16px;"
                >
                  投资总额
                </div>
                <div style="height: 18px"></div>
                <div
                  style="font-size: 16px;font-weight: 400;color: #333333;line-height: 16px;"
                >
                  <!--                  {{ info.Total }} USDT-->
                  {{ totalValue }} USDT
                </div>
              </div>
              <div style="width: 64px"></div>
              <div>
                <div
                  style="font-size: 16px;font-weight: 400;color: #333333;line-height: 16px;"
                >
                  剩余可购
                </div>
                <div style="height: 18px"></div>
                <div
                  style="font-size: 16px;font-weight: 400;color: #00CFAC;line-height: 16px;"
                >
                  {{ surplusValue }} USDT
                </div>
              </div>
            </div>
            <div style="height: 36px"></div>
            <div class="d-inline-flex">
              <div>融资进度</div>
              <div style="width: 8px"></div>
              <div
                style="margin-top: 3px; width:46px;height:18px;background: linear-gradient(225deg, #00E9D6 0%, #00CFAC 100%);border-radius: 4px;text-align:center;color:#fff;font-size:10px;font-weight:400;"
              >
                <div>
                  进行中
                </div>
              </div>
            </div>
            <div style="height: 20px"></div>
            <v-progress-linear
              style="height:10px;width:358px;border-radius: 5px;"
              background-color="#F7F8FB"
              color="#00CFAC"
              class="unFinish"
              v-bind:value="progressValue"
            ></v-progress-linear>
            <div style="height: 60px"></div>
            <v-btn
              width="340px"
              height="56px"
              depressed
              rounded
              @click="
                investDialogFlag = true
                selectUSDTBalance()
              "
              style="color: #FFFFFF; background: linear-gradient(63deg, #00DEB8 0%, #21B7C5 100%);"
            >
              <div
                style="width: 48px;height: 22px;font-size: 16px;font-weight: 600;color: #FFFFFF;"
              >
                去投资
              </div>
            </v-btn>
            <v-dialog
              content-class="rounded-xl"
              v-model="investDialogFlag"
              width="400"
              height="350"
            >
              <div
                style="height: 350px;width: 400px;background: #FFFFFF; padding: 25px 25px 30px 30px"
              >
                <div
                  style="width: 144px; height: 24px; font-size: 24px;
                        font-weight: 600; color: #000000; line-height: 24px; margin-top: 15px"
                >
                  投资USDT
                </div>
                <div style="height: 48px"></div>
                <v-text-field
                  autocomplete="off"
                  v-model="investValue"
                  label="最小投资额 1"
                  single-line
                  filled
                  rounded
                  style="width: 340px"
                ></v-text-field>
                <span
                  style="color: #000000;width: 100%; position: absolute; margin-top: -68px;
                        margin-left: 235px; font-size: 14px; font-weight: 600;"
                  >USDT
                </span>
                <span
                  style="color: grey;width: 100%; position: absolute; margin-top: -69px;
                        margin-left: 281px; font-size: 14px; font-weight: 600;"
                  >|
                </span>
                <span
                  @click="inputAllBalance()"
                  style="color: #00CFAC;width: 100%; position: absolute; margin-top: -68px;
                        margin-left: 295px; font-size: 14px; font-weight: 600; cursor: pointer"
                  >全部
                </span>
                <div class="d-inline-flex">
                  <div style="font-size: 14px;font-weight: 400;color: #9F9FA4;">
                    可用USDT:
                  </div>
                  <div style="font-size: 14px;font-weight: 400;color: #9F9FA4;">
                    {{ availableBalance }}
                  </div>
                  <div style="width: 12px"></div>
                  <router-link to="/wallet">
                    <div
                      style="font-size: 14px;font-weight: 400;
                  color: #00CFAC; cursor: pointer"
                    >
                      充值
                    </div>
                  </router-link>
                </div>
                <div style="height: 40px"></div>
                <v-btn
                  width="340px"
                  height="56px"
                  text
                  rounded
                  style="color: #FFFFFF; background: linear-gradient(63deg, #00DEB8 0%, #21B7C5 100%);"
                  @click="investMoney()"
                >
                  <div
                    style="width: 48px;height: 22px;font-size: 16px;font-weight: 600;
                    color: #FFFFFF;"
                  >
                    投资
                  </div>
                </v-btn>
              </div>
            </v-dialog>
          </div>
        </v-card>
      </div>
    </v-col>
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
                <v-img
                  width="32px"
                  height="32px"
                  src="https://investors.oss-cn-beijing.aliyuncs.com/assets/invest/arrow_green_dark.png"
                  @click="clickBack()"
                ></v-img>
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
                >{{ cycleValue }}天</span
              >
              <div class="d-inline-flex" style="width: 34px;"></div>
              <span
                style="width: 64px;height: 16px;font-size: 16px;font-weight: 400;color: rgba(255, 255, 255, 0.8);line-height: 16px;"
                >最低投入</span
              >
              <div class="d-inline-flex" style="width: 12px;"></div>
              <span
                style="width: 40px;height: 16px;font-size: 16px;font-weight: 600;color: #FFFFFF;line-height: 16px;"
                >{{ minMumValue }}USDT</span
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
          <div style="">
            <v-col
              cols="6"
              offset="3"
              style="background: #FAFBFC;height: 1800px;padding: 0px 24px 0px 24px"
            >
              <div style="height:80px;width: 100%"></div>
              <div
                style="width: 72px;height: 24px;font-size: 24px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #000000;line-height: 24px;"
              >
                盈利宝
              </div>
              <div style="height: 24px"></div>
              <!-- 项目亮点 -->
              <div
                style="width: 100%;height: 329px;background: #FFFFFF;border-radius: 18px;padding: 40px 30px 30px 30px"
              >
                <div
                  style="width: 72px;height: 18px;font-size: 18px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #000000;line-height: 18px;"
                >
                  项目亮点
                </div>
                <div style="height: 30px"></div>
                <v-row>
                  <v-col cols="6">
                    <v-row>
                      <v-col cols="2" style="padding: 20px 9px 10px 43px">
                        <img
                          src="https://investors.oss-cn-beijing.aliyuncs.com/assets/guo0001.png"
                          style="width: 40px; height:40px;"
                        />
                      </v-col>
                      <v-col cols="10" style="">
                        <div
                          style="width: 172px;height: 24px;font-size: 18px;font-family: Nunito-Regular, Nunito;font-weight: 600;color: #000000;line-height: 24px;"
                        >
                          加密资产
                        </div>
                        <div style="height: 13px"></div>
                        <div
                          style="width: 233px;height: 16px;font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 600;color: #808080;line-height: 16px;"
                        >
                          灵活期限 随心定制
                        </div>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-row>
                      <v-col cols="2" style="padding: 20px 9px 10px 43px">
                        <img
                          src="https://investors.oss-cn-beijing.aliyuncs.com/assets/guo0002.png"
                          style="width: 40px; height:40px;"
                        />
                      </v-col>
                      <v-col cols="10" style="">
                        <div
                          style="width: 172px;height: 24px;font-size: 18px;font-family: Nunito-Regular, Nunito;font-weight: 600;color: #000000;line-height: 24px;"
                        >
                          去中性化金融
                        </div>
                        <div style="height: 13px"></div>
                        <div
                          style="width: 233px;height: 16px;font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 600;color: #808080;line-height: 16px;"
                        >
                          闪电赎回
                        </div>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <div style="height: 50px"></div>
                <v-row>
                  <v-col cols="6">
                    <v-row>
                      <v-col cols="2" style="padding: 20px 9px 10px 43px">
                        <img
                          src="https://investors.oss-cn-beijing.aliyuncs.com/assets/guo0003.png"
                          style="width: 40px; height:40px;"
                        />
                      </v-col>
                      <v-col cols="10" style="">
                        <div
                          style="width: 172px;height: 24px;font-size: 18px;font-family: Nunito-Regular, Nunito;font-weight: 600;color: #000000;line-height: 24px;"
                        >
                          价格透明
                        </div>
                        <div style="height: 13px"></div>
                        <div
                          style="width: 233px;height: 16px;font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 600;color: #808080;line-height: 16px;"
                        >
                          价格实时 链上查询
                        </div>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-row>
                      <v-col cols="2" style="padding: 20px 9px 10px 43px">
                        <img
                          src="https://investors.oss-cn-beijing.aliyuncs.com/assets/guo0004.png"
                          style="width: 40px; height:40px;"
                        />
                      </v-col>
                      <v-col cols="10" style="">
                        <div
                          style="width: 172px;height: 24px;font-size: 18px;font-family: Nunito-Regular, Nunito;font-weight: 600;color: #000000;line-height: 24px;"
                        >
                          安全合规
                        </div>
                        <div style="height: 13px"></div>
                        <div
                          style="width: 233px;height: 16px;font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 600;color: #808080;line-height: 16px;"
                        >
                          合规监管，安全存储
                        </div>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </div>
              <div style="height: 24px"></div>
              <!-- 交易规则 -->
              <div
                style="width: 100%;height: 286px;background: #FFFFFF;border-radius: 18px;padding: 35px 24px 35px 24px"
              >
                <div
                  style="width: 100%;font-size: 18px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #000000;"
                >
                  交易规则
                  <div
                    style="float:right;color: #0AC6B1;font-size: 14px;font-weight: 400; cursor: pointer"
                    @click="tab = 'tab-2'"
                  >
                    买入-收益-撤销等详细规则 ➔
                  </div>
                </div>
                <div style="height: 38px"></div>
                <div
                  style="height: 25px;font-size: 18px; font-weight: 500;color: #808080;line-height: 24px"
                >
                  本期买入
                </div>
                <div style="height: 18px"></div>
                <div
                  style="width: 100%;height: 18px;font-size: 18px; font-weight: 600;color: #000000;line-height: 18px;"
                >
                  {{ beginTime }} 至 {{ endTime }}
                </div>
                <div style="height: 27px"></div>
                <v-divider></v-divider>
                <div style="height: 31px"></div>
                <div
                  style="width: 100%;font-size: 18px; font-weight: 500;color: #000000;"
                >
                  产品档案
                  <div
                    style="float:right;color: #0AC6B1;font-size: 14px;font-weight: 400; cursor: pointer"
                    @click="tab = 'tab-3'"
                  >
                    产品类型、特点、项目方介绍、资金 ➔
                  </div>
                </div>
              </div>
              <div style="height: 24px"></div>
              <div
                style="width: 100%;height: 800px;background: #FFFFFF;border-radius: 18px;padding: 35px 24px 35px 24px"
              >
                <div
                  style="width: 208px;height: 32px;font-size: 18px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #000000;line-height: 32px;"
                >
                  USDT投资浮动
                </div>
                <div style="height: 40px;"></div>
                <div
                  style="font-size: 24px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #00CFAC;line-height: 24px;"
                >
                  1USDT ≈ 1HSF
                </div>
                <div style="height: 30px"></div>
                <div style="height: 559px;width: 100%;">
                  <div
                    id="main"
                    class="zhexiantu"
                    style="width: 100%;height:100%;"
                  ></div>
                </div>
              </div>
              <div style="height: 24px"></div>
              <div
                style="width: 100%;height: 90px;background: #FFFFFF;border-radius: 18px;padding: 35px 24px 35px 24px; cursor: pointer"
                @click="tab = 'tab-4'"
              >
                <div
                  style="width: 100%; height: 18px; font-size: 18px; font-weight: 500; color: #000000; line-height: 18px;"
                >
                  常见问题
                  <img
                    src="https://investors.oss-cn-beijing.aliyuncs.com/assets/jiantouhui1.png"
                    style="width:24px;height:24px;float:right;"
                  />
                </div>
              </div>
            </v-col>
          </div>
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
          <div>
            <v-col
              cols="6"
              offset="3"
              style="background: #FAFBFC;height: 1811px;padding: 0px 24px 0px 24px"
            >
              <div style="height: 60px"></div>
              <div
                style="width: 196px;
                          height: 24px;
                          font-size: 24px;
                          font-weight: 600;
                          color: #000000;
                          line-height: 24px;"
              >
                常见问题
              </div>
              <div style="height: 24px"></div>
              <div
                style="background: #FFFFFF;border-radius: 18px;height: 1582px;padding: 0px 24px 0px 24px"
              >
                <div style="height: 38px"></div>
                <div
                  style="width: 198px;height: 18px;font-size: 18px; font-weight: 500;color: #000000;line-height: 18px;"
                >
                  投资需要满足什么条件？
                </div>
                <div style="height: 38px"></div>
                <div
                  style="
                        width: 100%;
                        height: 50px;
                        font-size: 18px;
                        font-weight: 400;
                        color: #808080;
                        line-height: 25px;"
                >
                  当您的资产账户满足最小起购条件，即可购买投资产品。同时，我们建议您仔细阅读投资规则说明。以确保您完全理解了投资的收益与风险。
                </div>
                <div style="height: 38px"></div>
                <div
                  style="width: 100%;
                            height: 1px;
                            border: 1px solid #F1F1F2;"
                ></div>
                <div style="height: 38px"></div>
                <div
                  style="width: 100%;height: 18px;font-size: 18px; font-weight: 500;color: #000000;line-height: 18px;"
                >
                  购买后能在立项前撤销吗？
                </div>
                <div style="height: 38px"></div>
                <div
                  style="
                            width: 100%;
                            height: 50px;
                            font-size: 18px;
                            font-weight: 400;
                            color: #808080;
                            line-height: 25px;"
                >
                  当您购买成功后可以撤销，持有到期后自动回款结算。
                </div>
                <div style="height: 38px"></div>
                <div
                  style="width: 100%;
                            height: 1px;
                            border: 1px solid #F1F1F2;"
                ></div>
                <div style="height: 38px"></div>

                <div
                  style="width: 100%;height: 18px;font-size: 18px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #000000;line-height: 18px;"
                >
                  什么时候以什么方式回款？
                </div>
                <div style="height: 38px"></div>
                <div
                  style="
                            width: 100%;
                            height: 50px;
                            font-size: 18px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #808080;
                            line-height: 25px;"
                >
                  产品立项确定后16:30 (UTC+8)
                  前收到您的回款。回款将直接转入您的HSF账户，不需要手动操作。
                </div>
                <div style="height: 38px"></div>
                <div
                  style="width: 100%;
                            height: 1px;
                            border: 1px solid #F1F1F2;"
                ></div>
                <div style="height: 38px"></div>

                <div
                  style="width: 100%;height: 18px;font-size: 18px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #000000;line-height: 18px;"
                >
                  产品购买截至时间
                </div>
                <div style="height: 38px"></div>
                <div
                  style="
                            width: 100%;
                            height: 50px;
                            font-size: 18px;
                            font-weight: 400;
                            color: #808080;
                            line-height: 25px;"
                >
                  产品购买到期日前一天在23:59:59之前都可以下单。比如到期日8月2号持仓期限为1天的投资产品，购买截至时间就是8月1号23:59:59
                  之前，产品还有剩余可够量，用户都可以下单购买。
                </div>
                <div style="height: 38px"></div>
                <div
                  style="width: 100%;
                            height: 1px;
                            border: 1px solid #F1F1F2;"
                ></div>
                <div style="height: 38px"></div>

                <div
                  style="width: 100%;height: 18px;font-size: 18px; font-weight: 500;color: #000000;line-height: 18px;"
                >
                  是否有最小投资金额与最大投资金额的限制？
                </div>
                <div style="height: 38px"></div>
                <div
                  style="
                            width: 100%;
                            height: 50px;
                            font-size: 18px;
                            font-weight: 400;
                            color: #808080;
                            line-height: 25px;"
                >
                  最小投资金额即是1份产品投资的单价，最大投资金额即是该投资产品的剩余可购量。
                </div>
                <div style="height: 38px"></div>
                <div
                  style="width: 100%;
                            height: 1px;
                            border: 1px solid #F1F1F2;"
                ></div>
                <div style="height: 38px"></div>
              </div>
            </v-col>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-container>
</template>

<script>
import * as echarts from 'echarts'
import util from '/src/util/common.js'
export default {
  name: 'InvestTab',
  components: {
    echarts,
  },
  mounted: function() {
    this.GetData() //需要触发的函数
    this.lineChart()
  },
  data() {
    return {
      tab: 'tab-1',
      tabTrans: null,
      tabProduct: null,
      valueDeterminate: 90,
      investBtnFlag: '',
      investDialogFlag: '',
      investValue: '',
      info: '',
      usdtAvliable: '',
      cycleValue: '',
      minMumValue: '',
      annualValue: '',
      totalValue: '',
      surplusValue: '',
      progressValue: '',
      availableBalance: '',
      beginTime: '',
      endTime: '',
    }
  },
  methods: {
    investMoney: function() {
      const token = localStorage.getItem('token')
      this.axios
        .post(
          '/r0/invest/passed',
          {
            project_id: this.$route.query.projectid,
            invest_number: this.investValue,
          },
          {
            headers: {
              'access-token': token,
              'Content-Type': 'application/json',
            },
          }
        )
        .then(response => {
          this.investBtnFlag = false
          if (response.data.success === 'true') {
            alert(response.data.last)
          } else {
            alert(response.data.success)
          }
        })
    },
    //初始化调用
    GetData: function() {
      const token = localStorage.getItem('token')
      this.axios
        .post(
          '/r0/invest/projectInfo',
          {
            project_id: this.$route.query.projectid,
          },
          {
            headers: {
              'access-token': token,
              'Content-Type': 'application/json',
            },
          }
        )
        .then(response => {
          console.log(response)
          let pInfo = response.data.projectInfo
          if (pInfo === '' || pInfo === null || pInfo === undefined) {
            alert('查询投资信息失败')
          } else {
            this.cycleValue = pInfo.Cycle
            this.minMumValue = pInfo.MinimumInvestment
            this.annualValue = pInfo.AnnualizedIncome
            this.totalValue = pInfo.Total
            let begin = new Date(pInfo.BeginTimes)
            let end = new Date(
              pInfo.BeginTimes + pInfo.Cycle * 24 * 3600 * 1000
            )
            this.beginTime = util.formatDate(begin, 'yyyy-MM-dd hh:mm:ss')
            this.endTime = util.formatDate(end, 'yyyy-MM-dd hh:mm:ss')
            this.surplusValue = pInfo.Total - pInfo.CompleteGoal
            this.progressValue = (pInfo.CompleteGoal / pInfo.Total) * 100
          }
          //this.info = pInfo
          //this.usdtAvliable = response.data.usdtlast
        })
    },
    lineChart() {
      let data = []
      for (let i = 0; i <= 500; i++) {
        data.push(i)
      }
      let myChart = echarts.init(document.getElementById('main'))
      myChart.setOption({
        color: ['#00CFAC'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#00CFAC',
            },
          },
        },
        grid: {
          width: 'auto',
          height: 'auto',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'value',
            data: ['100', '200', '300', '400', '500'],
            name: 'HSF',
          },
        ],
        yAxis: [
          {
            type: 'value',
            data: ['100', '200', '300', '400', '500'],
            name: 'USDT',
          },
        ],
        legend: {
          data: ['投资收益比例图'],
        },
        series: [
          {
            name: '投资收益比例',
            type: 'line',
            lineStyle: {
              width: 1,
            },
            areaStyle: {
              opacity: 1,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#00CFAC',
                },
                {
                  offset: 1,
                  color: '#FFFFFF',
                },
              ]),
            },
            emphasis: {
              focus: 'series',
              scale: true,
            },
            data: data,
          },
        ],
      })
    },
    clickBack() {
      this.$router.go(-1)
    },
    selectUSDTBalance() {
      const token = localStorage.getItem('token')
      this.axios
        .post(
          '/r0/invest/availableBalance',
          {},
          {
            headers: {
              'access-token': token,
              'Content-Type': 'application/json',
            },
          }
        )
        .then(response => {
          console.log(response)
          let bInfo = response.data.balanceInfo
          if (bInfo === '' || bInfo === null || bInfo === undefined) {
            alert('查询投资余额失败')
          } else {
            this.availableBalance = bInfo.Balance
          }
          //this.info = pInfo
          //this.usdtAvliable = response.data.usdtlast
        })
    },
    inputAllBalance() {
      this.investValue = this.availableBalance
    },
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
.unFinish {
  .v-progress-linear__determinate {
    background: linear-gradient(90deg, #00e9d6 0%, #00cfac 100%);
  }
}
</style>
