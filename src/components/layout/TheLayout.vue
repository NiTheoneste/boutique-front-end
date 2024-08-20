<script setup>
import TheHeader from './TheHeader.vue'
import TheSidebar from './TheSidebar.vue'
</script>

<template>
	<v-layout>
		<the-sidebar class="nonprintable" />
		<the-header class="nonprintable" />
		<v-main>
			<v-container fluid="">
				<router-view />
			</v-container>
		</v-main>
		
	</v-layout>
</template>

<style scoped>
.main-container {
	position: relative;
	margin: 0 auto;
	clear: both;
}
.content {
	margin-left: 250px;
	float: unset;
	right: 0;
}
.inner-content {
	padding: 10px;
}
.page-wrapper {
	padding: 0.6rem 1.5rem;
	-webkit-transition: all ease-in 0.3s;
	transition: all ease-in 0.3s;
}
</style>
