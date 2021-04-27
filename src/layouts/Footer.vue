<template>
  <div style="width:100%; height: 712px; background: black">
    <v-row style="height: 150px; background: black;"></v-row>
    <v-row style="height: 350px;background: black;">
      <v-col cols="3" style="background: black;"></v-col>
      <v-col cols="5" style="background: black;">
        <table>
          <tr>
            <th
              align="left"
              valign="top"
              style="width: 178px;height: 60px;font-size: 18px; font-weight: 600;color: #FFFFFF;line-height: 16px;"
            >
              公司
            </th>
            <th
              align="left"
              valign="top"
              style="width: 178px;height: 60px;font-size: 18px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #FFFFFF;line-height: 16px;"
            >
              产品
            </th>
            <th
              align="left"
              valign="top"
              style="width: 178px;height: 60px;font-size: 18px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #FFFFFF;line-height: 16px;"
            >
              帮助
            </th>
          </tr>
          <tr>
            <td>
              <router-link to="/company/about">
                <div
                  style="width: 158px;height: 44px;font-size: 14px; font-weight: 400;color: #FFFFFF;line-height: 14px;"
                >
                  关于我们
                </div>
              </router-link>
            </td>
            <td>
              <router-link to="/investMain">
                <div
                  style="width: 158px;height: 44px;font-size: 14px; font-weight: 400;color: #FFFFFF;line-height: 14px;"
                >
                  投资
                </div>
              </router-link>
            </td>
            <td>
              <div
                style="width: 158px;height: 44px;font-size: 14px; font-weight: 400;color: #FFFFFF;line-height: 14px;"
              >
                帮助中心
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <router-link to="/Community">
                <div
                  style="width: 158px;height: 44px;font-size: 14px; font-weight: 400;color: #FFFFFF;line-height: 14px;"
                >
                  团队与合作
                </div>
              </router-link>
            </td>
            <td>
              <router-link to="/financial">
                <div
                  style="width: 158px;height: 44px;font-size: 14px; font-weight: 400;color: #FFFFFF;line-height: 14px;"
                >
                  理财
                </div>
              </router-link>
            </td>
            <td>
              <div
                style="width: 158px;height: 44px;font-size: 14px; font-weight: 400;color: #FFFFFF;line-height: 14px;"
              >
                建议与反馈
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <router-link to="/JoinCommunity">
                <div
                  style="width: 158px;height: 44px;font-size: 14px; font-weight: 400;color: #FFFFFF;line-height: 14px;"
                >
                  联系我们
                </div>
              </router-link>
            </td>
            <td>
              <div
                style="width: 158px;height: 44px;font-size: 14px; font-weight: 400;color: #FFFFFF;line-height: 14px;"
              >
                HSF代币
              </div>
            </td>
            <td>
              <div
                style="width: 158px;height: 44px;font-size: 14px; font-weight: 400;color: #FFFFFF;line-height: 14px;"
              >
                提交工单
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.hillstonetoken.com/">
                <div
                  style="width: 158px;height: 44px;font-size: 14px; font-weight: 400;color: #FFFFFF;line-height: 14px;"
                >
                  白皮书
                </div>
              </a>
            </td>
            <td>
              <div
                style="width: 158px;height: 44px;font-size: 14px; font-weight: 400;color: #FFFFFF;line-height: 14px;"
              >
                社区
              </div>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <router-link to="/EnterpriseNews">
                <div
                  style="width: 158px;height: 44px;font-size: 14px; font-weight: 400;color: #FFFFFF;line-height: 14px;"
                >
                  企业动态
                </div>
              </router-link>
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
              src="https://investors.oss-cn-beijing.aliyuncs.com/assets/z1.png"
              style="width:126px;height:68px;float:left;"
          /></v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <div
              class="flex"
              style="width: 221px; font-size: 14px; font-weight: 400; color: #FFFFFF; white-space: nowrap"
            >
              联系方式: services@investors.com
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="5">
            <div class="d-inline-flex">
              <v-text-field
                label="nane@email.com"
                rounded
                dense
                solo
                background-color="#D8D8D8"
                color="#666666"
                style="padding: 0; opacity: 0.16; border-radius: 24px; width: 300px"
              >
              </v-text-field>
              <router-link to="/login">
                <v-btn
                  style="color: #FFFFFF; font-size: 14px; width: 112px; height: 38px; background-color: #4c4c4c;
                 border-radius: 24px; position: absolute; margin-left: -112px"
                  >注册</v-btn
                >
              </router-link>
            </div>
          </v-col>
          <v-col cols="5" style="background: black;"></v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row style="height: 93px;background: black;">
      <v-col cols="3" style="background: black;"></v-col>
      <v-col cols="5" style="background: black;">
        <v-row>
          <v-col cols="1"
            ><img
              src="https://investors.oss-cn-beijing.aliyuncs.com/assets/v1.png"
              style="width:36px;height:36px;"
          /></v-col>
          <v-col cols="1"
            ><img
              src="https://investors.oss-cn-beijing.aliyuncs.com/assets/v2.png"
              style="width:36px;height:36px;"
          /></v-col>
          <v-col cols="1"
            ><img
              src="https://investors.oss-cn-beijing.aliyuncs.com/assets/v3.png"
              style="width:36px;height:36px;"
          /></v-col>
          <v-col cols="1"
            ><img
              src="https://investors.oss-cn-beijing.aliyuncs.com/assets/v4.png"
              style="width:36px;height:36px;"
          /></v-col>
          <v-col cols="1"
            ><img
              src="https://investors.oss-cn-beijing.aliyuncs.com/assets/v5.png"
              style="width:36px;height:36px;"
          /></v-col>
          <v-col cols="2">
            <div class="d-inline-flex" style="margin-top: 10px">
              <div style="width:16px;height:16px;">
                <v-img
                  src="https://investors.oss-cn-beijing.aliyuncs.com/assets/c1.png"
                >
                </v-img>
              </div>
              <span
                style="height: 12px; margin-left: 10px; font-size: 12px; font-weight: 400;color: #FFFFFF;"
              >
                韩国
              </span>
            </div>
          </v-col>
          <v-col cols="1"></v-col>
          <v-col cols="1"></v-col>
          <v-col cols="1"></v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <div class="d-inline-flex" style="width:142px; height:40px;">
          <v-img
            src="https://investors.oss-cn-beijing.aliyuncs.com/assets/k1.png"
          ></v-img>
        </div>
        <div
          class="d-inline-flex"
          style="width:142px;height:40px; margin-left: 10px"
        >
          <v-img
            src="https://investors.oss-cn-beijing.aliyuncs.com/assets/k2.png"
          ></v-img>
        </div>
      </v-col>
    </v-row>
    <v-row style="height: 61px; background: black;"> </v-row>
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
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped></style>
