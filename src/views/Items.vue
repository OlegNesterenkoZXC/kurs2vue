<template>
	<v-container>
		<v-row rows="4">
			<v-col cols="4" v-show="items.length == 0">
				<v-skeleton-loader elevation="3" class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
			</v-col>
			<v-col v-show="items.length > 0" v-for="item in items" :key="item.id" cols="4">
				<MyItem :id="item.id" :image="item.image" :title="item.name" :body="item.description"
					:url="item.external_url" />
			</v-col>
		</v-row>

	</v-container>
</template>

<script>
import MyItem from '@/components/MyItem.vue';
import axios from 'axios';
import { mapState } from 'vuex'

export default {
	name: 'MyItems',
	components: { MyItem },
	data: () => ({
		items: [],
		dialog: false,
	}),
	created() {
		axios
			.get('http://localhost:3000/items')
			.then(response => this.items = response.data)
			.catch(err => console.error(err));
	},
	computed: mapState({
		provider: state => state.provider_metamask,
		account_address: state => state.account_address,
		contractAddress: state => state.contract_address,
		abi: state => state.abi
	}),
	inject: {
		theme: {
			default: { isDark: false },
		},
	},
}
</script>
