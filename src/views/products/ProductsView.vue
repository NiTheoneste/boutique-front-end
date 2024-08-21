<script>
import { Plus, Search, Delete, Edit } from '@element-plus/icons-vue';

export default {
	data() {
		return {
			keyword: "",
			Search,
			Plus,
			Delete,
			Edit,
			products: [] // Initialize with an empty array
		};
	},
	computed: {
		filteredProducts() {
			const keyword = this.keyword.toLowerCase();
			return this.products.filter(product =>
				product.name.toLowerCase().includes(keyword) ||
				product.price.toString().includes(keyword) ||
				product.quantity.toString().includes(keyword)
			);
		}
	},
	mounted() {
		// Load products from localStorage
		this.products = JSON.parse(localStorage.getItem('products')) || [];
	},
	methods: {
		editProduct(scope) {
			this.$router.push({ name: "updateProduct", params: { id: scope.$index } });
		},
		deleteRow(scope) {
			const productId = scope.$index;
			this.products.splice(productId, 1);
			// Save updated products to localStorage
			localStorage.setItem('products', JSON.stringify(this.products));
		}
	}
};
</script>

<template>
	<div>
		<v-row align="center" class="my-2">
			<v-col>
				<h4 class="font-weight-medium">Products</h4>
			</v-col>
			<v-col cols="auto">
				<el-button @click="$router.push({name: 'createProduct'})" type="primary" :icon="Plus">Add Product</el-button>
			</v-col>
		</v-row>
		<el-card>
			<template #header>
				<div class="card-header d-xl-flex align-center justify-space-between">
					<div></div>
					<div class="d-md-flex align-center">
						<div class="mr-sm-2 my-2 my-sm-0">
							<el-input v-model="keyword" placeholder="Search" class="input-with-select w-100">
								<template #append>
									<el-button type="primary" :icon="Search" />
								</template>
							</el-input>
						</div>
					</div>
				</div>
			</template>
			<el-table :data="filteredProducts" style="width: 100%">
				<el-table-column label="No" type="index" width="80" />
				<el-table-column prop="name" label="Name" width="120" />
				<el-table-column prop="price" label="Price" width="120" />
				<el-table-column prop="quantity" label="Quantity" width="120" />
				<el-table-column fixed="right" label="Operations" min-width="120">
					<template #default="scope">
						<el-button link type="primary" size="small" @click="handleClick">
							Detail
						</el-button>
						<el-button link type="primary" size="small" :icon="Edit" @click="editProduct(scope)">Edit</el-button>
						<el-button link type="primary" size="small" :icon="Delete" @click="deleteRow(scope)">Delete</el-button>
					</template>
				</el-table-column>
			</el-table>
		</el-card>
	</div>
</template>

<style scoped>
table, tr, th, td {
	border: 1px solid gray;
	border-collapse: collapse;
}
</style>
