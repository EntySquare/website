<template>
  <div>
    <main>
      <div
        class="main"
        style="background: #FAFBFC;padding-bottom:70px;margin-bottom:-90px;"
      >
        <div class="banner" style="height: 343px;width:100%;">
          <div class="container2" style="padding-top: 80px;">
            <!-- 头部标题 -->
            <div class="tit">
              <img
                src="../../assets/invest_icon.png"
                style="width:36px;vertical-align:bottom;display:inline-block;margin-top:5px"
              />
              <div
                style="font-size:32px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #FFF;display:inline-block;margin-left:10px;line-height:36px"
              >
                投资推荐
              </div>
              <router-link to="/investIndex">
                <div
                  style="font-size: 18px;font-family: PingFangSC-Regular, PingFang SC;color: #FFF;display:inline-block;float:right;"
                >
                  往期项目
                  <v-icon color="#fff" style="font-size:16px"
                    >mdi-arrow-right</v-icon
                  >
                </div>
              </router-link>
            </div>
            <div
              style="color:#fff;padding-top:40px;width:44px;padding-bottom:16px;border-bottom:3px solid #fff;"
            >
              USDT
            </div>
          </div>
          <!-- 返回顶部按钮 -->
          <!-- style="position:fixed;bottom:100px;right:10%;background: #00d5b5;width:40px;height:40px;text-align:center;border-radius: 50%;" -->
          <div
            style="right:10%;background: #00d5b5;width:40px;height:40px;text-align:center;border-radius: 50%;"
            :style="{ position: activeposition, top: top + 'px' }"
            v-show="upbtn"
            @click="backTop"
          >
            <v-icon color="#fff" style="font-size:40px;">mdi-arrow-up</v-icon>
          </div>
        </div>
        <div class="container2" style="margin-top:-124px;" ref="point">
          <!-- 未完成卡片 -->
          <router-link to="/investTab">
            <v-card
              class="mx-auto card"
              style="box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.04);"
            >
              <v-row>
                <v-col>
                  <v-card-subtitle class="pb-0"
                    ><span class="card-green">248.2%</span>
                    年化收益</v-card-subtitle
                  >
                </v-col>
                <v-col class="text1"
                  >项目周期&nbsp;&nbsp;&nbsp; <b>10 天</b>
                  <v-icon color="#b3b3b3" class="ll"
                    >mdi-chevron-right</v-icon
                  ></v-col
                >
              </v-row>
              <v-row>
                <v-col class="textleft">投资总额 <b>1,000,000 USDT</b></v-col>
                <v-col>最低收入 <b>100 USDT</b></v-col>
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
          <!-- 完成卡片 -->
          <v-card
            class="mx-auto card"
            style="box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.04);"
          >
            <v-row>
              <v-col
                ><v-card-subtitle class="pb-0"
                  ><span class="card-green">248.2%</span>
                  年化收益</v-card-subtitle
                ></v-col
              >
              <v-col class="text1"
                >项目周期&nbsp;&nbsp;&nbsp; <b>10 天</b>
                <v-icon color="#b3b3b3" class="ll"
                  >mdi-chevron-right</v-icon
                ></v-col
              >
            </v-row>
            <v-row>
              <v-col class="textleft">投资总额 <b>1,000,000 USDT</b></v-col>
              <v-col>最低收入 <b>100 USDT</b></v-col>
            </v-row>
            <v-row>
              <v-col class="textleft"
                >融资进度
                <i
                  style="display:inline-block;width:46px;height:18px;border-radius: 4px;font-style:normal;text-align:center;line-height:18px;color:#fff;font-size:10px;font-weight:400;font-family: PingFangSC-Regular, PingFang SC;background: linear-gradient(290deg, #B2B2B2 0%, #F1F1F2 100%);"
                  >完成</i
                >
              </v-col>
            </v-row>
            <v-list style="position: relative;"
              ><v-progress-linear
                style="margin-top:10px;margin-left:8px;height:10px;width:600px;border-radius: 5px;"
                v-model="valueDeterminate"
                rounded
                background-color="#F7F8FB"
                color="#00CFAC"
                class="finish"
              ></v-progress-linear>
              <span
                style="position: absolute;top:-12px;right:30%;color:#00CFAC;font-size:14px;"
                >90%</span
              ></v-list
            >
          </v-card>
          <v-card
            class="mx-auto card"
            style="box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.04);"
          >
            <v-row>
              <v-col
                ><v-card-subtitle class="pb-0"
                  ><span class="card-green">248.2%</span>
                  年化收益</v-card-subtitle
                ></v-col
              >
              <v-col class="text1"
                >项目周期&nbsp;&nbsp;&nbsp; <b>10 天</b>
                <v-icon color="#b3b3b3" class="ll"
                  >mdi-chevron-right</v-icon
                ></v-col
              >
            </v-row>
            <v-row>
              <v-col class="textleft">投资总额 <b>1,000,000 USDT</b></v-col>
              <v-col>最低收入 <b>100 USDT</b></v-col>
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
          <v-card
            class="mx-auto card"
            style="box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.04);"
          >
            <v-row>
              <v-col
                ><v-card-subtitle class="pb-0"
                  ><span class="card-green">248.2%</span>
                  年化收益</v-card-subtitle
                ></v-col
              >
              <v-col class="text1"
                >项目周期&nbsp;&nbsp;&nbsp; <b>10 天</b>
                <v-icon color="#b3b3b3" class="ll"
                  >mdi-chevron-right</v-icon
                ></v-col
              >
            </v-row>
            <v-row>
              <v-col class="textleft">投资总额 <b>1,000,000 USDT</b></v-col>
              <v-col>最低收入 <b>100 USDT</b></v-col>
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
          <v-card
            class="mx-auto card"
            style="box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.04);"
          >
            <v-row>
              <v-col
                ><v-card-subtitle class="pb-0"
                  ><span class="card-green">248.2%</span>
                  年化收益</v-card-subtitle
                ></v-col
              >
              <v-col class="text1"
                >项目周期&nbsp;&nbsp;&nbsp; <b>10 天</b>
                <v-icon color="#b3b3b3" class="ll"
                  >mdi-chevron-right</v-icon
                ></v-col
              >
            </v-row>
            <v-row>
              <v-col class="textleft">投资总额 <b>1,000,000 USDT</b></v-col>
              <v-col>最低收入 <b>100 USDT</b></v-col>
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
          <v-card
            class="mx-auto card"
            style="box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.04);"
          >
            <v-row>
              <v-col
                ><v-card-subtitle class="pb-0"
                  ><span class="card-green">248.2%</span>
                  年化收益</v-card-subtitle
                ></v-col
              >
              <v-col class="text1"
                >项目周期&nbsp;&nbsp;&nbsp; <b>10 天</b>
                <v-icon color="#b3b3b3" class="ll"
                  >mdi-chevron-right</v-icon
                ></v-col
              >
            </v-row>
            <v-row>
              <v-col class="textleft">投资总额 <b>1,000,000 USDT</b></v-col>
              <v-col>最低收入 <b>100 USDT</b></v-col>
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
          <v-card
            class="mx-auto card"
            style="box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.04);"
          >
            <v-row>
              <v-col
                ><v-card-subtitle class="pb-0"
                  ><span class="card-green">248.2%</span>
                  年化收益</v-card-subtitle
                ></v-col
              >
              <v-col class="text1"
                >项目周期&nbsp;&nbsp;&nbsp; <b>10 天</b>
                <v-icon color="#b3b3b3" class="ll"
                  >mdi-chevron-right</v-icon
                ></v-col
              >
            </v-row>
            <v-row>
              <v-col class="textleft">投资总额 <b>1,000,000 USDT</b></v-col>
              <v-col>最低收入 <b>100 USDT</b></v-col>
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
          <v-card
            class="mx-auto card"
            style="box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.04);"
          >
            <v-row>
              <v-col
                ><v-card-subtitle class="pb-0"
                  ><span class="card-green">248.2%</span>
                  年化收益</v-card-subtitle
                ></v-col
              >
              <v-col class="text1"
                >项目周期&nbsp;&nbsp;&nbsp; <b>10 天</b>
                <v-icon color="#b3b3b3" class="ll"
                  >mdi-chevron-right</v-icon
                ></v-col
              >
            </v-row>
            <v-row>
              <v-col class="textleft">投资总额 <b>1,000,000 USDT</b></v-col>
              <v-col>最低收入 <b>100 USDT</b></v-col>
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
          <v-card
            class="mx-auto card"
            style="box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.04);"
          >
            <v-row>
              <v-col
                ><v-card-subtitle class="pb-0"
                  ><span class="card-green">248.2%</span>
                  年化收益</v-card-subtitle
                ></v-col
              >
              <v-col class="text1"
                >项目周期&nbsp;&nbsp;&nbsp; <b>10 天</b>
                <v-icon color="#b3b3b3" class="ll"
                  >mdi-chevron-right</v-icon
                ></v-col
              >
            </v-row>
            <v-row>
              <v-col class="textleft">投资总额 <b>1,000,000 USDT</b></v-col>
              <v-col>最低收入 <b>100 USDT</b></v-col>
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
  name: 'invest',
  data() {
    return {
      valueDeterminate: 90,
      upbtn: true,
      activeposition: 'fixed',
      top: 750,
    }
  },
  components: {
    // TheFooter: Footer,
    // TheHeader: Header,
  },
  mounted() {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollToTop)
  },

  methods: {
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop() {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },
    // 为了计算距离顶部的高度，当高度大于200显示回顶部图标，小于200则隐藏
    scrollToTop() {
      const that = this
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      that.scrollTop = scrollTop
      //   项目长度
      let boxlength = that.$refs.point.clientHeight
      if (that.scrollTop > boxlength - 500) {
        // that.upbtn = false
        that.upbtn = true
        ;(that.activeposition = 'absolute'), (that.top = boxlength + 230)
      } else if (that.scrollTop > 200) {
        that.upbtn = true
        ;(that.activeposition = 'fixed'), (that.top = 750)
      } else {
        that.upbtn = false
      }
    },
  },
}
</script>

<style lang="scss" scope>
.banner {
  background: url('../../assets/invest_bg.png') no-repeat center top;
}
.container2 {
  width: 960px;
  margin: 0 auto;
  padding: 0;
  .card {
    margin-top: 28px;
    margin-bottom: 40px;
    border-radius: 24px;
    padding: 40px;
    box-sizing: border-box;
    position: relative;
    // box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.04);
    .v-progress-linear__determinate {
      border-radius: 5px;
    }
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
      margin-left: -15px;
    }
    .text1 {
      padding-top: 30px;
      line-height: 48px;
    }
    .textleft {
      margin-left: -5px;
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
