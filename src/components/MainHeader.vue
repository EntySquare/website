<template>
  <!--  <v-app-bar app color="#00CFAC" absolute>-->
  <!--    style=" width: 100%; height:800px; background: linear-gradient(92deg, #00CFAC 0%, #5B7ADE 100%);"-->
  <div :style="bgImg" style="height: 800px">
    <!--  <div-->
    <!--    style=" width: 100%; height:800px; background-image: url(../assets/diamond.png)"-->
    <!--  >-->
    <section class="max-display-width d-flex align-center">
      <div class="d-flex align-center">
        <!--        <v-img-->
        <!--          alt="Vuetify Logo"-->
        <!--          class="shrink mr-2"-->
        <!--          contain-->
        <!--          src="../assets/logo.png"-->
        <!--          transition="scale-transition"-->
        <!--          width="40"-->
        <!--        />-->
        <router-link to="/">
          <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            src="../assets/mainLogo.png"
            width="100"
          />
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <div text rounded class="black--text">
        <router-link to="/">
          <span style="color: #FFFFFF;">首页</span>
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <div text rounded class="black--text">
        <router-link to="/">
          <span style="color: #FFFFFF;">产品</span>
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <div text rounded class="black--text">
        <router-link to="/">
          <span style="color: #FFFFFF;">获取HSF</span>
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <div text rounded class="white--text">
        <router-link to="/">
          <span style="color: #FFFFFF;">资源</span>
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <div text rounded class="white--text">
        <router-link to="/">
          <span style="color: #FFFFFF;">公司</span>
        </router-link>
      </div>

      <v-spacer></v-spacer>

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

      <v-spacer></v-spacer>

      <v-btn text rounded class="green">
        <router-link to="/register">
          <span style="color: #FFFFFF;">注册</span>
        </router-link>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text rounded class="green">
        <router-link to="/loginPage">
          <span style="color: #FFFFFF;">登录</span>
        </router-link>
      </v-btn>
      <v-spacer></v-spacer>
      <v-img
        alt="downCode"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        src="../assets/downCode.png"
      />
      <v-spacer></v-spacer>
      <v-img
        alt="global"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        src="../assets/global.png"
      />
    </section>
    <v-col class="col-12">
      <div style="height: 150px;">&nbsp;</div>
    </v-col>
    <v-row class="text-center">
      <!--      <div class="d-flex align-center" style="margin-left: 35%;width: 50%;">-->
      <v-col class="col-12">
        <span style="color: #FFFFFF; font-size: 60px"
          >区块链组织的商业智能。
        </span>
      </v-col>
      <v-col class="col-11">
        <div style="height: 100px;">
          <p style="color: #FFFFFF; font-size: 20px">
            investors使区块链生态系统能够发挥其全部潜力。
          </p>
        </div>
      </v-col>
      <v-col class="col-1" />
    </v-row>
    <v-row>
      <v-col cols="2" style="margin-left: 37%">
        <v-btn
          text
          rounded
          class="white"
          style="text-align: center;
            width: 100px;
            margin-right: 8%"
        >
          <router-link to="/register">
            <span style="color: #00CFAC;">立即注册</span>
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
            <span style="color: #FFFFFF;">白皮书</span>
          </router-link>
        </v-btn>
      </v-col>
    </v-row>
  </div>
  <!--  </v-app-bar>-->
</template>

<script>
const imgUrl = require('../assets/background.png')
export default {
  name: 'MainHeader',
  data() {
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
