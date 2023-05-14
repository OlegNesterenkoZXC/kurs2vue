<template>
	<v-btn v-if="connection_status == 'disconnected'" @click="connect" color="red lighten-3">
		Подключиться
	</v-btn>
	<v-btn v-else color="red lighten-3" to="/account">
		<v-icon>mdi-account</v-icon>
	</v-btn>
</template>

<script>
import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from "ethers";
import { mapState } from 'vuex';
import store from '@/store';

export default {
	name: 'MyConnect',

	data: () => ({
		dialog: false,
	}),
	methods: {
		async connect() {
			let provider = await detectEthereumProvider();

			if (!provider) {
				//нет Metamask
			}
			provider = new ethers.BrowserProvider(provider);

			const network = await provider.getNetwork();
			if (network.chainId != 1337) {
				console.log(network.chainId + "Неправильная сеть")
			}
			const accounts = await provider.send("eth_requestAccounts", []);

			store.dispatch("connectedToMetaMask",
				{
					provider: provider,
					account: accounts[0],
				}
			);

			window.ethereum.on('accountsChanged', this.handleAccountsChanged);
			window.ethereum.on('chainChanged', (chainId) => window.location.reload());
		},

		handleAccountsChanged(accounts) {
			store.commit('setAddress', accounts[0]);
		}
	},
	computed: mapState({
		connection_status: state => state.connection_status,
	})
};
</script>
