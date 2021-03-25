<style>
.titleFont {
  font-family: STHeiti;
  font-size: 16px;
  color: #ffffff;
}
.btn {
}
</style>
<template>
  <!--  <v-app-bar app color="#00CFAC" absolute>-->
  <!--    style=" width: 100%; height:800px; background: linear-gradient(92deg, #00CFAC 0%, #5B7ADE 100%);"-->
  <div :style="bgImg" style="height: 100vh">
    <!--  <div-->
    <!--    style=" width: 100%; height:800px; background-image: url(@/assets/diamond.png)"-->
    <!--  >-->
    <v-col cols="12">
      <section>
        <v-row>
          <v-col cols="3">
            <div align="center">
              <router-link to="/">
                <v-img
                  alt="Investors Name"
                  src="@/assets/mainLogo.png"
                  width="150px"
                />
              </router-link>
            </div>
          </v-col>
          <v-col cols="6">
            <div align="center" style="margin-top: 18px">
              <v-row>
                <v-col cols="1"></v-col>
                <v-col cols="2">
                  <div style="width: 50px; display: inline-flex">
                    <router-link to="/">
                      <p class="titleFont">首页</p>
                    </router-link>
                  </div>
                </v-col>
                <v-col cols="2">
                  <div style="width: 50px; display: inline-flex">
                    <router-link to="/product">
                      <p class="titleFont">产品</p>
                    </router-link>
                  </div>
                </v-col>
                <v-col cols="2">
                  <div
                    style="width: 50px; display: inline-flex; white-space: nowrap"
                  >
                    <router-link to="/product">
                      <p class="titleFont">获取HSF</p>
                    </router-link>
                  </div>
                </v-col>
                <v-col cols="2">
                  <div style="width: 50px; display: inline-flex">
                    <router-link to="/product">
                      <p class="titleFont">资源</p>
                    </router-link>
                  </div>
                </v-col>
                <v-col cols="2">
                  <div style="width: 50px; display: inline-flex">
                    <router-link to="/product">
                      <p class="titleFont">公司</p>
                    </router-link>
                  </div>
                </v-col>
                <v-col cols="1"></v-col>
              </v-row>
            </div>
          </v-col>
          <!--      <v-menu bottom transition="scale-transition" :offset-y="true">-->
          <!--        <template v-slot:activator="{ on, attrs }">-->
          <!--          <div color="transparent" elevation="0" v-bind="attrs" v-on="on">-->
          <!--            Dropdown-->
          <!--          </div>-->
          <!--        </template>-->

          <!--        <v-list rounded>-->
          <!--          <v-list-item v-for="(item, index) in items" :key="index">-->
          <!--            <v-list-item-title>-->
          <!--              <router-link :to="item.path">{{ item.title }}</router-link>-->
          <!--            </v-list-item-title>-->
          <!--          </v-list-item>-->
          <!--        </v-list>-->
          <!--      </v-menu>-->
          <v-col cols="3">
            <div style="margin-top: 10px">
              <div style="display: inline-flex;">
                <v-btn
                  style="background-color: #00CFAC;
                font-family: STHeiti;
                width: 100px;
                border-radius: 175px 175px 175px 175px"
                >
                  <router-link to="/register">
                    <div style="color: #ffffff;">注册</div>
                  </router-link>
                </v-btn>
              </div>
              <div style="display: inline-flex; margin-left: 30px">
                <v-btn
                  style="background-color: #81BEF7;
                font-family: STHeiti;
                width: 100px;
                border-radius: 175px 175px 175px 175px"
                >
                  <router-link to="/login">
                    <div style="color: #FFFFFF;">登录</div>
                  </router-link>
                </v-btn>
              </div>
              <div style="display: inline-flex; margin-left: 30px;">
                <v-img src="@/assets/downCode.png" style="width: 20px;" />
              </div>
              <div style="display: inline-flex; margin-left: 30px">
                <v-img src="@/assets/global.png" style="width: 20px" />
              </div>
            </div>
          </v-col>
        </v-row>
      </section>
    </v-col>
    <v-col class="col-12">
      <div style="height: 150px;">&nbsp;</div>
    </v-col>
    <div class="text-center">
      <v-row>
        <!--      <div class="d-flex align-center" style="margin-left: 35%;width: 50%;">-->
        <v-col cols="12">
          <div>
            <p
              style="color: #FFFFFF; font-size: 68px; font-weight: bold; margin-right: 170px"
            >
              区块链组织的商业智能。
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3"></v-col>
        <v-col cols="6">
          <div style="height: 100px;">
            <p
              style="width:550px; color: #FFFFFF; font-size: 24px; margin-left: 170px"
            >
              investors使区块链生态系统能够发挥其全部潜力。
            </p>
          </div>
        </v-col>
        <v-col cols="3"></v-col>
      </v-row>
      <div>
        <v-row>
          <v-col cols="3"></v-col>
          <v-col cols="6">
            <div style="display: inline-flex; margin-right: 710px">
              <v-btn
                text
                rounded
                class="white"
                style="text-align: center;
            width: 100px;
            margin-right: 8%"
              >
                <router-link to="/register">
                  <div style="color: #00CFAC;">立即注册</div>
                </router-link>
              </v-btn>
              <v-btn
                style="background: transparent;
            border:1px white solid;
            border-radius: 150px 150px 150px 150px;
            width: 100px;
            margin-right: 10%;"
              >
                <router-link to="/login">
                  <div style="color: #FFFFFF;">白皮书</div>
                </router-link>
              </v-btn>
            </div>
          </v-col>
          <v-col cols="3"></v-col>
        </v-row>
      </div>
    </div>
  </div>
  <!--  </v-app-bar>-->
</template>

<script>
const imgUrl = require('@/assets/background.png')
export default {
  name: 'MainHeader',
  data () {
    return {
      items: [
        {
          title: 'Foo',
          path: 'foo',
        },
        {
          title: 'Bar',
          path: 'bar',
        },
      ],
      bgImg: {
        backgroundImage: 'url(' + imgUrl + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      },
    }
  },
}
</script>

<style></style>
