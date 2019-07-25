import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faCommentAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'

Vue.config.productionTip = false

library.add(faCommentAlt);
library.add(faPlus);
library.add(faEdit);

Vue.component('fa', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
