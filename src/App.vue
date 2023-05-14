<template>
	<v-app>
		<v-app-bar color="deep-purple" dark app>
			<v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

			<v-toolbar-title>NFT Store</v-toolbar-title>
			<v-spacer></v-spacer>
			<MyConnect />
		</v-app-bar>

		<v-navigation-drawer v-model="drawer" absolute temporary app>
			<v-list nav dense>
				<v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
					<v-list-item to="/">
						<v-list-item-icon>
							<v-icon>mdi-home</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Домой</v-list-item-title>
					</v-list-item>

					<v-list-item to="/items">
						<v-list-item-icon>
							<v-icon>mdi-account</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Предметы</v-list-item-title>
					</v-list-item>

					<v-list-item to="/auctions">
						<v-list-item-icon>
							<v-icon>mdi-account</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Аукционы</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
import MyConnect from "@/components/MyConnect.vue"

export default {
	name: 'App',
	components: {
		MyConnect
	},

	data: () => ({
		drawer: false,
		group: null,
	}),
};
</script>
