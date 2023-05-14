<template>
	<v-container>
		<v-row rows="4">
			<v-col v-for="item in items" :key="item.id" cols="4">
				<MyItem :id="item.id" :image="item.image" />
			</v-col>
		</v-row>

	</v-container>
</template>

<script>
import MyItem from '@/components/MyItem.vue';
import { mapState } from 'vuex';
import { ethers } from 'ethers';

export default {
	name: 'MyItems',
	components: { MyItem },
	data: () => ({
		dialog: false,
		counts: [],
	}),
	computed: mapState({
		items: state => state.items,
		provider: state => state.provider_metamask,
		account_address: state => state.account_address,
		contractAddress: state => state.contract_address,
		abi: state => state.abi


	})
}
</script>
