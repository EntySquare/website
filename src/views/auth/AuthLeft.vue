<template>
  <div>
    <div class="main-title">
      加密资产理财
    </div>
    <div class="main-title">
      马上加入 investor
    </div>
    <p class="sub-feature">
      <img
        src="https://investors.oss-cn-beijing.aliyuncs.com/assets/lgt1.png"
        alt="资产配置服务"
        width="32"
        height="32"
      />
      资产配置服务
    </p>
    <p class="sub-feature">
      <img
        src="https://investors.oss-cn-beijing.aliyuncs.com/assets/lgt2.png"
        alt="资产配置服务"
        width="32"
        height="32"
      />
      轻松兑换资产
    </p>
    <p class="sub-feature">
      <img
        src="https://investors.oss-cn-beijing.aliyuncs.com/assets/lgt3.png"
        alt="资产配置服务"
        width="32"
        height="32"
      />
      智能安全钱包
    </p>
  </div>
</template>

<script>
export default {
  name: 'AuthLeft',
}
</script>

<style lang="scss" scoped>
.main-title {
  font-size: 56px;
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: 600;
  color: #000000;
  line-height: 78px;
}
.sub-feature {
  margin-top: 54px;
  font-size: 28px;
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: 600;
  color: #000000;
  display: flex;
  align-items: center;
  img {
    margin-right: 0.5em;
  }
}
</style>
