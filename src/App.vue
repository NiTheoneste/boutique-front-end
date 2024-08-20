<script >
	export default {

	}	
</script>

<template>
	<div class="app">
		<router-view :key="$route.fullPath" />
	</div>
</template>

<style scoped></style>
