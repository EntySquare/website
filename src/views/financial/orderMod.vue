<template>
  <v-row style="background: #FAFBFC;">
    <v-col cols="3"></v-col>
    <v-col cols="6">
      <v-col cols="12" style="height: 10px;width: 100%;"></v-col>

      <v-col cols="12" style="height: 0px"></v-col>
      <v-row>
        <v-col cols="10" style="height: 40px">
          <p
            style="font-size: 32px;
        font-family: PingFang-SC-Semibold, PingFang-SC;
        font-weight: 600;
        color: #000000;
        line-height: 32px;
        margin: 0px 0px 0px 15px"
          >
            到期订单
          </p>
        </v-col>
        <v-col cols="2">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                style="background: #F7F8FB;color: #000000"
                depressed
                bottom
                rounded
                height="28"
                width="106"
              >
                <span
                  style="font-size: 12px;
                          font-family: PingFangSC-Regular, PingFang SC;
                          font-weight: 400;
                          color: #1BD7A7;"
                >
                  时间 ▼</span
                >
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="onClick">
                <v-list-item-title>
                  <v-btn
                    class="rounded-lg"
                    style="background: #FFFFFF;color: #000000"
                    depressed
                    bottom
                    rounded
                    block
                    height="48"
                  >
                    <span
                      style="font-size: 14px;
                              font-family: Nunito-SemiBold, Nunito;
                              font-weight: 600;
                              color: #000000;"
                    >
                      30天内</span
                    >
                  </v-btn>
                </v-list-item-title>
              </v-list-item>
              <v-list-item @click="onClick">
                <v-list-item-title>
                  <v-btn
                    class="rounded-lg"
                    style="background: #FFFFFF;color: #000000"
                    depressed
                    bottom
                    rounded
                    block
                    height="48"
                  >
                    <span
                      style="font-size: 14px;
                              font-family: Nunito-SemiBold, Nunito;
                              font-weight: 600;
                              color: #000000;"
                    >
                      半年内</span
                    >
                  </v-btn>
                </v-list-item-title>
              </v-list-item>

              <v-list-item @click="onClick">
                <v-list-item-title>
                  <v-btn
                    class="rounded-lg"
                    style="background: #FFFFFF;color: #000000"
                    depressed
                    bottom
                    rounded
                    block
                    height="48"
                  >
                    <span
                      style="font-size: 14px;
                              font-family: Nunito-SemiBold, Nunito;
                              font-weight: 600;
                              color: #000000;"
                    >
                      全部</span
                    >
                  </v-btn>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
      <div v-for="vi in list" :key ="vi.ProjectName">
      <v-col
        cols="12"
        style="width: 100%;background: #FFFFFF;
                              box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.04);
                              border-radius: 24px;
                              padding:40px 40px 40px 40px;
                              margin: 40px 0px 0px 0px"
      >
        <div style="height: 30px;width: 100%">
          <span
            style="font-size: 18px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #000000;"
          >
            定期优选
          </span>
          <span
            class="float-right"
            style="font-size: 20px;
                      font-family: PingFangSC-Regular, PingFang SC;
                      font-weight: 600;
                      color: #00E9D6;
                      line-height: 20px;"
          >
            盈利
          </span>
        </div>
        <div style="height: 30px;width: 100%">
          <span
            style="font-size: 16px;font-family: Nunito-ExtraLight, Nunito;font-weight: 200;color: #808080;"
          >
            {{vi.ContractAddress}}
          </span>
        </div>
        <div style="height: 20px"></div>
        <v-row>
          <v-col cols="5">
            <p
              style="font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
            >
              结算时间
            </p>
            <p
              style="font-size: 18px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #000000;"
            >
              {{vi.SettlementTime}}
            </p>
          </v-col>
          <v-col cols="3">
            <p
              style="font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
            >
              已质押(HSF)
            </p>
            <p
              style="font-size: 18px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #000000;"
            >
              {{vi.HSFInvestment}}
            </p>
          </v-col>
          <v-col cols="4" class="float-right">
            <div class="float-right">
              <p
                style="font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;"
              >
                分红(USDT)
              </p>
              <p
                class="float-right"
                style="font-size: 18px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #000000;"
              >
                {{vi.ShareOut}}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
      </div>

      <v-col cols="12" style="height: 400px"></v-col>
    </v-col>
    <v-col cols="3"></v-col>
    <!-- d1 -->
  </v-row>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'indexMod',
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted: function() {
    this.GetData() //需要触发的
  },
  methods:{
    //初始化调用
    GetData: function() {
      // const token = localStorage.getItem('token')
      this.axios
              .post(
                      '/t0/finance/settlelist',
                      {'time_limit':'month','user_id':this.$route.query.userId},
                      { headers: { 'access-token': '3UStfkWGsRNEUg','Content-Type': 'application/json'} }
              )
              .then(response => {
                console.log(response)
                this.list = response.data.list
              })
    },
  },
  data() {
    return {
      sheet: false,
      t1: true, //对话框初始画面
      tab: null,
      areaCode: 'USTD',
      areaCodes: ['USTD', 'SHF'],
      dialog: false,
      list: '',
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
}
</script>

<style lang="scss" scoped>
.v-dialog {
  $dialog-border-radius: 100px;
}
.swiper-slide {
  width: 65%;
}

.swiper-slide:nth-child(1n) {
  width: 65%;
}

.swiper-slide:nth-child(3n) {
  width: 65%;
}
.v-dialog {
  $dialog-border-radius: 20;
}
</style>
