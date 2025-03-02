import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

function loadLocaleMessages() {
  const locales = require.context('./', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  console.log(locales.keys()) // ["./en/demo.json", "./zh-CN/demo.json"]
  locales.keys().forEach(key => {
    const matched = key.match(/\/([A-Za-z0-9-_]+)\//i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

console.log(loadLocaleMessages())
export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages(),
})
