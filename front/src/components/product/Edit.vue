<template>
	<div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="form-group">
              <label>Name:</label>
              <input type="text" class="form-control" v-model="product.name">
            </div>
            <div class="form-group">
              <label>Price:</label>
              <input type="number" class="form-control" v-model="product.price">
            </div>
            <div class="form-group">
              <label>description:</label>
              <textarea class="form-control" v-model="product.des"></textarea>
            </div>
            <button class="btn btn-success pull-right" 
              @click="update"
              v-show="product.name && product.price && product.des">
            Update</button>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
  import swal from 'sweetalert'

	export default {
    created(){
      this.getProduct()
    },
    data () {
      return {
        product: {}
      }
    },
    methods: {
      getProduct(){
        this.$http.get('api/product/' + this.$route.params.product)
        .then(response => {
          this.product = response.body
        })
      },
      update () {
        this.$http.put('api/product/'  + this.$route.params.product, this.product)
        .then(response => {
          swal("Updated!", "Your Product has been Updated.", "success")
        })
      }
    }
  }
</script>
<style>

</style>