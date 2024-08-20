<script>
import { User, Lock } from '@element-plus/icons-vue'
export default{
	data(){
		return {
			isLoading:false,
			username:"",
			password:"",
		}
	},
	methods: {
		login(){
			let data = {
				"username":this.username,
				"password":this.password
			}
      if(this.username.trim() == ""){
        this.useNotifyError("Fill the username please")
        return
      }
      if(this.password.trim() == ""){
        this.useNotifyError("Fill the password please")
        return
      }
      console.log(data)
			/*axios.post("login/", data)
			.then((res)=>{
				this.useNotifySuccess("Kaze kandi !")*/
				this.$store.state.user = {access: data}
				this.$router.push({name: "dashboard"})
			/*})
			.catch((err)=>{
				console.log(err)
				this.useNotifyError("Welcomme")
			}).finally(()=>this.isLoading=false)*/
		}
	},
}
</script>

<template>
	<main class="min-vh-100 d-flex is-background">
		<div class="flex-grow-1">
			<div class="h-100 py-5 d-flex align-items-center">
				<v-container>
					<v-row align="center" justify="center" class="h-100">
						<v-col cols="10" sm="8" md="6" lg="5">
							<v-card class="shadow border-primary rounded border-3 border-t border-b px-4 py-12">
								<v-card-title class="border-b">
									<h5 class="fw-700 opacity-75">Se Connecter</h5>
								</v-card-title>
								<v-card-text class="px-8">
									<v-form class="mt-4" @submit.prevent="login">
										<div class="mb-4">
											<v-label class="fs-13">Nom d'utilisateur</v-label>
											<el-input
												v-model="username"
												size="large"
												placeholder="Votre nom d'utilisateur"
												:prefix-icon="User"
												required
											/>
										</div>
										<div class="mb-4">
											<v-label class="fs-13">Mot de passe</v-label>
											<el-input
												v-model="password"
												type="password"
												size="large"
												placeholder="********"
												:prefix-icon="Lock"
												show-password
												required
											/>
										</div>
										<v-btn
											color="primary"
											type="submit"
											class="text-none"
											size="large"
											:loading="isLoading"
											>Connexion</v-btn
										>
									</v-form>
								</v-card-text>
							</v-card>
						</v-col>
					</v-row>
				</v-container>
			</div>
		</div>
	</main>
</template>

<style scoped>
.is-background {
	background: #fafbf9;
}
</style>
