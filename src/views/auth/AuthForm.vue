<template>
  <v-card class="wrap">
    <div class="d-flex justify-space-between ">
      <div>
        <div class="title">
          {{ title }}
        </div>
        <div class="sub-title">
          欢迎来到investors
        </div>
      </div>
      <div class="action" @click="setIsLogin(!isLogin)">
        {{ action }}
      </div>
    </div>

    <v-tabs
      v-model="tab"
      slider-size="5"
      background-color="transparent"
      slider-color="#00FFBC"
      grow
    >
      <v-tab>
        手机号
      </v-tab>
      <v-tab>
        邮箱
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <LoginFormPhone />
      <v-tab-item>
        <v-card color="basil" flat>
          <v-card-text>200</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import LoginFormPhone from './Login/FormPhone'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'AuthForm',
  components: {
    LoginFormPhone,
  },
  data () {
    return {
      tab: null,
    }
  },
  computed: {
    ...mapGetters(['isLogin']),
    title () {
      if (this.isLogin) {
        return '登录您的账户'
      } else {
        return '注册您的账户'
      }
    },
    action () {
      if (this.isLogin) {
        return '注册'
      } else {
        return '登录'
      }
    },
  },
  methods: {
    ...mapMutations(['setIsLogin']),
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 480px;
  background: #ffffff;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.04);
  border-radius: 16px !important;
  padding: 40px 40px 40px 40px;
}
.title {
  font-size: 28px;
  font-family: PingFang-SC-Semibold, PingFang-SC;
  font-weight: 600;
  color: #000000;
  line-height: 28px;
}
.action {
  font-size: 18px;
  font-family: Nunito-SemiBold, Nunito;
  font-weight: 600;
  color: #00cfac;
  line-height: 28px;
  cursor: pointer;
}
.tabs-after {
  position: relative;
  &::after {
    content: '';
    height: 5px;
    background-color: #f7f8fb;
  }
}
</style>
