<script>
import { Plus, Search } from '@element-plus/icons-vue'

export default {
	data() {
		return {
			bouton: "Create",
			keyword: "",
			Search,
			productForm: { name: "", price: 0, quantity: 0 }
		};
	},
	mounted() {
		const productId = this.$route.params.id;
		if (productId !== undefined) {
			this.bouton = "Update";
			const products = JSON.parse(localStorage.getItem('products')) || [];
			this.productForm = { ...products[productId] };
		}
        /*const productId = this.$route.params.id;
        if (productId !== undefined) {
            this.bouton = "Update";
            const products = JSON.parse(localStorage.getItem('products')) || [];
            this.productForm = JSON.parse(JSON.stringify(products[productId]));
        }*/

	},
	methods: {
		addProduct() {
			const productId = this.$route.params.id;
			let products = JSON.parse(localStorage.getItem('products')) || [];
			if (productId !== undefined) {
				// Update the existing product
				products[productId] = this.productForm;
			} else {
				// Add a new product
				products.push(this.productForm);
			}
			// Save products to localStorage
			localStorage.setItem('products', JSON.stringify(products));
			this.resetForm();
			this.$router.push({ name: 'products' }); // Navigate back to products list
		},
		resetForm() {
			this.productForm = {
				name: "",
				price: 0,
				quantity: 0
			};
		}
	}
}
</script>

<template>
	<div>
		<el-card>
			<el-form
				style="max-width: 600px"
				:model="productForm"
				label-width="auto"
				class="demo-ruleForm"
			>
				<h5 class="mb-3">{{ bouton }} Product</h5>
				<el-form-item label="Name">
					<el-input v-model="productForm.name" type="text" autocomplete="off" />
				</el-form-item>

				<el-form-item label="Price">
					<el-input v-model="productForm.price" type="number" autocomplete="off" />
				</el-form-item>

				<el-form-item label="Quantity">
					<el-input v-model="productForm.quantity" type="number" autocomplete="off" />
				</el-form-item>
				
				<el-form-item>
					<el-button type="primary" @click="addProduct">
						{{ bouton }}
					</el-button>
					<el-button @click="resetForm">Reset</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>

<style lang="scss" scoped></style>
