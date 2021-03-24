<template>
  <v-app-bar app color="primary" absolute>
    <v-col cols="12">
      <section>
        <v-row>
          <v-col cols="3">
            <div align="center">
              <router-link to="/">
                <v-img
                  alt="Investors Name"
                  src="../assets/mainLogo.png"
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
                <v-img src="../assets/downCode.png" style="width: 20px;" />
              </div>
              <div style="display: inline-flex; margin-left: 30px">
                <v-img src="../assets/global.png" style="width: 20px" />
              </div>
            </div>
          </v-col>
        </v-row>
      </section>
    </v-col>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
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
    }
  },
}
</script>

<style></style>
