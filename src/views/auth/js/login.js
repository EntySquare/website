import Vue from 'vue'
import axios from 'axios'

new Vue({
  el: '#app',
  data() {
    return {
      info: null,
    }
  },
  mounted() {
    axios
      .post('')
      .then(response => (this.info = response))
      .catch(function(error) {
        // 请求失败处理
        console.log(error)
      })
  },
})
