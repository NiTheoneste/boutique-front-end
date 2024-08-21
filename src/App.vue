<script >
	export default {
		watch: {
			"$store.state.products":{
		      deep:true,
		      handler(new_val){
		        if(!!new_val){
		          localStorage.setItem('products', JSON.stringify(new_val));
		        }
		      }
			},
			"$store.state.user":{
		      deep:true,
		      handler(new_val){
		        if(!!new_val){
		          localStorage.setItem('user', JSON.stringify(new_val));
		        } else {
		          localStorage.removeItem('user')
		        }
		      }
			},
		},
		mounted(){
			var user = JSON.parse(localStorage.getItem('user'));
			this.$store.state.products = JSON.parse(localStorage.getItem('products'));
		    if(user) {
		      this.$store.state.user = user;
		    }
		}
	}	
</script>

<template>
	<div class="app">
		<router-view :key="$route.fullPath" />
	</div>
</template>

<style scoped></style>
