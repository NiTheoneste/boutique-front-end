<script>
import { Plus, Search } from '@element-plus/icons-vue'
export default{
	data(){
		return {
			keyword:"",Search,
            productForm: {name: "", price: 0, quantity: 0}
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
                <h5 class="mb-3">Add Product</h5>
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
                <el-button type="primary" @click="submitForm(ruleFormRef)">
                    Submit
                </el-button>
                <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
                </el-form-item>
            </el-form>
		</el-card>
	</div>
</template>

<style lang="scss" scoped></style>
