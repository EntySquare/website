<template>
  <v-container fluid class="align-start" style="padding: 0px;">
    <v-row class="text-center">
      <v-col cols="12" style="height: 120px;"></v-col>
      <v-col cols="12">
        <div
          class="text-center"
          style="font-size: 32px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #000000;line-height: 43px;"
        >
          使命宣言
        </div>
      </v-col>
      <v-col class="col-12" style="height: 20px;"></v-col>
      <v-col cols="6" offset="3">
        <div align="center">
          <div
            class="text--disabled"
            style="font-size: 24px;
                  font-family: Nunito-Regular, Nunito;
                  font-weight: 400;
                  color: #808080;
                  line-height: 32px;"
          >
            <p>
              为新的，创新的，去中心化的金融市场做出贡献，应用于加密金融生态
            </p>
            帮助全球用户更高效、灵活的融入智能加密金融世界
          </div>
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
            style="width: 280px;height: 312px;box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.04);"
          >
            <div align="center">
              <img
                src="https://investors.oss-cn-beijing.aliyuncs.com/assets/dwjdlfowhlafwekfjhwajlcsadljh01.png"
                style="width: 120px; height:120px;"
              />
              <p
                style="color: black; font-family: Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif; text-transform: lowercase; margin-top: 20px; font-size: 20px"
              >
                安全
              </p>
              <div
                style="font-size: 12px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #808080;
line-height: 17px;"
              >
                全面采用冷钱包100%保证用户
                <div style="height: 2px;"></div>
                数字资产的安全
              </div>
              <div
                class="text-center"
                id="btnMore1"
                style="display: none; margin-top: 25px"
              >
                <div
                  style="display: inline-flex; margin-left: 3px; margin-bottom: 4px; vertical-align: middle"
                >
                  <img
                    src="https://investors.oss-cn-beijing.aliyuncs.com/assets/dwjdlfowhlafwekfjhwajlcsadljh01.png"
                    style="width:14px; height: 14px;"
                  />
                </div>
              </div>
            </div>
          </v-btn>

          <router-link to="#">
            <v-btn
              id="btn2"
              text
              rounded
              class="btn"
              style="width: 280px;height: 312px; margin-left: 50px;box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.04);"
            >
              <div align="center">
                <img
                  src="https://investors.oss-cn-beijing.aliyuncs.com/assets/dwjdlfowhlafwekfjhwajlcsadljh02.png"
                  style="width: 120px; height:120px;"
                />
                <p
                  style="color: black; font-family: Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif; text-transform: lowercase; margin-top: 20px; font-size: 20px"
                >
                  经验
                </p>
                <div
                  style="font-size: 12px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #808080;
line-height: 17px;"
                >
                  数以百万计的TPS和分佈式架构
                  <div style="height: 2px;"></div>
                  为您带来卓越的交易体验
                </div>
              </div>
            </v-btn>
          </router-link>
          <v-btn
            id="btn3"
            text
            rounded
            class="btn"
            style="width: 280px;height: 312px; margin-left: 50px;box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.04);"
          >
            <div align="center">
              <img
                src="https://investors.oss-cn-beijing.aliyuncs.com/assets/dwjdlfowhlafwekfjhwajlcsadljh03.png"
                style="width: 120px; height:120px;"
              />
              <p
                style="color: black; font-family: Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif; text-transform: lowercase; margin-top: 20px; font-size: 20px"
              >
                创新
              </p>
              <div
                style="font-size: 12px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #808080;
line-height: 17px;"
              >
                通过强大的全球的合作伙伴网络
                <div style="height: 2px;"></div>
                提供充足流动性
              </div>
              <div
                class="text-center"
                id="btnMore3"
                style="display: none; margin-top: 25px"
              >
                <div
                  style="display: inline-flex; margin-left: 3px; margin-bottom: 4px; vertical-align: middle"
                >
                  <img
                    src="https://investors.oss-cn-beijing.aliyuncs.com/assets/arrow_green.png"
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
        <v-col cols="6" offset="3">
          <v-row>
            <v-col cols="4">
              <div
                style="font-size: 48px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #00CFAC;line-height: 66px;"
              >
                180+
              </div>
              <div style="height: 20px"></div>
              <div
                style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;line-height: 22px;"
              >
                覆盖国家
              </div>
            </v-col>
            <v-col cols="3">
              <div
                style="font-size: 48px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #00CFAC;line-height: 66px;"
              >
                $6.0亿+
              </div>
              <div style="height: 20px"></div>
              <div
                style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;line-height: 22px;"
              >
                资产管理
              </div>
            </v-col>
            <v-col cols="5">
              <div
                style="font-size: 48px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #00CFAC;line-height: 66px;"
              >
                3,800,000+
              </div>
              <div style="height: 20px"></div>
              <div
                style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;line-height: 22px;"
              >
                服务客户
              </div>
            </v-col>
          </v-row>
        </v-col>
        <div style="height: 100px"></div>
        <v-col cols="10" offset="1">
          <v-img
            src="https://investors.oss-cn-beijing.aliyuncs.com/assets/cklsdjcslkfwl.png"
            class="my-3"
            contain
            width="100%"
          >
            <v-col cols="6" offset="6" style="height: 40%"></v-col>
            <v-col cols="6" offset="6" style="height: 60%">
              <div
                style="font-size: 32px;
font-family: Nunito-SemiBold, Nunito;
font-weight: 600;
color: #FFFFFF;
line-height: 43px;"
                align="left"
              >
                公司介绍
              </div>
              <div style="height: 40px"></div>
              <div style="height: 20px"></div>
              <div
                align="left"
                style="
width: 90%;
font-size: 18px;
font-family: Nunito-Regular, Nunito;
font-weight: 400;
color: #FFFFFF;
line-height: 24px;"
              >
                <div style="height: 20px;width: 30px;float:left"></div>
                investors成立于2021年，总部位于韩国首尔，业内领先的全球化加密金融智能服务提供商，企业创始人均来自高盛、Facebook、Google、UBS、AIA等世界著名公司的精英。investors业务覆盖全球，在全球超过100个电子化交易平台进行交易，在英国、中国、温哥华均设有分支机构，为500多家知名大型机构提供全年24小时全天候服务。
              </div>
              <div style="height: 20px"></div>
              <div
                align="left"
                style="
width: 90%;
font-size: 18px;
font-family: Nunito-Regular, Nunito;
font-weight: 400;
color: #FFFFFF;
line-height: 24px;"
              >
                <div style="height: 20px;width: 30px;float:left"></div>
                investors旨在为新的，创新的，去中心化的金融市场做出贡献，应用于加密金融生态，帮助全球用户更高效、灵活的融入智能加密金融世界，并持续为其创造长期价值。在2021年3月完成
                2,800万美元融资，由全球尖端机构Hillstone领投，参与方有Polychain、Dragonfly、Fenbushi、Coinbase等著名投资机构。
              </div>
            </v-col>
          </v-img>
        </v-col>
      </v-col>
      <div style="height: 200px"></div>
      <v-col class="col-12 text-center">
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
            路线图
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
                  2020
                </button>
              </v-col>
              <v-col cols="4">
                <button
                  id="2020but"
                  @click="bao2020()"
                  type="button"
                  style="line-height:80px; background: #F7F8FB; height: 6px;font-size: 32px; width:100%;outline: none;"
                >
                  2021
                </button>
              </v-col>
              <v-col cols="4">
                <button
                  id="2021but"
                  @click="bao2021()"
                  type="button"
                  style="line-height:80px; background: #F7F8FB; height: 6px;font-size: 32px; width:100%;outline: none;"
                >
                  2022
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
                  2020
                </p>
                <p
                  align="left"
                  style="font-size: 18px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #000000;"
                >
                  Q1~Q2
                </p>
                <p
                  align="left"
                  style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
                >
                  <span style="color: #00FFBC ;font-size: 5px;">●</span>
                  Hillstone Finance 项目⽴项
                </p>
                <p
                  align="left"
                  style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
                >
                  <span style="color: #00FFBC ;font-size: 5px;">●</span>
                  IAP protocol 设计架构和共识
                </p>
                <p
                  align="left"
                  style="font-size: 18px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #000000;"
                >
                  Q3
                </p>
                <p
                  align="left"
                  style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
                >
                  <span style="color: #00FFBC ;font-size: 5px;">●</span>
                  IAP 合约开发完成，进⼊测试完善阶段
                </p>
                <p
                  align="left"
                  style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
                >
                  <span style="color: #00FFBC ;font-size: 5px;">●</span>
                  项目正式命名Investors、举办品牌发布会
                </p>

                <p
                  align="left"
                  style="font-size: 18px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #000000;"
                >
                  Q4
                </p>
                <p
                  align="left"
                  style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
                >
                  <span style="color: #00FFBC ;font-size: 5px;">●</span>
                  发布 Hillstone Finance ⽩⽪书
                </p>
                <p
                  align="left"
                  style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
                >
                  <span style="color: #00FFBC ;font-size: 5px;">●</span>
                  启动Hillstone Finance 合作伙伴计划
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
                  2021
                </p>
                <p
                  align="left"
                  style="font-size: 18px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #000000;"
                >
                  Q1
                </p>
                <p
                  align="left"
                  style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
                >
                  <span style="color: #00FFBC ;font-size: 5px;">●</span>
                  Investors APP/Web 客户端进⼊开发阶段
                </p>
                <p
                  align="left"
                  style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
                >
                  <span style="color: #00FFBC ;font-size: 5px;">●</span>
                  全球化布局深⼊在⾹港、纽约设⽴分⽀机构
                </p>
                <p
                  align="left"
                  style="font-size: 18px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #000000;"
                >
                  Q2
                </p>
                <p
                  align="left"
                  style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
                >
                  <span style="color: #00FFBC ;font-size: 5px;">●</span>
                  Investors APP/Web 客户端全⾯上线
                </p>
                <p
                  align="left"
                  style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
                >
                  <span style="color: #00FFBC ;font-size: 5px;">●</span>
                  HSF 代币上市交易所，开放市场交易
                </p>

                <p
                  align="left"
                  style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
                >
                  <span style="color: #00FFBC ;font-size: 5px;">●</span>
                  开始向全球⾼净值客户提供专业⾦融服务
                </p>
                <p
                  align="left"
                  style="font-size: 18px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #000000;"
                >
                  Q3~Q4
                </p>
                <p
                  align="left"
                  style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
                >
                  <span style="color: #00FFBC ;font-size: 5px;">●</span>
                  扩⼤HillStone Finance 战略投资机构合作伙伴
                </p>
                <p
                  align="left"
                  style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
                >
                  <span style="color: #00FFBC ;font-size: 5px;">●</span>
                  开放区块链项目基于HSF代币募资合约
                </p>
                <p
                  align="left"
                  style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
                >
                  <span style="color: #00FFBC ;font-size: 5px;">●</span>
                  开放项目社群，让投资者与项目⽅零距离接触
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
                  2022
                </p>
                <p
                  align="left"
                  style="font-size: 18px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #000000;"
                >
                  Q1~Q2
                </p>
                <p
                  align="left"
                  style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
                >
                  <span style="color: #00FFBC ;font-size: 5px;">●</span>
                  开放多元化、多币种投资组合
                </p>
                <p
                  align="left"
                  style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
                >
                  <span style="color: #00FFBC ;font-size: 5px;">●</span>
                  为有资⾦需求企业提供最便捷的融资⼊⼝
                </p>
                <p
                  align="left"
                  style="font-size: 18px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #000000;"
                >
                  Q3~Q4
                </p>
                <p
                  align="left"
                  style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
                >
                  <span style="color: #00FFBC ;font-size: 5px;">●</span>
                  跻⾝全球DeFi去中⼼化头部⾦融理财平台
                </p>
                <p
                  align="left"
                  style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
                >
                  <span style="color: #00FFBC ;font-size: 5px;">●</span>
                  完成平台化、产品化、规模化全⾯战略升级
                </p>
              </div>
            </v-col>
            <v-col cols="3"></v-col>
          </v-row>
        </v-col>
        <div style="height: 120px"></div>
        <div
          style="height: 45px;
font-size: 32px;
font-family: Nunito-SemiBold, Nunito;
font-weight: 600;
color: #000000;
line-height: 43px;"
        >
          我们的办事处
        </div>
        <div style="height: 100px"></div>
        <v-col cols="6" offset="3" style="">
          <v-row>
            <v-col cols="2" style="">
              <div style="height: 20px"></div>
              <div style="height: 30%;">
                <div
                  style="font-size: 48px;
font-family: Nunito-SemiBold, Nunito;
font-weight: 600;
color: #00CFAC;
line-height: 66px;"
                >
                  400+
                </div>
                <div
                  style="font-size: 16px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #000000;
line-height: 22px;"
                >
                  团队成员
                </div>
              </div>
              <div style="height: 10px"></div>
              <div style="height: 30%;">
                <div
                  style="font-size: 48px;
font-family: Nunito-SemiBold, Nunito;
font-weight: 600;
color: #00CFAC;
line-height: 66px;"
                >
                  40+
                </div>
                <div
                  style="font-size: 16px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #000000;
line-height: 22px;"
                >
                  国籍
                </div>
              </div>
              <div style="height: 10px"></div>
              <div style="height: 30%;">
                <div
                  style="font-size: 48px;
font-family: Nunito-SemiBold, Nunito;
font-weight: 600;
color: #00CFAC;
line-height: 66px;"
                >
                  3
                </div>
                <div
                  style="font-size: 16px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #000000;
line-height: 22px;"
                >
                  办事处
                </div>
              </div>
            </v-col>
            <v-col cols="10">
              <v-img
                src="https://investors.oss-cn-beijing.aliyuncs.com/assets/ditu001.png"
                class="my-3"
                contain
                width="100%"
              >
              </v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-col>
    </v-row>
    <div style="height: 100px"></div>
    <v-col
      cols="6"
      class="text-center"
      offset="3"
      style="height: 300px;width: 100%;background: #FFFFFF;border-radius: 36px;box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.04);"
    >
      <div style="height: 20px"></div>
      <div
        style="font-size: 32px;
font-family: PingFang-SC-Semibold, PingFang-SC;
font-weight: 600;
color: #000000;
line-height: 40px;"
      >
        让我们共建未来
      </div>
      <div style="height: 20px"></div>
      <div
        style="font-size: 12px;
font-family: PingFang-SC-Semibold, PingFang-SC;
font-weight: 600;
color: #808080;
line-height: 17px;"
      >
        借助investors平台，将您的财务自由带入全新高度。
      </div>
      <div style="height: 30px"></div>
      <div
        style="width: 60%;height: 50px;margin: 0 auto;background: #d8d8d8;border-radius: 24px;"
      >
        <input
          style="outline:medium;height: 100%;width: 92%;color: #0C0C0C"
          name="t2"
          value=""
          placeholder="输入您的邮箱号订阅我们的信息"
        />
        <v-btn
          style="width: 136px;float:right;
    height: 50px;
    background: linear-gradient(204deg, #00FFBC 0%, #5B7ADE 100%);;
    border-radius: 24px;color: #FFFFFF;margin-top: -50px"
        >
          提交
        </v-btn>
      </div>
    </v-col>

    <div style="height: 200px"></div>
  </v-container>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'HelloWorld',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
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

<style lang="scss" scoped>
.swiper-slide {
  width: 70%;
  background: #f00;
}
.swiper-slide:nth-child(2n) {
  width: 70%;
}
.swiper-slide:nth-child(3n) {
  width: 70%;
}
</style>
