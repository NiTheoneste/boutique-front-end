<script>
import { Plus, Search } from '@element-plus/icons-vue'

export default{
	data(){
		return {
			keyword:"",
            Search,
            Plus,
           products: this.$store.state.products
		}
	}
}
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
							<el-input v-model="keyword" placeholder="Chercher" class="input-with-select w-100">
								<template #append>
									<el-button type="primary" :icon="Search" />
								</template>
							</el-input>
						</div>
					</div>
				</div>
			</template>
            <el-table :data="products" style="width: 100%">
                <el-table-column fixed prop="date" label="Date" width="150" />
                <el-table-column prop="name" label="Name" width="120" />
                <el-table-column prop="state" label="State" width="120" />
                <el-table-column prop="city" label="City" width="120" />
                <el-table-column prop="address" label="Address" width="600" />
                <el-table-column prop="zip" label="Zip" width="120" />
                <el-table-column fixed="right" label="Operations" min-width="120">
                <template #default>
                    <el-button link type="primary" size="small" @click="handleClick">
                    Detail
                    </el-button>
                    <el-button link type="primary" size="small">Edit</el-button>
                </template>
                </el-table-column>
            </el-table>
		</el-card>
	</div>
</template>

<style lang="scss" scoped></style>
