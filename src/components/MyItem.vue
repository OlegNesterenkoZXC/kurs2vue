<template>
	<v-card>
		<v-img :src="image" max-height="400"></v-img>
		<v-card-title>{{ title }}</v-card-title>
		<v-card-text>{{ body }}</v-card-text>
		<v-card-text><a target="_blank" :href="url">Подробнее</a></v-card-text>
		<v-divider></v-divider>
		<v-card-text v-show="this.connection_status == 'connected'">Всего: {{ supplyCount }}</v-card-text>
		<v-card-text v-show="this.connection_status == 'connected'">У вас: {{ count }}</v-card-text>
		<div :dummy="force_react"></div>
	</v-card>
</template>
<script>
import { mapState } from 'vuex';
import { EtherSymbol, ethers } from 'ethers';

export default {
	name: 'MyItem',
	props: {
		id: String,
		title: String,
		body: String,
		image: String,
		url: String,
	},
	data: () => ({
		supplyCount: '',
		count: '',
		blockNumber: 0,
	}),
	methods: {
		async setSupplyCount() {
			if (this.provider !== null) {
				const signer = await this.provider.getSigner();
				const contract = new ethers.Contract(this.contractAddress, this.abi, signer);
				this.supplyCount = await contract.totalSupply(this.id);

				this.count = await contract.balanceOf(this.account_address, this.id);
			} else {
				this.supplyCount = "Нет подключения";
			}
		},
	},
	computed: mapState({
		connection_status: state => state.connection_status,
		items: state => state.items,
		provider: state => state.provider_metamask,
		account_address: state => state.account_address,
		contractAddress: state => state.contract_address,
		abi: state => state.abi,

		force_react() {
			if (this.connection_status == 'connected') {
				this.setSupplyCount();
			}
			return this.blockNumber + this.account_address;
		}
	})
}
</script>