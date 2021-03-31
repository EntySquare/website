<template>
  <v-row class='text-center' style='background: #FAFBFC;'>
    <v-col cols='3'></v-col>
    <v-col cols='6'>
      <v-col cols='12' style='height: 200px;width: 100%;'></v-col>
      <v-col cols='12' style='height: 200px;width: 100%;'><!-- 我的钱包 【】【】【】 -->
        <v-row>
          <v-col cols='8' style='height: 200px;width: 100%;background: chartreuse'>
          <span style='font-size: 32px;
                font-family: Nunito-SemiBold, Nunito;
                font-weight: 600;
                color: #000000;
                line-height: 32px;
                position:absolute;
                top:437px;
                right:1488px;'>
                      我的钱包
          </span>
          </v-col>
          <v-col cols='4' style='height: 200px;width: 100%;'>
            <v-row>
              <v-col cols='12' style='height: 100px;width: 100%;'></v-col>
              <v-col cols='4' style='height: 64px;width: 64px;'>
                <v-btn
                  style='background: #FFFFFF'
                  width='64px'
                  height='64px'
                  elevation="0"
                  large
                >
                </v-btn>
              </v-col>
              <v-col cols='4' style='height: 64px;width: 64px;'>
                <v-btn
                  large
                ></v-btn>
              </v-col>
              <v-col cols='4' style='height: 64px;width: 64px;background: yellow'>
                <v-btn
                  large
                ></v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>



      </v-col>

      <v-col cols='12' style='height: 200px;width: 100%;'></v-col>
    </v-col>
    <v-col cols='3'></v-col>
  </v-row>
</template>

<script>
export default {
  name: 'indexMod',
}
</script>

<style scoped>

</style>