<style>
/*.container {*/
/*  position: relative;*/
/*  width: 100%;*/
/*}*/
/*.container input {*/
/*  width: 100%;*/
/*  height: 30px;*/
/*  opacity: 0.16;*/
/*  border-radius: 24px;*/
/*  background: #d8d8d8;*/
/*}*/
/*.container button {*/
/*  width: 25%;*/
/*  height: 30px;*/
/*  position: absolute;*/
/*  right: 0;*/
/*  background-color: #4c4c4c;*/
/*  border-radius: 24px;*/
/*  border: none;*/
/*  outline: none;*/
/*}*/

.btn {
  font-family: STHeiti;
  font-size: 20px;
  background: #ffffff;
  border-radius: 26px;
  text-align: center;
  outline: none;
  box-shadow: 14px 10px 40px 0 rgba(15, 15, 15, 0.1);
  -webkit-box-shadow: 14px 10px 40px 0 rgba(15, 15, 15, 0.1);
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
  border-radius: 175px 0 0 175px;
  align-items: center;
  max-width: 960px;
  box-shadow: -1px 0px 40px 0px #ffffff, -30px 0px 40px 0 rgba(15, 15, 15, 0.1);
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transition: opacity 1s ease 0.3s, transform 1s ease 0.3s;
}

.bubble_right {
  margin-left: 160px;
  width: 100%;
  height: 350px;
  background: #ffffff;
  border-radius: 0 175px 175px 0;
  align-items: center;
  max-width: 960px;
  box-shadow: 1px 0px 40px 0px #ffffff, 30px 0px 40px 0 rgba(15, 15, 15, 0.1);
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transition: opacity 1s ease 0.3s, transform 1s ease 0.3s;
}
</style>

<template>
  <v-container fill-height fluid class="align-start" style="padding: 0px;">
    <v-row class="text-center">
      <v-col cols="12" style="height: 180px;"></v-col>
      <v-col cols="12" style="height: 100px;">
        <div
          style="height: 70px;font-size: 32px;font-family: STHeiti;font-weight: 400;font-weight: bold;color: #000000;line-height: 43px;"
        >
          公开·公平·透明
        </div>
      </v-col>
    </v-row>
    <v-row class="text-center" style="height: 200px">
      <v-col class="col-12">
        <div align="center" style="height: 100px;">
          <p
            class="text--disabled"
            style="height: 45px;font-size: 16px;width: 32%;"
          >
            investors的创新团队拥有顶尖金融机构和领先技术公司的背景，为企业、家族基金、个人用户提供投资和融资的专业平台，旨在为新的，创新的，去中心化的金融市场作出贡献。
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row style="height: 400px;" class="text-center">
      <v-col cols="12">
        <div align="center" style="display: inline-flex; align-items: center">
          <v-btn text rounded class="btn" style="width: 280px;height: 312px;">
            <div align="center">
              <img
                src="../assets/investors_btn1.png"
                style="width: 120px; height:120px;"
              />
              <p
                style="color: black; font-family: STHeiti; text-transform: lowercase; font-size: 20px"
              >
                investors投资
              </p>
              <img
                src="../assets/arrow_green.png"
                style="width:28px; height: 28px"
              />
            </div>
          </v-btn>
          <v-btn
            text
            rounded
            class="btn"
            style="width: 280px;height: 312px; margin-left: 50px"
          >
            <div align="center">
              <img
                src="../assets/investors_btn2.png"
                style="width: 120px; height:120px;"
              />
              <p
                style="color: black; font-family: STHeiti; text-transform: lowercase; font-size: 20px"
              >
                investors理财
              </p>
              <img
                src="../assets/arrow_green.png"
                style="width:28px; height: 28px"
              />
            </div>
          </v-btn>
          <v-btn
            text
            rounded
            class="btn"
            style="width: 280px;height: 312px; margin-left: 50px"
          >
            <div align="center">
              <img
                src="../assets/investors_btn3.png"
                style="width: 120px; height:120px;"
              />
              <p style="color: black; font-family: STHeiti; font-size: 20px">
                企业动态
              </p>
              <img
                src="../assets/arrow_green.png"
                style="width:28px; height: 28px"
              />
            </div>
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row style="height: 120px" class="text-center">
      <v-col class="col-12" style="height: 180px;">
        <div
          style="height: 80px;font-size: 32px;font-family: STHeiti;font-weight: 400;font-weight: bold;color: #000000;line-height: 43px;"
        >
          合规优势
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div>
          <v-row style="height: 400px; align-items: center" class="text-center">
            <v-col cols="3"></v-col>
            <v-col cols="6">
              <v-row class="bubble_left">
                <v-col cols="5">
                  <div>
                    <img
                      src="../assets/bubble1.png"
                      style="width: 50%; height: auto;"
                    />
                  </div>
                </v-col>
                <v-col cols="7">
                  <div class="text-left" style="align-items: center">
                    <p
                      style="color: black; font-family: STHeiti; font-size: 24px; font-weight: bold; align: left"
                    >
                      专业
                    </p>
                    <p
                      class="text--disabled"
                      style="color: black; font-family: STHeiti; font-size: 16px; align: left"
                    >
                      核心团队来自高盛、Facebook、Google、UBS、AIA
                    </p>
                    <p
                      class="text--disabled"
                      style="color: black; font-family: STHeiti; font-size: 16px; align: left"
                    >
                      总交易量超过2,500亿美元，月均交易量百亿美元
                    </p>
                    <p
                      class="text--disabled"
                      style="color: black; font-family: STHeiti; font-size: 16px; align: left"
                    >
                      为全球知名大型机构、家族基金以及个人用户提供机构级服务
                    </p>
                  </div>
                </v-col>
              </v-row>
              <v-col cols="3"></v-col>
            </v-col>
          </v-row>
          <v-row style="height: 400px; align-items: center" class="text-center">
            <v-col cols="3"></v-col>
            <v-col cols="6">
              <v-row class="bubble_right">
                <v-col cols="7">
                  <div class="text-left" style="align-items: center">
                    <p
                      style="color: black; font-family: STHeiti; font-size: 24px; font-weight: bold; align: left"
                    >
                      合规
                    </p>
                    <p
                      class="text--disabled"
                      style="color: black; font-family: STHeiti; font-size: 16px; align: left"
                    >
                      获得美国及加拿大MSB牌照（Money Service Business）
                    </p>
                    <p
                      class="text--disabled"
                      style="color: black; font-family: STHeiti; font-size: 16px; align: left"
                    >
                      拥有从事数字货币、外汇、期货等金融业务的资质
                    </p>
                    <p
                      class="text--disabled"
                      style="color: black; font-family: STHeiti; font-size: 16px; align: left"
                    >
                      实施严格的KYC认证与反洗钱策略
                    </p>
                  </div>
                </v-col>
                <v-col cols="5">
                  <div>
                    <img
                      src="../assets/bubble2.png"
                      style="width: 50%; height: auto; margin-right: 50px"
                    />
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="3"></v-col>
          </v-row>
          <v-row style="height: 400px; align-items: center" class="text-center">
            <v-col cols="3"></v-col>
            <v-col cols="6">
              <v-row class="bubble_left">
                <v-col cols="5">
                  <div>
                    <span style="margin-left: 35%;">
                      <img
                        src="../assets/bubble3.png"
                        style="width: 50%; height: auto;"
                      />
                    </span>
                  </div>
                </v-col>
                <v-col cols="7" class="text-left">
                  <div style="margin-left: 40px; margin-top: 15px">
                    <p
                      style="color: black; font-family: STHeiti; font-size: 24px; font-weight: bold; align: left"
                    >
                      安全
                    </p>
                    <p
                      class="text--disabled"
                      style="color: black; font-family: STHeiti; font-size: 16px; align: left"
                    >
                      与加密资产安全托管商Fireblocks、BitGo达成战略合作
                    </p>
                    <p
                      class="text--disabled"
                      style="color: black; font-family: STHeiti; font-size: 16px; align: left"
                    >
                      采用业内领先的MPC技术，保障账户安全
                    </p>
                    <p
                      class="text--disabled"
                      style="color: black; font-family: STHeiti; font-size: 16px; align: left"
                    >
                      25%的公司预算投入在信息安全体系中，远超行业平均水平
                    </p>
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="3"></v-col>
          </v-row>
          <v-row style="height: 400px; align-items: center" class="text-center">
            <v-col cols="3"></v-col>
            <v-col cols="6">
              <v-row class="bubble_right text-left">
                <v-col cols="7">
                  <div>
                    <p
                      style="color: black; font-family: STHeiti; font-size: 24px; font-weight: bold; align: left"
                    >
                      全球化
                    </p>
                    <p
                      class="text--disabled"
                      style="color: black; font-family: STHeiti; font-size: 16px; align: left"
                    >
                      业务覆盖全球，已为全球超80个国家/地区用户提供全年7*24小时服务
                    </p>
                    <p
                      class="text--disabled"
                      style="color: black; font-family: STHeiti; font-size: 16px; align: left"
                    >
                      在全球超过100个电子化交易平台进行交易
                    </p>
                    <p
                      class="text--disabled"
                      style="color: black; font-family: STHeiti; font-size: 16px; align: left"
                    >
                      总部位于韩国首尔，在英国、温哥华、中国设有分支机构
                    </p>
                  </div>
                </v-col>
                <v-col cols="5">
                  <div>
                    <img
                      src="../assets/bubble4.png"
                      style="width: 50%; height: auto; margin-left: 30%; margin-top: 10%"
                    />
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="3"></v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <div
          style="height: 45px;font-size: 32px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #000000;line-height: 43px;"
        >
          企业动态
        </div>
      </v-col>
    </v-row>

    <v-row>
      <img src="../assets/qydt1.png" style="width:100%;height:100%;" />
    </v-row>
    <v-col class="col-12 text-center">
      <v-col cols="12">
        <!-- <p style="background-image: url(../assets/qydt1.png);">123123</p> -->

        <!-- <div style="background-image: url(../assets/qydt1.png);">22222</div> -->
      </v-col>

      <v-col class="mb-12 text-center">
        <div
          style="height: 45px;font-size: 32px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #000000;line-height: 43px;"
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
                  src="../assets/hezuo_logo1.png"
                  style="width:100%;height:auto;"
              /></v-col>
              <v-col cols="3"
                ><img
                  src="../assets/hezuo_logo2.png"
                  style="width:100%;height:auto;"
              /></v-col>
              <v-col cols="3"
                ><img
                  src="../assets/hezuo_logo1.png"
                  style="width:100%;height:auto;"
              /></v-col>
              <v-col cols="3"
                ><img
                  src="../assets/hezuo_logo2.png"
                  style="width:100%;height:auto;"
              /></v-col>
            </v-row>
            <v-row style="height: 30px;"></v-row>
            <v-row style="height: 150px;">
              <v-col cols="3"
                ><img
                  src="../assets/hezuo_logo2.png"
                  style="width:100%;height:auto;"
              /></v-col>
              <v-col cols="3"
                ><img
                  src="../assets/hezuo_logo1.png"
                  style="width:100%;height:auto;"
              /></v-col>
              <v-col cols="3"
                ><img
                  src="../assets/hezuo_logo2.png"
                  style="width:100%;height:auto;"
              /></v-col>
              <v-col cols="3"
                ><img
                  src="../assets/hezuo_logo1.png"
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
          style="width: 100%;height: 45px;font-size: 32px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;line-height: 45px;"
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
                style="line-height:80px; background: linear-gradient(270deg, #00FFBC 0%, #5B7ADE 100%); height: 6px; width:100%;font-size: 32px;outline: none;"
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
      <v-col cols="12" style="height: 100px;"> </v-col>

      <v-row style="height: 100px; background: black;"> </v-row>

      <v-row style="height: 250px;background: black;">
        <v-col cols="3" style="background: black;"></v-col>
        <v-col cols="5" style="background: black;">
          <table>
            <tr>
              <th
                align="left"
                valign="top"
                style="width: 178px;height: 45px;font-size: 18px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #FFFFFF;line-height: 16px;"
              >
                公司
              </th>
              <th
                align="left"
                valign="top"
                style="width: 178px;height: 45px;font-size: 18px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #FFFFFF;line-height: 16px;"
              >
                产品
              </th>
              <th
                align="left"
                valign="top"
                style="width: 178px;height: 45px;font-size: 18px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #FFFFFF;line-height: 16px;"
              >
                帮助
              </th>
            </tr>
            <tr>
              <td
                align="left"
                valign="top"
                style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;"
              >
                关于我们
              </td>
              <td
                align="left"
                valign="top"
                style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;"
              >
                APP 钱包
              </td>
              <td
                align="left"
                valign="top"
                style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;"
              >
                帮助中心
              </td>
            </tr>
            <tr>
              <td
                align="left"
                valign="top"
                style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;"
              >
                安全与合规
              </td>
              <td
                align="left"
                valign="top"
                style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;"
              >
                HSF代币
              </td>
              <td
                align="left"
                valign="top"
                style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;"
              >
                建议与反馈
              </td>
            </tr>
            <tr>
              <td
                align="left"
                valign="top"
                style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;"
              >
                联系我们
              </td>
              <td
                align="left"
                valign="top"
                style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;"
              >
                理财
              </td>
              <td
                align="left"
                valign="top"
                style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;"
              >
                提交工单
              </td>
            </tr>
            <tr>
              <td
                align="left"
                valign="top"
                style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;"
              >
                白皮书
              </td>
              <td
                align="left"
                valign="top"
                style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;"
              >
                社区
              </td>
              <td></td>
            </tr>
            <tr>
              <td
                align="left"
                valign="top"
                style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;"
              >
                企业动态
              </td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </v-col>
        <v-col cols="4" style="background: black;">
          <v-row>
            <v-col cols="6"
              ><img
                src="../assets/z1.png"
                style="width:126px;height:68px;float:left;"
            /></v-col>
          </v-row>
          <v-row>
            <v-col
              cols="6"
              style="padding: 15px 15px 15px 15px;width: 221px;font-size: 14px;font-weight: 400;color: #FFFFFF;line-height: 0px;text-align: left;"
            >
              联系方式：services@investors.com</v-col
            >
          </v-row>

          <v-row>
            <v-col cols="5">
              <div class="container123" style="padding: 0px;">
                <input type="text" placeholder="  nane@email.com" />
                <button style="color: #D8D8D8;font-size: 14px;">注册</button>
              </div>
            </v-col>
            <v-col cols="5" style="background: black;"></v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row style="height: 120px;background: black;">
        <v-col cols="3" style="background: black;"></v-col>
        <v-col cols="5" style="background: black;">
          <v-row style="height: 32px;">
            <v-col cols="1"
              ><img src="../assets/v1.png" style="width:32px;height:32px;"
            /></v-col>
            <v-col cols="1"
              ><img src="../assets/v2.png" style="width:32px;height:32px;"
            /></v-col>
            <v-col cols="1"
              ><img src="../assets/v3.png" style="width:32px;height:32px;"
            /></v-col>
            <v-col cols="1"
              ><img src="../assets/v4.png" style="width:32px;height:32px;"
            /></v-col>
            <v-col cols="1"
              ><img src="../assets/v5.png" style="width:32px;height:32px;"
            /></v-col>
            <v-col cols="1"></v-col>
            <v-col cols="1"></v-col>

            <v-col
              cols="2"
              style="width: 24px;height: 32px;font-size: 12px;text-align:center;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 31px;"
            >
              <img src="../assets/c1.png" style="width:10px;height:10px;" />
              韩国
            </v-col>
            <v-col cols="1"></v-col>
            <v-col cols="1"></v-col>
            <v-col cols="1"></v-col>
          </v-row>
        </v-col>
        <v-col cols="4">
          <v-row>
            <v-col cols="2"
              ><img
                src="../assets/k1.png"
                style="width:133px;height:32px;float:left;"
            /></v-col>
            <v-col cols="1"></v-col>
            <v-col cols="2"
              ><img
                src="../assets/k2.png"
                style="width:133px;height:32px;float:left;"
            /></v-col>
            <v-col cols="2"></v-col>
            <v-col cols="3"></v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row style="background: black;">
        <v-col cols="3" style="background: black;"> </v-col>
        <v-col
          cols="5"
          style="background: black;text-align: left;color: #808080;font-size: 12px;"
        >
          © 2021 Investors All rights reserved
        </v-col>
        <v-col
          cols="4"
          style="background: black;text-align: left;color: #808080;font-size: 12px;"
        >
          服务协议 ｜ 隐私条款 ｜ 免责声明
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  methods: {
    bao2019: function() {
      document.getElementById('2019but').style.background =
        'linear-gradient(270deg, #00FFBC 0%, #5B7ADE 100%) '
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
        'linear-gradient(270deg, #00FFBC 0%, #5B7ADE 100%) '
      document.getElementById('2021but').style.background = '#F7F8FB'
      document.getElementById('2019').style.display = 'none'
      document.getElementById('2020').style.display = 'block'
      document.getElementById('2021').style.display = 'none'
    },
    bao2021: function() {
      document.getElementById('2019but').style.background = '#F7F8FB'
      document.getElementById('2020but').style.background = '#F7F8FB'
      document.getElementById('2021but').style.background =
        'linear-gradient(270deg, #00FFBC 0%, #5B7ADE 100%) '
      document.getElementById('2019').style.display = 'none'
      document.getElementById('2020').style.display = 'none'
      document.getElementById('2021').style.display = 'block'
    },
  },
}
</script>
