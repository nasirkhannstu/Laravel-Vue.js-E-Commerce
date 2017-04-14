<template>
	<div>
		<div class="col-md-4">
			<div class="thumbnail">
				<img src="../../pic.jpg">
				<div class="caption">
					<h3>{{ product.name }}</h3>
					<p>{{ product.price }}</p>
					<hr>
					<p>
						<a href="" class="btn btn-default">Wish List</a>
						<a href="" class="btn btn-success">Buy</a>
					</p>
					<hr>
					<p v-if="product.user_id == authenticatedUser.id">
						<a href="#" class="btn btn-danger" role="button" 
							@click="$emit('delete-product')">
							Delet
						</a>
						<router-link class="btn btn-success" 
							:to="'/product/' + product.id + '/edit'" >
							Edit
						</router-link>
					</p>
				</div>
			</div>
		</div>
	</div>
	
</template>
<script>
	export default {
		props: ['product', 'authenticatedUser'],
	}
</script>