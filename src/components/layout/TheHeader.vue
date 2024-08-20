<script>
	export default{
		data(){
			return {
				length:0,
				modify_password:false,
			}
		},
		watch: {
		 "$store.state.cart.content.length"(new_val){
		 	this.length=new_val
		 }
		},
	}
</script>
<template>
	<v-app-bar>
		<template v-slot:prepend>
			<v-app-bar-nav-icon @click="toggleNav()"></v-app-bar-nav-icon>
		</template>

		<v-app-bar-title>{{$store.state.appName}}</v-app-bar-title>

		<v-spacer></v-spacer>
		 <v-badge
		 	class="mr-4" 
		 	:content="length" color="error"
		 	@click="$store.state.cart_visible=!$store.state.cart_visible"
			v-if="$route.name=='mainStock' || $route.name=='shopStock'"
		 >
	        <v-icon>mdi-cart-outline</v-icon>
	     </v-badge>
	</v-app-bar>
</template>

<style scoped>
.pcoded .pcoded-header[header-theme='themelight1'] {
	background: #fff;
}
.pcoded .pcoded-header[pcoded-header-position='fixed'] {
	position: fixed;
	top: 0;
	width: 100% !important;
	z-index: 1028;
}

.pcoded .pcoded-header {
	width: 100%;
	z-index: 1029;
	position: relative;
	display: block;
	font-family: 'Quicksand', sans-serif;
	-webkit-box-shadow: 0 2px 4px 0 rgba(43, 43, 43, 0.1);
	box-shadow: 0 2px 4px 0 rgba(43, 43, 43, 0.1);
}

.header-navbar {
	min-height: 70px;
	padding: 0;
}

.header-navbar .navbar-wrapper .navbar-logo[logo-theme='theme6'] {
	height: 73px;
}

.header-navbar .navbar-wrapper .navbar-logo {
	width: 230px;
}

.header-navbar .navbar-wrapper .navbar-logo {
	position: relative;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	float: left;
	height: 70px;
	text-align: center;
	text-transform: uppercase;
	width: 250px;
	padding: 20px 10px;
	-webkit-box-shadow: 0 4px 4px -4px rgba(0, 0, 0, 0.1);
	box-shadow: 0 4px 4px -4px rgba(0, 0, 0, 0.1);
}

.pcoded .pcoded-header[header-theme='themelight1'] .navbar-logo a {
	color: #fff;
}

.header-navbar .navbar-wrapper .navbar-logo a {
	font-size: 16px;
	margin-left: 7px;
}

.header-navbar .navbar-wrapper .navbar-logo a {
	/* margin: 0 auto; */
	color: #fff;
}

.header-navbar .navbar-wrapper .navbar-logo[logo-theme='theme6'] {
	background: #263544;
}

.header-navbar .navbar-wrapper .navbar-logo .mobile-menu {
	/* position: absolute;
	right: 0;
	top: 0; */
	font-size: 16px;
	line-height: 4.4;
	width: 40px;
}

.header-navbar .navbar-wrapper .navbar-container .nav-left,
.header-navbar .navbar-wrapper .navbar-container .nav-right {
	float: left;
	margin-bottom: 0;
}

.header-navbar .navbar-wrapper .navbar-container .nav-left li,
.header-navbar .navbar-wrapper .navbar-container .nav-right li {
	padding-left: 18px;
	padding-right: 0px;
}

.header-navbar .navbar-wrapper .navbar-container .nav-left li,
.header-navbar .navbar-wrapper .navbar-container .nav-right li {
	float: left;
	line-height: 4.4;
	padding: 0 20px;
	cursor: pointer;
	position: relative;
}

.header-navbar .navbar-wrapper .header-search .main-search {
	padding: 19px 0;
	display: block;
}

.header-navbar .navbar-wrapper .header-search .main-search .input-group {
	margin-bottom: 0;
	background-color: transparent;
	border-radius: 20px;
}
</style>
