<template>
  <div style="background: #FAFBFC;">
    <v-row style="margin: 0px;padding: 0px;background: #FAFBFC">
      <v-img
        src="https://investors.oss-cn-beijing.aliyuncs.com/assets/licaiyetou.png"
        height="343"
        width="100%"
      >
        <v-row>
          <v-col cols="3"></v-col>
          <v-col cols="6" style="height: 343px;">
            <v-row style="margin: 0px;padding: 0px">
              <div style="height: 50px;width: 100%"></div>
              <v-col cols="6">
                <p
                  style="font-size: 32px;
                  font-family: Nunito-SemiBold, Nunito;
                  font-weight: 600;
                  color: #000000;"
                >
                  我的理财
                </p>
                <p
                  style="font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #808080;"
                >
                  INVESTORS理财产品提供了一种无需压力即可赚取
                </p>
                <p
                  style="font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #808080;"
                >
                  加密货币的方法。现在就开始增加您的财富！
                </p>
              </v-col>
              <v-col cols="6" style="padding: 10px">
                <div
                  style="height: 215px;width: 500px;background: #FFFFFF;box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.04);border-radius: 25px;padding: 30px"
                >
                  <v-row>
                    <v-col
                      cols="6"
                      style="font-size: 14px;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: rgba(128, 128, 128, 0.8);line-height: 14px;"
                    >
                      可用余额 (HSF)
                    </v-col>
                    <v-col
                      class="text-right"
                      cols="6"
                      style="font-size: 14px;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1BD7A7;line-height: 14px;"
                    >
                      <router-link :to="{path:'/order',query:{userId: UserId}}">
                        <samp
                          style="font-size: 14px;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1BD7A7;line-height: 14px;"
                        >
                          到期订单 〉
                        </samp>
                      </router-link>
                    </v-col>
                  </v-row>
                  <v-row>
                    <span
                      style="font-size: 23px;font-family: Nunito-Bold, Nunito;font-weight: bold;color: #000000;line-height: 48px;margin: 0px 8px 0px 8px"
                    >
                      $
                    </span>
                    <span
                      style="font-size: 48px;font-family: Nunito-Bold, Nunito;font-weight: bold;color: #000000;line-height: 48px;"
                    >
                      {{accountInfo.Available}}
                    </span>
                  </v-row>
                  <div style="height: 45px;width: 100%"></div>
                  <v-row>
                    <v-col cols="6">
                      <p
                        style="font-size: 14px;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #808080;margin: 0px"
                      >
                        锁仓金额 (HSF)
                      </p>
                      <p
                        style="font-size: 20px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #000000;margin: 0px"
                      >
                        {{accountInfo.Locked}}
                      </p>
                    </v-col>
                    <v-col cols="6">
                      <p
                        style="font-size: 14px;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #808080;margin: 0px"
                      >
                        累计收益 (USDT)
                      </p>
                      <p
                        style="font-size: 20px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #000000;margin: 0px"
                      >
                        {{accountInfo.Revenue}}
                      </p>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="3" style=""></v-col>
        </v-row>
      </v-img>

      <v-row style="width: 100%;height: 1600px">
        <v-col cols="3"></v-col>
        <v-col cols="6" style="">
          <div style="height: 50px;width: 100%"></div>
          <span
            style="font-size: 32px;
            font-family: Nunito-SemiBold, Nunito;
            font-weight: 600;
            color: #000000;"
          >
            我的理财
          </span>
          <div style="height: 50px;width: 100%"></div>
          <v-col
            cols="12"
            style="height: 205px;width: 100%;margin: 0px;padding: 0px"
          >
            <swiper class="swiper" :options="swiperOption">
             <div v-for="vi in list" :key ="vi.ProjectName">
              <swiper-slide>
                <div style="height: 20px"></div>
                <router-link :to="{path:'/investTab',query:{projectname: vi.ProjectName}}">
                  <v-navigation-drawer
                    style="width: 800px;background: linear-gradient(30deg, #00DEB8 0%, #5B7ADE 100%, #5F80E8 100%);height: 190px;border-radius: 20px;box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.04);"
                  >
                    <v-row style="padding: 36px 0px 0px 50px">
                      <div class="d-inline-flex" style="width: 100%;">
                        <div
                          style="width: 160px;
                      height: 20px;font-size: 20px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #FFFFFF;"
                        >
                          定期优选
                        </div>
                        <!--                     <img-->
                        <!--                       src="https://investors.oss-cn-beijing.aliyuncs.com/assets/jiantou001.png"-->
                        <!--                       style="width:36px;height:36px;margin: -23px 0px 0px 105px;"/>-->
                        <v-btn
                          style="border-radius: 0px 18px 0px 8px;margin: -23px 0px 0px 105px;
                       background: linear-gradient(316deg, #2F5E85 0%, #202A32 100%);
                        color: #FFFFFF;"
                          elevation="0"
                        >
                          可抵押
                        </v-btn>
                      </div>
                      <div style="height: 40px"></div>
                      <p
                        style="width: 95%;
                              height: 48px;
                              font-size: 38px;
                              font-family: Nunito-ExtraBold, Nunito;
                              font-weight: 800;
                              color: #FFFFFF;margin: 0px;padding: 0px"
                      >
                        <span style="font-size: 38px;margin: 0px;padding: 0px"
                          >{{vi.AnnualizedIncome}}</span
                        >
                        <span style='font-size: 28px;margin: 0px;padding: 0px'>.2%</span>
                        <span
                          style="font-size: 14px;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #FFFFFF;;margin: 0px;padding: 0px 0px 0px 5px"
                        >
                          年化收益
                          <img
                            src="https://investors.oss-cn-beijing.aliyuncs.com/assets/jiantou001.png"
                            style="width:36px;height:36px;float:right;margin:15px 0px 0px 0px"
                          />
                        </span>
                      </p>

                      <div style="height: 15px;width: 100%"></div>
                      <span
                        style="font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;"
                      >
                        期限{{vi.Cycle}}天 | 结算时间 {{vi.SettlementTime}}
                      </span>
                      <div></div>
                    </v-row>
                  </v-navigation-drawer>
                </router-link>
                <div style='height: 20px'></div>
              </swiper-slide>
             </div>
            </swiper>
        </v-col>

          <v-col cols="12" style="padding-left: 0px">
            <span
              style="font-size: 16px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #000000;
                       "
            >
              ◎ 定期优选-质押中
            </span>
          </v-col>
          <div style="height: 30px;width: 100%"></div>
          <v-col cols="12" style="padding-left: 0px">
            <span
              style="font-size: 32px;
                        font-family: PingFang-SC-Semibold, PingFang-SC;
                        font-weight: 600;
                        color: #000000;
                       "
            >
              理财定制
            </span>
          </v-col>
          <v-row>
            <v-col cols="3">
              <v-btn
                style="background: transparent;
            border:3px #00CFAC solid;
            border-radius: 175px 175px 175px 175px;
            width: 100%;
            height: 46px;
            margin-right: 10%;
            box-shadow: none;
            text-align: center"
              >
                <router-link to="/#">
                  <div style="color: #00CFAC; font-size: 16px">稳健</div>
                </router-link>
              </v-btn>
            </v-col>
            <v-col cols="3">
              <v-btn
                style="background: rgb(235 236 239);
            width: 100%;
            height: 46px;
            border-radius: 175px 175px 175px 175px;
            margin-right: 10%;
            box-shadow: none;
            text-align: center"
              >
                <router-link to="/#">
                  <div style="color: #808080; font-size: 16px">稳健</div>
                </router-link>
              </v-btn>
            </v-col>
          </v-row>
          <div style="height: 70px;width: 100%"></div>
          <div
            style="font-size: 20px;
                      font-family: PingFang-SC-Medium, PingFang-SC;
                      font-weight: 500;
                      color: #808080;
                      line-height: 28px;"
          >
            收益计算
          </div>
          <div style="height: 10px;width: 100%"></div>
          <div style="width: 545px">
            <v-slider color="#00CFAC" thumb-color="#00CFAC"></v-slider>
          </div>
          <v-row style="padding: 10px">
            <span
              style="font-size: 18px;
                        font-family: Nunito-Regular, Nunito;
                        font-weight: 400;
                        color: #808080;"
            >
              定期优选锁仓总额:
            </span>
            <span
              style="font-size: 18px;
                        font-family: Nunito-SemiBold, Nunito;
                        font-weight: 600;
                        color: #00CFAC;"
            >
              999.000 HSF
            </span>
            <span
              style="font-size: 18px;
                        font-family: Nunito-SemiBold, Nunito;
                        font-weight: 600;
                        color: #000000;"
            >
              /1,000.000 HSF
            </span>
          </v-row>
          <v-row style="padding: 10px">
            <span
              style="font-size: 18px;
                        font-family: Nunito-Regular, Nunito;
                        font-weight: 400;
                        color: #808080;"
            >
              到期预计收益:
            </span>
            <span
              style="font-size: 18px;
                        font-family: Nunito-SemiBold, Nunito;
                        font-weight: 600;
                        color: #00CFAC;"
            >
              3.00 HSF 1天
            </span>
          </v-row>
          <v-row style="height: 30px"></v-row>
          <v-row style="height: 559px;">
            <div id="main" style="width: 100%;height:100%;"></div>
          </v-row>

          <div style="height: 100px"></div>
          <v-row
            style="background: #FFFFFF;height: 96px;

          border-radius: 16px;"
          >
            <v-col cols="6">
              <v-btn
                class="float-xl-right"
                style="background: rgb(235 236 239);
            width: 340px;
            height: 65px;
            border-radius: 175px 175px 175px 175px;
            box-shadow: none;
            text-align: center"
              >
                <router-link to="/#">
                  <div style="color: #808080; font-size: 16px">撤销质押</div>
                </router-link>
              </v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn
                style="background: linear-gradient(90deg, #00CFAC 0%, #5B7ADE 100%);;
            width: 340px;
            height: 65px;
            border-radius: 175px 175px 175px 175px;
            margin-right: 10%;
            box-shadow: none;
            text-align: center"
              >
                <router-link to="/#">
                  <div style="color: #FFFFFF; font-size: 16px">预约补仓</div>
                </router-link>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="3"></v-col>
      </v-row>
      <div style="height: 40px;width: 100%"></div>
      <!-- 添加钱包地址 addqianbao1 -->
      <v-dialog
        content-class="rounded-xl"
        v-model="diyaHSF"
        width="400"
        height="346"
      >
        <div style="height: 346px;width: 400px;background: #FFFFFF;">
          <v-row style="height: 60px;width: 100%;margin: 0px">
            <span
              style="font-size: 24px;margin: 30px 33px 32px 38px ;
            font-family: PingFang-SC-Semibold, PingFang-SC;
            font-weight: 600;
            color: #000000;"
              >质押HSF</span
            >
          </v-row>
          <v-row>
            <v-col cols="1"></v-col>
            <v-col cols="10">
              <div style="height: 30px"></div>
              <v-text-field
                label="最小投资100HSF"
                single-line
                filled
                rounded
              ></v-text-field>
              <span
                style="font-size: 14px;
                        font-family: PingFang-SC-Semibold, PingFang-SC;
                        font-weight: 600;
                        color: #000000;position:relative;left:249px;bottom:70px;"
              >
                <span>HSF</span><span style="color: #4c4c4c"> | </span
                ><span style="color: #00CFAC"> 全部 </span>
              </span>
              <div style="width: 100%;position:relative;left:7px;bottom:39px;">
                <span
                  style="font-size: 14px;
                          font-family: Nunito-Regular, Nunito;
                          font-weight: 400;
                          color: #9F9FA4;"
                >
                  可用：0.000000 HSF
                </span>
                <span style="width: 4px"> </span>
                <span
                  style="font-size: 14px;
                          font-family: Nunito-Regular, Nunito;
                          font-weight: 400;
                          color: #00CFAC;"
                >
                  充值
                </span>
              </div>
            </v-col>
            <v-col cols="1"></v-col>
          </v-row>
          <div style="height: 10px;width: 100%"></div>
          <v-row>
            <v-col cols="1"></v-col>
            <v-col cols="10">
              <v-btn
                style="background: linear-gradient(90deg, #00CFAC 0%, #5B7ADE 100%);color: #FFFFFF"
                depressed
                bottom
                rounded
                large
                block
                @click="submit"
              >
                抵押
              </v-btn>
            </v-col>
            <v-col cols="1"></v-col>
          </v-row>
        </div>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import * as echarts from 'echarts'

export default {
  name: 'indexMod',
  components: {
    Swiper,
    echarts,
    SwiperSlide,
  },

  mounted: function() {
    this.GetData()
    this.createcode() //需要触发的函数
  },
  methods: {
    GetData: function() {
      // const token = localStorage.getItem('token')
      this.axios
              .post(
                      '/t0/finance/minehome',
                      {'user_id': '1', 'types' : 'now'},
                      { headers: { 'access-token': 'iOCXsrzgA_asAQ','Content-Type': 'application/json'} }
              )
              .then(response => {
                console.log(response)
                this.accountInfo = response.data.account
                this.list = response.data.list
                this.UserId = '1'
              })
    },
    createcode() {
      var myChart = echarts.init(document.getElementById('main'))
      myChart.setOption({
        color: ['#00CFAC'],
        title: {
          text: '',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        grid: {
          left: '1%',
          right: '4%',
          bottom: '2%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          },
        ],
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            name: 'Line 1',
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
              width: 10,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.9,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#00CFAC',
                },
                {
                  offset: 1,
                  color: '#FFFFFF',
                },
              ]),
            },
            emphasis: {
              focus: 'series',
            },
            data: [123, 223, 183, 380, 300, 450, 500],
          },
        ],
      })
    },
  },

  data() {
    return {
      diyaHSF: false,
      sheet: false,
      t1: true, //对话框初始画面
      tab: null,
      areaCode: 'USTD',
      areaCodes: ['USTD', 'SHF'],
      dialog: false,
      UserId:'',
      accountInfo: '',
      list: '',
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        on: {
          slideChange: function() {
            // alert('改变了，activeIndex为'+this.activeIndex);
          },
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.swiper-slide {
  width: 30%;
}

.swiper-slide:nth-child(1n) {
  width: 40%;
}
.swiper-slide:nth-child(2n) {
  width: 40%;
}
.swiper-slide:nth-child(3n) {
  width: 40%;
}
</style>
