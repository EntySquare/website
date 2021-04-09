<template>
  <v-row style='background: #FAFBFC;'>
    <v-col cols='3'></v-col>
    <v-col cols='6'>

      <v-col cols='12' style='height: 10px;width: 100%;'></v-col>


      <v-col cols='12' style='height: 0px'></v-col>

      <v-col cols='12' style='height: 40px'>
        <p style='font-size: 32px;
        font-family: PingFang-SC-Semibold, PingFang-SC;
        font-weight: 600;
        color: #000000;
        line-height: 32px;'>
          投资订单
        </p>
      </v-col>

      <v-col cols='12' style='height: 50px;'> </v-col>
      <v-col cols='12' style='width: 100%;background: #FFFFFF;
                              box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.04);
                              border-radius: 24px;
                              padding:40px 40px 40px 40px'>

        <v-row>
          <v-col cols='6'>
            <span style="font-size: 18px;
                        font-family: Nunito-SemiBold, Nunito;
                        font-weight: 600;
                        color: #000000;
                        ">投资历史</span>
          </v-col>
          <v-col cols='6'>
            <v-row>
              <v-col cols='3'></v-col>
            <v-col cols='3'>

            </v-col>
            <v-col cols='3'>
              <v-bottom-sheet v-model="sheet" scrollable>
                <v-sheet
                  small
                  class="text-center"
                  height="200px"
                >
                  <div class="py-3">
                    This is a bottom sheet using the controlled by v-model instead of activator
                  </div>
                </v-sheet>
              </v-bottom-sheet>

            </v-col>
              <v-col cols='3'>
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      style="background: #F7F8FB;color: #000000"
                      depressed
                      bottom
                      rounded
                      height='28'
                      width='106'
                    >
                    <span style='font-size: 12px;
                          font-family: PingFangSC-Regular, PingFang SC;
                          font-weight: 400;
                          color: #1BD7A7;'>
                    7天内</span>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="onClick">
                      <v-list-item-title>
                        <v-btn
                          class='rounded-lg'
                          style="background: #FFFFFF;color: #000000"
                          depressed
                          bottom
                          rounded
                          block
                          height='48'
                        >
                        <span style='font-size: 14px;
                              font-family: Nunito-SemiBold, Nunito;
                              font-weight: 600;
                              color: #000000;'>
                        30天内</span>
                        </v-btn>
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="onClick">
                      <v-list-item-title>
                        <v-btn
                          class='rounded-lg'
                          style="background: #FFFFFF;color: #000000"
                          depressed
                          bottom
                          rounded
                          block
                          height='48'
                        >
                        <span style='font-size: 14px;
                              font-family: Nunito-SemiBold, Nunito;
                              font-weight: 600;
                              color: #000000;'>
                        半年内</span>
                        </v-btn>
                      </v-list-item-title>
                    </v-list-item>

                    <v-list-item @click="onClick">
                      <v-list-item-title>
                        <v-btn
                          class='rounded-lg'
                          style="background: #FFFFFF;color: #000000"
                          depressed
                          bottom
                          rounded
                          block
                          height='48'
                        >
                        <span style='font-size: 14px;
                              font-family: Nunito-SemiBold, Nunito;
                              font-weight: 600;
                              color: #000000;'>
                          全部</span>
                        </v-btn>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>

                <v-bottom-sheet v-model="sheet" scrollable>
                  <v-sheet
                    small
                    class="text-center"
                    height="200px"
                  >
                    <div class="py-3">
                      This is a bottom sheet using the controlled by v-model instead of activator
                    </div>
                  </v-sheet>
                </v-bottom-sheet>

              </v-col>
              </v-row>
          </v-col>
        </v-row>
        <v-col cols='12' style='height: 40px'></v-col>
        <v-col cols='12' style='padding: 0px'>
          <v-simple-table
            fixed-header
            height="800px">
            <template v-slot:default>
              <thead>
              <tr class='text-tr'>
                <th class="text-left">
                  产品
                </th>
                <th class="text-left">
                  结算时间
                </th>
                <th class="text-left">
                  年华收益
                </th>
                <th class="text-left">
                  投资总额(USDT)
                </th>
                <th class="text-left">
                  产出(HSF)
                </th>
              </tr>
              </thead>
              <tbody>
              <tr class='text-td'
                v-for="item in desserts"
                :key="item.name"
              >
                <td>{{ item.t1 }}</td>
                <td>{{ item.t2 }}</td>
                <td>{{ item.t3 }}</td>
                <td>{{ item.t4 }}</td>
                <td>{{ item.t5 }}</td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
          <!-- 无数据代码块-->
<!--        <div style='height: 800px;width: 100%'>-->
<!--          <div style='height: 280px;width: 100%'></div>-->
<!--          <img src='https://investors.oss-cn-beijing.aliyuncs.com/assets/listNulimg.png' height='200px' width='200px'-->
<!--               style='display:block; margin:0 auto;'>-->
<!--        </div>-->

        </v-col>

      </v-col>

      <v-col cols='12' style='height: 400px'></v-col>
    </v-col>

    <v-col cols='3'></v-col>
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
  data() {
    return {
      sheet:false,
      t1: true, //对话框初始画面
      tab:null,
      areaCode: 'USTD',
      areaCodes: ['USTD', 'SHF'],
      dialog: false,
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      desserts: [
        {
          t1: '盈利宝',
          t2: '2021.03.01 12:00:00',
          t3: '248.2%',
          t4: '248.00',
          t5: '248.00',
        },
        {
          t1: '盈宝',
          t2: '2021.03.01 12:00:00',
          t3: '248.2%',
          t4: '128.00',
          t5: '128.00',
        },
      ],
    }
  },
}
</script>


<style lang='scss' scoped>
.v-dialog{
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
.v-dialog{
  $dialog-border-radius: 20;
}
.text-tr{
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #808080;
}
.text-td{
  font-size: 18px;
  font-family: PingFang-SC-Semibold, PingFang-SC;
  font-weight: 600;
  color: #000000;
}
</style>