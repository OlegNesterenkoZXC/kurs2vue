<template>
	<v-container>
		<v-row>
			<v-col>
				<v-card>
					<v-card-title>Предметы</v-card-title>
					<v-divider></v-divider>
					<v-card-text><router-link to="/items">Посмотреть</router-link></v-card-text>
				</v-card>

			</v-col>
			<v-col>
				<v-card>
					<v-card-title>Аукционы</v-card-title>
					<v-divider></v-divider>
					<v-card-text><router-link to="/auctions">Посмотреть</router-link></v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>


export default {
	name: 'Home',
}
</script>
