<style>
.btn {
  font-size: 20px;
  border-radius: 26px;
  text-align: center;
  box-shadow: 14px 10px 40px 0 rgba(15, 15, 15, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 48px 0;
}

.bubble_left {
  width: 100%;
  height: 350px;
  background: #ffffff;
  border-radius: 175px 175px 175px 175px;
  align-items: center;
  max-width: 960px;
  box-shadow: -1px 0px 40px 0px #ffffff, -30px 0px 40px 0 rgba(15, 15, 15, 0.1);
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transition: opacity 1s ease 0.3s, transform 1s ease 0.3s;
}

.bubble_right {
  width: 100%;
  height: 350px;
  background: #ffffff;
  border-radius: 175px 175px 175px 175px;
  align-items: center;
  max-width: 960px;
  box-shadow: 1px 0px 40px 0px #ffffff, 30px 0px 40px 0 rgba(15, 15, 15, 0.1);
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transition: opacity 1s ease 0.3s, transform 1s ease 0.3s;
}
</style>

<template>
  <v-container fluid class="align-start" style="padding: 0px;">
    <v-row class="text-center">
      <v-col cols="12" style="height: 120px;"></v-col>
      <v-col cols="12">
        <div
          class="text-center"
          style="height: 70px;font-size: 32px;font-family: STHeiti;font-weight: 400;font-weight: bold;color: #000000;line-height: 43px;"
        >
          公开·公平·透明
        </div>
      </v-col>
      <v-col class="col-12" style="height: 60px;"></v-col>
      <v-col class="col-12">
        <div align="center">
          <p
            class="text--disabled"
            style="font-size: 16px;width: 32vw; min-width: 819px"
          >
            investors的创新团队拥有顶尖金融机构和领先技术公司的背景，为企业、家族基金、个人用户提供投资和融资的专业平台，旨在为新的，创新的，去中心化的金融市场作出贡献。
          </p>
        </div>
      </v-col>
      <v-col cols="12" style="height: 120px;"></v-col>
      <v-col cols="12">
        <div align="center" style="display: inline-flex; align-items: center">
          <v-btn
            id="btn1"
            text
            rounded
            class="btn"
            style="width: 280px;height: 312px;"
            @mouseover="showBtnMore1()"
            @mouseout="hideBtnMore1()"
          >
            <div align="center">
              <img
                src="@/assets/investors_btn1.png"
                style="width: 120px; height:120px;"
              />
              <p
                style="color: black; font-family: Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif; text-transform: lowercase; margin-top: 20px; font-size: 20px"
              >
                investors投资
              </p>
              <div
                class="text-center"
                id="btnMore1"
                style="display: none; margin-top: 25px"
              >
                <p
                  style="color: #00CFAC; display:inline-flex; font-size: 16px; font-family: Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif"
                >
                  了解更多
                </p>
                <div
                  style="display: inline-flex; margin-left: 3px; margin-bottom: 4px; vertical-align: middle"
                >
                  <img
                    src="@/assets/arrow_green.png"
                    style="width:14px; height: 14px;"
                  />
                </div>
              </div>
            </div>
          </v-btn>
          <v-btn
            id="btn2"
            text
            rounded
            class="btn"
            style="width: 280px;height: 312px; margin-left: 50px"
            @mouseover="showBtnMore2()"
            @mouseout="hideBtnMore2()"
          >
            <div align="center">
              <img
                src="@/assets/investors_btn2.png"
                style="width: 120px; height:120px;"
              />
              <p
                style="color: black; font-family: Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif; text-transform: lowercase; margin-top: 20px; font-size: 20px"
              >
                investors理财
              </p>
              <div
                class="text-center"
                id="btnMore2"
                style="display: none; margin-top: 25px"
              >
                <p
                  style="color: #00CFAC; display:inline-flex; font-size: 16px; font-family: Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif"
                >
                  了解更多
                </p>
                <div
                  style="display: inline-flex; margin-left: 3px; margin-bottom: 4px; vertical-align: middle"
                >
                  <img
                    src="@/assets/arrow_green.png"
                    style="width:14px; height: 14px;"
                  />
                </div>
              </div>
            </div>
          </v-btn>
          <v-btn
            id="btn3"
            text
            rounded
            class="btn"
            style="width: 280px;height: 312px; margin-left: 50px"
            @mouseover="showBtnMore3()"
            @mouseout="hideBtnMore3()"
          >
            <div align="center">
              <img
                src="@/assets/investors_btn3.png"
                style="width: 120px; height:120px;"
              />
              <p
                style="color: black; font-family: Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif; text-transform: lowercase; margin-top: 20px; font-size: 20px"
              >
                企业动态
              </p>
              <div
                class="text-center"
                id="btnMore3"
                style="display: none; margin-top: 25px"
              >
                <p
                  style="color: #00CFAC; display:inline-flex; font-size: 16px; font-family: Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif"
                >
                  了解更多
                </p>
                <div
                  style="display: inline-flex; margin-left: 3px; margin-bottom: 4px; vertical-align: middle"
                >
                  <img
                    src="@/assets/arrow_green.png"
                    style="width:14px; height: 14px;"
                  />
                </div>
              </div>
            </div>
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" style="height: 120px;"></v-col>
      <v-col cols="12" class="text-center">
        <v-col cols="12">
          <div
            style="font-size: 32px;font-family: STHeiti;font-weight: 400;font-weight: bold;color: #000000;line-height: 43px;"
          >
            合规优势
          </div>
        </v-col>
        <v-col cols="12" style="height: 120px;"></v-col>
        <v-col cols="12">
          <div align="center" style="align-items: center">
            <v-row class="bubble_left" style="text-align: center;">
              <v-col cols="5">
                <div>
                  <img
                    src="@/assets/bubble1.png"
                    style="width: 50%; height: auto;"
                  />
                </div>
              </v-col>
              <v-col cols="7">
                <div class="text-left" style="align-items: center">
                  <p
                    style="color: black; font-family: STHeiti; font-size: 24px; font-weight: bold;"
                  >
                    专业
                  </p>
                  <p
                    class="text--disabled"
                    style="color: black; font-family: STHeiti; font-size: 16px;"
                  >
                    核心团队来自高盛、Facebook、Google、UBS、AIA
                  </p>
                  <p
                    class="text--disabled"
                    style="color: black; font-family: STHeiti; font-size: 16px;"
                  >
                    总交易量超过2,500亿美元，月均交易量百亿美元
                  </p>
                  <p
                    class="text--disabled"
                    style="color: black; font-family: STHeiti; font-size: 16px;"
                  >
                    为全球知名大型机构、家族基金以及个人用户提供机构级服务
                  </p>
                </div>
              </v-col>
            </v-row>
            <v-col cols="12" style="height: 60px;"></v-col>
            <v-row class="bubble_right" style="align-items: center;">
              <v-col cols="7">
                <div align="right">
                  <div class="text-left" style="width: 78%; max-width: 430px">
                    <p
                      style="color: black; font-family: STHeiti; font-size: 24px; font-weight: bold"
                    >
                      合规
                    </p>
                    <p
                      class="text--disabled"
                      style="color: black; font-family: STHeiti; font-size: 16px"
                    >
                      获得美国及加拿大MSB牌照（Money Service Business）
                    </p>
                    <p
                      class="text--disabled"
                      style="color: black; font-family: STHeiti; font-size: 16px"
                    >
                      拥有从事数字货币、外汇、期货等金融业务的资质
                    </p>
                    <p
                      class="text--disabled"
                      style="color: black; font-family: STHeiti; font-size: 16px"
                    >
                      实施严格的KYC认证与反洗钱策略
                    </p>
                  </div>
                </div>
              </v-col>
              <v-col cols="5">
                <div>
                  <img
                    src="@/assets/bubble2.png"
                    style="width: 50%; height: auto; margin-right: 50px"
                  />
                </div>
              </v-col>
            </v-row>
            <v-col cols="12" style="height: 60px;"></v-col>
            <v-row class="bubble_left" style="text-align: center;">
              <v-col cols="5">
                <div>
                  <img
                    src="@/assets/bubble3.png"
                    style="width: 50%; height: auto;"
                  />
                </div>
              </v-col>
              <v-col cols="7">
                <div class="text-left" style="align-items: center">
                  <p
                    style="color: black; font-family: STHeiti; font-size: 24px; font-weight: bold;"
                  >
                    安全
                  </p>
                  <p
                    class="text--disabled"
                    style="color: black; font-family: STHeiti; font-size: 16px;"
                  >
                    与加密资产安全托管商Fireblocks、BitGo达成战略合作
                  </p>
                  <p
                    class="text--disabled"
                    style="color: black; font-family: STHeiti; font-size: 16px;"
                  >
                    采用业内领先的MPC技术，保障账户安全
                  </p>
                  <p
                    class="text--disabled"
                    style="color: black; font-family: STHeiti; font-size: 16px;"
                  >
                    25%的公司预算投入在信息安全体系中，远超行业平均水平
                  </p>
                </div>
              </v-col>
            </v-row>
            <v-col cols="12" style="height: 60px;"></v-col>
            <v-row class="bubble_right" style="align-items: center;">
              <v-col cols="8">
                <div align="right">
                  <div class="text-left" style="max-width: 500px">
                    <p
                      style="color: black; font-family: STHeiti; font-size: 24px; font-weight: bold"
                    >
                      全球化
                    </p>
                    <p
                      class="text--disabled"
                      style="color: black; font-family: STHeiti; font-size: 16px"
                    >
                      业务覆盖全球，已为全球超80个国家/地区用户提供全年7*24小时服务
                    </p>
                    <p
                      class="text--disabled"
                      style="color: black; font-family: STHeiti; font-size: 16px"
                    >
                      在全球超过100个电子化交易平台进行交易
                    </p>
                    <p
                      class="text--disabled"
                      style="color: black; font-family: STHeiti; font-size: 16px"
                    >
                      总部位于韩国首尔，在英国、温哥华、新加坡设有分支机构
                    </p>
                  </div>
                </div>
              </v-col>
              <v-col cols="4">
                <div>
                  <img
                    src="@/assets/bubble4.png"
                    style="width: 63%; height: auto; margin-right: 100px"
                  />
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-col>
      <v-col cols="12" style="height: 120px;"></v-col>
      <v-col cols="12" class="text-center" style="height: 45px;">
        <div
          style="height: 45px;
font-size: 32px;
font-family: PingFang-SC-Semibold, PingFang-SC;
font-weight: 600;
color: #000000;
line-height: 45px;"
        >
          企业动态
        </div>
      </v-col>
      <v-col cols="12" style="height: 120px;"></v-col>
      <v-col cols="12" class="text-center">
        <img src="@/assets/qydt1.png" style="width:100%;height:100%;" />
      </v-col>
      <v-col cols="12" style="height: 120px;"></v-col>
      <v-col class="col-12 text-center">
        <v-col class="mb-12 text-center">
          <div
            style="height: 45px;
font-size: 32px;
font-family: Nunito-SemiBold, Nunito;
font-weight: 600;
color: #000000;
line-height: 43px;"
          >
            投资机构
          </div>
        </v-col>

        <v-col cols="12" style="height: 336px;">
          <v-row>
            <v-col cols="3"></v-col>
            <v-col cols="6">
              <v-row style="height: 150px;">
                <v-col cols="3"
                  ><img
                    src="@/assets/hezuo_logo1.png"
                    style="width:100%;height:auto;"
                /></v-col>
                <v-col cols="3"
                  ><img
                    src="@/assets/hezuo_logo2.png"
                    style="width:100%;height:auto;"
                /></v-col>
                <v-col cols="3"
                  ><img
                    src="@/assets/hezuo_logo3.png"
                    style="width:100%;height:auto;"
                /></v-col>
                <v-col cols="3"
                  ><img
                    src="@/assets/hezuo_logo4.png"
                    style="width:100%;height:auto;"
                /></v-col>
              </v-row>
              <v-row style="height: 30px;"></v-row>
              <v-row style="height: 150px;">
                <v-col cols="3"
                  ><img
                    src="@/assets/hezuo_logo5.png"
                    style="width:100%;height:auto;"
                /></v-col>
                <v-col cols="3"
                  ><img
                    src="@/assets/hezuo_logo6.png"
                    style="width:100%;height:auto;"
                /></v-col>
                <v-col cols="3"
                  ><img
                    src="@/assets/hezuo_logo7.png"
                    style="width:100%;height:auto;"
                /></v-col>
                <v-col cols="3"
                  ><img
                    src="@/assets/hezuo_logo8.png"
                    style="width:100%;height:auto;"
                /></v-col>
              </v-row>
            </v-col>
            <v-col cols="3"></v-col>
          </v-row>
        </v-col>
        <v-col cols="12" style="height: 120px;"> </v-col>
        <v-col class="mb-12 text-center">
          <div
            style="height: 45px;
font-size: 32px;
font-family: Nunito-SemiBold, Nunito;
font-weight: 600;
color: #000000;
line-height: 43px;"
          >
            规划路线
          </div>
        </v-col>
       
        <v-row>
          <v-col cols="3"></v-col>
          <v-col cols="6">
            <v-row>
              <v-col cols="4">
                <button
                  type="button"
                  id="2019but"
                  @click="bao2019()"
                  style="line-height:80px; background: linear-gradient(270deg, #00FFBC 0%, #29C4CB 100%); height: 6px; width:100%;font-size: 32px;outline: none;"
                >
                  2019
                </button>
              </v-col>
              <v-col cols="4">
                <button
                  id="2020but"
                  @click="bao2020()"
                  type="button"
                  style="line-height:80px; background: #F7F8FB; height: 6px;font-size: 32px; width:100%;outline: none;"
                >
                  2020
                </button>
              </v-col>
              <v-col cols="4">
                <button
                  id="2021but"
                  @click="bao2021()"
                  type="button"
                  style="line-height:80px; background: #F7F8FB; height: 6px;font-size: 32px; width:100%;outline: none;"
                >
                  2021
                </button>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-col cols="12" style="height: 50px;"> </v-col>
        <v-col cols="12" id="code_text">
          <v-row>
            <v-col cols="3"></v-col>

            <v-col
              id="2019"
              cols="6"
              style="background: #FFFFFF;box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.04);border-radius: 24px;"
            >
              <div style="padding: 40px 40px 40px 40px">
                <p
                  align="left"
                  style="font-size: 24px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #000000;"
                >
                  2019
                </p>
                <p
                  align="left"
                  style="font-size: 18px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #000000;"
                >
                  第二季度~第三季度
                </p>
                <p
                  align="left"
                  style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
                >
                  <span style="color: #00FFBC ;font-size: 5px;">●</span>
                  investors Established
                </p>
                <p
                  align="left"
                  style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
                >
                  <span style="color: #00FFBC ;font-size: 5px;">●</span>
                  investors Architecture and Consensus Design
                </p>
                <p
                  align="left"
                  style="font-size: 18px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #000000;"
                >
                  第四季度
                </p>
                <p
                  align="left"
                  style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
                >
                  <span style="color: #00FFBC ;font-size: 5px;">●</span>
                  investors Exchange system Beta Launch
                </p>
              </div>
            </v-col>

            <v-col
              hidden
              id="2020"
              cols="6"
              style="background: #FFFFFF;box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.04);border-radius: 24px;"
            >
              <div style="padding: 40px 40px 40px 40px">
                <p
                  align="left"
                  style="font-size: 24px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #000000;"
                >
                  2020
                </p>
                <p
                  align="left"
                  style="font-size: 18px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #000000;"
                >
                  第一季度
                </p>
                <p
                  align="left"
                  style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
                >
                  <span style="color: #00FFBC ;font-size: 5px;">●</span>
                  investors Established text text text text text
                </p>
                <p
                  align="left"
                  style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
                >
                  <span style="color: #00FFBC ;font-size: 5px;">●</span>
                  investors Established text text text text text
                </p>
                <p
                  align="left"
                  style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
                >
                  <span style="color: #00FFBC ;font-size: 5px;">●</span>
                  investors Established text text text text text
                </p>
                <p
                  align="left"
                  style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
                >
                  <span style="color: #00FFBC ;font-size: 5px;">●</span>
                  investors Architecture and Consensus Design
                </p>
                <p
                  align="left"
                  style="font-size: 18px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #000000;"
                >
                  第四季度
                </p>
                <p
                  align="left"
                  style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
                >
                  <span style="color: #00FFBC ;font-size: 5px;">●</span>
                  investors Exchange system Beta Launch
                </p>
              </div>
            </v-col>
            <v-col
              hidden
              id="2021"
              cols="6"
              style="background: #FFFFFF;box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.04);border-radius: 24px;"
            >
              <div style="padding: 40px 40px 40px 40px">
                <p
                  align="left"
                  style="font-size: 24px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #000000;"
                >
                  2021
                </p>
                <p
                  align="left"
                  style="font-size: 18px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #000000;"
                >
                  第三季度
                </p>
                <p
                  align="left"
                  style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
                >
                  <span style="color: #00FFBC ;font-size: 5px;">●</span>
                  investors Established text text text text text
                </p>
                <p
                  align="left"
                  style="font-size: 18px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #000000;"
                >
                  第四季度
                </p>
                <p
                  align="left"
                  style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
                >
                  <span style="color: #00FFBC ;font-size: 5px;">●</span>
                  investors Exchange system Beta Launch test test test test test
                  test
                </p>
              </div>
            </v-col>
            <v-col cols="3"></v-col>
          </v-row>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  methods: {
    bao2019: function() {
      document.getElementById('2019but').style.background =
        'linear-gradient(270deg, #00FFBC 0%, #29C4CB 100%)'
      document.getElementById('2020but').style.background = '#F7F8FB'
      document.getElementById('2021but').style.background = '#F7F8FB'
      document.getElementById('2019').style.display = 'block'
      document.getElementById('2020').style.display = 'none'
      document.getElementById('2021').style.display = 'none'
      // hidden
    },
    bao2020: function() {
      document.getElementById('2019but').style.background = '#F7F8FB'
      document.getElementById('2020but').style.background =
        'linear-gradient(270deg, #00FFBC 0%, #29C4CB 100%) '
      document.getElementById('2021but').style.background = '#F7F8FB'
      document.getElementById('2019').style.display = 'none'
      document.getElementById('2020').style.display = 'block'
      document.getElementById('2021').style.display = 'none'
    },
    bao2021: function() {
      document.getElementById('2019but').style.background = '#F7F8FB'
      document.getElementById('2020but').style.background = '#F7F8FB'
      document.getElementById('2021but').style.background =
        'linear-gradient(270deg, #00FFBC 0%, #29C4CB 100%)'
      document.getElementById('2019').style.display = 'none'
      document.getElementById('2020').style.display = 'none'
      document.getElementById('2021').style.display = 'block'
    },

    showBtnMore1: function() {
      document.getElementById('btnMore1').style.display = 'block'
      document.getElementById('btn1').style.color = '#FFFFFF'
    },
    hideBtnMore1: function(btnId) {
      document.getElementById('btnMore1').style.display = 'none'
    },
    showBtnMore2: function() {
      document.getElementById('btnMore2').style.display = 'block'
      document.getElementById('btn2').style.color = '#FFFFFF'
    },
    hideBtnMore2: function(btnId) {
      document.getElementById('btnMore2').style.display = 'none'
    },
    showBtnMore3: function() {
      document.getElementById('btnMore3').style.display = 'block'
      document.getElementById('btn3').style.color = '#FFFFFF'
    },
    hideBtnMore3: function(btnId) {
      document.getElementById('btnMore3').style.display = 'none'
    },
  },
}
</script>
