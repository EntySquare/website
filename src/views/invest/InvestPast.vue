<template>
  <div>
    <main>
      <the-header />
      <div class="main" style="background: #FAFBFC; height: 100vh">
        <div class="container2">
          <div class="ptitle d-inline-flex">
            <router-link to="/investMain">
              <img
                src="@/assets/arrow_green.png"
                class="gbicon"
                style="margin-top: 10px"
              />
            </router-link>
            <h2>往期项目</h2>
            <div style="width: 682px"></div>
            <div class="d-inline-flex">
              <v-select
                label="时间"
                :items="['7天内', '30天内', '6个月', '一年内']"
                solo
                dense
                flat
                style="font-size: 12px; color: #1BD7A7; width: 106px; height: 28px"
                color="#1BD7A7"
              ></v-select>
            </div>
          </div>
          <div
            id="noneData"
            v-show="!dataCardShow"
            class="d-flex justify-center"
          >
            <div
              class="d-flex justify-center"
              style="width: 200px; height: 200px; margin-top: 280px"
            >
              <v-img
                v-show="!dataCardShow"
                src="https://investors.oss-cn-beijing.aliyuncs.com/assets/invest/past_project_none.png"
              >
              </v-img>
              <div
                v-show="!dataCardShow"
                style="position: absolute; margin-top: 200px; font-size: 14px;
                color: #9F9FA4; font-weight: 400"
              >
                暂无记录
              </div>
            </div>
          </div>
          <div v-show="dataCardShow" v-for="v in dataList" v-bind:key="v">
            <div class="time">
              时间:2021-03-02
            </div>
            <!-- 未完成卡片 -->
            <router-link to="/investTab">
              <v-card
                class="mx-auto card"
                style="box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.04);"
              >
                <v-row>
                  <v-col
                    ><v-card-subtitle class="pb-0"
                      ><span class="card-green">{{ v.AnnualizedIncome }}%</span>
                      年化收益</v-card-subtitle
                    ></v-col
                  >
                  <v-col class="text1"
                    >项目周期&nbsp;<b>{{ v.Cycle }}</b>
                    <v-icon color="#b3b3b3" class="ll"
                      >mdi-chevron-right</v-icon
                    ></v-col
                  >
                </v-row>
                <v-row>
                  <v-col class="textleft"
                    >投资总额 <b>{{ v.Total }} USDT</b></v-col
                  >
                  <v-col
                    >最低收入 <b>{{ v.MinimumInvestment }} USDT</b></v-col
                  >
                </v-row>
                <v-row>
                  <v-col class="textleft"
                    >融资进度
                    <i
                      style="display:inline-block;width:46px;height:18px;background: linear-gradient(225deg, #00E9D6 0%, #00CFAC 100%);border-radius: 4px;font-style:normal;text-align:center;line-height:18px;color:#fff;font-size:10px;font-weight:400;font-family: PingFangSC-Regular, PingFang SC;"
                      >完成</i
                    >
                  </v-col>
                </v-row>
                <v-list style="position: relative;"
                  ><v-progress-linear
                    style="margin-top:10px;margin-left:8px;height:10px;width:600px;border-radius: 5px;"
                    v-model="valueDeterminate"
                    background-color="#F7F8FB"
                    color="#00CFAC"
                    class="unfinish"
                  ></v-progress-linear>
                  <span
                    style="position: absolute;top:-12px;right:30%;color:#00CFAC;font-size:14px;"
                    >90%</span
                  ></v-list
                >
              </v-card>
            </router-link>
          </div>
        </div>
      </div>
      <the-footer />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
// import Header from '@/layouts/Header'
// import Footer from '@/layouts/Footer'

export default {
  name: 'property',
  data() {
    return {
      valueDeterminate: 90,
      dataList: '',
      dataCardShow: '',
    }
  },
  mounted() {
    this.GetData() //需要触发的函数
  },
  methods: {
    //初始化调用
    GetData: function() {
      const token = localStorage.getItem('token')
      this.axios
        .post(
          '/r0/invest/list',
          { types: 'past' },
          {
            headers: {
              'access-token': token,
              'Content-Type': 'application/json',
            },
          }
        )
        .then(response => {
          let respData = response.data.list
          if (respData === '' || respData === null || respData === undefined) {
            this.dataCardShow = false
            document.getElementById('noneData').style.position = 'relative'
          } else {
            this.dataCardShow = true
            document.getElementById('noneData').style.position = 'absolute'
            this.dataList = respData
          }
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
}
.container2 {
  padding-top: 106px;
  width: 960px;
  .v-icon {
    width: 20px;
    height: 20px;
  }
  .ptitle {
    width: 100%;
    h2 {
      margin-left: 20px;
      height: 32px;
      font-size: 32px;
      font-weight: 600;
      color: #000000;
      line-height: 32px;
    }
    .gbicon {
      transform: rotateY(180deg);
      width: 14px;
      height: 14px;
    }
    span {
      float: right;
      font-style: normal;
      .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
        > .v-input__control
        > .v-input__slot {
        box-shadow: none;
      }
    }
  }
  .time {
    height: 16px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
    line-height: 16px;
    padding: 40px 0 28px;
  }

  .card {
    margin-top: 28px;
    border-radius: 24px;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    .ll {
      position: absolute;
      top: 40px;
      right: 50px;
    }
    .card-green {
      height: 48px;
      font-size: 48px;
      font-family: Nunito-ExtraBold, Nunito;
      font-weight: 800;
      color: #00cfac;
      line-height: 48px;
    }
    .text1 {
      padding-top: 30px;
      line-height: 48px;
    }
    .textleft {
      padding-left: 20px;
    }
    .unfinish {
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
