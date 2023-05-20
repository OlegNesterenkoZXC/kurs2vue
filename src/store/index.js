import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		connection_status: 'disconnected',
		provider_metamask: null,
		account_address: '',
		contract_address: '',
		abi: {},
	},
	getters: {
	},
	mutations: {
		setMetaMastProvider(state, provider) {
			state.provider_metamask = provider;
		},
		setStatusConnected(state) {
			state.connection_status = 'connected'
		},
		setAddress(state, address) {
			state.account_address = address;
		},
		setAbi(state, abi) {
			state.abi = abi;
		},
		setContractAddress(state, contract_address) {
			state.contract_address = contract_address;
		},
	},
	actions: {
		connectedToMetaMask(context, payload) {
			context.commit('setMetaMastProvider', payload.provider);
			context.commit('setAddress', payload.account);
			context.commit('setStatusConnected');
		},
	},
	modules: {
	}
})
