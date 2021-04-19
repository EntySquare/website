<template>
  <div>
    <main>
      <v-img
        src="https://investors.oss-cn-beijing.aliyuncs.com/assets/guanyuwomentou.png"
        style="height: 100vh"
      >
        <MainHeader />
        <v-col class="col-12">
          <div style="height: 210px;">&nbsp;</div>
        </v-col>
        <div class="text-center" style="align-items: center;height: 100%">
          <v-row>
            <v-col cols="1"></v-col>
            <v-col cols="8">
              <div class="text-left">
                <p
                  style="color: #FFFFFF; font-size: 78px; font-weight: bold; font-family: Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif"
                >
                  为去中心化经济
                </p>
                <p
                  style="color: #FFFFFF; font-size: 78px; font-weight: bold; font-family: Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif"
                >
                  打造金融智能服务
                </p>
              </div>
            </v-col>
            <v-col cols="3"></v-col>
          </v-row>
          <v-row>
            <v-col cols="1"></v-col>
            <v-col cols="8">
              <div class="text-left" style="height: 100px;">
                <div
                  style="font-size: 24px;
                      font-family: Nunito-Regular, Nunito;
                      font-weight: 400;
                      color: #FFFFFF;
                      line-height: 32px;"
                >
                  <p>
                    INVESTORS成立于2021年，总部位于韩国首尔，业内领先的全球化加密金融智能服务提供商.
                  </p>
                  吸引了数百万全球用户，而这一切才刚刚开始。
                </div>
              </div>
            </v-col>
            <v-col cols="3"></v-col>
          </v-row>
          <v-row>
            <v-col cols="12" style="position: absolute; top: 93vh;">
              <div style="display: inline-flex;" @click="scrollAnimation()">
                <v-img
                  src="
  https://investors.oss-cn-beijing.aliyuncs.com/assets/arrow_down_white.png"
                  style="width: 28px; cursor: pointer"
                ></v-img>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-img>

      <MainBody />
      <!--      <the-footer />-->
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from './transparentHeader.vue'
import MainBody from './aboutUsBody.vue'
// import Footer from '@/layouts/Footer'

export default {
  name: 'MainPage',
  components: {
    MainHeader,
    MainBody,
    // TheFooter: Footer,
  },
}
</script>
