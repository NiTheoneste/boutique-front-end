<script >
export default{
	data(){
		return{
			drawer:true,
		}
	}
}

</script>

<template>
	<v-navigation-drawer class="nonprintable" v-model="drawer" :rail="$store.state.rail" permanent>
		<v-list-item
			prepend-icon="mdi-account"
			class="py-2 my-2 border-b"
			:title="app_name"
			:subtitle="active_fullname"
		>
			<template v-slot:append>
				<v-btn
					variant="text"
					icon="mdi-logout"
					size="small"
					@click.stop="logOut()"
				></v-btn>
			</template>
		</v-list-item>

		<!-- <v-divider></v-divider> -->

		<v-list density="compact" color="primary" nav>
			<v-list-subheader>Boutique</v-list-subheader>
			
			<v-list-item
				prepend-icon="mdi-monitor-dashboard"
				title="Produits"
				:to="{ name: 'produits' }"
				link
				exact=""
			>
			</v-list-item>
		</v-list>

	</v-navigation-drawer>
</template>

<style scoped></style>
