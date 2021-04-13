<template>
  <div style="background: #FAFBFC; height: 2844px">
    <div class="banner" style="height: 343px;width:100%;">
      <div class="container2" style="padding-top: 80px;">
        <router-link to="/investMine">
          <img
            src="../../assets/invest_icon.png"
            style="width:36px;vertical-align:bottom;display:inline-block"
          />
        </router-link>
        <div
          style="font-size:32px;font-weight: 600;color: #FFF;
                display:inline-block;margin-left:10px;line-height:36px"
        >
          投资推荐
        </div>
        <router-link to="/investIndex">
          <div
            style="font-size: 18px;color: #FFF;display:inline-block;float:right;"
          >
            往期项目
            <v-icon color="#fff" style="font-size:16px">mdi-arrow-right</v-icon>
          </div>
        </router-link>
        <div
          style="color:#fff;font-weight: 500;font-size: 20px;
              padding-top:40px;width:50px;padding-bottom: 15px"
        >
          USDT
        </div>
        <div
          style="width: 44px; border-bottom:4px solid #fff; margin-left: 3px"
        ></div>
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
    <!--    <div class="container2" style="margin-top:-124px;" ref="point">-->
    <div class="container2" style="margin-top:-124px;" ref="point">
      <div v-for="vi in list" :key ="vi.ProjectName">
        <router-link :to="{path:'/investTab',query:{projectname: vi.ProjectName}}">
          <v-card
            class="mx-auto card"
            style="box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.04);"
          >
            <v-row>
              <v-col>
                <div>
                  <span class="card-green" style="padding-right: 12px">{{vi.AnnualizedIncome}}</span>
                  <span style="width: 56px;height: 24px;font-size: 14px;font-weight: 400;color: #B2B2B2;">年化收益</span>
                </div>
              </v-col>
              <v-col class="d-inline-flex" style="padding-top: 30px">
                <div style="font-size: 16px;font-weight: 400;color: #333333;">
                  项目周期
                </div>
                <div style="width: 8px"></div>
                <b>{{vi.Cycle}} 天</b>
                <v-icon color="#b3b3b3" class="ll"
                  >mdi-chevron-right</v-icon
                ></v-col
              >
            </v-row>
            <v-row>
              <v-col>投资总额 <b>{{vi.Total}} USDT</b></v-col>
              <v-col>最低收入 <b>{{vi.MinimumInvestment}} USDT</b></v-col>
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
                    <div v-if = "vi.InProgress == 'inProgress'">
                      进行中
                    </div>
                    <div v-if = "vi.InProgress == 'finished'">
                      结束
                    </div>
                    <div v-if = "vi.InProgress == 'completed'">
                      完成
                    </div>
                  </div>
                  <div style="width: 452px"></div>
                  <div style="color:#00CFAC;font-size:14px;margin-top: 20px;">
                    {{vi.FinancingProgress}}%
                  </div>
                </div>
                <v-progress-linear
                  style="height:10px;width:600px;border-radius: 5px;"
                  v-model="valueDeterminate"
                  background-color="#F7F8FB"
                  color="#00CFAC"
                  class="unFinish"
                ></v-progress-linear>
              </v-col>
            </v-row>
          </v-card>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'invest',
  data() {
    return {
      valueDeterminate: 90,
      upbtn: true,
      activeposition: 'fixed',
      top: 750,
      list: '',
    }
  },
  components: {
    // TheFooter: Footer,
    // TheHeader: Header,
  },
  mounted() {
    this.GetData() //需要触发的函数
    window.addEventListener('scroll', this.scrollToTop)
    if (location.href.indexOf('#reloaded') === -1) {
      location.href = location.href + '#reloaded'
      location.reload()
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods: {
    //初始化调用
    GetData: function() {
      // const token = localStorage.getItem('token')
      this.axios
              .post(
                      '/t0/invest/list',
                      {'user_id':'1','types':'now'},
                      { headers: { 'access-token': 'iOCXsrzgA_asAQ','Content-Type': 'application/json'} }
              )
              .then(response => {
                console.log(response)
                this.list = response.data.list
              })
    },
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
