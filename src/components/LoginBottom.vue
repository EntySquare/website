<style>
.container123 {
  position: relative;
  width: 100%;
}
.container123 input {
  width: 100%;
  height: 30px;
  opacity: 0.16;
  border-radius: 24px;
  background: #d8d8d8;
}
.container123 button {
  width: 25%;
  height: 30px;
  position: absolute;
  right: 0;
  background-color: #4c4c4c;
  border-radius: 24px;
  border: none;
  outline: none;
}
</style>

<template>
  <v-container fill-height fluid class="align-start" style="padding: 0px;">
    <v-row>
      <v-col class="col-12 text-center">
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
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>
