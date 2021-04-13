<template>
  <v-container>
    <v-row>
      <v-col cols="6" offset="3">
        <div class="d-inline-flex" style="padding-top: 32px;">
          <div>
            <router-link to="/centerTab">
              <v-img
                width="32px"
                height="32px"
                src="https://investors.oss-cn-beijing.aliyuncs.com/assets/userCenter/arrow_green_left.png"
              ></v-img>
            </router-link>
          </div>
          <div style="width: 16px"></div>
          <div
            style="width: 72px; height: 24px;
            font-size: 18px; font-weight: 600;
            color: #000000;line-height: 24px; margin-top: 5px"
          >
            实名认证
          </div>
        </div>
        <div
          class="d-inline-flex mx-auto"
          style="height: auto; min-height: 100vh; padding-top: 36px; padding-bottom: 120px"
        >
          <v-card
            v-show="kycFlag1"
            height="1245px"
            width="514px"
            style="box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.04); border-radius: 24px;"
          >
            <div style="padding: 32px">
              <div
                class="d-inline-flex justify-space-between"
                style="width: 100%;"
              >
                <div style="font-size: 18px; font-weight: 600; color: #000000">
                  KYC Lv2
                </div>
                <div
                  class="text-right"
                  style="font-size: 16px; font-weight: 600; color: #00CFAC;"
                >
                  未认证
                </div>
              </div>
              <v-card-subtitle
                style="padding-left: 0; font-size: 12px; white-space: nowrap;
                         font-weight: 500; color: #F69D2B;"
              >
                每日提币限额为10000USDT，通过身份验证后提现将无限制
              </v-card-subtitle>
              <div>
                <v-select
                  v-model="areaName"
                  label="国家"
                  hint="如中国"
                  :items="areaNames"
                  single-line
                  filled
                  dense
                  rounded
                ></v-select>
              </div>
              <div>
                <v-select
                  v-model="certificate"
                  label="证件"
                  hint="如身份证"
                  :items="certificates"
                  single-line
                  filled
                  dense
                  rounded
                ></v-select>
              </div>
              <div>
                <v-text-field
                  autocomplete="off"
                  v-model="userName"
                  label="请输入名字"
                  single-line
                  filled
                  dense
                  rounded
                ></v-text-field>
              </div>
              <div>
                <v-text-field
                  autocomplete="off"
                  v-text="certifyNum"
                  label="证件号"
                  single-line
                  filled
                  dense
                  rounded
                ></v-text-field>
              </div>
              <div>
                <v-select
                  autocomplete="off"
                  v-model="address"
                  label="请输入居住地址"
                  single-line
                  filled
                  dense
                  rounded
                ></v-select>
              </div>
              <div class="d-inline-flex">
                <v-select
                  autocomplete="off"
                  v-model="address"
                  label="出生年份"
                  single-line
                  filled
                  dense
                  rounded
                ></v-select>
                <div style="width: 9px"></div>
                <v-select
                  autocomplete="off"
                  v-model="address"
                  label="月份"
                  single-line
                  filled
                  dense
                  rounded
                ></v-select>
                <div style="width: 9px"></div>
                <v-select
                  autocomplete="off"
                  v-model="address"
                  label="日期"
                  single-line
                  filled
                  dense
                  rounded
                ></v-select>
              </div>
              <div style="height: 40px"></div>
              <div class="text-center">
                <v-card
                  class="mx-auto"
                  width="270px"
                  height="160px"
                  style="box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.04); border-radius: 24px;"
                >
                  <div style="padding-top: 30px">
                    <v-img
                      class="mx-auto"
                      width="144px"
                      height="100px"
                      src="https://investors.oss-cn-beijing.aliyuncs.com/assets/userCenter/certificate_positive.png"
                    ></v-img>
                  </div>
                </v-card>
                <div
                  class="text-center"
                  style="width: auto; height: 20px; font-size: 14px; font-weight: 400;
                  color: #B2B2B2; line-height: 20px; padding-top: 16px"
                >
                  上传正面照
                </div>
              </div>
              <div style="height: 60px"></div>
              <div class="text-center">
                <v-card
                  class="mx-auto"
                  width="270px"
                  height="160px"
                  style="box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.04); border-radius: 24px;"
                >
                  <div style="padding-top: 30px">
                    <v-img
                      class="mx-auto"
                      width="144px"
                      height="100px"
                      src="https://investors.oss-cn-beijing.aliyuncs.com/assets/userCenter/certificate_negative.png"
                    ></v-img>
                  </div>
                </v-card>
                <div
                  class="text-center"
                  style="width: auto; height: 20px; font-size: 14px; font-weight: 400;
                  color: #B2B2B2; line-height: 20px; padding-top: 16px"
                >
                  上传反面照
                </div>
              </div>
              <div style="height: 52px"></div>
              <div class="d-inline-flex" style="margin-left: 50px">
                <div>
                  <v-img
                    width="14px"
                    height="14px"
                    src="https://investors.oss-cn-beijing.aliyuncs.com/assets/userCenter/circle_large.png"
                  ></v-img>
                </div>
                <div style="width: 2px"></div>
                <div
                  style="font-size: 12px; font-weight: 400;
                  color: #808080; line-height: 17px;"
                >
                  本人声明所有提交信息均为真实信息，绝无盗取他人信息行为。
                </div>
              </div>
              <div style="height: 28px"></div>
              <v-btn
                text
                rounded
                style="width: 450px; height: 56px;
                background: linear-gradient(90deg, #F1F1F2 0%, #B2B2B2 100%);
                border-radius: 28px; color: #FFFFFF"
                >提交</v-btn
              >
            </div>
          </v-card>
          <v-card
            v-show="kycFlag2"
            height="714px"
            width="514px"
            style="box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.04); border-radius: 24px;"
          >
            <div style="padding: 32px">
              <div
                class="d-inline-flex justify-space-between"
                style="width: 100%;"
              >
                <div style="font-size: 18px; font-weight: 600; color: #000000">
                  KYC Lv2
                </div>
                <div
                  class="text-right"
                  style="font-size: 16px; font-weight: 600; color: #00CFAC;"
                >
                  审核成功
                </div>
              </div>
              <v-card-subtitle
                style="padding-left: 0; font-size: 12px; white-space: nowrap;
                         font-weight: 500; color: #F69D2B;"
              >
                每日提币限额为10000USDT，通过身份验证后提现将无限制
              </v-card-subtitle>
              <div>
                <v-select
                  v-model="areaName"
                  label="国家"
                  hint="如中国"
                  :items="areaNames"
                  single-line
                  filled
                  dense
                  rounded
                ></v-select>
              </div>
              <div>
                <v-select
                  v-model="certificate"
                  label="证件"
                  hint="如身份证"
                  :items="certificates"
                  single-line
                  filled
                  dense
                  rounded
                ></v-select>
              </div>
              <div>
                <v-text-field
                  v-model="realName"
                  readonly
                  single-line
                  filled
                  dense
                  rounded
                ></v-text-field>
              </div>
              <div>
                <v-text-field
                  v-model="certifyNum"
                  readonly
                  single-line
                  filled
                  dense
                  rounded
                ></v-text-field>
              </div>
              <div>
                <v-text-field
                  v-model="address"
                  readonly
                  single-line
                  filled
                  dense
                  rounded
                ></v-text-field>
              </div>
              <div class="d-inline-flex">
                <v-text-field
                  v-model="birthYear"
                  readonly
                  single-line
                  filled
                  dense
                  rounded
                ></v-text-field>
                <div style="width: 9px"></div>
                <v-text-field
                  v-model="birthMonth"
                  readonly
                  single-line
                  filled
                  dense
                  rounded
                ></v-text-field>
                <div style="width: 9px"></div>
                <v-text-field
                  v-model="birthDay"
                  readonly
                  single-line
                  filled
                  dense
                  rounded
                ></v-text-field>
              </div>
              <div style="height: 60px"></div>
              <v-btn
                text
                rounded
                style="width: 450px; height: 56px;
                background: linear-gradient(90deg, #F1F1F2 0%, #B2B2B2 100%);
                border-radius: 28px; color: #FFFFFF"
                >已认证</v-btn
              >
            </div>
          </v-card>
          <div style="width: 32px"></div>
          <v-card
            height="217px"
            width="414px"
            class="mx-auto"
            style="box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.04); border-radius: 24px;"
          >
            <div
              class="d-inline-flex"
              style="padding-left: 32px; padding-top: 36px"
            >
              <div>
                <v-img
                  width="10px"
                  height="10px"
                  src="https://investors.oss-cn-beijing.aliyuncs.com/assets/userCenter/circle_small.png"
                  style="margin-top: 5px"
                ></v-img>
              </div>
              <div style="width: 6px"></div>
              <div
                style="width: 343px; height: 60px; font-size: 14px; font-weight: 400; color: #272727; line-height: 20px;"
              >
                确保正确的国家/地区、身份证/护照号码、姓名、出生日期和地址信息。提交信息均为真实信息，绝无盗取他人信息行为。
              </div>
            </div>
            <div style="height: 72px"></div>
            <div
              class="d-inline-flex"
              style="padding-left: 32px; padding-top: 36px"
            >
              <div>
                <v-img
                  width="10px"
                  height="10px"
                  src="https://investors.oss-cn-beijing.aliyuncs.com/assets/userCenter/circle_small.png"
                  style="margin-top: 5px"
                ></v-img>
              </div>
              <div style="width: 6px"></div>
              <div
                style="width: 343px; height: 60px; font-size: 14px; font-weight: 400; color: #272727; line-height: 20px;"
              >
                证件信息需清晰可见，不可修改或遮挡。图片格式支持:
                jpg、jpeg、png、bmp、gif
                、JPG、JPEG、PNG、BMP、GIF，图片大小不可超过20M。
              </div>
            </div>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'RealName',
  data() {
    return {
      areaName: '韩国',
      areaNames: ['中国', '韩国'],
      certificate: '身份证',
      certificates: ['身份证', '护照'],
      userName: '',
      certifyNum: '',
      realName: '',
      address: '',
      birthYear: '',
      birthMonth: '',
      birthDay: '',
      kycFlag1: false,
      kycFlag2: true,
    }
  },
  mounted: function() {
    this.GetMyData() //需要触发的函数
  },
  methods: {
    GetMyData: function() {
      const token = localStorage.getItem('token')
      this.axios
        .post('/t0/getMyUserData', {}, { headers: { 'access-token': token } })
        .then(response => {
          this.loginVue = false //显示登录代码
          this.userName = response.data.UserName
          this.loginVue = false //显示登录代码
          this.userId = 'UID ' + response.data.Uid
          this.realName = response.data.UserRealName
          this.phoneNum = response.data.PhoneNumber
          this.email = response.data.Email
          this.certifyNum = response.data.CertifyNum
          this.address = response.data.Address
          const birthDate = response.data.Birthday
          this.birthYear = birthDate.slice(0, 4)
          this.birthMonth = birthDate.slice(4, 6)
          this.birthDay = birthDate.slice(6)
        })
    },
  },
}
</script>

<style scoped></style>
