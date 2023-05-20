import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false


const contract_addressJSON = require('./../../BestToken-address.json');
const abiJSON = require('./../../BestToken.json');


store.commit('setContractAddress', contract_addressJSON.BestToken)
store.commit('setAbi', abiJSON.abi)

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount('#app')
