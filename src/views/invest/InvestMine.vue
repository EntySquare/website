<template>
  <div style="background: #FAFBFC; height: 100vh">
    <div class="banner" style="height: 343px;width:100%;">
      <div class="container2" style="padding-top: 80px;">
        <router-link to="/investMain">
          <v-img
            src="https://investors.oss-cn-beijing.aliyuncs.com/assets/invest/my_project_icon.png"
            style="width:36px;vertical-align:bottom;display:inline-block"
          />
        </router-link>
        <div
          style="font-size:32px;font-weight: 600;color: #FFF;
                display:inline-block;margin-left:10px;line-height:36px"
        >
          我的项目
        </div>
        <router-link to="/investPast">
          <div
            style="font-size: 18px;color: #FFF;display:inline-block;float:right;"
          >
            往期项目
            <v-icon color="#fff" style="font-size:16px">mdi-arrow-right</v-icon>
          </div>
        </router-link>
      </div>
    </div>
    <div class="container2" style="margin-top:-171px;">
      <div v-for="vi in myList" :key="vi">
        <router-link
          :to="{
            path: '/investTab',
            query: { projectid: vi.ProjectId },
          }"
        >
          <v-card
            class="mx-auto card"
            style="box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.04);"
          >
            <v-row>
              <v-col>
                <div>
                  <span class="card-green" style="padding-right: 12px"
                    >{{ vi.AnnualizedIncome }}%</span
                  >
                  <span
                    style="width: 56px;height: 24px;font-size: 14px;font-weight: 400;color: #B2B2B2;"
                    >年化收益</span
                  >
                </div>
              </v-col>
              <v-col class="d-inline-flex" style="padding-top: 30px">
                <div style="font-size: 16px;font-weight: 400;color: #333333;">
                  项目周期
                </div>
                <div style="width: 8px"></div>
                <b>{{ vi.Cycle }} 天</b>
                <v-icon color="#b3b3b3" class="ll"
                  >mdi-chevron-right</v-icon
                ></v-col
              >
            </v-row>
            <v-row>
              <v-col
                >投资总额 <b>{{ vi.Total }} USDT</b></v-col
              >
              <v-col
                >最低收入 <b>{{ vi.MinimumInvestment }} USDT</b></v-col
              >
            </v-row>
            <v-row>
              <v-col>
                <div class="d-inline-flex">
                  <div style="padding-right: 8px">融资进度</div>
                  <div
                    style="display:inline-block;width:46px;height:18px;
                    background: linear-gradient(225deg, #00E9D6 0%, #00CFAC 100%);
                    border-radius: 4px;font-style:normal;text-align:center;
                    line-height:18px;color:#fff;font-size:10px;font-weight:400;margin-top: 3px"
                  >
                    <div v-if="vi.InProgressFlag === 1">
                      进行中
                    </div>
                    <div v-if="vi.InProgressFlag === 0">
                      结束
                    </div>
                    <div v-if="vi.InProgressFlag === 2">
                      完成
                    </div>
                  </div>
                  <div style="width: 452px"></div>
                  <div style="color:#00CFAC;font-size:14px;margin-top: 20px;">
                    {{ (vi.CompleteGoal / vi.Total) * 100 }} %
                  </div>
                </div>
                <v-progress-linear
                  style="height:10px;width:600px;border-radius: 5px;"
                  background-color="#F7F8FB"
                  color="#00CFAC"
                  class="unFinish"
                  v-bind:value="(vi.CompleteGoal / vi.Total) * 100"
                ></v-progress-linear>
              </v-col>
            </v-row>
          </v-card>
        </router-link>
      </div>
    </div>
    <v-dialog
      v-model="alert.alertInfo"
      width="300"
      height="400"
      overlay-color="#FFFFF"
    >
      <v-alert
        border="left"
        :color="alert.alertColor"
        text
        :type="alert.alertType"
        style="margin-bottom: 0"
        >{{ alert.alertText }}</v-alert
      >
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'InvestMine',
  data() {
    return {
      alert: {
        alertInfo: false,
        alertType: 'info',
        alertText: '',
        alertColor: '#00CFAC',
      },
      top: 750,
      myList: '',
    }
  },
  mounted() {
    this.GetData()
  },
  methods: {
    //初始化调用
    GetData: function() {
      const token = localStorage.getItem('token')
      this.axios
        .post(
          '/r0/invest/myList',
          {},
          {
            headers: {
              'access-token': token,
              'Content-Type': 'application/json',
            },
          }
        )
        .then(response => {
          let dataList = response.data.list
          if (dataList === '' || dataList === null || dataList === undefined) {
            this.alertTip('error', '查询我的项目信息失败')
            return
          }
          this.myList = dataList
        })
    },
    alertTip: function(type, textString) {
      let color = '#00CFAC'
      if (type === 'success') {
        color = 'green'
      } else if (type === 'error') {
        color = 'red'
      }
      this.alert.alertInfo = true
      this.alert.alertType = type
      this.alert.alertText = textString
      this.alert.alertColor = color
    },
  },
  // mounted() {
  //   // window.addEventListener('scroll', this.scrollToTop)
  //   // if (location.href.indexOf('#reloaded') === -1) {
  //   //   location.href = location.href + '#reloaded'
  //   //   location.reload()
  //   // }
  // },
  // destroyed() {
  //   window.removeEventListener('scroll', this.scrollToTop)
  // },
}
</script>

<style lang="scss" scoped>
.banner {
  background: url('../../assets/invest_bg.png') no-repeat center top;
}
.container2 {
  width: 960px;
  margin: 0 auto;
  padding: 0;
  .card {
    width: 960px;
    height: 248px;
    margin-bottom: 40px;
    border-radius: 24px;
    padding: 39px 50px 40px 49px;
    box-sizing: border-box;

    .v-progress-linear__determinate {
      border-radius: 5px;
    }
    .ll {
      position: absolute;
      top: 40px;
      right: 50px;
    }
    .card-green {
      font-size: 48px;
      font-weight: 800;
      color: #00cfac;
      line-height: 48px;
    }
    .text1 {
      padding-top: 30px;
    }
    .unFinish {
      .v-progress-linear__determinate {
        background: linear-gradient(90deg, #00e9d6 0%, #00cfac 100%);
      }
    }
    .finish {
      .v-progress-linear__determinate {
        background: linear-gradient(290deg, #b2b2b2 0%, #f1f1f2 100%);
      }
    }
  }
}
</style>
