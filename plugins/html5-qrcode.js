import Vue from 'vue'
import { Html5Qrcode } from 'html5-qrcode'

// Make Html5Qrcode available globally
Vue.prototype.$Html5Qrcode = Html5Qrcode

// Export for use in components
export default ({ app }, inject) => {
  inject('Html5Qrcode', Html5Qrcode)
} 